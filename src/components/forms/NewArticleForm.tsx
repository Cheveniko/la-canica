"use client";

import { FC, useCallback, useState } from "react";

import { cn } from "@/utils/shadcn";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, useFieldArray } from "react-hook-form";

import { useDropzone } from "react-dropzone";

import { format } from "date-fns";
import { es } from "date-fns/locale";

import { categories, visibilityOptions, groupOptions } from "@/utils/constants";

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

const newArticleSchema = z.object({
  title: z
    .string()
    .min(2, "El título debe contener al menos 2 caracteres")
    .max(512, "Máximos caracteres alcanzados"),
  image: z
    .array(
      z.object({
        file: z.any(),
      })
    )
    .nonempty("La imagen es requerida"),
  body: z
    .string()
    .min(2, "El cuerpo del artículo debe contener al menos 2 caracteres"),
  category: z.string({ required_error: "Selecciona una categoría válida" }),
  date: z.date({ required_error: "Selecciona una fecha válida" }),
  visibility: z.string({ required_error: "Selecciona un tipo de visibilidad" }),
  group: z.string({ required_error: "Selecciona el grupo del artículo" }),
});

export type newArticleValues = z.infer<typeof newArticleSchema>;

const NewArticleForm: FC = () => {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>("");

  const form = useForm<newArticleValues>({
    resolver: zodResolver(newArticleSchema),
    mode: "onBlur",
    defaultValues: {
      title: "",
      image: [],
      body: "",
      category: "noticias",
      date: new Date(),
      visibility: "visible",
      group: "main",
    },
  });

  const { append } = useFieldArray({ name: "image", control: form.control });

  const onDrop = useCallback((acceptedFiles: File[]) => {
    //Load file data into setPreview to display image preview on drop
    const file = new FileReader();
    file.onload = () => setPreview(file.result);
    file.readAsDataURL(acceptedFiles[0]);

    //Append file to image[] field
    acceptedFiles.map((file) => {
      return append({ file: file });
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    maxSize: 1000000,
    accept: { "image/*": [".png", ".jpg", ".jpeg"] },
  });

  const onSubmit = async (values: newArticleValues) => {
    // const submittedImage: File = values.image[0].file;
    console.log(values.image);
    console.log(JSON.stringify(values));

    await fetch("http://localhost:3000/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((r) => console.log(r.json(), "Form enviado con éxito"))
      .catch((e) => console.log(e));
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-cyan-900 rounded-xl px-8 py-4 space-y-8"
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
                  className="placeholder:text-white/30 text-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="image"
          render={() => (
            <FormItem>
              <FormLabel className="text-3xl" htmlFor="newArticleBanner">
                Imagen
              </FormLabel>
              <FormControl>
                <div
                  {...getRootProps()}
                  className={`flex flex-col gap-2 ${
                    preview ? "pt-0 pb-2" : "py-4"
                  } items-center border border-slate-400 rounded-md cursor-pointer`}
                >
                  {preview && (
                    <img
                      src={preview as string}
                      className="w-full rounded-md"
                    />
                  )}
                  <FaImage
                    className={`text-9xl ${
                      form.formState.errors.image && "text-destructive"
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
                    <p>Da click o arrastra una imagen para subirla</p>
                  )}
                  {form.formState.errors.image && (
                    <p className="text-destructive">{`${form.formState.errors.image.message}`}</p>
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
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between items-center p-4 border rounded-md border-slate-400">
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl">Categoría</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="w-40">
                    <SelectTrigger className="border-slate-400 hover:border-slate-300 transition-colors">
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
              <FormItem className="flex flex-col">
                <FormLabel className="text-xl">Fecha</FormLabel>
                <Popover>
                  <PopoverTrigger
                    className="bg-transparent border-slate-400 hover:bg-transparent hover:text-white hover:border-slate-300 transition-colors"
                    asChild
                  >
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
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
              <FormItem>
                <FormLabel className="text-xl">Visibilidad</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="w-40">
                    <SelectTrigger className="border-slate-400 hover:border-slate-300 transition-colors">
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
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="w-40">
                    <SelectTrigger className="border-slate-400 hover:border-slate-300 transition-colors">
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
        <Button
          className="block mx-auto h-auto px-6 py-3 text-xl rounded-xl"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          Subir Artículo
        </Button>
      </form>
    </Form>
  );
};

export default NewArticleForm;
