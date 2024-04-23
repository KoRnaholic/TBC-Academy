"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LangSwitcher(props) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const locale = useLocale();

  const handleChange = (e) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <>
      <select
        defaultValue={locale}
        className="bg-transparent"
        onChange={handleChange}
        disabled={isPending}
      >
        <option value="en">ENG</option>
        <option value="ka">GEO</option>
      </select>
    </>
  );
}
