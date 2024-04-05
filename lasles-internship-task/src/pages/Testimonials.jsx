import TestimonialCard from "../components/TestimonialCard";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Testimonials.css";
import { useEffect, useRef, useState } from "react";

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

function NewTestimonals() {
  const testimonialCardContainer = useRef(null);
  let [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      testimonialCardContainer.current.scrollLeft -=
        currentSlide < 2 ? testimonialCardContainer.current.offsetWidth : 400;
      if (currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    } else {
      testimonialCardContainer.current.scrollLeft += 400;
      if (currentSlide < reviews.length - 1) {
        setCurrentSlide(currentSlide + 1);
      }
    }
  };

  return (
    <div className="w-[70%] h-[100vh] mb-10 grid grid-cols-1 content-around m-auto">
      <div className="xs:w-[100%] md:w-[60%] grid gap-8 m-auto text-center">
        <h2 className="md:w-[75%] m-auto xs:text-2xl lg:text-4xl font-semibold">
          Trusted by Thousands of Happy Customer
        </h2>
        <p className="lg:w-[90%] text-sm lg:text-base text-slate-600">
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
      </div>

      {/* Testimonials Cards Collection */}
      <div
        ref={testimonialCardContainer}
        className="testimonial_container w-[100vw] grid grid-cols-1 content-between xs:h-[220px] lg:h-[250px] m-auto scroll-smooth overflow-x-auto"
      >
        <div className="flex gap-5 w-fit ">
          {reviews.map((review, index) => (
            <TestimonialCard
              key={index}
              {...review}
              currentSlide={currentSlide}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`h-[10px]  rounded-full ${
                currentSlide === index
                  ? "bg-laslesOrange w-[40px]"
                  : "bg-slate-300 w-[10px]"
              }`}
            ></div>
          ))}
        </div>

        <div className="flex gap-5">
          <button onClick={() => handleClick("left")}>
            <BsArrowLeftCircleFill className="text-laslesOrange text-4xl" />
          </button>
          <button onClick={() => handleClick("right")}>
            <BsArrowRightCircleFill className="text-laslesOrange text-4xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewTestimonals;
