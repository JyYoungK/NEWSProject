type Article = {
  author: string | null;
  category: string;
  country: string;
  description: string;
  image: string | null;
  langauge: string;
  published_at: string;
  soruce: string;
  title: string;
  url: string;
};

type Pagination = {
  count: Int;
  limit: Int;
  offset: Int;
  total: Int;
};

type NewsResponse = {
  data: Article[];
  pagination: Pagination;
};

type Category = "nearby" | "entertainment" | "world" | "science";
