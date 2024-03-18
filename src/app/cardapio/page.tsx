import DishesCard from "@/components/DishesCard";
import Footer from "@/components/Footer";

export default () => {
  const dishes = [
    {
      id: 0,
      img: "/burger.png",
      alt: "Hamburger",
      name: "Burgers",
      description:
        "Saboreie nosso hambúrguer clássico, um verdadeiro deleite para os amantes de comida rápida. Suculento e saboroso, é a escolha perfeita para quem busca uma refeição reconfortante e satisfatória.",
    },
    {
      id: 1,
      img: "/pizza.png",
      alt: "Pizza",
      name: "Pizzas",
      description:
        "Desfrute das nossas pizzas tradicionais, com massa perfeitamente assada e coberturas frescas. Cada fatia é uma experiência deliciosa que vai deixar você querendo mais.",
    },
    {
      id: 2,
      img: "/batata.png",
      alt: "Batata frita",
      name: "Porções Quentes",
      description:
        "Saboreie nossos petiscos quentes, perfeitos para compartilhar ou apreciar sozinho. Cada porção é uma garantia de satisfação, acompanhada de molhos especiais para complementar sua refeição ou qualquer ocasião.",
    },
    {
      id: 3,
      img: "/espeto.png",
      alt: "Espeto de carne",
      name: "Espetos",
      description:
        "Explore nossos espetos exclusivos, uma deliciosa combinação de sabores frescos e irresistíveis. Cada espeto é cuidadosamente preparado para oferecer uma experiência gastronômica única. Experimente agora e descubra o prazer em cada mordida.",
    },
    {
      id: 4,
      img: "/jantinha.png",
      alt: "Jantinha de arroz, farofa, mandioca, espeto de carne e molhos",
      name: "Jantinhas",
      description:
        "Desfrute de nossas jantinhas cuidadosamente preparadas, perfeitas para satisfazer seu apetite. Nossas jantinhas são a escolha ideal para saciar sua fome.",
    },
    {
      id: 5,
      img: "/cumbuca.png",
      alt: "Cumbuca com caldo",
      name: "Caldos",
      description:
        "Desfrute de uma combinação perfeita de sabores reconfortantes e ingredientes frescos em nossos caldos caseiros. Ideal para aquecer nos dias frios, cada colher é uma experiência de conforto e sabor.",
    },
  ];

  return (
    <main className="space-y-14">
      <div className="bg-[url('/menu.jpg')] bg-center bg-cover min-w-full">
        <div className="bg-secondary99 text-white space-y-2 desktop:py-28 px-mobile">
          <h1 className="text-center">CARDÁPIO</h1>
        </div>
      </div>
      <section className="px-mobile space-y-4 md:space-y-8 lg:space-y-16 max-w-[1024px] mx-auto">
        <h1 className="md:text-3xl">Os mais pedidos do iFood</h1>
        <h3 className="md:text-2xl font-body font-normal">
          Burgers e pizza estão entre os top 10 mais vendidos do iFood
        </h3>
        <h4 className="text-end text-sm font-light md:text-xl font-body">
          8,5 mil burguers por hora!
          <br />
          70 milhões de pedidos por mes!
        </h4>
      </section>

      <section>
        <div className="h-28 bg-secondary mt-8 desktop:mt-0 justify-center text-center text-white flex flex-col">
          <h1 className="font-body font-light tablet:text-xl mobile:text-base">
            UMA VARIEDADE DE
          </h1>
          <h1 className="font-body tablet:text-3xl mobile:text-2xl">
            DELÍCIAS
          </h1>
        </div>

        <div className="px-mobile flex justify-center flex-wrap lg:max-w-[1000px] gap-4 lg:mx-auto py-10 md:py-20">
          {dishes.map((item) => (
            <div key={item.id}>
              <DishesCard
                bg={item.id % 2 === 0 ? "bg-primary" : "bg-secondary"}
                txt={item.id % 2 === 0 ? "" : "text-white"}
                img={item.img}
                alt={item.alt}
                name={item.name}
                divider={item.id % 2 == 0 ? "border-black" : "border-white"}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};
