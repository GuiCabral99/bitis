type dishesTypes = {
  key: number;
  img: string;
  alt: string;
  name: string;
  description: string;
};

export default ({ key, img, alt, name, description }: dishesTypes) => {
  return (
    <div key={key} className="md:w-[40%] pb-4">
      <img src={img} alt={alt} />
      <div className="px-4 bg-black text-white space-y-6 py-6">
        <p className="text-2xl font-bold border-b pb-6">{name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
