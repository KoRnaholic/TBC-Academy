"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LangSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const locale = useLocale();
  const path = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    const extractedPath = path.slice(4);
    startTransition(() => {
      router.replace(`/${nextLocale}/${extractedPath}`);
    });
  };
  return (
    <>
      <select
        defaultValue={locale}
        className="bg-transparent p-1"
        onChange={handleChange}
        disabled={isPending}
      >
        <option className="dark:bg-slate-500" value="en">
          ENG
        </option>
        <option className="dark:bg-slate-500" value="ka">
          GEO
        </option>
      </select>
    </>
  );
}
