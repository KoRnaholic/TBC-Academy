"use client";

import { resetCart } from "../../../app/actions";

export default function ResetCartButton() {
  return (
    <button
      onClick={() => resetCart()}
      className="bg-orange-500 text-lg text-white px-12 py-3 rounded-2xl hover:-translate-y-2 transition-all"
    >
      Clear Cart
    </button>
  );
}
