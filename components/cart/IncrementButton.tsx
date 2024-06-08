"use client";
import AddIcon from "@mui/icons-material/Add";

export default function IncrementButton({ incrementQuantity }) {
  return (
    <>
      <button
        onClick={async () => {
          await incrementQuantity();
        }}
        className="bg-[#FF6575] text-sm rounded-full ml-1"
      >
        <AddIcon className="text-white" />
      </button>
    </>
  );
}
