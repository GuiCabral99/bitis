import Link from "next/link";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

export default () => {
  return (
    <footer className="space-y-10 py-6 md:space-y-20">
      <div className="flex justify-center space-x-10 md:space-x-20">
        <Link href="/">
          <FaWhatsapp className="w-6 h-6 md:w-14 md:h-14" />
        </Link>
        <Link href="/">
          <FaFacebookF className="w-6 h-6 md:w-14 md:h-14" />
        </Link>
        <Link href="/">
          <FaInstagram className="w-6 h-6 md:w-14 md:h-14" />
        </Link>
      </div>
      <div className="text-sm font-light text-center md:text-xl">
        <h4>Bitis Food Pizza &copy; Todos os direitos reservados.</h4>
        <Link href="https://uxstudios.com.br" target="_blank">
          Desenvolvido por UX Studios
        </Link>
      </div>
    </footer>
  );
};
