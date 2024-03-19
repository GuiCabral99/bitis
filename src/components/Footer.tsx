import Link from "next/link";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

export default () => {
  return (
    <footer className="space-y-10 py-6 md:space-y-20">
      <div className="flex justify-center items-center space-x-10 md:space-x-20">
        <Link
          href="https://api.whatsapp.com/send?phone=5517981733913"
          target="_blank"
        >
          <FaWhatsapp className="size-8 md:size-10 hover:text-secondaryHover hover:scale-110 duration-75" />
        </Link>
        <Link href="https://www.facebook.com/bitisfoodpizza" target="_blank">
          <FaFacebookF className="size-8 md:size-10 hover:text-secondaryHover hover:scale-110 duration-75" />
        </Link>
        <Link href="https://www.instagram.com/bitisfoodpizza/" target="_blank">
          <FaInstagram className="size-8 md:size-10 hover:text-secondaryHover hover:scale-110 duration-75" />
        </Link>
      </div>
      <div className="text-sm font-light text-center md:text-xl">
        <h4>Bitis Food Pizza &copy; Todos os direitos reservados.</h4>
        <Link href="https://uxstudios.com.br" target="_blank">
          <div className="flex justify-center items-center space-x-2">
            <h4>Desenvolvido por</h4>
            <h4 className="underline text-zinc-black hover:scale-105 duration-75 hover:text-zinc-600">
              UX Studios
            </h4>
          </div>
        </Link>
      </div>
    </footer>
  );
};
