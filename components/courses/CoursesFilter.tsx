import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { CourseTranslate } from "../../app/[locale]/(dashboard)/courses/page";

interface FilterProps {
  courseTranslate: CourseTranslate;
  filterBy: string | undefined;
  handleSort: (arg: string) => void;
}

export default function CoursesFilter({
  courseTranslate,
  filterBy,
  handleSort,
}: FilterProps) {
  return (
    <div className="xl:px-56 mt-20 flex justify-center items-center gap-10 xl:justify-between flex-col xl:flex-row font-sans">
      <div className="flex items-center space-x-2">
        <button className="p-2 bg-[#FF6575] text-white rounded">
          <GridViewIcon />
        </button>
        <button className="p-2 border rounded">
          <FormatListBulletedIcon />
        </button>
        <p>{/* {t("showing")} 1–6 of 7 {t("courses")} */}</p>
      </div>

      <div className="font-sans flex items-center gap-2">
        <div className="w-[250px]">
          <select
            value={filterBy}
            onChange={(e) => handleSort(e.target.value)}
            className="w-full px-3 py-2 border dark:border-gray-500 rounded"
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="new">{courseTranslate.new}</option>
            <option value="old">{courseTranslate.old}</option>
            <option value="asc">{courseTranslate.az}</option>
            <option value="desc">{courseTranslate.za}</option>
          </select>
        </div>

        <span className="text-xl font-semibold">
          <FilterAltIcon className="text-[#FF6575] w-12 h-10" />
          {/* {t("filter")} */}
          filter
        </span>
      </div>
    </div>
  );
}
