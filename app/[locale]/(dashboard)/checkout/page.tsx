import { getCartList } from "../../../actions";

import CheckoutList from "../../../../components/UI/checkout/CheckoutList";
import ResetCartButton from "../../../../components/UI/checkout/ResetCartButton";

export default async function CheckoutPage() {
  const products = await getCartList();

  return (
    <div>
      <div className="bg-[#07212e] flex items-center justify-center h-[450px]">
        <div className="flex-col gap-8  flex ">
          <h1 className="text-[#F28123] text-center tracking-widest text-xl">
            WE DELIVER TECH DREAMS
          </h1>
          <h1 className="text-center text-white text-4xl sm:text-5xl ">
            Check Out Product
          </h1>
        </div>
      </div>

      <div className="flex justify-center pb-20 pt-10 px-5 flex-col items-center gap-6">
        {products.length === 0 ? (
          <div className="text-2xl text-orange-500">Cart is Empty!</div>
        ) : (
          <>
            <ResetCartButton />
            <table className="w-full md:w-2/3 sm:w-2/3 lg:w-2/4">
              <thead className="bg-orange-500">
                <tr>
                  <th className=" px-2 md:px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Product image
                  </th>
                  <th className=" px-2 md:px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Brand
                  </th>
                  <th className=" px-2 md:px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Price
                  </th>
                  <th className=" px-2 md:px-6 pr-0 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Quantity
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y text-orange-400 divide-gray-200">
                <CheckoutList products={products} />
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
}
