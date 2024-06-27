import Image from "next/image";
import React from "react";
import { sqlGetAllPurchases } from "../../../../sql/sql-purchases/sqlGetAllPurchases";
import { sqlAdminDeletePurchase } from "../../../../sql/sql-purchases/sqlAdminDeletePurchase";
import { getTranslations } from "next-intl/server";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

export const revalidate = 0;

export default async function PurchasesPage() {
  const session = await getSession();
  const user = session?.user.role[0];

  // const role = session?.user.role[0];

  if (user !== "Admin") {
    redirect("/");
  }
  const purchases = await sqlGetAllPurchases();

  const t = await getTranslations("Admin.purchases");

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight text-gray-900 dark:text-gray-100">
            {t("all")}
          </h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-auto max-h-[550px] bg-white dark:bg-gray-800">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-700 bg-red-200 dark:bg-red-400 text-left text-xs font-semibold text-[#002058] dark:text-gray-200 uppercase tracking-wider">
                    {t("purchased")}
                  </th>
                  <th className="px-5 py-3 hidden sm:table-cell border-b-2 border-gray-200 dark:border-gray-700 bg-red-200 dark:bg-red-400 text-left text-xs font-semibold text-[#002058] dark:text-gray-200 uppercase tracking-wider">
                    {t("name")}
                  </th>
                  <th className="px-5 py-3 hidden md:table-cell border-b-2 border-gray-200 dark:border-gray-700 bg-red-200 dark:bg-red-400 text-left text-xs font-semibold text-[#002058] dark:text-gray-200 uppercase tracking-wider">
                    {t("quantity")}
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-700 bg-red-200 dark:bg-red-400 text-left text-xs font-semibold text-[#002058] dark:text-gray-200 uppercase tracking-wider">
                    {t("price")}
                  </th>
                  <th className="px-5 py-3 hidden lg:table-cell border-b-2 border-gray-200 dark:border-gray-700 bg-red-200 dark:bg-red-400 text-left text-xs font-semibold text-[#002058] dark:text-gray-200 uppercase tracking-wider">
                    {t("date")}
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-700 bg-red-200 dark:bg-red-400"></th>
                </tr>
              </thead>
              <tbody>
                {purchases?.map((purchase, idx) => {
                  const date = new Date(purchase.purchase_date);

                  const deletePurchase = sqlAdminDeletePurchase.bind(
                    null,
                    purchase.student_id,
                    purchase.id
                  );

                  const options: Intl.DateTimeFormatOptions = {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                  };
                  const formattedDate = date.toLocaleString("en-US", options);
                  return (
                    <tr key={idx} className="bg-white dark:bg-gray-800">
                      <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-22 h-14">
                            <Image
                              src={purchase.image}
                              className="w-full h-full rounded-md"
                              width={50}
                              height={50}
                              alt="user-avatar"
                            />
                          </div>
                          <div className="ml-3 hidden md:flex">
                            <p className="text-gray-900 dark:text-gray-200 whitespace-no-wrap">
                              {purchase.name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b hidden sm:table-cell border-gray-200 dark:border-gray-700">
                        <p className="text-gray-900 dark:text-gray-200 whitespace-no-wrap">
                          {purchase.student_name}
                        </p>
                      </td>
                      <td className="px-5 py-5 mt-5 hidden md:table-cell border-b border-gray-200 dark:border-gray-700">
                        <p className="text-gray-900 dark:text-gray-200 whitespace-no-wrap">
                          {purchase.quantity}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700">
                        <p className="text-gray-900 dark:text-gray-200 whitespace-no-wrap">
                          ${purchase.price}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b hidden lg:table-cell border-gray-200 dark:border-gray-700 text-sm">
                        <p className="text-gray-900 dark:text-gray-200 whitespace-no-wrap">
                          {formattedDate}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 text-sm text-right">
                        <form action={deletePurchase}>
                          <button
                            type="submit"
                            className="inline-block text-red-400 dark:text-red-500 p-2 border dark:border-gray-500 rounded-md hover:text-red-500 dark:hover:text-red-600"
                          >
                            {t("delete")}
                          </button>
                        </form>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
