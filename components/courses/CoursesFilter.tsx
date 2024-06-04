import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../@/components/ui/select";

export default function CoursesFilter() {
  return (
    <div className="mt-20 flex justify-around gap-52 font-sans">
      <div className="flex items-center space-x-2">
        <button className="p-2 bg-[#FF6575] text-white rounded">
          <GridViewIcon />
        </button>
        <button className="p-2 border rounded">
          <FormatListBulletedIcon />
        </button>
        <p>Showing 1–9 of 21 courses</p>
      </div>

      <div className="font-sans flex items-center">
        <Select>
          <SelectTrigger className="w-[250px]">
            <SelectValue placeholder="Filter Courses" />
          </SelectTrigger>
          <SelectContent className="w-[250px] px-3 py-2">
            <SelectGroup className="w-full">
              {/* <SelectLabel>Filter Courses</SelectLabel> */}
              <SelectItem value="new">Newly published (new)</SelectItem>
              <SelectItem value="old">Newly published (old)</SelectItem>
              <SelectItem value="asc">Course Title (a-z)</SelectItem>
              <SelectItem value="desc">Course Title (z-a)</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <span className="text-xl font-semibold">
          <FilterAltIcon className="text-[#FF6575] w-12 h-10" />
          Filter
        </span>
      </div>
    </div>
  );
}
