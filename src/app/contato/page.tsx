"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

export default () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });
  return (
    <>
      <div className="bg-zinc-100">
        <div className="bg-[url('/local4.jpeg')] bg-cover bg-center min-w-full">
          <div className="bg-secondary99 flex justify-center py-14 px-mobile tablet:py-16 tablet:px-tablet desktop:p-desktop">
            <div className="w-[800px]">
              <div className="space-y-6 desktop:space-y-10 desktop:mt-6 flex flex-col justify-center items-center">
                <div className="w-[250px]">
                  <h1 className="text-center text-white">
                    Vem falar com a gente
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
                      className="bg-primary2 py-2 px-20 rounded-xl hover:bg-primary
                    hover:scale-105 duration-75"
                    >
                      <h2>Ver no mapa</h2>
                    </div>
                  </Link>
                  <div className="flex flex-row space-x-4 justify-center items-center">
                    <FaPhoneAlt />
                    <p>+55 17 98173-3913</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full justify-center flex -mt-8 ">
          <div className="w-[800px] bg-white rounded-t-3xl p-tablet desktop:p-desktop space-y-8 desktop:space-y-12">
            <div className="flex flex-col space-y-2">
              <h2 className="text-[19px]">Nome:</h2>
              <input
                type="text"
                className="border-black border rounded-2xl w-full p-mobile"
                value={inputs.name}
                onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <h2 className="text-[19px]">Email:</h2>
              <input
                type="text"
                className="border-black border rounded-2xl w-full p-mobile"
                value={inputs.email}
                onChange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col space-y-2">
              <h2 className="text-[19px]">Número para contato:</h2>
              <input
                type="text"
                className="border-black border rounded-2xl w-full p-mobile"
                value={inputs.contactNumber}
                onChange={(e) =>
                  setInputs({ ...inputs, contactNumber: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col space-y-2">
              <h2 className="text-[19px]">Deixe uma mensagem:</h2>
              <textarea
                rows={10}
                className="border-black border rounded-2xl w-full p-mobile min-h-20 max-h-60"
                value={inputs.message}
                onChange={(e) =>
                  setInputs({ ...inputs, message: e.target.value })
                }
              />
            </div>
            <Link
              target="_blank"
              href={`https://wa.me/5517981733913?text=Nome: ${inputs.name}%0AEmail: ${inputs.email}%0ANúmero para contato: ${inputs.contactNumber}%0A%0A${inputs.message}`}
            >
              <div className="bg-secondary py-4 px-20 rounded-xl hover:bg-secondaryHover hover:scale-100 duration-75 mt-8">
                <h2 className="text-center text-white text-[19px]">Enviar</h2>
              </div>
            </Link>
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
