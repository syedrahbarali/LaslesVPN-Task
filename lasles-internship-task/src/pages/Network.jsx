const Network = () => {
  return (
    <div className="xs:w-[85vw] md:w-[70vw] grid gap-20 m-auto">
      <div className=" grid gap-10 place-items-center text-center w-full">
        <h2 className="xs:w-[75%] md:w-[35%] xs:text-2xl lg:text-4xl font-semibold">
          Huge Global Network of Fast VPN
        </h2>
        <p className="md:w-[50%] text-sm md:text-base text-slate-600">
          See <span className="font-semibold">LaslesVPN</span> everywhere to
          make it easier for you when you move locations.
        </p>
      </div>
      <div className="w-full">
        <img src="/images/Huge Global.png" className="m-auto w-[100%]" />
        <img src="/images/Sponsored.png" className="w-[100%]" />
      </div>
    </div>
  );
};

export default Network;
