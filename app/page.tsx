import Link from "next/link";
import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";

async function Home() {
  // const news: NewsResponse = await fetchNews(categories.join(","));

  return (
    <div className="flex h-full w-full flex-col items-center justify-center"></div>
  );
}
export default Home;
