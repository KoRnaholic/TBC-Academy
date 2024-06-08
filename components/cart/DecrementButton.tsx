"use client";
import RemoveIcon from "@mui/icons-material/Remove";

export default function DecrementButton({ decrementQuantity }) {
  return (
    <button
      onClick={async () => {
        await decrementQuantity();
      }}
      className="bg-[#FF6575] rounded-full text-sm mr-1 "
    >
      <RemoveIcon className="text-white " />
    </button>
  );
}
