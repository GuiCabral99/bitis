import Link from "next/link";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

export default () => {
  return (
    <footer className="space-y-10 py-6">
      <div className="flex justify-evenly">
        <Link href="/">
          <FaWhatsapp size={24} />
        </Link>
        <Link href="/">
          <FaFacebookF size={24} />
        </Link>
        <Link href="/">
          <FaInstagram size={24} />
        </Link>
      </div>
      <div className="text-sm font-light text-center">
        <p>Bitis Food Pizza &copy; Todos os direitos reservados.</p>
        <Link href="https://uxstudios.com.br" target="_blank">
          Desenvolvido por UX Studios
        </Link>
      </div>
    </footer>
  );
};
