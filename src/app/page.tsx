"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [sliderCountSm, setSliderCountSm] = useState<number>(0);
  const [sliderCountMd, setSliderCountMd] = useState<number>(0);
  const [sliderCountLg, setSliderCountLg] = useState<number>(0);
  const [sliderCountXl, setSliderCountXl] = useState<number>(0);
  const slider = [
    { id: 0, img: "/burger.png", description: "Burguers" },
    { id: 1, img: "/pizza.png", description: "Pizzas" },
    { id: 2, img: "/batata.png", description: "Porções Quentes" },
    { id: 3, img: "/espeto.png", description: "Espetos" },
    { id: 4, img: "/jantinha.png", description: "Jantinhas" },
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
        sliderCountLg === slider.length - 4 ? 0 : sliderCountLg + 1
      );
      setSliderCountXl((sliderCountXl) =>
        sliderCountXl === slider.length - 5 ? 0 : sliderCountXl + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen">
      <section className="bg-[url('/pizza-bg.jpg')] bg-cover bg-center min-w-full text-white">
        <div className="bg-secondary99 space-y-6 py-16 px-mobile md:px-tablet lg:py-36 lg:space-y-9">
          <div className="desktop:space-y-12 space-y-8 max-w-[1100px] mx-auto">
            <h1 className="md:text-3xl desktop:text-4xl desktop:max-w-[400px] max-w-[340px]">
              Fature até 800 mil ao ano!
            </h1>
            <p className="text-lg md:text-2xl">Comece sua franquia agora</p>
            <Link
              href="/franquia"
              className="inline-block bg-primary2 text-black text-sm font-bold px-6 py-2 mt-6 rounded-xl md:text-xl md:px-8 md:py-4 font-body hover:bg-primary hover:scale-105 duration-75"
            >
              Quero minha franquia
            </Link>
          </div>
        </div>
      </section>

      <section className="px-mobile py-10 space-y-10 md:space-y-0 desktop:my-8 tablet:px-tablet md:grid md:grid-cols-2 md:gap-y-10 2xl:px-0 2xl:grid-cols-3 2xl:grid-rows-2 2xl:gap-y-4 max-w-[1100px] mx-auto items-center">
        <div className="space-y-10 md:my-auto md:col-span-1 2xl:col-span-2 2xl:row-span-1">
          <h1>Nossa História</h1>
          <p className="text-lg font-light">
            A Bitis Food Pizza foi fundada em 2015 por Roberson Luis De
            Angelino, em Barretos, São Paulo. Inicialmente, o restaurante
            atendia a pacientes e familiares próximos a um hospital oncológico,
            oferecendo refeições rápidas e acolhedoras.
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

      <section className="bg-[url('/costelinha.jpg')] bg-cover bg-center">
        <div className="bg-black/60 text-white space-y-20 py-16">
          <div className="lg:flex lg:justify-between lg:items-center lg:w-[812px] lg:mx-auto">
            <h1 className="text-center">Pratos Disponíveis</h1>

            <Link
              href="/cardapio"
              className="hidden lg:block bg-tertiary rounded-lg hover:bg-tertiaryHover hover:scale-105 duration-75"
            >
              <p className="text-white font-bold w-full max-w-[304px] py-2 px-8 text-center">
                Ver todos
              </p>
            </Link>
          </div>

          {/* mobile */}
          <div className={`flex overflow-x-hidden md:hidden`}>
            {slider.map((item) => (
              <div
                key={item.id}
                className="min-w-full transition-all duration-1000"
                style={{
                  transform: `translateX(-${100 * sliderCountSm}%)`,
                }}
              >
                <div className="mx-auto max-w-[304px]">
                  <img src={item.img} />
                  <p className="text-2xl font-light text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* tablet */}
          <div className={`md:flex overflow-x-hidden hidden lg:hidden`}>
            {slider.map((item) => (
              <div
                key={item.id}
                className="min-w-[50%] transition-all duration-1000"
                style={{
                  transform: `translateX(-${100 * sliderCountMd}%)`,
                }}
              >
                <div className="mx-auto max-w-[304px] space-y-0">
                  <img src={item.img} />
                  <p className="text-2xl font-light -mt-10 text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* desktop */}
          <div className={`lg:flex overflow-x-hidden hidden xl:hidden`}>
            {slider.map((item) => (
              <div
                key={item.id}
                className="desktop:min-w-[25%] transition-all duration-1000"
                style={{
                  transform: `translateX(-${100 * sliderCountLg}%)`,
                }}
              >
                <div className="mx-auto max-w-[304px] space-y-0">
                  <img src={item.img} />
                  <p className="text-2xl font-light -mt-10 text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* desktop xl */}
          <div className={`xl:flex overflow-x-hidden hidden`}>
            {slider.map((item) => (
              <div
                key={item.id}
                className="desktop:min-w-[20%] transition-all duration-1000"
                style={{
                  transform: `translateX(-${100 * sliderCountXl}%)`,
                }}
              >
                <div className="mx-auto max-w-[304px] space-y-0">
                  <img src={item.img} />
                  <p className="text-2xl font-light -mt-10 text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/cardapio"
            className="flex items-center justify-center px-mobile lg:hidden pt-4"
          >
            <p className="bg-tertiary text-white font-bold w-full max-w-[304px] py-2 rounded-xl text-center">
              Ver todos
            </p>
          </Link>
        </div>
      </section>

      <section className="px-mobile py-10 md:px-tablet md:py-20 lg:px-0 max-w-[1024px] mx-auto">
        <h1>Diferenciais</h1>
        <div className="pt-6 pb-8 desktop:pb-16 desktop:space-y-4">
          <li>Variedade no cardápio</li>
          <li>Ampla expertise no segmento de alimentação</li>
          <li>Software operacional e gerencial</li>
          <li>Metodologia de trabalho padronizada</li>
          <li>Apoio para a escolha do ponto comercial</li>
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
            className="rounded-xl md:w-1/2 lg:w-[330px]"
          />
          <img
            src="/local5.jpeg"
            alt=""
            className="rounded-xl hidden md:block md:w-1/2 lg:w-[330px]"
          />
          <img
            src="/local4.jpeg"
            alt=""
            className="rounded-xl hidden lg:block lg:w-[330px]"
          />
        </div>

        <Link
          href="/franquia"
          className="flex justify-center bg-secondary text-white text-lg font-bold px-8 py-5 mt-6 rounded-xl hover:bg-secondaryHover hover:scale-[1.02] duration-75 max-w-[1024px]"
        >
          Quero começar a faturar
        </Link>
      </section>
      <Footer />
    </main>
  );
}
