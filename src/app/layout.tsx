import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mascot from "@/components/Mascot";
import site from "@/_data/site.json";
import contact from "@/_data/contact.json";
import navigation from "@/_data/navigation.json";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <head>
        <link rel="icon" type="image/png" href="/images/mascot.png" />
      </head>
      <body className="font-body text-ink min-h-screen bg-[radial-gradient(circle_at_top_left,_#fdf7ef_0%,_#f6f1ea_60%)]">
        <Header navigation={navigation} site={site} />
        <main>{children}</main>
        <Mascot message={contact.mascotMessage} />
        <Footer site={site} navigation={navigation} contact={contact} />
      </body>
    </html>
  );
}
