"use client";

import { FC } from "react";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const newArticleSchema = z.object({
  title: z
    .string({ required_error: "Ingresa un título válido" })
    .min(2, { message: "El título debe contener al menos 2 caracteres" })
    .max(512, { message: "Máximos caracteres alcanzados" }),
  body: z.string().min(2, {
    message: "El cuerpo del artículo debe contener al menos 2 caracteres",
  }),
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
      title: "",
      body: "",
      category: "uncategorized",
      date: new Date(),
      visibility: "public",
      group: "news",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof newArticleSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

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
                <Input {...field} className="text-black" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Subir Artículo</Button>
      </form>
    </Form>
  );
};

export default NewArticleForm;
