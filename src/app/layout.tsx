import { TermsModalContextProvider } from "@/contexts/TermsContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "./components/footer";
import { NavbarMain } from "./components/navbarMain";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sibutran 2 - Monetizze - Sibutran 2 Cápsulas | AE Digi Solutions",
  description:
    "Mais do que um potente emagrecedor, Sibutran 2 é o auxiliador da sua saúde.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth transition duration-150 ease-in-out"
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <NavbarMain />
        {children}
        <TermsModalContextProvider>
          <Footer />
        </TermsModalContextProvider>
      </body>
    </html>
  );
}
