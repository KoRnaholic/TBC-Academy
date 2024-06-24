"use client";
import SearchIcon from "@mui/icons-material/Search";
import { TranslateObj } from "../../app/[locale]/(dashboard)/blog/page";

export default function BlogSearch({
  handleSearch,
  search,
  translateObj,
}: {
  handleSearch: (value: string) => void;
  search: string;
  translateObj: TranslateObj;
}) {
  return (
    <div className="w-full">
      <div className="p-5 bg-white dark:bg-gray-800 border dark:border-gray-600 rounded-lg">
        <div className="flex items-center bg-white dark:bg-gray-700 rounded-md overflow-hidden">
          <input
            value={search}
            type="text"
            placeholder={`${translateObj.search}`}
            className="w-full px-4 py-3 text-gray-700 dark:text-gray-300 focus:outline-none bg-gray-100 dark:bg-gray-600"
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button className="px-3 py-3 bg-[#FF6575] text-white">
            <SearchIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
