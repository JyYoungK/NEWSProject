import { gql } from "graphql-request";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  //GraphQL query
  const query = gql`
  myQuery(access_key: "1738f884cc43a0a35f70613a84353236") {
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
  `;
  //Sort function by images vs not image present
  //Fetch function with Next.js 13 caching
};

export default fetchNews;

// stepzen import curl "http://api.mediastack.com/v1/news?access_key=1738f884cc43a0a35f70613a84353236"
