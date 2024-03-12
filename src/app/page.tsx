"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [sliderCount, setSliderCount] = useState<number>(0);
  const slider = [
    { img: "pizza.jpg", description: "Burgers" },
    { img: "pizza.jpg", description: "Pizzas" },
    { img: "pizza.jpg", description: "Porções Quentes" },
    { img: "pizza.jpg", description: "Espetos" },
    { img: "pizza.jpg", description: "Jantinha" },
    { img: "pizza.jpg", description: "Caldos" },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setSliderCount((sliderCount) =>
        sliderCount === slider.length - 1 ? 0 : sliderCount + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <main className="min-h-screen">
      <div className="bg-[url('/pizza-bg.jpg')] bg-cover bg-center min-w-full text-white">
        <div className="bg-[#D8070780] space-y-6 py-10 px-4">
          <h1>Fature até 800 mil ao ano!</h1>
          <p>Comece sua franquia agora</p>
          <Link href="/" className="flex">
            <p className="bg-[#FEDA00] text-black text-sm font-bold px-3 py-2 mt-6">
              Quero faturar
            </p>
          </Link>
        </div>
      </div>
      <div className="px-4 space-y-5 py-10">
        <h1>Nossa História</h1>
        <p>
          A Bitis Food Pizza foi fundada em 2015 por Roberson Luis De Angelino,
          em Barretos,São Paulo.Inicialmente, o restaurante atendia a pacientes
          e familiares próximos a um hospital oncológico, oferecendo refeições
          rápidas e acolhedoras
        </p>
        <img src="/logo2.png" alt="Logo" />
        <p>
          Com a ajuda de sua mãe, Maria Aparecida Damaceno, o cardápio se
          expandiu para incluir exclusivos. O sucesso levou a Bitis Food Pizza a
          adotar o modelo de franquia após 8 anos de experiência no setor
          alimentício de pizzas e hambúrgueres. Se você busca um negócio
          simples, rentável e em crescimento, considere a oportunidade na Rede
          de Franquias Bitis Food Pizza!
        </p>
      </div>
      <div className="bg-[url('/restaurant.jpg')] text-white space-y-8 py-20">
        <h1 className="text-center">Pratos Disponíveis</h1>
        <div className={`flex overflow-x-hidden `}>
          {slider.map((item, index: number) => (
            <div
              key={index}
              className="min-w-full transition-all duration-1000 flex flex-col items-center space-y-4 p-4"
              style={{
                transform: `translateX(-${100 * sliderCount}%)`,
              }}
            >
              <img src={item.img} className="rounded-full" />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <Link href="/" className="flex items-center justify-center">
          <p className="bg-[#F37832] text-white text-sm font-bold px-3 py-2 mt-6">
            Ver todos
          </p>
        </Link>
      </div>

      <h1>Diferenciais</h1>
      <ul>
        <li>Variedade no cardápio</li>
        <li>Ampla expertise no segmento de alimentação</li>
        <li>Software operacional e gerencial</li>
        <li>Metodologia de trabal ho padronizada</li>
        <li>Apoio para a escolha do ponto comercia</li>
        <li>
          Capacitação contínua para o Franqueado e sua equipe de funcionários{" "}
        </li>
        <li>Investimento em marketing para fixação e divulgação da marca</li>
        <li>Orientação sobre a gestão da Unidade Franqueada</li>
        <li>Suporte em diversas áreas do negócio</li>
      </ul>
      <Link href="/">Quero começar a faturar</Link>
      <Footer />
    </main>
  );
}
