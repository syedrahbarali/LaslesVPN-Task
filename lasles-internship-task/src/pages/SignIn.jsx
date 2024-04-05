import { useRef, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginStatusAction } from "../store/slice/loginStatusSlice";

function SignIn() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.login);
  const dispatch = useDispatch();

  let [showPassword, setShowPassword] = useState(false);
  let userEmail = useRef();
  let userPassword = useRef();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const login = (event) => {
    if (userEmail.current.value && userPassword.current.value) {
      event.preventDefault();
      toast.success("Login Successful");
      navigate("/dashboard");
      dispatch(loginStatusAction.loginStatus());
    }
  };

  return (
    <div className="w-[70%] m-auto">
      <h1 className="xs:text-2xl lg:text-3xl font-semibold text-center">
        Login to Your{" "}
        <span className="text-laslesOrange font-semibold">VPN</span> Account
      </h1>

      <div className="max-w-[500px] m-auto">
        {/* Welcome back message */}
        <div className="py-8">
          <h2 className="font-semibold xs:text-xl lg:text-2xl">
            Welcome Back!
          </h2>
          <p className="italic text-sm text-laslesOrange">
            Secure Access Anywhere, Anytime
          </p>
        </div>

        {/* Login Form */}
        <form action="" className="max-w-[500px] grid grid-cols-1 gap-5 m-auto">
          {/* Email field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <input
              ref={userEmail}
              type="email"
              id="email"
              className="h-12 w-full border-2 rounded-md border-b-[5px] border-gray-300 p-5"
              placeholder="Enter Email"
              required
            />
          </div>

          {/* Password field */}
          <div className=" flex flex-col">
            <label htmlFor="password" className="font-medium">
              Password
            </label>
            <div className="relative w-full">
              <input
                ref={userPassword}
                type={showPassword ? "text" : "password"}
                id="password"
                className="h-12 w-full  border-2 rounded-md border-b-[5px] border-gray-300 p-5"
                placeholder="Enter Password"
                required
              />
              {showPassword ? (
                <AiOutlineEye
                  onClick={toggleShowPassword}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl cursor-pointer"
                />
              ) : (
                <AiOutlineEyeInvisible
                  onClick={toggleShowPassword}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl cursor-pointer"
                />
              )}
            </div>
            <p className="text-blue-700 text-end cursor-pointer underline text-sm font-medium w-full">
              Need Help?
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {/* Sign in button */}
            <button
              onClick={login}
              className="w-full h-12 bg-laslesOrange text-white font-medium rounded-lg"
            >
              Sign in
            </button>

            {/* OR divider */}
            <div className="flex justify-center items-center gap-3 select-none text-gray-400">
              <hr className="h-[2px] bg-gray-400 w-full" />
              OR <hr className="h-[2px] bg-gray-400 w-full" />
            </div>

            {/* Login with */}
            <div className="w-[50%] flex gap-5 justify-around m-auto text-3xl">
              <FaFacebookF className="text-blue-600 cursor-pointer" />
              <FcGoogle className=" cursor-pointer" />
              <FaXTwitter className=" cursor-pointer" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
