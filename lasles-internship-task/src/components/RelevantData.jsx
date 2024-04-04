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
    <div className="xs:w-[85vw] md:w-[70vw] h-[24.9vh] shadow-cardShadow shadow-slate-200 m-auto flex justify-around">
      {datas.map((data, index) => (
        <div key={index} className="flex gap-2 md:gap-7 items-center">
          <img src={data.icon} className="xs:w-[35px] xl:w-[50px]" />
          <div className="text-sm sm:text-lg xl:text-xl">
            <h2 className="font-bold">{data.number}+</h2>
            <p className="text-slate-600 xs:text-xs">{data.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelevantData;
