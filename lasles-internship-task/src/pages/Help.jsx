function Help() {
  return (
    <div className="flex lg:justify-between items-center xs:justify-center xs:flex-wrap lg:flex-nowrap shadow-cardShadow shadow-gray-300 gap-8 px-10 xs:w-[90vw] h-[35vh] lg:w-[70vw]  m-auto">
      <div className="grid grid-cols-1 place-items-center gap-5">
        <h2 className="xs:text-2xl lg:text-4xl lg:w-[55%] xs:text-center lg:text-start xs:w-[70%] font-semibold">
          Subscribe Now for Get Special Features!
        </h2>
        <p className="text-sm lg:text-base xs:w-[75%] md:w-[55%] xs:text-center lg:text-start ">
          Let's subscribe with us and find the fun.
        </p>
      </div>
      <button className="lg:w-[200px] lg:h-[45px] xs:w-[120px] xs:h-[40px] xs:text-xs lg:text-base text-white xs:px-2 font-medium rounded-lg bg-laslesOrange shadow-lightShadow">
        Subscribe Now
      </button>
    </div>
  );
}

export default Help;
