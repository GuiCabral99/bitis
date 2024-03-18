type dishesTypes = {
  bg: string;
  txt: string;
  img: string;
  alt: string;
  name: string;
  description: string;
};

export default ({ bg, txt, img, alt, name, description }: dishesTypes) => {
  return (
    <div className="max-w-[320px] w-[260px] shadow-lg">
      <div className="bg-[url('/background.jpg')] p-10 bg-center bg-cover">
        <img src={img} alt={alt} />
      </div>
      <div className={`px-4 space-y-6 py-6 ${bg} ${txt}`}>
        <p className="text-2xl font-bold border-b border-black pb-6">{name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
