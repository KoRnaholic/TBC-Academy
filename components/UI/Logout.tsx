import { useLocale } from "next-intl";
import { Logout } from "../../app/actions";

export default function LogOut() {
  const locale = useLocale();

  return (
    <>
      <form action={Logout}>
        <button>{locale === "en" ? "Log out" : "გამოსვლა"}</button>
      </form>
    </>
  );
}
