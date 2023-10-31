/* eslint-disable @next/next/no-img-element */
"use client";

import { FC, useCallback, useEffect, useRef, useState } from "react";

import { useRouter } from "next/navigation";

import { cn } from "@/utils/shadcn";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  editArticleSchema,
  type editArticleValues,
} from "@/schemas/forms-schemas";

import { useForm, useFieldArray } from "react-hook-form";

import { useDropzone } from "react-dropzone";

import { format } from "date-fns";
import { es } from "date-fns/locale";

import { categories, visibilityOptions, groupOptions } from "@/utils/constants";

import Tiptap from "../Tiptap";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "../ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { CalendarIcon } from "lucide-react";
import { FaImage } from "react-icons/fa6";

type EditArticleFormProps = {
  slug: string;
};

const EditArticleForm: FC<EditArticleFormProps> = ({ slug }) => {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>("");
  const [isLoading, setIsLoading] = useState(true);
  const imgUrl = useRef("");
  const router = useRouter();

  const form = useForm<editArticleValues>({
    resolver: zodResolver(editArticleSchema),
    mode: "onBlur",
    defaultValues: {
      title: "",
      imageFile: [],
      body: "",
      category: "",
      date: new Date(),
      visibility: "",
      group: "",
      slug: "",
    },
  });

  useEffect(() => {
    fetch(`http://www.lacanica.ec/api/articles/${slug}`)
      .then((r) => r.json())
      .then((data) => {
        setPreview(data.img_url);
        imgUrl.current = data.img_url;
        form.reset({
          title: data.title,
          body: data.body,
          imageFile: [],
          category: data.category,
          date: new Date(data.date),
          visibility: data.hidden ? "hidden" : "visible",
          group: data.kind,
          slug: data.slug,
        });
        setIsLoading(false);
      });
  }, [form, slug]);

  const { append } = useFieldArray({
    name: "imageFile",
    control: form.control,
  });

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      //Load file data into setPreview to display image preview on drop
      const file = new FileReader();
      file.onload = () => setPreview(file.result);
      file.readAsDataURL(acceptedFiles[0]);

      //Append file to imageFile[] field
      acceptedFiles.map((file) => {
        return append({ file: file });
      });
    },
    [append],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    maxSize: 1000000,
    accept: { "image/*": [".png", ".jpg", ".jpeg"] },
  });

  const onSubmit = async (values: editArticleValues) => {
    const submittedImage: File = values.imageFile.pop()?.file;
    const imageData = new FormData();
    imageData.append("image", submittedImage);

    const isHidden = values.visibility === "hidden" ? true : false;

    if (submittedImage) {
      await fetch("http://www.lacanica.ec/api/images", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: imageData,
      })
        .then((r) => r.json())
        .then((data) => {
          imgUrl.current = data.img_url;
        });
      // .catch((e) => console.log(e));
    }

    const newArticle = {
      title: values.title,
      body: values.body,
      category: values.category,
      date: values.date,
      hidden: isHidden,
      kind: values.group,
      img_url: imgUrl.current,
      slug: values.slug,
    };

    await fetch(`http://www.lacanica.ec/api/articles/${slug}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newArticle),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
    // .catch((e) => console.log(e));

    router.refresh();
    router.push(`/admin/edit/${values.slug}`);
  };

  if (isLoading) {
    return "Cargando...";
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 rounded-xl bg-cyan-900 px-8 py-4"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-3xl" htmlFor="title">
                Título
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Joven va a votar y se encuentra con su papá"
                  type="text"
                  {...field}
                  className="text-lg placeholder:text-white/30"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="imageFile"
          render={() => (
            <FormItem>
              <FormLabel className="text-3xl" htmlFor="newArticleBanner">
                Imagen
              </FormLabel>
              <FormControl>
                <div
                  {...getRootProps()}
                  className={`flex flex-col gap-2 ${
                    preview ? "pb-2 pt-0" : "py-4"
                  } cursor-pointer items-center rounded-md border border-slate-400`}
                >
                  {preview && (
                    <img
                      src={preview as string}
                      alt=""
                      className="w-full rounded-md"
                    />
                  )}
                  <FaImage
                    className={`text-9xl ${
                      form.formState.errors.imageFile && "text-destructive"
                    } ${preview ? "hidden" : "block"}`}
                  />
                  <Input
                    {...getInputProps()}
                    type="file"
                    id="newArticleBanner"
                  />
                  {isDragActive ? (
                    <p>Suelta la imagen!</p>
                  ) : (
                    <p className="text-center">
                      Da click o arrastra una imagen para subirla
                    </p>
                  )}
                  {form.formState.errors.imageFile && (
                    <p className="text-destructive">{`${form.formState.errors.imageFile.message}`}</p>
                  )}
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-3xl">Cuerpo del Artículo</FormLabel>
              <FormControl>
                <Tiptap onChange={field.onChange} content={field.value} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="items-center justify-between rounded-md border border-slate-400 p-4 md:flex">
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="mb-4 md:mb-0">
                <FormLabel className="text-xl">Categoría</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl className="w-40">
                    <SelectTrigger className="border-slate-400 transition-colors hover:border-slate-300">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-slate-900 text-white">
                    {categories.map((category, index) => (
                      <SelectItem key={index} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="mb-4 flex flex-col md:mb-0">
                <FormLabel className="text-xl">Fecha</FormLabel>
                <Popover>
                  <PopoverTrigger
                    className="border-slate-400 bg-transparent transition-colors hover:border-slate-300 hover:bg-transparent hover:text-white"
                    asChild
                  >
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP", { locale: es })
                        ) : (
                          <span>Ingresa una fecha válida</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="visibility"
            render={({ field }) => (
              <FormItem className="mb-4 md:mb-0">
                <FormLabel className="text-xl">Visibilidad</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl className="w-40">
                    <SelectTrigger className="border-slate-400 transition-colors hover:border-slate-300">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-slate-900 text-white">
                    {visibilityOptions.map((option, index) => (
                      <SelectItem key={index} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="group"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl">Grupo</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl className="w-40">
                    <SelectTrigger className="border-slate-400 transition-colors hover:border-slate-300">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-slate-900 text-white">
                    {groupOptions.map((group, index) => (
                      <SelectItem key={index} value={group.value}>
                        {group.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-3xl" htmlFor="slug">
                Link
              </FormLabel>
              <FormControl>
                <div className="md:flex">
                  <Input
                    className=" w-fit bg-cyan-950 disabled:placeholder:text-slate-400 md:rounded-r-none md:border-r-0"
                    placeholder="www.lacanica.ec/article/"
                    disabled
                  />
                  <Input
                    type="text"
                    {...field}
                    className="mt-2 placeholder:text-white/30 md:mt-0 md:rounded-l-none"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="mx-auto block h-auto rounded-xl px-6 py-3 text-xl"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          Guardar cambios
        </Button>
      </form>
    </Form>
  );
};

export default EditArticleForm;
