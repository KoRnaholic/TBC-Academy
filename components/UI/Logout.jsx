import { useLocale, useTranslations } from "next-intl";

export default function LogOut() {
  const t = useLocale("Index");
  // console.log(t);
  return (
    <>
      <form action="/api" method="GET">
        <button>{t === "en" ? "Log out" : "გამოსვლა"}</button>
      </form>
    </>
  );
}
