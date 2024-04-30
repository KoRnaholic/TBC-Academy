import { useLocale } from "next-intl";
import { SearchProps } from "../../types/types";

export function Search({ sortBy, setSort, search, setSearch }: SearchProps) {
  const locale = useLocale();
  return (
    <>
      <div className="mt-5 mb-4 flex gap-2 items-center  mx-auto max-w-lg">
        <input
          className="w-full dark:bg-slate-500 border dark:placeholder:text-white border-gray-300 rounded-full py-2 px-4 leading-tight focus:outline-none focus:border-slate-500"
          type="text"
          placeholder={`${locale === "en" ? "Search.." : "ძებნა.."}`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="relative">
          <select
            className="appearance-none rounded-full bg-[#f28023d4] hover:bg-[#051922] dark:hover:bg-slate-800 text-white hover:text-[#F28123] font-bold py-2 px-4 focus:outline-none"
            value={sortBy}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="input">
              {locale === "en" ? "Default Sort" : "სორტირება"}
            </option>
            <option value="price">{locale === "en" ? "Price" : "ფასი"}</option>
            <option value="name">{locale === "en" ? "Name" : "სახელი"}</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-1 pointer-events-none"></div>
        </div>
      </div>
    </>
  );
}
