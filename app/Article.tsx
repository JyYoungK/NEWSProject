import LiveTimeStamp from "./LiveTimestamp";
import { useRouter } from "next/navigation";
import FastTypewriter from "./Typewriter/FastTypewriter";
import ReadMoreButton from "./ReadMoreButton";

type Props = {
  article: Article;
};

function Article({ article }: Props) {
  // const router = useRouter();
  // const handleClick = () => {
  //   const queryString = Object.entries(article).map(([key, value]) => {
  //     const stringValue = value !== null ? value : JSON.stringify(value);
  //     return `${key}=${encodeURIComponent(stringValue)}`;
  //   });
  //   const url = `/article?${queryString}`;
  //   router.push(url);
  // };
  // const handleClick = () => {
  //   const queryString = Object.entries(article)
  //     .map(([key, value]) => `${key}=${value}`)
  //     .join("&");
  //   const url = `/article?${queryString}`;
  //   router.push(url);
  // };
  return (
    <article
      // onClick={handleClick}
      className="mt-5 flex h-full cursor-pointer flex-col font-serif text-black shadow-lg transition-all duration-200 ease-out hover:bg-slate-200 hover:shadow-xl dark:text-[#3A160E] dark:hover:bg-[#9b5e51] md:w-56 "
    >
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className={`relative w-full object-cover shadow-md grayscale dark:grayscale-0 ${
            article.category === "bio" ? "h-68" : "h-40"
          } `}
        />
      )}

      <div className="flex flex-col">
        <div className="flex flex-col">
          <h2 className="font-bold">{article.title}</h2>

          <section
            className={`mt-2 flex-1 ${
              article.category === "bio" ? null : null
            }`}
          >
            <FastTypewriter text={article.description} />
          </section>

          <footer className="my-2 flex justify-end space-x-1 pr-1 text-xs italic">
            <div>{article.source.slice(0, 18)} • </div>
            <div>
              <LiveTimeStamp time={article.published_at} />
            </div>
          </footer>
        </div>
        <ReadMoreButton article={article} />
      </div>
    </article>
  );
}
export default Article;
