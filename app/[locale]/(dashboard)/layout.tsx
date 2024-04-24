// import "../[locale]/globals.css";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import React from "react";
interface DashboardLayoutProps {
  children: JSX.Element;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex flex-col  min-h-screen">
      <Header />
      <main className="p-8 flex-grow  dark:bg-slate-700">{children}</main>
      <Footer />
    </div>
  );
}