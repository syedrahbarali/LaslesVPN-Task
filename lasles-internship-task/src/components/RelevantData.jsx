const datas = [
  {
    icon: "/images/user.png",
    name: "Users",
    number: 90,
  },
  {
    icon: "/images/location.png",
    name: "Locations",
    number: 30,
  },
  {
    icon: "/images/Server.png",
    name: "Servers",
    number: 50,
  },
];

const RelevantData = () => {
  return (
    <div className="w-[70vw] lg:h-[24.9vh] xs:h-[15vh] shadow-cardShadow shadow-slate-200 m-auto flex justify-around">
      {datas.map((data, index) => (
        <div className="flex gap-2 md:gap-7 items-center">
          <img src={data.icon} className="xs:w-[35px] xl:w-[50px]" />
          <div className="text-sm sm:text-lg xl:text-xl">
            <h1 className="font-bold">{data.number}+</h1>
            <p className="text-slate-600">{data.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelevantData;
