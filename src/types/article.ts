export interface Article {
  _id: string;
  title: string;
  slug: string;
  content: string;
  _sys: {
    raw: {
      publishedAt: string;
    };
  };
}
