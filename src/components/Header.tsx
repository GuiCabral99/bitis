"use client";

import { IoMenu } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default () => {
  const [tappedSidebar, setTappedSidebar] = useState<boolean>(false);
  return (
    <>
      <Sidebar isOpen={tappedSidebar} setIsOpen={setTappedSidebar} />
      <div className="bg-primary shadow-md h-20 z-10 w-full flex items-center justify-between lg:justify-center px-mobile tablet:px-tablet desktop:px-desktop fixed font-title text-black">
        <div className="hidden desktop:flex flex-1 space-x-8 text-black items-center">
          <Link href="/">
            <h2 className="hover:text-secondaryHover duration-75 hover:scale-110">
              Home
            </h2>
          </Link>
          <Link href="/cardapio">
            <h2 className="hover:text-secondaryHover duration-75 hover:scale-110">
              Cardápio
            </h2>
          </Link>
          <Link href="/franquia">
            <h2 className="hover:text-secondaryHover duration-75 hover:scale-110">
              Quero Faturar
            </h2>
          </Link>
        </div>
        <Link href={"/"}>
          <div className="pt-10 desktop:pt-16 justify-center items-center duration-75 hover:scale-110">
            <img src="logo.svg" className="w-24 desktop:w-28" />
          </div>
        </Link>
        <div className="hidden flex-1 desktop:flex justify-end items-center space-x-8">
          <Link
            href="https://api.whatsapp.com/send?phone=5517981733913"
            target="_blank"
          >
            <IoLogoWhatsapp className="size-7 hover:text-secondaryHover duration-75 hover:scale-110" />
          </Link>
          <Link href="https://www.facebook.com/bitisfoodpizza" target="_blank">
            <FaFacebookF className="size-7 hover:text-secondaryHover duration-75 hover:scale-110" />
          </Link>
          <Link
            href="https://www.instagram.com/bitisfoodpizza/"
            target="_blank"
          >
            <IoLogoInstagram className="size-7 hover:text-secondaryHover duration-75 hover:scale-110" />
          </Link>
          <Link href="/contato">
            <div
              className="bg-secondary
             px-8 py-2 flex flex-row justify-center items-center rounded-lg text-white hover:scale-110 duration-75 hover:bg-secondaryHover"
            >
              <h2>Contato</h2>
            </div>
          </Link>
        </div>
        <button onClick={() => setTappedSidebar(true)}>
          <IoMenu className="h-full size-10 desktop:hidden" />
        </button>
      </div>
      <div className="h-20" />
    </>
  );
};
