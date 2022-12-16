import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  //GraphQL query
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "gb, us"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          description
          country
          image
          language
          source
          published_at
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;
  //Fetch function with Next.js 13 caching
  const res = await fetch(
    "https://woodbridge.stepzen.net/api/full-ladybird/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 60 }, //revalidate: 60 = 1 minute
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );
  console.log("Data", category, keywords);

  const newsResponse = await res.json();
  //Sort function by images vs not image present
  const news = sortNewsByImage(newsResponse?.data?.myQuery);
  return news;
  //Fetch function with Next.js 13 caching
};

export default fetchNews;

// stepzen import curl "http://api.mediastack.com/v1/news?access_key=1738f884cc43a0a35f70613a84353236"
