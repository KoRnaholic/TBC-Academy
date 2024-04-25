// import "../[locale]/globals.css";
import { unstable_setRequestLocale } from "next-intl/server";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import React from "react";
interface DashboardLayoutProps {
  children: JSX.Element;
  params: any;
}

export default function DashboardLayout({
  children,
  params,
}: DashboardLayoutProps) {
  unstable_setRequestLocale(params.locale);
  return (
    <div className="flex flex-col  min-h-screen">
      <Header />
      <main className="p-8 flex-grow  dark:bg-slate-700">{children}</main>
      <Footer />
    </div>
  );
}
