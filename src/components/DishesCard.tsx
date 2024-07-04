type dishesTypes = {
  bg: string;
  txt: string;
  img: string;
  alt: string;
  name: string;
  description: string;
  divider: string;
};

export default ({
  bg,
  txt,
  img,
  alt,
  name,
  description,
  divider,
}: dishesTypes) => {
  return (
    <div className="w-[260px] shadow-lg rounded-b-lg">
      <div className="bg-[url('/background.jpg')] size-[260px] flex items-center justify-center p-8 bg-center rounded-t-lg bg-cover">
        <img src={img} alt={alt} />
      </div>
      <div className={`px-4 space-y-6 py-6 rounded-b-lg ${bg} ${txt}`}>
        <p className={`text-2xl font-bold border-b ${divider} pb-6`}>{name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
