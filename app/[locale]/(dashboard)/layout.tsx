// import "../[locale]/globals.css";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

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

  return (
    <div className="flex flex-col  min-h-screen">
      {/* <Header /> */}
      <main className="flex-1">{children}</main>

      {/* <Footer /> */}
    </div>
  );
}
