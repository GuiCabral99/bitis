import { IoMenu } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import Link from "next/link";

export default () => {
  return (
    <div className="bg-primary h-20 w-full flex items-center justify-between lg:justify-center px-mobile tablet:px-tablet desktop:px-desktop fixed font-title text-black">
      <div className="hidden desktop:flex flex-1 space-x-8 text-black items-center">
        <Link href="#">
          <h2>Home</h2>
        </Link>
        <Link href="#">
          <h2>Cardápio</h2>
        </Link>
        <Link href="#">
          <h2>Quero Faturar</h2>
        </Link>
      </div>
      <div className="pt-10 desktop:pt-16 justify-center items-center">
        <img src="logo.svg" className="w-24 desktop:w-28" />
      </div>
      <div className="hidden flex-1 desktop:flex justify-end items-center space-x-8">
        <Link href="#">
          <IoLogoWhatsapp className="size-5" />
        </Link>
        <Link href="#">
          <FaFacebookF className="size-5" />
        </Link>
        <Link href="#">
          <IoLogoInstagram className="size-5" />
        </Link>
        <Link href="#">
          <div
            className="bg-secondary
        px-10 py-2 rounded-lg text-white hover:scale-110 duration-75
        hover:bg-[#b30707]"
          >
            <h2>Contato</h2>
          </div>
        </Link>
      </div>
      <IoMenu className="h-full size-10 desktop:hidden" />
    </div>
  );
};
