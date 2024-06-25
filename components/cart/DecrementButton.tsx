"use client";
import RemoveIcon from "@mui/icons-material/Remove";
// type DecrementQuantity = () => void;
export default function DecrementButton({
  decrementQuantity,
}: {
  decrementQuantity: () => Promise<void>;
}) {
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
