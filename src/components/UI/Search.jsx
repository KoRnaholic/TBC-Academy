export function Search({ sortBy, setSort, search, setSearch }) {
  return (
    <>
      <div className="mt-1 mb-4 flex gap-2 items-center  mx-auto max-w-lg">
        <input
          className="w-full border border-gray-300 rounded-full py-2 px-4 leading-tight focus:outline-none focus:border-slate-500"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="relative">
          <select
            className="appearance-none rounded-full bg-slate-500 hover:bg-slate-700 dark:hover:bg-slate-800 text-white font-bold py-2 px-4 focus:outline-none"
            value={sortBy}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="input">Sort By</option>
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-1 pointer-events-none"></div>
        </div>
      </div>
    </>
  );
}
