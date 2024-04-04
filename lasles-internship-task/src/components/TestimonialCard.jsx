import { AiFillStar } from "react-icons/ai";

function TestimonialCard({
  image,
  location,
  comment,
  name,
  currentSlide,
  index,
}) {
  return (
    <div
      className={`xs:w-[300px] lg:w-[400px] xs:h-[180px] lg:h-[230px] p-5 ${
        currentSlide === index ? "border-red-500" : "border-slate-300"
      } rounded-lg border-2 grid gap-3 place-content-center-center`}
    >
      <div className="flex w-full xs:h-[60px] lg:h-[70px] justify-around items-center">
        <img
          src={image}
          className="xs:w-[50px] xs:h-[50px] lg:h-[70px] lg:w-[70px] rounded-full object-cover object-[center_-1px]"
        />
        <div>
          <h3 className="text-sm lg:text-base font-semibold">{name}</h3>
          <p className="text-slate-600 text-xs lg:text-sm">{location}</p>
        </div>
        <p className="text-sm lg:text-base flex items-center gap-2">
          4.5
          <AiFillStar className="text-yellow-500 text-base lg:text-xl" />
        </p>
      </div>
      <p className="h-[100px] text-xs lg:text-base">{comment}</p>
    </div>
  );
}

export default TestimonialCard;
