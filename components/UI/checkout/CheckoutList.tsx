import { QueryResultRow } from "@vercel/postgres";
import Increment from "./Increment";

export interface CartProducts {
  products: QueryResultRow[];
}

export default function CheckoutList({ products }: CartProducts) {
  return (
    <>
      {products.map((product: QueryResultRow, idx: number) => {
        return <Increment key={idx} product={product} />;
      })}
    </>
  );
}
