import Article from "./Article";

type Props = {
  news: NewsResponse;
};
function NewsList({ news }: Props) {
  return (
    <div>
      <div className="col-rule-solid flex h-full w-full justify-center md:ml-2">
        <div className="col-rule-solid h-full gap-5 md:columns-5 ">
          {" "}
          {news.data.map((article, i) => (
            <Article key={i} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsList;
