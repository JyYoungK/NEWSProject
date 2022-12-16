import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";
import dummyNews from "../dummyNews.json";

async function Home() {
  const news: NewsResponse =
    dummyNews || (await fetchNews(categories.join(",")));

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}
export default Home;
