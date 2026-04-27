import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mascot from "@/components/Mascot";
import ThemeProvider from "@/components/ThemeProvider";
import ScrollReveal from "@/components/ScrollReveal";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Meditații la română",
  description:
    "Pregătire pentru clasa a 9-a, Bacalaureat și lecții curente. Online și offline în Nisporeni.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/images/mascot.png" />
      </head>
      <body className="font-body text-ink min-h-screen bg-[radial-gradient(circle_at_top_left,_#fdf7ef_0%,_#f6f1ea_60%)]">
        <ThemeProvider>
          <LanguageProvider>
            <ScrollReveal />
            <Header />
            <main>{children}</main>
            <Mascot />
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
