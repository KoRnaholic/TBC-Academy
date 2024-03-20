export function Search(props) {
  return (
    <>
      <div className="mt-1 mb-4 flex gap-2 items-center  mx-auto max-w-lg">
        <input
          className="w-full border border-gray-300 rounded-full py-2 px-4 leading-tight focus:outline-none focus:border-slate-500"
          type="text"
          placeholder="Search..."
        />
        <button className="flex rounded-full items-center bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4  focus:outline-none">
          Search
        </button>
      </div>
    </>
  );
}
