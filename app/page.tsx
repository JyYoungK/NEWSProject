import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";
import { categories } from "../constants";
import dummyNews from "../dummyData/dummyNews.json";

async function Home() {
  const news: any = dummyNews || (await fetchNews(categories.join(","))); //It's suppose to be news: NewsResponse but it's not working

  return <div>{<NewsList news={news} />}</div>;
}
export default Home;
