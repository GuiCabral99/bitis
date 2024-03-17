import Link from "next/link";
import { FaHandsHelping } from "react-icons/fa";
import { IoAccessibility, IoDesktop, IoStar } from "react-icons/io5";

export function StartPlanCard() {
  return (
    <Link
      href={"/contato"}
      className="flex justify-center desktop:hover:scale-105 duration-300"
    >
      <div className="bg-primary m-4 mt-8 desktop:mt-12 w-[400px] flex flex-col justify-center items-center rounded-2xl">
        <div className="flex flex-col py-mobile items-center desktop:-mt-5 mt-6 text-black">
          <p className="text-[14px] font-light">Investimento</p>
          <h1 className="text-secondary">START</h1>
        </div>
        <div className="bg-[url('/delivery3.jpeg')] h-52 bg-cover bg-center min-w-full text-white my-4" />
        <div className="p-6 space-y-8 desktop:pb-0 pb-12 text-black">
          <li className="font-semibold">Ponto de comércio com 80m²</li>
          <li className="font-semibold">Fature em média R$ 68 mil ao mês</li>
          <li className="font-semibold">Investimento R$ 220.000,00</li>
          <li className="font-semibold">Payback em 27 meses</li>
          <li className="font-semibold">Margem liquida média 18%</li>
        </div>
      </div>
    </Link>
  );
}

export function FullPlanCard() {
  return (
    <Link
      href={"/contato"}
      className="flex justify-center desktop:hover:scale-105 duration-300"
    >
      <div className="bg-secondary m-4 mt-12 w-[400px] flex flex-col justify-center items-center rounded-2xl">
        <div className="bg-black h-10 mb-[720px] rounded-full p-4 absolute flex justify-center items-center">
          <p className="text-white">Recomendado</p>
        </div>
        <div className="flex flex-col p-mobile items-center mt-6 text-white">
          <p className="text-[14px] font-light">Investimento</p>
          <h1 className="text-primary2">FULL</h1>
        </div>
        <div className="bg-[url('/local4.jpeg')] h-52 bg-cover bg-center min-w-full text-white my-4" />
        <div className="p-6 space-y-8 pb-12 text-white">
          <li className="font-semibold">Ponto de comércio com 80m²</li>
          <li className="font-semibold">Fature em média R$ 68 mil ao mês</li>
          <div>
            <li className="font-semibold">Investimento R$ 220.000,00</li>
            <p className="ml-6 font-light">+ Capital de giro indicado</p>
          </div>
          <li className="font-semibold">Payback em 27 meses</li>
          <li className="font-semibold">Margem liquida média 18%</li>
        </div>
        <div className="bg-black h-10 mt-[720px] w-20 rounded-full p-4 absolute flex justify-center items-center">
          <IoStar color="white" size={24} />
        </div>
      </div>
    </Link>
  );
}

export function FranchiseHeader() {
  return (
    <div className="bg-[url('/local4.jpeg')] bg-cover bg-center min-w-full text-white">
      <div className="bg-secondary99 flex justify-center py-14 px-mobile tablet:py-16 tablet:px-tablet">
        <div className="space-y-6 desktop:space-y-10 tablet:w-[700px] mobile:w-[440px]">
          <h1 className="text-xl tablet:text-3xl desktop:text-3xl">
            Como faturar até
          </h1>
          <h1 className="text-center text-primary2 font-body text-4xl tablet:text-5xl desktop:text-5xl">
            R$ 800 mil reais
          </h1>
          <h1
            className="text-end text-xl tablet:text-3xl
            desktop:text-3xl"
          >
            ao ano?
          </h1>
        </div>
      </div>
    </div>
  );
}

export function ListItem(props: {
  text: string;
  number: string;
  isLast?: boolean;
}) {
  return (
    <div className="flex space-x-6 items-center">
      <h1 className="text-secondary text-3xl tablet:text-4xl  font-body">
        {props.number}
      </h1>
      <p
        data-isLast={props.isLast}
        className="text-sm tablet:text-lg data-[isLast=true]:text-primary data-[isLast=true]:font-black"
      >
        {props.text}
      </p>
    </div>
  );
}

