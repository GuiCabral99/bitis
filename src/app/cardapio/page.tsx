import DishesCard from "@/components/DishesCard";

export default () => {
  const dishes = [
    {
      id: 0,
      img: "/lanche.jpg",
      alt: "a",
      name: "Burgers",
      description:
        "Saboreie nosso hambúrguer clássico, um verdadeiro deleite para os amantes de comida rápida. Suculento e saboroso, é a escolha perfeita para quem busca uma refeição reconfortante e satisfatória.",
    },
    {
      id: 1,
      img: "/lanche.jpg",
      alt: "a",
      name: "Pizzas",
      description:
        "Desfrute das nossas pizzas tradicionais, com massa perfeitamente assada e coberturas frescas. Cada fatia é uma experiência deliciosa que vai deixar você querendo mais.",
    },
    {
      id: 2,
      img: "/lanche.jpg",
      alt: "a",
      name: "Porções Quentes",
      description:
        "Saboreie nossos petiscos quentes, perfeitos para compartilhar ou apreciar sozinho. Cada porção é uma garantia de satisfação, acompanhada de molhos especiais para complementar sua refeição ou qualquer ocasião.",
    },
    {
      id: 3,
      img: "/lanche.jpg",
      alt: "a",
      name: "Espetos",
      description:
        "Explore nossos espetos exclusivos, uma deliciosa combinação de sabores frescos e irresistíveis. Cada espeto é cuidadosamente preparado para oferecer uma experiência gastronômica única. Experimente agora e descubra o prazer em cada mordida.",
    },
    {
      id: 4,
      img: "/lanche.jpg",
      alt: "a",
      name: "Jantinhas",
      description:
        "Desfrute de nossas jantinhas cuidadosamente preparadas, perfeitas para satisfazer seu apetite. Nossas jantinhas são a escolha ideal para saciar sua fome.",
    },
    {
      id: 5,
      img: "/lanche.jpg",
      alt: "a",
      name: "Caldos",
      description:
        "Desfrute de uma combinação perfeita de sabores reconfortantes e ingredientes frescos em nossos caldos caseiros. Ideal para aquecer nos dias frios, cada colher é uma experiência de conforto e sabor.",
    },
  ];

  return (
    <main className="space-y-10">
      <div className="bg-[url('/menu.jpg')] bg-center bg-cover min-w-full">
        <div className="bg-[#D8070780] text-white space-y-2 py-10 px-mobile">
          <h1 className="text-center">CARDÁPIO</h1>
        </div>
      </div>
      <section className="px-mobile space-y-4">
        <h1 className="md:text-5xl">Os mais pedidos do iFood</h1>
        <h3 className="md:text-4xl font-normal">
          Burgers e pizza estão entre os top 10 mais vendidos do iFood
        </h3>
        <h4 className="text-end text-sm font-light md:text-3xl">
          8,5 mil burguers por hora!
          <br />
          70 milhões de pedidos por mes!
        </h4>
      </section>

      <div className="text-white bg-[#D80707] text-center -space-y-1 py-4">
        <h3 className="font-light">UMA VARIEDADE DE</h3>
        <h1>DELÍCIAS</h1>
      </div>
      <div className="px-mobile space-y-4 pb-16 md:space-y-0 md:flex-wrap md:flex md:space-x-4">
        {dishes.map((item) => (
          <DishesCard
            key={item.id}
            img={item.img}
            alt={item.alt}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </main>
  );
};
