import { Logout } from "@/app/actions";
import { useTranslations } from "next-intl";

export default function LogOut() {
  // const t = useTranslations("Index");
  // console.log(t);
  return (
    <>
      <form action={Logout}>
        <button>Logout</button>
      </form>
    </>
  );
}
