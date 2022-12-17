import LiveTimeStamp from "./LiveTimestamp";
import ReadMoreButton from "./ReadMoreButton";

type Props = {
  article: Article;
};

function Article({ article }: Props) {
  return (
    <article className="flex  flex-col border-b-2 border-black font-serif text-black shadow-lg transition-all duration-200 ease-out hover:scale-105 hover:bg-slate-200 hover:shadow-xl dark:text-[#3A160E] ">
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="h-56 w-full object-cover shadow-md"
        />
      )}

      <div className="flex flex-col">
        <div className="flex flex-col p-5">
          <h2 className="font-bold">{article.title}</h2>

          <section className="mt-2 flex-1">
            <p className="text:sm md:text-base">{article.description}</p>
          </section>

          <footer className="flex justify-end space-x-1 pt-5 text-xs italic ">
            <p className="justify-end">{article.source.slice(0, 15)} • </p>
            <p className="justify-end">
              <LiveTimeStamp time={article.published_at} />
            </p>
          </footer>
        </div>
        <ReadMoreButton article={article} />
      </div>
    </article>
  );
}
export default Article;
