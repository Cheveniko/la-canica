"use client";

import { FC } from "react";

import { cn } from "@/lib/utils";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import { format } from "date-fns";

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

const MAX_FILE_SIZE = 1000000;

const checkFileType = (file: File) => {
  if (file?.name) {
    const fileType = file.name.split(".").pop() as string;
    if (["jpg", "jpeg", "png"].includes(fileType)) return true;
  }
  return false;
};

const newArticleSchema = z.object({
  title: z
    .string({ required_error: "Ingresa un título válido" })
    .min(2, "El título debe contener al menos 2 caracteres")
    .max(512, "Máximos caracteres alcanzados"),
  banner: z
    .any({ required_error: "Sube una imagen" })
    .refine((file: File) => file?.size !== 0, "Imagen no encontrada") // If you also wanna validate if the file exists
    .refine(
      (file: File) => file?.size < MAX_FILE_SIZE,
      "El tamaño máximo de la imagen debe ser de 1MB."
    ) // file size validation
    .refine(
      (file) => checkFileType(file),
      "Solo se pueden subir archivos jpg, jpeg y png."
    ),
  body: z
    .string({ required_error: "Ingresa un texto válido" })
    .min(2, "El cuerpo del artículo debe contener al menos 2 caracteres"),
  category: z.string({ required_error: "Selecciona una categoría válida" }),
  date: z.date({ required_error: "Selecciona una fecha válida" }),
  visibility: z.string({ required_error: "Selecciona un tipo de visibilidad" }),
  group: z.string({ required_error: "Selecciona el grupo del artículo" }),
});

const NewArticleForm: FC = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof newArticleSchema>>({
    resolver: zodResolver(newArticleSchema),
    defaultValues: {
      category: "noticias",
      date: new Date(),
      visibility: "visible",
      group: "main",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof newArticleSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const categories = [
    { value: "ecuador", label: "Ecuador" },
    { value: "elecciones", label: "Elecciones" },
    { value: "noticias", label: "Noticias" },
    { value: "politica", label: "Política" },
    { value: "quito", label: "Quito" },
    { value: "uncategorized", label: "Sin Categoría" },
  ];

  const visibilityOptions = [
    { value: "visible", label: "Público" },
    { value: "hidden", label: "Oculto" },
  ];

  const groupOptions = [
    { value: "main", label: "Principal" },
    { value: "trending", label: "Tendencias" },
    { value: "news", label: "Noticias" },
  ];

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
              <FormLabel className="text-3xl">Título</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="banner"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-3xl">Banner</FormLabel>
              <FormControl>
                <div className="flex flex-col gap-2 py-4 items-center border border-slate-400 rounded-md">
                  <FaImage className="text-9xl" />
                  <Input
                    {...field}
                    className="text-center border-2 w-fit file:text-white"
                    type="file"
                  />
                </div>
              </FormControl>
              <FormMessage />
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
          {/* <div className="w-1/4"> */}
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
                  <SelectContent>
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
          {/* </div> */}
          {/* <div className="w-1/4"> */}
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
                          format(field.value, "PPP")
                        ) : (
                          <span></span>
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
                      // disabled={(date) =>
                      //   date > new Date() || date < new Date("1900-01-01")
                      // }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* </div> */}
          {/* <div className="w-1/4"> */}
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
                  <SelectContent>
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
          {/* </div> */}
          {/* <div className="w-1/4"> */}
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
                  <SelectContent>
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
          {/* </div> */}
        </div>
        <div className="">
          <Button
            className="block mx-auto h-auto px-6 py-3 text-xl rounded-xl"
            type="submit"
          >
            Subir Artículo
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default NewArticleForm;