export function FranchiseSection1() {
  return (
    <div className="p-mobile tablet:p-tablet desktop:p-desktop">
      <h1
        className="text-xl font-black tablet:text-2xl
        desktop:hidden w-[400px] mt-6"
      >
        Escolha um plano abaixo e siga o passo a passo:
      </h1>
      <div className="w-full desktop:flex items-center justify-center">
        <div className="flex items-center justify-between desktop:w-[1024px] pt-10 desktop:pt-0">
          <div className="space-y-6 desktop:hidden">
            <ListItem number={"1"} text={"Ficha qualitativa"} />
            <ListItem number={"2"} text={"Análise de perfil"} />
            <ListItem number={"3"} text={"Reunião"} />
            <ListItem number={"4"} text={"Contrato"} />
            <ListItem number={"5"} text={"Implementação"} />
            <ListItem number={"6"} text={"Inauguração"} isLast={true} />
          </div>
          <div className="w-[500px] space-y-8">
            <h1 className="hidden desktop:block text-2xl font-black">
              Escolha um plano abaixo e siga o passo a passo:
            </h1>
            <div className="flex pt-8 justify-start space-x-20">
              <div className="space-y-8 hidden desktop:flex flex-col items-start">
                <ListItem number={"1"} text={"Ficha qualitativa"} />
                <ListItem number={"3"} text={"Reunião"} />
                <ListItem number={"5"} text={"Implementação"} />
              </div>
              <div
                className="space-y-8 hidden desktop:flex flex-col
                items-start"
              >
                <ListItem number={"2"} text={"Análise de perfil"} />
                <ListItem number={"4"} text={"Contrato"} />
                <ListItem number={"6"} text={"Inauguração"} isLast={true} />
              </div>
            </div>
          </div>
          <div className="greatDesktop:ml-[600px] image:ml-[600px] mt-[40px] desktop:mt-[60px] absolute">
            <img
              src="/woman.svg"
              className="hidden image:block desktop:h-[380px] h-[400px]"
            />
          </div>
          <img
            src="/arrow.svg"
            className="tablet:h-92 mobile:h-80 image:h-72 pr-desktop image:hidden"
          />
        </div>
      </div>
    </div>
  );
}

export function FranchiseSectionTitle2() {
  return (
    <div className="h-28 bg-secondary mt-8 desktop:mt-0 justify-center text-center text-white flex flex-col">
      <h1 className="font-body font-light tablet:text-xl mobile:text-base">
        SEJA UM
      </h1>
      <h1 className="font-body tablet:text-3xl mobile:text-2xl">FRANQUEADO</h1>
    </div>
  );
}

export function FranchiseSection2() {
  return (
    <div className="desktop:flex desktop:justify-center desktop:mt-10 tablet:pt-10">
      <FullPlanCard />
      <StartPlanCard />
    </div>
  );
}

export function FranchiseSectionTitle3() {
  return (
    <div className="mt-8 desktop:mt-[100px] tablet:pt-10 text-center">
      <h1 className="text-xl desktop:text-2xl">
        Todo o suporte que você precisa
      </h1>
    </div>
  );
}

export function FranchiseSection3ListItem(props: {
  title: string;
  content: string;
  color: string;
  Icon: any;
}) {
  return (
    <div className="space-y-4 tablet:space-y-6">
      <div className="flex items-center space-x-4 tablet:space-x-6">
        <div
          className={`desktop:min-h-16 desktop:min-w-16 size-14 bg-${props.color} rounded-full justify-center
      items-center flex flex-row text-white`}
        >
          {props.Icon}
        </div>
        <h1 className="font-body font-bold tablet:text-xl text-lg">
          {props.title}
        </h1>
      </div>
      <p className="desktop:text-lg">{props.content}</p>
    </div>
  );
}

export function FranchiseSection3() {
  return (
    <div className="justify-center flex items-center w-full">
      <div className="w-[800px] desktop:m-[80px] p-mobile pt-10 tablet:pt-20 desktop:p-0 desktop:space-y-16 tablet:space-y-12 space-y-8">
        <FranchiseSection3ListItem
          color="secondary"
          content="Atendimento atráves de e-mail, telefone, aplicativos de mensagens
        instantaneas, como WhatsApp e Skype."
          title="Suporte remoto"
          Icon={<IoDesktop className="size-8 desktop:size-10" />}
        />
        <FranchiseSection3ListItem
          color="primary"
          content="Por meio de visitas à unidade franqueada, com frequência a ser definida."
          title="Suporte presencial"
          Icon={<FaHandsHelping className="size-8 desktop:size-10" />}
        />
        <FranchiseSection3ListItem
          color="secondary"
          content="Orientando e esclarecendo questões operacionais de sua unidade."
          title="Auxílio"
          Icon={<IoAccessibility className="size-8 desktop:size-10" />}
        />
      </div>
    </div>
  );
}
