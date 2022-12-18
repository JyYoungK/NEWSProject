"use client";

import { notFound } from "next/navigation";
import LiveTimeStamp from "../LiveTimestamp";

type Props = {
  searchParams?: Article;
};

function ArticlePage({ searchParams }: Props) {
  console.log(searchParams);
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }

  const article: Article = searchParams;
  return (
    <article>
      <section className="flex flex-col px-0 pb-24 font-mono dark:text-[#3A160E] lg:flex-row lg:px-10">
        {article.image && (
          <img
            className="h-50 mx-auto max-w-md rounded-lg object-cover shadow-md grayscale dark:grayscale-0 md:max-w-lg lg:max-w-xl"
            src={article.image}
            alt={article.title}
          />
        )}

        <div className="px-10">
          <h1 className="headerTitle px-0 pb-2 no-underline">
            {article.title}
          </h1>
          <div className="flex ">
            <h2 className="font-bold">By: {article.author || "unknown"}</h2>
            <h2 className="pl-4 font-bold"> Source: {article.source}</h2>
            <p className="pl-4">
              {" "}
              <LiveTimeStamp time={article.published_at} />
            </p>
          </div>
          <p className="pt-4">{article.description}</p>
        </div>
      </section>
    </article>
  );
}

export default ArticlePage;
