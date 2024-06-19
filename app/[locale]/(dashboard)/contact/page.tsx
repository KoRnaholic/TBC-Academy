// import { useTranslations } from "next-intl";
import Link from "next/link";
import ContactInfo from "../../../../components/contact/ContactInfo";
import ContactForm from "../../../../components/contact/ContactForm";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("Contactus");

  const formnObj = {
    header: t("form.header"),
    name: t("form.name"),
    about: t("form.about"),
    lastname: t("form.lastname"),
    email: t("form.email"),
    phone: t("form.phone"),
    text: t("form.text"),
    send: t("form.send"),
  };

  return (
    <>
      <div>
        <div
          className="mt-20 w-full h-[190px] relative bg-center bg-no-repeat bg-cover pt-12 "
          style={{
            backgroundImage: "url('/images/bg-about.png')",
            backgroundColor: "rgba(250, 246, 246, .9)",
          }}
        >
          <div className="flex flex-col  gap-3 items-center justify-center">
            <h1 className="text-5xl text-[#002058]"> {t("banner.main")}</h1>
            <div className="flex gap-2 text-lg">
              <Link href="/" className="text-[#002058]">
                {t("banner.home")}
              </Link>
              <span className="text-red-500 text-xl">-</span>
              <span className="text-[#685f78]"> {t("banner.main")}</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ContactInfo />
        <ContactForm formObj={formnObj} />
      </div>
    </>
  );
};

export default Contact;
