import fetchNews from "../../../lib/fetchNews";
import NewsList from "../../NewsList";
import { categories } from "../../../constants";
import dummyNews from "../../../dummyData/dummyNews.json";
import dummyGeneral from "../../../dummyData/dummyGeneral.json";
import dummyBusiness from "../../../dummyData/dummyBusiness.json";
import dummyEntertainment from "../../../dummyData/dummyEntertainment.json";
import dummyHealth from "../../../dummyData/dummyHealth.json";
import dummyScience from "../../../dummyData/dummyScience.json";
import dummySports from "../../../dummyData/dummySports.json";
import dummyTechnology from "../../../dummyData/dummyTechnology.json";

type Props = {
  params: { category: Category };
};

async function NewsCategory({ params: { category } }: Props) {
  let news: NewsResponse = dummyNews;
  if (category === "general") {
    news = dummyGeneral || (await fetchNews(category));
  } else if (category === "business") {
    news = dummyBusiness || (await fetchNews(category));
  } else if (category === "entertainment") {
    news = dummyEntertainment || (await fetchNews(category));
  } else if (category === "health") {
    news = dummyHealth || (await fetchNews(category));
  } else if (category === "science") {
    news = dummyScience || (await fetchNews(category));
  } else if (category === "sports") {
    news = dummySports || (await fetchNews(category));
  } else {
    news = dummyTechnology || (await fetchNews(category));
  }

  return (
    <div>
      {" "}
      <h1 className="mb-5 font-mono text-lg font-bold dark:text-[#3A160E] md:text-4xl">
        {category.toUpperCase()}{" "}
      </h1>
      <NewsList news={news} />
    </div>
  );
}

export default NewsCategory;

export async function generateStaticParams() {
  //react will know to prebuild all the pages
  return categories.map((category) => ({
    category: category,
  }));
}
