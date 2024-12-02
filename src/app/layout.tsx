import type { Metadata } from "next";

import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "xg-tarefas",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Theme appearance="dark" accentColor="grass">
          <Header />
          {children}
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
