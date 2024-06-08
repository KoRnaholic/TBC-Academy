import Image from "next/image";
import noData from "../../../../public/icons/profile/no-data.svg";

export default function Page() {
  return (
    <div className="mt-1">
      <div className="flex justify-around gap-5 p-4 ">
        <div className="flex flex-col gap-2 w-1/3 p-4  bg-white rounded-lg border shadow-sm">
          <h2 className="text-gray-500">Enrolled Courses</h2>
          <p className="text-4xl text-[#002058]">0</p>
        </div>
        <div className="flex flex-col gap-2 w-1/3 p-4 bg-white rounded-lg border shadow-sm">
          <h2 className="text-gray-500">Active Courses</h2>
          <p className="text-4xl text-[#002058]">0</p>
        </div>
        <div className="flex flex-col gap-2 w-1/3 p-4 bg-white rounded-lg border shadow-sm">
          <h2 className="text-gray-500">Completed Courses</h2>
          <p className="text-4xl text-[#002058]">0</p>
        </div>
      </div>
      <h2 className="p-4 text-2xl text-[#002058]">Recently Enrolled Courses</h2>

      <div className="flex flex-col items-center justify-center mt-10">
        <Image src={noData} alt="no-data" />
        <p className="font-sans">No Data Available in this Section</p>
      </div>
    </div>
  );
}
