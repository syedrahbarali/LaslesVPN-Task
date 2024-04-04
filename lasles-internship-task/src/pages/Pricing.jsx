import PricingCards from "../components/PricingCard";

const Pricing = () => {
  return (
    <div className="xs:w-[85vw] md:w-[70vw] my-[10vh] m-auto grid items-center justify-center">
      <div className="w-full h-[20vh] text-center flex flex-col justify-around">
        <h2 className="xs:text-2xl lg:text-4xl font-semibold">
          Choose Your Plan
        </h2>
        <p className="xs:w-[85%] md:w-[50%] m-auto text-sm lg:text-base text-slate-600">
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </p>
      </div>

      <div>{/* <PricingCards /> */}</div>
    </div>
  );
};

export default Pricing;
