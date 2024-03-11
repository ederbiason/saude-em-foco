import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saúde em Foco",
  description: "Projeto de Extensão - UniFil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>

      <body className={`${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
