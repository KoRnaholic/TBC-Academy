import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import { useTranslations } from "next-intl";

export default function CoursesFilter() {
  const t = useTranslations("Courses");
  return (
    <div className="xl:px-56 mt-20 flex justify-center items-center gap-10 xl:justify-between flex-col xl:flex-row font-sans">
      <div className="flex items-center space-x-2">
        <button className="p-2 bg-[#FF6575] text-white rounded">
          <GridViewIcon />
        </button>
        <button className="p-2 border rounded">
          <FormatListBulletedIcon />
        </button>
        <p>
          {t("showing")} 1–9 of 21 {t("courses")}
        </p>
      </div>

      <div className="font-sans flex items-center">
        <div className="w-[250px]">
          <select
            className="w-full px-3 py-2 border rounded"
            // value={selectedOption}
            // onChange={handleChange}
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="new">Newly published (new)</option>
            <option value="old">Newly published (old)</option>
            <option value="asc">Course Title (a-z)</option>
            <option value="desc">Course Title (z-a)</option>
          </select>
        </div>

        <span className="text-xl font-semibold">
          <FilterAltIcon className="text-[#FF6575] w-12 h-10" />
          Filter
        </span>
      </div>
    </div>
  );
}
