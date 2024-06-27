import "./globals.css";
import { ThemeProvider } from "../../components/theme/theme-provider";
import { ReactNode } from "react";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Header from "../../components/header/Header";
import { sqlGetCartItems } from "../sql/sqlGetCartItems";
import Footer from "../../components/footer/Footer";

export const metadata = {
  title: "DreamLMS - Discover Your Ideal Course",
  description:
    "A comprehensive Learning Management System to enhance your learning experience.",
  keywords: "courses, find courses, online learning, education, DreamLMS",
};

interface LocaleLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations("Index");
  const navigationObj = {
    home: t("navigation.home"),
    courses: t("navigation.courses"),
    about: t("navigation.about"),
    instructors: t("navigation.instructors"),
    students: t("navigation.students"),
    blog: t("navigation.blog"),
    contact: t("navigation.contact"),
    profile: t("navigation.profile"),
    package: t("navigation.package"),
    logout: t("navigation.logout"),
    admin: t("navigation.admin"),
    login: t("navigation.login"),
    register: t("navigation.register"),
    quantity: t("navigation.quantity"),
    cart: t("navigation.cart"),
    empty: t("navigation.empty"),
  };

  const courses = await sqlGetCartItems();

  return (
    <html lang={locale} suppressHydrationWarning>
      <UserProvider>
        <body className="flex flex-col min-h-screen">
          <ThemeProvider>
            <Header courses={courses} navigation={navigationObj} />
            {children}
            <Footer navigation={navigationObj} />
          </ThemeProvider>
        </body>
      </UserProvider>
    </html>
  );
}
