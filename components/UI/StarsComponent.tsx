import React, { CSSProperties } from "react";

export default function StarsComponent({ rating }: { rating: number }) {
  return (
    <>
      <div
        className="Stars"
        style={{ "--rating": rating } as CSSProperties}
        aria-label={`Rating of this product is ${rating} out of 5.`}
      ></div>
    </>
  );
}
