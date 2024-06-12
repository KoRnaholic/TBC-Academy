"use client";
import SearchIcon from "@mui/icons-material/Search";

export default function BlogSearch({
  handleSearch,
  search,
}: {
  handleSearch: (value: string) => void;
  search: string;
}) {
  return (
    <div className="w-full ">
      <div className="p-5 bg-white border rounded-lg">
        <div className="flex items-center bg-white rounded-md  overflow-hidden">
          <input
            value={search}
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-3 text-gray-700 focus:outline-none bg-gray-100"
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
