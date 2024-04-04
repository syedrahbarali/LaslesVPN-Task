import { BsCheck } from "react-icons/bs";
import "./PricingCard.css";
import { useState } from "react";

const PricingCards = () => {
  let [isClicked, setIsClicked] = useState(2);
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

  return (
    <div className="flex xs:w-[85vw] md:w-[70vw] gap-7 h-[780px]">
      {plans.map(({ name, features, price }, index) => (
        <div
          onClick={() => setIsClicked(index)}
          key={index}
          className={`w-[calc(100%/3)]  grid place-items-center border-2 rounded-xl border-solid border-slate-300 ${
            isClicked === index && "active"
          } `}
        >
          <div>
            <div className="flex flex-col gap-5 justify-between text-center">
              <div className="grid gap-10">
                <img
                  src="/images/Illustration_Standard.svg"
                  className="w-10/12 m-auto"
                />
                <h3 className="text-xl font-semibold">{name}</h3>
              </div>
              <ul className="h-[260px]">
                {features.map((feature, index) => (
                  <li key={index} className="flex py-2 gap-4 text-slate-600">
                    <BsCheck className="text-green-600 text-xl" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center grid gap-5">
              <p className="text-2xl font-bold">
                {price}
                <span className="font-normal text-slate-500">
                  {price != "Free" && "/mo"}
                </span>
              </p>
              <button
                className={`w-[200px] h-[45px] rounded-full font-semibold border-2 border-laslesOrange text-white   ${
                  isClicked === index
                    ? "bg-laslesOrange shadow-lightShadow"
                    : "text-laslesOrange"
                }`}
              >
                Select
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PricingCards;
