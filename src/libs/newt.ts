import { createClient } from "newt-client-js";
import type { Article } from "@/types/article";

const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + "",
  token: process.env.NEWT_CDN_API_TOKEN + "",
  apiType: "cdn",
});

export const getArticles = async () => {
  const { items } = await client.getContents<Article>({
    appUid: "news",
    modelUid: "article",
    query: {
      select: ["_id", "title", "slug", "content", "_sys.raw.publishedAt"],
    },
  });

  return items;
};

export const getArticleBySlug = async (slug: string) => {
  const article = await client.getFirstContent<Article>({
    appUid: "news",
    modelUid: "article",
    query: {
      slug,
      select: ["_id", "title", "slug", "content", "_sys.raw.publishedAt"],
    },
  });

  return article;
};
