import React from "react";
import Button from "../../../../components/UI/Button";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("Contact");

  return (
    <div className="bg-gradient-to-r lg:mt-8 flex flex-col items-center justify-center ">
      <div className="bg-white py-3 px-4 md:px-8 rounded-lg shadow-lg sm:w-2/3 lg:w-1/2 xl:w-1/3 dark:bg-gray-800">
        <div>
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
            {t("contactus")}
          </h1>
          <div className="mb-4 gap-2 flex flex-col md:flex-row md:justify-between">
            <div className="mb-2 md:mb-0">
              <h2 className="text-xl font-semibold dark:text-white">
                {t("address")}
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                123 Main Street, City, Country
              </p>
            </div>
            <div className="mb-2 md:mb-0">
              <h2 className="text-xl font-semibold dark:text-white">
                {t("number")}
              </h2>
              <p className="text-gray-700 dark:text-gray-300">+1 234 567 890</p>
            </div>
            <div className="mb-2 md:mb-0">
              <h2 className="text-xl font-semibold dark:text-white">
                {t("email")}
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                info@example.com
              </p>
            </div>
          </div>
        </div>

        <form className="mb-4">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {t("name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {t("email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {t("message")}
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm dark:bg-gray-700 dark:text-white"
            ></textarea>
          </div>
          <Button
            type="submit"
            styles="w-full bg-slate-700 dark:bg-slate-500 dark:hover:bg-slate-700 text-white py-2 px-4 rounded-md hover:bg-slate-800 focus:outline-none"
          >
            {t("submit")}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
