"use client";
import { startTransition, useOptimistic, useState } from "react";
import { decrementQuantity, incrementQuantity } from "../../../app/actions";

export default function Increment({ product }) {
  const [isIncrement, setIsIncrement] = useState("");
  const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
    product.quantity,
    (state) => {
      if (isIncrement === "inc") {
        return state + 1;
      } else if (isIncrement === "dec") {
        return state - 1;
      }
    }
  );

  function incrementOptimistic() {
    setIsIncrement("inc");
    startTransition(async () => {
      setOptimisticQuantity(product.product_id);
      await incrementQuantity(product.product_id);
    });
  }
  function decrementOptimistic() {
    setIsIncrement("dec");
    startTransition(async () => {
      setOptimisticQuantity(product.product_id);
      await decrementQuantity(product.product_id);
    });
  }

  return (
    <div className="flex gap-2">
      <button
        className="cursor-pointer py-0.5 px-2 text-white bg-orange-500 rounded-full"
        onClick={decrementOptimistic}
        disabled={optimisticQuantity === 0}
      >
        -
      </button>
      <p className="text-xl w-[20px]">{optimisticQuantity}</p>
      <p
        className="cursor-pointer py-0.5 px-2 text-white bg-orange-500 rounded-full"
        onClick={incrementOptimistic}
      >
        +
      </p>
    </div>
  );
}
