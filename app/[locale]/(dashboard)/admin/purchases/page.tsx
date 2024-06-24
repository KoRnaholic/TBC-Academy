import Image from "next/image";
import React from "react";
import { sqlGetAllPurchases } from "../../../../sql/sql-purchases/sqlGetAllPurchases";
import ShareFacebook from "../../../../../components/social-share/ShareFacebook";
import { sqlAdminDeletePurchase } from "../../../../sql/sql-purchases/sqlAdminDeletePurchase";

export const revalidate = 0;

export default async function PurchasesPage() {
  const purchases = await sqlGetAllPurchases();

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <ShareFacebook shareUrl="https://tbc-academy-git-refactoring-2-kornaholics-projects.vercel.app/courses/1" />
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">All Users</h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg  overflow-auto max-h-[550px]">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-red-200 text-left text-xs font-semibold text-[#002058] uppercase tracking-wider">
                    Purchased Course
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-red-200 text-left text-xs font-semibold text-[#002058] uppercase tracking-wider">
                    Student Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-red-200 text-left text-xs font-semibold text-[#002058] uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-red-200 text-left text-xs font-semibold text-[#002058] uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-red-200 text-left text-xs font-semibold text-[#002058] uppercase tracking-wider">
                    Purchase Date
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-red-200"></th>
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
                    <tr key={idx}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white ">
                        <div className="flex items-center ">
                          <div className="flex-shrink-0 w-22 h-14">
                            <Image
                              src={purchase.image}
                              className="w-full h-full rounded-md"
                              width={50}
                              height={50}
                              alt="user-avatar"
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {purchase.name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white ">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {purchase.student_name}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white ">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {purchase.quantity}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white ">
                        <p className="text-gray-900 whitespace-no-wrap">
                          ${purchase.price}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {formattedDate}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                        <form action={deletePurchase}>
                          <button
                            type="submit"
                            className="inline-block text-red-400 p-2 border rounded-md hover:text-red-500"
                          >
                            Delete
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
