import { Link, NavLink, Outlet } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Home = () => {
  let [isClicked, setIsClicked] = useState(false);
  let isLoggedIn = useSelector((state) => state.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (isLoggedIn) {
      toast.success("Logged out");
      dispatch(logoutStatusAction.logoutStatus());
    } else {
      navigate("/signin");
    }
  };

  return (
    <>
      <Toaster />
      <div className="xs:w-[85vw] md:w-[70vw] h-[100px] lg:h-[140px] flex items-center justify-between m-auto">
        <p onClick={() => navigate("/")}>
          <img src="./images/Logo.svg" className="cursor-pointer" />
        </p>

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
          {/* Login / Log out */}
          <Link
            to="signin"
            onClick={handleLogin}
            className="block sm:w-[60px] sm:text-sm md:text-base md:w-[70px] font-semibold"
          >
            {isLoggedIn ? "Sign out" : "Sign in"}
          </Link>

          {/* Dashboard / Sign up */}
          <button
            onClick={() =>
              isLoggedIn ? navigate("/dashboard") : navigate("/signin")
            }
            className="text-[#F53855] hover:bg-laslesOrange hover:text-white hidden md:block sm:w-[90px] sm:text-sm md:text-base md:w-[150px] h-[45px] border-2 border-[#F53855] border-solid rounded-full font-semibold"
          >
            {isLoggedIn ? "Dashboard" : "Sign up"}
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

      {/* Hamburger menu */}
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
