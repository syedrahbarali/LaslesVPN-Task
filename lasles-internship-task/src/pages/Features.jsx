import { BiSolidCheckCircle } from "react-icons/bi";

const Features = () => {
  return (
    <div className="w-[70vw] h-[85vh]  m-auto grid items-center justify-center shadow-cardShadow shadow-slate-300">
      <div className="flex md:flex-nowrap xs:flex-wrap gap-10 w-full items-center m-auto">
        <div className="c md:w-1/2">
          <img src="/images/Illustration 2.png" className="" />
        </div>

        <div className="w-1/2 grid gap-6 text-slate-600">
          <h2 className="text-4xl w-[85%] leading-normal font-medium text-black">
            We Provide Many Features You Can Use
          </h2>
          <p>
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </p>
          <ul className="grid gap-4">
            {[
              "Powerfull online protection.",
              "Internet without borders.",
              "Supercharged VPN",
              "No specific time limits.",
            ].map((text) => (
              <li className="flex items-center gap-5">
                <BiSolidCheckCircle className="text-green-500" /> {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
