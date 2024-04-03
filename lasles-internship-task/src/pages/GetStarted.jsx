const GetStarted = () => {
  return (
    <>
      <div className="w-[70vw] xl:h-[55vh] grid items-center m-auto">
        <div className="w-full flex seld-ce gap-14 flex-wrap-reverse xl:flex-nowrap">
          {/* Left-part */}
          <div className="grid gap-6">
            <div className="grid gap-2">
              <h1 className="text-[1.5rem] md:text-[2.5rem] font-medium w-9/12">
                Want anything to be easy with
                <span className="font-bold"> LaslesVPN.</span>
              </h1>
              <p className="text-slate-600 w-11/12 text-sm md:text-base xl:w-full">
                Provide a network for all your needs with ease and fun using
                LaslesVPN discover interesting features from us.
              </p>
            </div>

            <div className="flex justify-center md:justify-start">
              <button className="md:w-[200px] md:h-[45px] xs:w-[150px] xs:h-[40px] xs:text-sm md:text-base text-white font-medium rounded-lg bg-laslesOrange shadow-lightShadow">
                Get Started
              </button>
            </div>
          </div>

          {/* Right-part */}
          <div className="">
            <img src="/images/Illustration 1.svg" />
          </div>
        </div>
      </div>

      {/* Data for User Experience */}
    </>
  );
};

export default GetStarted;
