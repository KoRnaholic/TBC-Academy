// import { useTranslations } from "next-intl";
import Link from "next/link";
import ContactInfo from "../../../../components/contact/ContactInfo";
import ContactForm from "../../../../components/contact/ContactForm";

const Contact = () => {
  // const t = useTranslations("Contact");

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
            <h1 className="text-5xl text-[#002058]">Contact Us</h1>
            <div className="flex gap-2 text-lg">
              <Link href="/" className="text-[#002058]">
                Home
              </Link>
              <span className="text-red-500 text-xl">-</span>
              <span className="text-[#685f78]">Contact Us</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ContactInfo />
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
