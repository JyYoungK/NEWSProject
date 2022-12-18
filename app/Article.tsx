"use client";

import LiveTimeStamp from "./LiveTimestamp";
import { useRouter } from "next/navigation";
import FastTypewriter from "./Typewriter/FastTypewriter";
type Props = {
  article: Article;
};

function Article({ article }: Props) {
  const router = useRouter();
  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    const url = `/article?${queryString}`;
    router.push(url);
  };
  return (
    <article
      onClick={handleClick}
      className="mt-5 flex h-full cursor-pointer flex-col font-serif text-black shadow-lg transition-all duration-200 ease-out hover:bg-slate-200 hover:shadow-xl dark:text-[#3A160E] dark:hover:bg-[#7e5a52] md:w-56 "
    >
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="relative h-28 w-56 object-cover shadow-md grayscale dark:grayscale-0"
        />
      )}

      <div className="flex flex-col">
        <div className="flex flex-col">
          <h2 className="font-bold">{article.title}</h2>

          <section className="mt-2 flex-1">
            <FastTypewriter text={article.description} />
          </section>

          <footer className="my-2 flex justify-end space-x-1 text-xs italic ">
            <p className="justify-end">{article.source.slice(0, 18)} • </p>
            <p className="justify-end">
              <LiveTimeStamp time={article.published_at} />
            </p>
          </footer>
        </div>
      </div>
    </article>
  );
}
export default Article;
