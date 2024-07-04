"use client";

import Footer from "@/components/Footer";
import Link from "next/link";

export default () => {
  return (
    <>
      <main className="h-[calc(100vh-80px)] w-full flex flex-col items-center justify-between">
        <div className="h-full flex flex-col items-center justify-center">
          <h1>Obrigado pelo seu contato!</h1>
          <p>Retornaremos uma resposta em breve.</p>
          <Link href={"/"}>Voltar ao início</Link>
        </div>
        <Footer />
      </main>
    </>
  );
};
