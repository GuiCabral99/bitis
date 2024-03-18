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
    <div className="max-w-[320px] w-[260px] shadow-lg">
      <div className="bg-[url('/background.jpg')] p-0 bg-center rounded-t-lg bg-cover">
        <img src={img} alt={alt} />
      </div>
      <div className={`px-4 space-y-6 py-6 ${bg} ${txt} rounded-b-lg`}>
        <p className={`text-2xl font-bold border-b ${divider} pb-6`}>{name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
