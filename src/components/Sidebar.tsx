import Link from "next/link";
import { useState } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { IoMdContact } from "react-icons/io";
import {
  IoClose,
  IoCloseCircle,
  IoHome,
  IoLogoInstagram,
  IoLogoWhatsapp,
} from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";

export default (props: { isOpen: boolean; setIsOpen: any }) => {
  return (
    <div className="absolute desktop:hidden">
      <div
        className={`fixed top-0 right-0 h-full w-full z-50 transition-transform duration-100 flex ${
          props.isOpen
            ? "transform translate-x-0"
            : "transform translate-x-full"
        }`}
      >
        <button
          onClick={() => props.setIsOpen(false)}
          className="h-full w-1/2 bg-[#00000050]"
        />
        <div className="h-full w-2/3 bg-white">
          <button
            onClick={() => props.setIsOpen(false)}
            className="fixed p-mobile tablet:p-tablet"
          >
            <IoCloseCircle color="black" size={30} />
          </button>
          <div className="h-60 bg-primary flex flex-col justify-center items-center">
            <Link onClick={() => props.setIsOpen(false)} href={"/"}>
              <img src="/logo2.png" width={100} />
            </Link>
          </div>
          <div className="p-mobile tablet:p-tablet space-y-4 flex flex-col">
            <Link onClick={() => props.setIsOpen(false)} href={"/"}>
              <div className="flex justify-end items-center space-x-4">
                <h2 className="text-center tablet:text-2xl">Home</h2>
                <IoHome size={34} />
              </div>
            </Link>
            <Link onClick={() => props.setIsOpen(false)} href={"/"}>
              <div className="flex justify-end items-center space-x-4">
                <h2 className="text-center font-black tablet:text-2xl">
                  Cardápio
                </h2>
                <MdMenuBook size={34} />
              </div>
            </Link>
            <Link onClick={() => props.setIsOpen(false)} href={"/franquia"}>
              <div className="flex justify-end items-center space-x-4">
                <h2 className="text-center tablet:text-2xl">Quero Faturar</h2>
                <GiReceiveMoney size={34} />
              </div>
            </Link>
            <Link onClick={() => props.setIsOpen(false)} href={"/contato"}>
              <div className="flex justify-end items-center space-x-4">
                <h2 className="text-center tablet:text-2xl">Contato</h2>
                <IoMdContact size={34} />
              </div>
            </Link>
          </div>
          <div className="border-t border-black mx-4" />
          <div className="w-full flex justify-center">
            <div className="flex flex-row w-[200px] p-mobile tablet:p-tablet justify-between">
              <Link href="https://google.com">
                <IoLogoWhatsapp size={30} />
              </Link>
              <Link href="https://www.facebook.com/bitisfoodpizza">
                <FaFacebookF size={30} />
              </Link>
              <Link href="https://www.instagram.com/bitisfoodpizza/">
                <IoLogoInstagram size={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
