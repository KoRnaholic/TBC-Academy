import { useTranslations } from "next-intl";
import AddCourseForm from "../../../../../components/forms/AddCourseForm";

export default function AddCoursePage() {
  const t = useTranslations("Dashboard.addcourse");

  const addFormTransl = {
    upload: t("upload"),
    choose: t("choose"),
    button: t("button"),
    link: t("link"),
    name: t("name"),
    lessons: t("lessons"),
    price: t("price"),
    duration: t("duration"),
    audience: t("audience"),
    requirements: t("requirements"),
    learn: t("learn"),
    overview: t("overview"),
    add: t("add"),
    checking: t("checking"),
    success: t("success"),
    goto: t("goto"),
  };

  return (
    <>
      <AddCourseForm addFormTransl={addFormTransl} />
    </>
  );
}
