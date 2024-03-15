import { FaHandsHelping, FaLaptop, FaQuestion, FaStar } from "react-icons/fa";

export default () => {
  return (
    <main>
      <div className="bg-[url('/local4.jpeg')] bg-center bg-cover min-w-full">
        <div className="bg-[#D8070780] text-white space-y-2 py-10 px-mobile">
          <h3>Como faturar até</h3>
          <h1 className="text-[#FEDA00] text-center">R$ 800 mil reais</h1>
          <h3 className="text-end">ao ano?</h3>
        </div>
      </div>

      <div className="space-y-6 my-8 px-mobile">
        <h3>Escolha um plano a baixo e siga o passo a passo:</h3>
        <div className="flex items-center space-x-3">
          <h1 className="text-[#D80707]">1</h1>
          <h4 className="text-sm">Ficha qualitativa</h4>
        </div>
        <div className="flex items-center space-x-3">
          <h1 className="text-[#D80707]">2</h1>
          <h4 className="text-sm">Análise de perfil</h4>
        </div>
        <div className="flex items-center space-x-3">
          <h1 className="text-[#D80707]">3</h1>
          <h4 className="text-sm">Reunião</h4>
        </div>
        <div className="flex items-center space-x-3">
          <h1 className="text-[#D80707]">4</h1>
          <h4 className="text-sm">Contrato</h4>
        </div>
        <div className="flex items-center space-x-3">
          <h1 className="text-[#D80707]">5</h1>
          <h4 className="text-sm">Implementação</h4>
        </div>
        <div className="flex items-center space-x-3">
          <h1 className="text-[#D80707]">6</h1>
          <h4 className="text-[#ECBE21] font-black">Inauguração</h4>
        </div>
      </div>

      <div className="text-white bg-[#D80707] text-center -space-y-1 py-4 mb-16">
        <h3 className="font-light">Seja um</h3>
        <h1>Franqueado</h1>
      </div>
      <div className="px-mobile space-y-10">
        <div className="w-full flex flex-col items-center bg-[#D80707] rounded-2xl">
          <h4 className="bg-black text-white py-2 px-4 inline-block text-center rounded-full -mt-4">
            Recomendado
          </h4>
          <div className="space-y-8 py-6 w-full">
            <div className="text-white text-center">
              <h4 className="text-sm font-light">Investmento</h4>
              <h1 className="text-[#ECBE21]">FULL</h1>
            </div>
            <div className="bg-[url('/local4center.jpeg')] bg-center bg-cover h-36 w-full"></div>
            <ul className="list-disc list-inside text-white text-sm font-medium px-1.5 space-y-3">
              <li>
                <span className="-ml-1.5 text-sm font-medium">
                  Ponto de comércio de 80m²
                </span>
              </li>
              <li>
                <span className="-ml-1.5 text-sm font-medium">
                  Fature em média R$ 68 mil ao mês
                </span>
              </li>
              <li>
                <span className="-ml-1.5 text-sm font-medium">
                  Investimento R$ 220.000,00
                </span>
              </li>
              <span className="ml-5 text-xs font-light">
                + Capital de giro indicado
              </span>
              <li>
                <span className="-ml-1.5 text-sm font-medium">
                  Payback em 27 meses
                </span>
              </li>
              <li>
                <span className="-ml-1.5 text-sm font-medium">
                  Margem liquida média 18%
                </span>
              </li>
              <li>
                <span className="-ml-1.5 text-sm font-medium">
                  Atendimento lcoal e delivery
                </span>
              </li>
            </ul>
          </div>
          <h4 className="bg-black text-white py-2 px-4 inline-block text-center rounded-full -mb-4">
            <FaStar />
          </h4>
        </div>

        <div className="w-full flex flex-col items-center bg-[#ECBE21] rounded-2xl space-y-8 py-8">
          <div className="text-center">
            <h4 className="text-sm font-light">Investmento</h4>
            <h1 className="text-[#D80707]">START</h1>
          </div>
          <div className="bg-[url('/delivery3center.jpeg')] bg-center bg-cover h-36 w-full"></div>
          <ul className="list-disc list-inside text-sm font-medium px-1.5 space-y-3">
            <li>
              <span className="-ml-1.5 text-sm font-medium">
                Ponto de comércio de 60m²
              </span>
            </li>
            <li>
              <span className="-ml-1.5 text-sm font-medium">
                Fature em média R$ 68 mil ao mês
              </span>
            </li>
            <li>
              <span className="-ml-1.5 text-sm font-medium">
                Investimento R$ 175.000,00
              </span>
            </li>
            <span className="ml-5 text-xs font-light">
              + Capital de giro indicado
            </span>
            <li>
              <span className="-ml-1.5 text-sm font-medium">
                Payback em 32 meses
              </span>
            </li>
            <li>
              <span className="-ml-1.5 text-sm font-medium">
                Margem liquida média 16%
              </span>
            </li>
            <li>
              <span className="-ml-1.5 text-sm font-medium">
                Somente delivery
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="space-y-8 py-10 px-mobile">
        <h1 className="text-center">Todo suporte que você precisa</h1>
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <FaLaptop className="w-10 h-10 p-2 bg-[#D80707] rounded-full text-white" />
            <h3 className="font-bold">Suporte remoto</h3>
          </div>
          <h4 className="text-sm">
            Atendimento atráves de e-mail, telefone, aplicativos de mensagens
            instantaneas, como WhatsApp e Skype.
          </h4>
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <FaHandsHelping className="w-10 h-10 p-2 bg-[#ECBE21] rounded-full" />
            <h3 className="font-bold">Suporte presencial</h3>
          </div>
          <h4 className="text-sm">
            Por meio de visitas à unidade franqueada, com frequência a ser
            definida
          </h4>
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <FaQuestion className="w-10 h-10 p-2 bg-[#D80707] rounded-full text-white" />
            <h3 className="font-bold">Auxílio</h3>
          </div>
          <h4 className="text-sm">
            Por meio de visitas à unidade franqueada, com frequência a ser
            definida
          </h4>
        </div>
      </div>
    </main>
  );
};
