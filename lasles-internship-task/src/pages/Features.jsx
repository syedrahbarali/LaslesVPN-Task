import { BiSolidCheckCircle } from "react-icons/bi";

const Features = () => {
  return (
    <div className="xs:w-[85vw] md:w-[70vw] xs:h-[110vh] md:h-[130vh] xl:h-[85vh]  m-auto grid items-center justify-center shadow-cardShadow shadow-slate-300">
      <div className="flex xl:flex-nowrap xs:flex-wrap gap-10 w-full justify-center items-center m-auto">
        <div className="xl:w-1/2">
          <img src="/images/Illustration 2.png" className="xs:px-5" />
        </div>

        <div className="xs:w-[70%] lg:w-7/12 xl:w-1/2 grid gap-6 text-slate-600">
          <h2 className="xs:text-2xl lg:text-4xl w-full lg:w-[70%] leading-normal font-medium text-black">
            We Provide Many Features You Can Use
          </h2>
          <p className="xs:text-sm">
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </p>
          <ul className="grid gap-4 xs:text-sm">
            {[
              "Powerfull online protection.",
              "Internet without borders.",
              "Supercharged VPN",
              "No specific time limits.",
            ].map((text, index) => (
              <li key={index} className="flex items-center gap-5">
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
