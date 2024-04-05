import { useRef, useState } from "react";
import { BsCheck } from "react-icons/bs";
import "./PricingCards.css";
import { RiArrowLeftCircleFill, RiArrowRightCircleFill } from "react-icons/ri";

const plans = [
  {
    name: "Free Plan",
    features: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
    ],
    price: "Free",
  },
  {
    name: "Standard Plan",
    features: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
    ],
    price: "$9",
  },
  {
    name: "Permium Plan",
    features: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
      "Get New Features",
    ],
    price: "$12",
  },
];

function PricingCards() {
  let [isClicked, setIsClicked] = useState(1);
  let pricingContainer = useRef(null);

  const handleClick = (direction) => {
    if (direction === "left") {
      if (isClicked > 0) {
        pricingContainer.current.scrollLeft =
          pricingContainer.current.offsetWidth + 500;
        setIsClicked(isClicked - 1);
      }
    } else {
      if (isClicked < 2) {
        pricingContainer.current.scrollLeft =
          pricingContainer.current.offsetWidth - 500;
        setIsClicked(isClicked + 1);
      }
    }
  };

  return (
    <div className="xs:w-[85vw] xl:w-[90vw] relative m-auto">
      <button
        onClick={() => handleClick("left")}
        className={`xl:hidden absolute left-10 top-1/2 translate-y-1/2 text-5xl text-laslesOrange`}
      >
        <RiArrowLeftCircleFill />
      </button>
      <button
        onClick={() => handleClick("right")}
        className={`xl:hidden absolute right-10 top-1/2 translate-y-1/2 text-5xl text-laslesOrange`}
      >
        <RiArrowRightCircleFill />
      </button>

      <div
        ref={pricingContainer}
        className="pricing_container flex mx-[10vw] justify-center  xs:overflow-x-auto xl:overflow-x-visible gap-4 m-auto"
      >
        <div className=" justify-center flex gap-4 xs:mx-10 xl:m-0 m-auto ">
          {plans.map(({ name, features, price }, index) => (
            <div
              onClick={() => setIsClicked(index)}
              key={index}
              className={`xs:w-[300px] xl:w-[280px] xs:h-[500px] lg:h-[700px] grid grid-cols-1 content-evenly place-items-center  border-2 border-solid rounded-xl ${
                isClicked === index &&
                "border-laslesOrange shadow-carouselShadow shadow-gray-300"
              }`}
            >
              {/* Image */}
              <div className=" grid grid-cols-1 gap-5">
                <img
                  src="/images/Illustration_Standard.svg"
                  className="w-[80%] m-auto"
                />
                <h3 className="text-center text-xl font-medium">{name}</h3>
              </div>

              {/* Features */}
              <ul className="xs:h-[170px] lg:h-[250px]">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex text-sm lg:text-base xs:py-1 lg:py-2 gap-4"
                  >
                    <BsCheck className="text-green-600 text-xl" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="grid grid-cols-1 xs:gap-3 lg:gap-5">
                <p className="xs:text-xl lg:text-2xl font-medium text-center">
                  {price}{" "}
                  <span className="text-slate-400">
                    {price !== "Free" && "/mo"}
                  </span>
                </p>
                <button
                  className={`xs:w-[150px] xs:h-[40px] lg:w-[200px] lg:h-[45px] rounded-full border-2 border-solid border-laslesOrange font-medium ${
                    isClicked === index
                      ? "bg-laslesOrange text-white"
                      : "bg-white text-laslesOrange"
                  }`}
                >
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricingCards;
