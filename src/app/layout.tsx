import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Bitis Food Pizza",
  description: "É faca na celola!",
  keywords: [
    "Bitis",
    "Food",
    "Pizza",
    "celola",
    "franquia",
    "Bitis Food Pizza",
    "comida",
    "restaurante",
    "pizzaria",
    "lanchonete",
    "pizza",
    "burger",
    "lanche",
    "espeto",
    "caldo",
    "porção",
    "jantinha",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta
          name="facebook-domain-verification"
          content="1mhc0pfevhs9o3tan46l1kqzb6y9tv"
        />
      </head>
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
