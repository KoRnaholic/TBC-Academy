// import "../[locale]/globals.css";
import { unstable_setRequestLocale } from "next-intl/server";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import React from "react";
import { getCartQuantity } from "../../actions";

interface DashboardLayoutProps {
  children: JSX.Element;
  params: {
    locale: string;
  };
}

export default async function DashboardLayout({
  children,
  params,
}: DashboardLayoutProps) {
  unstable_setRequestLocale(params.locale);

  const quantity = await getCartQuantity();
  return (
    <div className="flex flex-col  min-h-screen">
      <Header quantity={quantity} />
      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}
