import Image from "next/image";
import noData from "../../../../public/icons/profile/no-data.svg";

export default function Page() {
  return (
    <div className="mt-1 dark:bg-gray-800">
      <div className="flex justify-around gap-5 p-4 ">
        <div className="flex flex-col gap-2 w-1/3 p-4 bg-white dark:bg-gray-700 rounded-lg border dark:border-gray-600  shadow-sm">
          <h2 className="text-gray-500 dark:text-gray-400">Enrolled Courses</h2>
          <p className="text-4xl text-[#002058] dark:text-[#FF6575]">0</p>
        </div>
        <div className="flex flex-col gap-2 w-1/3 p-4 bg-white dark:bg-gray-700 rounded-lg border dark:border-gray-600  shadow-sm">
          <h2 className="text-gray-500 dark:text-gray-400">Active Courses</h2>
          <p className="text-4xl text-[#002058] dark:text-[#FF6575]">0</p>
        </div>
        <div className="flex flex-col gap-2 w-1/3 p-4 bg-white dark:bg-gray-700 rounded-lg border dark:border-gray-600  shadow-sm">
          <h2 className="text-gray-500 dark:text-gray-400">
            Completed Courses
          </h2>
          <p className="text-4xl text-[#002058] dark:text-[#FF6575]">0</p>
        </div>
      </div>
      <h2 className="p-4 text-2xl text-[#002058] dark:text-[#FF6575]">
        Recently Enrolled Courses
      </h2>

      <div className="flex flex-col items-center justify-center mt-10">
        <Image src={noData} alt="no-data" />
        <p className="font-sans text-gray-500 dark:text-gray-400">
          No Data Available in this Section
        </p>
      </div>
    </div>
  );
}
