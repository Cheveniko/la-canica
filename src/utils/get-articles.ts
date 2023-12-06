import { cache } from "react";

import { connectDB } from "./mongoose";

import { Article, IArticle } from "@/models/Article";

export const getHeroArticle = cache(async () => {
  await connectDB();
  const heroArticle: IArticle | null = await Article.findOne({
    kind: "main",
    hidden: false,
  });
  return heroArticle;
});

export const getSidebarArticles = cache(async () => {
  await connectDB();
  const sidebarArticles: IArticle[] = await Article.find({
    kind: "trending",
    hidden: false,
  });
  const slicedSidebarArticles = sidebarArticles.slice(-2).reverse();
  return slicedSidebarArticles;
});

export const getNewsArticles = cache(async () => {
  await connectDB();
  const newsArticles: IArticle[] = await Article.find({
    kind: "news",
    hidden: false,
  });
  const reversedNewsArticles = newsArticles.reverse();
  return reversedNewsArticles;
});

export const getMainArticle = cache(async (slug: string) => {
  await connectDB();
  const mainArticle: IArticle | null = await Article.findOne({ slug: slug });
  return mainArticle;
});

export const getAllArticles = cache(async () => {
  await connectDB();
  const articles: IArticle[] = await Article.find();
  const reversedArticles = articles.reverse();
  return reversedArticles;
});
