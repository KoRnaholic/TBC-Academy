import SearchIcon from "@mui/icons-material/Search";
import { CourseTranslate } from "../../app/[locale]/(dashboard)/courses/page";

export default function CourseSearch({
  handleSearch,
  search,
  courseTranslate,
}: {
  handleSearch: (value: string) => void;
  search: string;
  courseTranslate: CourseTranslate;
}) {
  return (
    <>
      <div className="w-full">
        <div className="p-5 bg-white dark:bg-[#2E2E2E] border dark:border-gray-600 rounded-lg">
          <div className="flex items-center bg-white dark:bg-gray-700 rounded-md overflow-hidden">
            <input
              value={search}
              type="text"
              placeholder={`${courseTranslate.search}`}
              className="w-full px-4 py-3 text-gray-700 dark:text-gray-300 focus:outline-none bg-gray-100 dark:bg-[#636262]"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <button className="px-3 py-3 bg-[#FF6575] text-white">
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
