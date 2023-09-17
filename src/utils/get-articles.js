import Article from "@/models/Article";

import { connectDB } from "./mongoose";
import { cache } from "react";

export const getHeroArticle = cache(async () => {
  await connectDB();
  const heroArticle = await Article.findOne({ kind: "main" });
  return heroArticle;
});

export const getSidebarArticles = cache(async () => {
  await connectDB();
  const sidebarArticles = await Article.find({ kind: "trending" });
  const slicedSidebarArticles = sidebarArticles.slice(-2).reverse();
  return slicedSidebarArticles;
});

export const getNewsArticles = cache(async () => {
  await connectDB();
  const newsArticles = await Article.find({ kind: "news" });
  const slicednewsArticles = newsArticles.reverse();
  return slicednewsArticles;
});

export const getMainArticle = cache(async (slug) => {
  await connectDB();
  const mainArticle = await Article.findOne({ slug: slug });
  return mainArticle;
});

export const getAllArticles = cache(async () => {
  await connectDB();
  const articles = await Article.find();
  return articles;
});
