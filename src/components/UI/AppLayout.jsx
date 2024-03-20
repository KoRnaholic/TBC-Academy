import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

export default function AppLayout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-8 flex-grow  dark:bg-slate-700">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
