import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

const Home = () => {
  let [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <div className="xs:w-[85vw] md:w-[70vw] h-[100px] lg:h-[140px] flex items-center justify-between m-auto">
        <img src="./images/Logo.svg" className="" />

        <nav className="hidden xl:flex gap-10">
          {["About", "Feature", "Pricing", "Testimonials", "Help"].map(
            (item) => {
              return (
                <div className="hover:text-gray-600" key={item}>
                  {item}
                </div>
              );
            }
          )}
        </nav>

        <div className="flex gap-5 items-center">
          <button className="hidden md:block sm:w-[50px] sm:text-sm md:text-base md:w-[70px] font-semibold">
            Sign in
          </button>
          <button className="text-[#F53855] hidden md:block sm:w-[90px] sm:text-sm md:text-base md:w-[150px] h-[45px] border-2 border-[#F53855] border-solid rounded-full font-semibold">
            Sign up
          </button>
          {isClicked ? (
            <CgClose
              onClick={() => setIsClicked(!isClicked)}
              className="xl:hidden cursor-pointer text-3xl"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setIsClicked(!isClicked)}
              className="xl:hidden cursor-pointer text-3xl"
            />
          )}
        </div>
      </div>

      <div
        className={`xs:w-[85vw] md:w-[70vw] ${
          isClicked ? "block" : "hidden"
        } m-auto text-center font-medium lg:hidden`}
      >
        {["About", "Feature", "Pricing", "Testimonials", "Help"].map((item) => {
          return (
            <div className="hover:text-gray-600 block p-3" key={`${item}`}>
              {item}
            </div>
          );
        })}
      </div>

      <Outlet />
    </>
  );
};

export default Home;
