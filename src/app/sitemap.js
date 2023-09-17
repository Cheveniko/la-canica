import { getAllArticles } from "@/utils/get-articles";

export default async function sitemap() {
  const baseUrl = "https://lacanica.ec";

  const articles = await getAllArticles();
  const articlesUrls =
    articles.map((article) => {
      return {
        url: `${baseUrl}/article/${article.slug}`,
        lastModified: new Date(),
      };
    }) ?? [];
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...articlesUrls,
  ];
}
