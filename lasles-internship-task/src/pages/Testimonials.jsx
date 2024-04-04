import { useState } from "react";
import TestimonialCard from "../components/TestimonialCard";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const reviews = [
  {
    image: "/images/p-1.jpg",
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    comment:
      "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
  },
  {
    image: "/images/p-2.jpg",
    name: "Yessica Christy",
    location: "Shanxi, China",
    comment:
      "“I like it because I like to travel far and still can connect with high speed.”.",
  },
  {
    image: "/images/p-3.jpg",
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    comment:
      "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
  },
  {
    image: "/images/p-3.jpg",
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    comment:
      "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
  },
  {
    image: "/images/p-3.jpg",
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    comment:
      "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
  },
  {
    image: "/images/p-3.jpg",
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    comment:
      "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
  },
  // { image: "", location: "", comment: "" },
];

function Testimonials() {
  let [currentSlide, setCurrentSlide] = useState(0);
  const handleClick = (direction) => {
    let slider = document.querySelector("#cards");
    let width = slider.clientWidth;
    setCurrentSlide(width + currentSlide);

    if (direction === "left") {
      currentSlide = width + currentSlide;
      console.log(currentSlide);
    } else {
      currentSlide = width - currentSlide;
      console.log(currentSlide);
    }
  };

  return (
    <div className="xs:w-[85vw] md:w-[70vw] h-[calc(25vh+320px)] overflow-hidden m-auto relative">
      <div className="w-full h-[20vh]  grid place-items-center">
        <h2 className="xs:w-[75%] md:w-[50%] text-center xs:text-2xl lg:text-4xl font-semibold">
          Trusted by Thousands of Happy Customer
        </h2>
        <p className="xs:w-[85%] md:w-[50%] text-center m-auto text-sm lg:text-base text-slate-600">
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
      </div>

      <div className="h-[300px] flex items-end overflow-hidden">
        {/* Testimonial Cards */}
        <div
          id="cards"
          className="w-fit bg-red-700 left-0 top-[60%] translate-y-[-60%] flex gap-5 absolute"
        >
          {reviews.map((review, index) => (
            <TestimonialCard key={index} {...review} />
          ))}
        </div>

        <div className="w-full flex justify-between">
          {/* Identification Circles */}
          <div className="flex gap-2">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`w-[15px] h-[15px] rounded-full bg-gray-400`}
              ></div>
            ))}
          </div>

          {/* buttons */}
          <div className="flex gap-5">
            <button
              onClick={() => handleClick("left")}
              className="w-[40px] h-[40px] grid place-items-center text-white font-semibold rounded-full bg-laslesOrange"
            >
              <AiOutlineArrowLeft />
            </button>
            <button
              onClick={() => handleClick("right")}
              className="w-[40px] h-[40px] grid place-items-center text-white font-semibold rounded-full bg-laslesOrange"
            >
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
