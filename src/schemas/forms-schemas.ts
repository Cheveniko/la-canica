import * as z from "zod";

export const newArticleFormSchema = z.object({
  title: z
    .string()
    .min(2, "El título debe contener al menos 2 caracteres")
    .max(512, "Máximos caracteres alcanzados"),
  imageFile: z
    .array(
      z.object({
        file: z.any(),
      }),
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

export type newArticleValues = z.infer<typeof newArticleFormSchema>;

export const editArticleSchema = z.object({
  title: z
    .string()
    .min(2, "El título debe contener al menos 2 caracteres")
    .max(512, "Máximos caracteres alcanzados"),
  imageFile: z.array(
    z.object({
      file: z.any(),
    }),
  ),
  body: z
    .string()
    .min(2, "El cuerpo del artículo debe contener al menos 2 caracteres"),
  category: z.string({ required_error: "Selecciona una categoría válida" }),
  date: z.date({ required_error: "Selecciona una fecha válida" }),
  visibility: z.string({ required_error: "Selecciona un tipo de visibilidad" }),
  group: z.string({ required_error: "Selecciona el grupo del artículo" }),
  slug: z.string().min(2, "El link debe contener al menos 2 caracteres").trim(),
});

export type editArticleValues = z.infer<typeof editArticleSchema>;

export const emailSignInSchema = z.object({
  email: z.string().email("Ingresa un email válido"),
});

export type emailSignInValue = z.infer<typeof emailSignInSchema>;
