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

      <section className="px-mobile py-10 space-y-10 md:space-y-0 md:px-tablet md:grid md:grid-cols-2 md:gap-y-10 lg:px-desktop 2xl:px-16 2xl:grid-cols-3 2xl:grid-rows-2 2xl:gap-y-0">
        <div className="space-y-5 md:my-auto md:col-span-1 lg:max-w-[420px] 2xl:max-w-none 2xl:col-span-2 2xl:row-span-1">
          <h1>Nossa História</h1>
          <p className="text-lg font-light">
            A Bitis Food Pizza foi fundada em 2015 por Roberson Luis De
            Angelino, em Barretos,São Paulo.Inicialmente, o restaurante atendia
            a pacientes e familiares próximos a um hospital oncológico,
            oferecendo refeições rápidas e acolhedoras
          </p>
        </div>
        <img
          src="/logo2.png"
          alt="Logo"
          className="max-w-80 m-auto md:col-span-1 md:w-52 2xl:col-span-1 2xl:row-span-2"
        />
        <p className="text-lg font-light md:col-span-2 2xl:col-span-2 2xl:row-span-2 2xl:flex 2xl:items-end">
          Com a ajuda de sua mãe, Maria Aparecida Damaceno, o cardápio se
          expandiu para incluir exclusivos. O sucesso levou a Bitis Food Pizza a
          adotar o modelo de franquia após 8 anos de experiência no setor
          alimentício de pizzas e hambúrgueres. Se você busca um negócio
          simples, rentável e em crescimento, considere a oportunidade na Rede
          de Franquias Bitis Food Pizza!
        </p>
      </section>

      <section className="bg-[url('/restaurant.jpg')] text-white space-y-8 py-20 md:flex md:flex-col md:items-center">
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
        <div className="hidden lg:flex lg:flex-wrap">
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
      </section>

      <section className="px-mobile py-10 md:px-tablet md:py-20">
        <h1>Diferenciais</h1>
        <div className="lg:space-x-0">
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
          <div className="md:w-full md:flex md:justify-center md:space-x-4">
            <img
              src="/local3.jpeg"
              alt=""
              className="rounded-xl md:w-1/2 lg:w-72"
            />
            <img
              src="/local3.jpeg"
              alt=""
              className="rounded-xl hidden md:block md:w-1/2 lg:w-72"
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
      </section>
      <Footer />
    </main>
  );
}
