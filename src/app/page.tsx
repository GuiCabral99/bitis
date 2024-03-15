"use client";

import Header from "@/components/Header";
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
      <Header />
      <div className="bg-[url('/pizza-bg.jpg')] bg-cover bg-center min-w-full text-white">
        <div className="bg-[#D8070780] space-y-6 py-10 px-mobile lg:py-36 lg:space-y-9">
          <h1 className="md:text-5xl">Fature até 800 mil ao ano!</h1>
          <p className="text-lg font-light md:text-3xl">
            Comece sua franquia agora
          </p>
          <Link
            href="/"
            className="inline-block bg-primary2 text-black text-sm font-bold px-3 py-2 mt-6 rounded-xl md:text-3xl md:px-8 md:py-4"
          >
            Quero faturar
          </Link>
        </div>
      </div>
      <div className="px-mobile py-10 md:px-tablet">
        <div className="md:flex items-center">
          <div>
            <h1 className="pb-5">Nossa História</h1>
            <p className="text-lg font-light md:max-w-80 lg:max-w-[420px]">
              A Bitis Food Pizza foi fundada em 2015 por Roberson Luis De
              Angelino, em Barretos,São Paulo.Inicialmente, o restaurante
              atendia a pacientes e familiares próximos a um hospital
              oncológico, oferecendo refeições rápidas e acolhedoras
            </p>
          </div>
          <div className="md:w-1/2 md:flex md:items-center md:justify-center">
            <img src="/logo2.png" alt="Logo" className="py-10 md:w-52" />
          </div>
        </div>
        <p className="text-lg font-light">
          Com a ajuda de sua mãe, Maria Aparecida Damaceno, o cardápio se
          expandiu para incluir exclusivos. O sucesso levou a Bitis Food Pizza a
          adotar o modelo de franquia após 8 anos de experiência no setor
          alimentício de pizzas e hambúrgueres. Se você busca um negócio
          simples, rentável e em crescimento, considere a oportunidade na Rede
          de Franquias Bitis Food Pizza!
        </p>
      </div>
      <div className="bg-[url('/restaurant.jpg')] text-white space-y-8 py-20 md:flex md:flex-col md:items-center">
        <h1 className="text-center">Pratos Disponíveis</h1>

        <div className={`flex overflow-x-hidden lg:hidden`}>
          {slider.map((item, index: number) => (
            <div
              key={index}
              className="min-w-full transition-all duration-1000 flex flex-col items-center space-y-4"
              style={{
                transform: `translateX(-${100 * sliderCount}%)`,
              }}
            >
              <img src={item.img} className="rounded-full p-4 md:w-[400px]" />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap">
          {slider.map((item, index) => (
            <div key={index} className="w-1/3 p-4 space-y-4 ">
              <img src={item.img} alt="" />
              <p className="text-center">{item.description}</p>
            </div>
          ))}
        </div>
        <Link href="/" className="flex items-center justify-center">
          <p className="bg-tertiary text-white font-bold px-3 py-2 mt-6 rounded-xl">
            Ver todos
          </p>
        </Link>
      </div>
      <div className="px-mobile py-10 md:px-tablet md:py-20">
        <h1>Diferenciais</h1>
        <div className="md:flex md:space-x-16 lg:flex-col lg:space-x-0">
          <ul className="list-disc list-inside pt-6 pb-8">
            <li>Variedade no cardápio</li>
            <li>Ampla expertise no segmento de alimentação</li>
            <li>Software operacional e gerencial</li>
            <li>Metodologia de trabal ho padronizada</li>
            <li>Apoio para a escolha do ponto comercia</li>
            <li>
              Capacitação contínua para o Franqueado e sua equipe de
              funcionários
            </li>
            <li>
              Investimento em marketing para fixação e divulgação da marca
            </li>
            <li>Orientação sobre a gestão da Unidade Franqueada</li>
            <li>Suporte em diversas áreas do negócio</li>
          </ul>
          <div className="w-[500px] lg:w-full lg:flex lg:justify-center lg:space-x-4">
            <img
              src="/local3.jpeg"
              alt=""
              className="mb-12 rounded-xl lg:mb-0 lg:w-72"
            />
            <img
              src="/local3.jpeg"
              alt=""
              className="rounded-xl hidden md:block lg:w-72"
            />
            <img
              src="/local3.jpeg"
              alt=""
              className="rounded-xl hidden lg:block lg:w-72"
            />
          </div>
        </div>

        <Link
          href="/"
          className="flex w-fit mx-auto bg-secondary text-white text-lg font-bold px-8 py-5 mt-6 rounded-xl"
        >
          Quero começar a faturar
        </Link>
      </div>

      <Footer />
    </main>
  );
}
