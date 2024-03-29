export default function Article({ article }) {
  return (
    <>
      <div className="py-4 flex flex-col items-center justify-center">
        <div className="p-4 bg-slate-100 w-1/2 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
          <div className="flex flex-col gap-2 items-start font-sans text-slate-700">
            <h2 className="text-2xl font-bold">{article.title}</h2>
            <img
              src={article.url}
              className="rounded-xl"
              alt="laptop"
              height="100px"
              width="200px"
            />
            <p>Published on: {article.date}</p>
            <p className="text-sm">{article.text}</p>
            <button className="bg-slate-600 hover:bg-slate-800 text-white font-bold py-1 px-3 rounded">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
