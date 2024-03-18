"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [sliderCountSm, setSliderCountSm] = useState<number>(0);
  const [sliderCountMd, setSliderCountMd] = useState<number>(0);
  const [sliderCountLg, setSliderCountLg] = useState<number>(0);
  const slider = [
    { id: 0, img: "/burger.png", description: "Burgers" },
    { id: 1, img: "/pizza.png", description: "Pizzas" },
    { id: 2, img: "/batata.png", description: "Porções Quentes" },
    { id: 3, img: "/espeto.png", description: "Espetos" },
    { id: 4, img: "/jantinha.png", description: "Jantinha" },
    { id: 5, img: "/cumbuca.png", description: "Caldos" },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setSliderCountSm((sliderCountSm) =>
        sliderCountSm === slider.length - 1 ? 0 : sliderCountSm + 1
      );
      setSliderCountMd((sliderCountMd) =>
        sliderCountMd === slider.length - 2 ? 0 : sliderCountMd + 1
      );
      setSliderCountLg((sliderCountLg) =>
        sliderCountLg === slider.length - 3 ? 0 : sliderCountLg + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen">
      <section className="bg-[url('/pizza-bg.jpg')] bg-cover bg-center min-w-full text-white">
        <div className="bg-[#D8070780] space-y-6 py-10 px-mobile md:px-tablet lg:py-36 lg:space-y-9 lg:px-desktop">
          <h1 className="md:text-5xl">Fature até 800 mil ao ano!</h1>
          <p className="text-lg font-light md:text-3xl">
            Comece sua franquia agora
          </p>
          <Link
            href="/franquia"
            className="inline-block bg-primary2 text-black text-sm font-bold px-3 py-2 mt-6 rounded-xl md:text-3xl md:px-8 md:py-4"
          >
            Quero faturar
          </Link>
        </div>
      </section>

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
          className="w-full max-w-80 m-auto md:col-span-1 md:max-w-52 2xl:col-span-1 2xl:row-span-2"
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

      <section className="bg-[url('/restaurant.jpg')] text-white space-y-10 py-16">
        <div className="lg:flex lg:justify-between lg:items-center lg:w-[812px] lg:mx-auto">
          <h1 className="text-center">Pratos Disponíveis</h1>

          <Link href="/cardapio" className="hidden lg:block">
            <p className="bg-tertiary text-white font-bold w-full max-w-[304px] py-2 px-8 rounded-lg text-center">
              Ver todos
            </p>
          </Link>
        </div>
        <div className={`flex overflow-x-hidden md:hidden`}>
          {slider.map((item) => (
            <div
              key={item.id}
              className="min-w-full transition-all duration-1000"
              style={{
                transform: `translateX(-${100 * sliderCountSm}%)`,
              }}
            >
              <div className="mx-auto max-w-[304px] space-y-2">
                <img
                  src={item.img}
                  className="rounded-full -mb-4 md:w-[400px]"
                />
                <p className="text-2xl font-light -mt-4 text-center">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={`md:flex overflow-x-hidden hidden lg:hidden`}>
          {slider.map((item) => (
            <div
              key={item.id}
              className="min-w-[50%] transition-all duration-1000"
              style={{
                transform: `translateX(-${100 * sliderCountMd}%)`,
              }}
            >
              <div className="mx-auto max-w-[304px] space-y-2">
                <img
                  src={item.img}
                  className="rounded-full -mb-4 md:w-[400px]"
                />
                <p className="text-2xl font-light -mt-4 text-center">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={`lg:flex overflow-x-hidden hidden`}>
          {slider.map((item) => (
            <div
              key={item.id}
              className="min-w-[33.333%] transition-all duration-1000"
              style={{
                transform: `translateX(-${100 * sliderCountLg}%)`,
              }}
            >
              <div className="mx-auto max-w-[304px] space-y-2">
                <img
                  src={item.img}
                  className="rounded-full -mb-4 md:w-[400px]"
                />
                <p className="text-2xl font-light -mt-4 text-center">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/cardapio"
          className="flex items-center justify-center px-mobile lg:hidden"
        >
          <p className="bg-tertiary text-white font-bold w-full max-w-[304px] py-2 rounded-xl text-center">
            Ver todos
          </p>
        </Link>
      </section>

      <section className="px-mobile py-10 md:px-tablet md:py-20 lg:px-0 lg:w-[896px] lg:mx-auto">
        <h1>Diferenciais</h1>
        <div className="pt-6 pb-8">
          <li>Variedade no cardápio</li>
          <li>Ampla expertise no segmento de alimentação</li>
          <li>Software operacional e gerencial</li>
          <li>Metodologia de trabal ho padronizada</li>
          <li>Apoio para a escolha do ponto comercia</li>
          <li>
            Capacitação contínua para o Franqueado e sua equipe de funcionários
          </li>
          <li>Investimento em marketing para fixação e divulgação da marca</li>
          <li>Orientação sobre a gestão da Unidade Franqueada</li>
          <li>Suporte em diversas áreas do negócio</li>
        </div>
        <div className="md:w-full md:flex md:justify-center md:space-x-4">
          <img
            src="/local3.jpeg"
            alt=""
            className="rounded-xl md:w-1/2 lg:w-72"
          />
          <img
            src="/local5.jpeg"
            alt=""
            className="rounded-xl hidden md:block md:w-1/2 lg:w-72"
          />
          <img
            src="/local4.jpeg"
            alt=""
            className="rounded-xl hidden lg:block lg:w-72"
          />
        </div>

        <Link
          href="/franquia"
          className="flex w-fit mx-auto bg-secondary text-white text-lg font-bold px-8 py-5 mt-6 rounded-xl md:hidden"
        >
          Quero começar a faturar
        </Link>
      </section>
    </main>
  );
}
