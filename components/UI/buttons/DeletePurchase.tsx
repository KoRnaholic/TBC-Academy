"use client";
import { useFormStatus } from "react-dom";

export default function DeletePurchase({
  isDeleting,
  deleting,
}: {
  isDeleting: string;
  deleting: string;
}) {
  const { pending } = useFormStatus();
  return (
    <button className="py-2 px-4 bg-red-400 text-white rounded-lg hover:bg-red-600 transition-colors duration-300 w-1/2 ">
      {pending ? isDeleting : deleting}
    </button>
  );
}
