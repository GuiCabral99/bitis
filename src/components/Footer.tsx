import Link from "next/link";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

export default () => {
  return (
    <footer>
      <Link href="/">
        <FaWhatsapp />
      </Link>
      <Link href="/">
        <FaFacebookF />
      </Link>
      <Link href="/">
        <FaInstagram />
      </Link>
      <p>Bitis Food Pizza &copy; Todos os direitos reservados.</p>
      <Link href="https://uxstudios.com.br" target="_blank">
        Desenvolvido por UX Studios
      </Link>
    </footer>
  );
};
