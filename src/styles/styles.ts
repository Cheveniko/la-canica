export type Style = {
  hero: string;
  sidebar: string;
  news: string;
  main: string;
  admin: string;
};

export const ArticleContainerStyles: Style = {
  hero: "group",
  sidebar: "pt-6 group",
  news: "pt-6 group",
  main: "",
  admin: "flex flex-col justify-between pt-6",
};

export const InfoStyles: Style = {
  hero: "flex gap-x-4 items-center text-lg md:text-xl pt-4 pb-2",
  sidebar: "flex gap-x-4 md:text-lg pt-2",
  news: "flex gap-x-4 items-center text-base pt-4",
  main: "flex gap-x-4 items-center text-lg md:text-xl  py-4",
  admin: "flex gap-x-4 items-center text-base pt-4",
};

export const TitleStyles: Style = {
  hero: "text-3xl md:text-4xl font-bold leading-[1.05] md:leading-tight group-hover:underline underline-offset-2",
  sidebar:
    "text-lg font-bold leading-[1.05] md:leading-tight group-hover:underline underline-offset-2",
  news: "text-xl font-bold leading-[1.05] md:leading-tight group-hover:underline underline-offset-2",
  main: "text-3xl md:text-4xl font-bold lg:text-5xl leading-[1.05] md:leading-tight",
  admin:
    "text-xl font-bold leading-[1.05] md:leading-tight line-clamp-3 group-hover:underline underline-offset-2",
};

export const BodyStyles: Style = {
  hero: "text-lg leading-tight text-slate-400 line-clamp-3 pt-3",
  sidebar: "text-lg leading-tight text-slate-400 pt-3",
  news: "text-lg leading-tight text-slate-400 line-clamp-3 pt-3",
  main: "text-lg md:text-xl leading-tight text-slate-400 pt-6",
  admin: "text-lg leading-tight text-slate-400 line-clamp-3 pt-3",
};
