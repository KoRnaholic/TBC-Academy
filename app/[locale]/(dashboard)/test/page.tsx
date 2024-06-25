import Image from "next/image";
import success from "../../../../public/icons/success.svg";
import Link from "next/link";
import { sqlSubscription } from "../../../sql/sql-subscription/sqlSubscription";

export default async function SuccessDisplay() {
  await sqlSubscription();

  return (
    <div className="border p-8 rounded-2xl max-w-5xl w-full xl:w-1/2 mx-auto space-y-8 mt-40 transition-all duration-300 shadow-lg bg-white dark:bg-gray-800">
      <h1 className="text-5xl text-green-500 text-center font-semibold">
        <span className="flex justify-center items-center gap-3">
          Purchase Successful!
          <Image src={success} alt="success" width={40} height={40} />
        </span>
      </h1>

      <div className="text-center text-gray-700 dark:text-white">
        Thank you for your purchase!
      </div>

      <div className="flex justify-center">
        <Link
          href="/"
          passHref
          className="bg-[#FF6575]  py-3 px-6 text-white rounded-lg shadow-md hover:bg-[#ff5468] transition-colors duration-300"
        >
          Go To Home Page
        </Link>
      </div>
    </div>
  );
}
