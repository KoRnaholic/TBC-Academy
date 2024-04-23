import "./globals.css";
import { ThemeProvider } from "../../components/theme/theme-provider";

export const metadata = {
  title: "OpenMarket",
  description: "Generated by create next app",
};

export default function LocaleLayout({ children, params: { locale } }) {
  console.log(locale);
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
