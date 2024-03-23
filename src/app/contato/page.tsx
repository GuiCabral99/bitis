import Footer from "@/components/Footer";
import Link from "next/link";

import { FaEnvelope, FaExclamation, FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

export default () => {
  return (
    <>
      <div className="bg-zinc-100">
        <div className="bg-[url('/local4.jpeg')] bg-cover bg-center min-w-full">
          <div className="bg-secondary99 flex justify-center py-14 px-mobile tablet:py-16 tablet:px-tablet desktop:p-desktop">
            <div className="w-[800px]">
              <div className="space-y-6 desktop:space-y-10 desktop:mt-6 flex flex-col justify-center items-center">
                <div className="w-[250px]">
                  <h1 className="text-center text-white">
                    Vem falar com a gente!
                  </h1>
                </div>
                <div className="flex flex-col bg-white rounded-3xl w-full justify-center items-center p-tablet space-y-8 desktop:space-y-8">
                  <div className="flex flex-col items-center space-y-2">
                    <IoLocation color="black" size={28} />
                    <p className="font-bold">Bitis Food Pizza | Barretos</p>
                  </div>
                  <p className="text-center">
                    Av. Anisio Silva 1266 - Jardim Soares, 14784-346 Barretos,
                    SP
                  </p>
                  <Link
                    target="_blank"
                    href="https://www.google.com/maps/place/Villas+Pizza+Burguer/@-20.5775729,-48.5703008,17z/data=!3m1!4b1!4m6!3m5!1s0x94bb855061fe5f23:0x9e7202e561f71374!8m2!3d-20.5775729!4d-48.5677259!16s%2Fg%2F11cmzwrzlq?entry=ttu"
                  >
                    <div
                      className="bg-primary2 py-2 px-10 tablet:px-20 rounded-xl hover:bg-primary
                    hover:scale-105 duration-75"
                    >
                      <h2>Ver no mapa</h2>
                    </div>
                  </Link>
                  <div className="space-y-4">
                    <div className="flex flex-row space-x-4 justify-center items-center">
                      <FaPhoneAlt />
                      <p>+55 17 98173-3913</p>
                    </div>
                    <div className="flex flex-row space-x-4 justify-center items-center">
                      <FaEnvelope />
                      <p>contato@bitisfoodpizza.com.br</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full justify-center flex -mt-8 ">
          <div className="w-[800px] bg-white rounded-t-3xl p-tablet desktop:p-desktop">
            <form
              action="https://formsubmit.co/7ff31225b34f2fd8c54b0ce97494f042"
              method="POST"
              className="space-y-8"
            >
              <input
                type="hidden"
                name="_captcha"
                value="false"
                className="hidden"
              ></input>
              <input
                type="hidden"
                name="_next"
                value="https://bitisfoodpizza.com.br/contato/thanks"
                className="hidden"
              ></input>
              <div className="flex flex-col space-y-2">
                <label htmlFor="name">Nome:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="border-black border rounded-2xl w-full p-mobile"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="border-black border rounded-2xl w-full p-mobile"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="phone">Número para contato:</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  className="border-black border rounded-2xl w-full p-mobile"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="msg">Deixe uma mensagem:</label>
                <textarea
                  name="msg"
                  id="msg"
                  rows={10}
                  className="border-black border rounded-2xl w-full p-mobile min-h-20 max-h-60"
                />
              </div>
              <div className="flex flex-col mt-8 space-y-8 md:space-y-0 md:flex-row w-full justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="border-2 border-yellow-300 rounded-full size-12 flex items-center justify-center">
                    <FaExclamation className="size-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Importante:</p>
                    <p>Preencha todos os dados.</p>
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-secondary py-4 px-20 rounded-xl hover:bg-secondaryHover hover:scale-100 duration-75 text-center text-white w-full md:w-auto"
                >
                  Enviar
                </button>
              </div>
            </form>
            <div className="py-10">
              <div className="border-t border-black" />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
