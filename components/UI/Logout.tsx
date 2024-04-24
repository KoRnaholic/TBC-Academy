import { useLocale } from "next-intl";

export default function LogOut() {
  const locale = useLocale();
  // console.log(t);
  return (
    <>
      <form action="/api" method="GET">
        <button>{locale === "en" ? "Log out" : "გამოსვლა"}</button>
      </form>
    </>
  );
}
