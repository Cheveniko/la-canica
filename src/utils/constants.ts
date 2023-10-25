type FormOptions = {
  value: string;
  label: string;
};

export const categories: FormOptions[] = [
  { value: "ecuador", label: "Ecuador" },
  { value: "elecciones", label: "Elecciones" },
  { value: "noticias", label: "Noticias" },
  { value: "politica", label: "Política" },
  { value: "quito", label: "Quito" },
  { value: "uncategorized", label: "Sin Categoría" },
];

export const visibilityOptions: FormOptions[] = [
  { value: "visible", label: "Público" },
  { value: "hidden", label: "Oculto" },
];

export const groupOptions: FormOptions[] = [
  { value: "main", label: "Principal" },
  { value: "trending", label: "Tendencias" },
  { value: "news", label: "Noticias" },
];
