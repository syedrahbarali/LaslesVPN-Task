import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <div className="w-[70%] xs:h-[100vh] 2xl:h-[70vh] m-auto flex flex-wrap-reverse xs:justify-center 2xl:justify-between items-center">
      {/* Left part */}
      <div className="w-[500px]  grid grid-cols-1 content-start gap-8">
        {/* Logo */}
        <img src="/images/Logo.svg" className="py-5 xs:m-auto xl:m-0" />
        <p className="text-center text-sm md:text-base w-[90%] xl:text-start">
          LaslesVPN is a private virtual network that has unique features and
          has high security.
        </p>

        {/* Social Icons & Copyright */}
        <div className="w-full h-[100px] grid grid-cols-1 gap-5">
          <div className="flex gap-5 justify-center xl:justify-start">
            <button className="w-[40px]  h-[40px] flex justify-center items-center rounded-full shadow-carouselShadow shadow-gray-300">
              <FaFacebookF className="text-laslesOrange text-lg" />
            </button>
            <button className="w-[40px]  h-[40px] flex justify-center items-center rounded-full shadow-carouselShadow shadow-gray-300">
              <FaXTwitter className="text-laslesOrange text-lg" />
            </button>
            <button className="w-[40px]  h-[40px] flex justify-center items-center rounded-full shadow-carouselShadow shadow-gray-300">
              <BsInstagram className="text-laslesOrange text-lg" />
            </button>
          </div>

          {/* Copyright */}
          <p className="text-slate-400 text-center">
            ©2020Lasles<span className="font-medium">VPN</span>
          </p>
        </div>
      </div>

      {/* Right part */}
      <div className="w-[500px]  flex justify-between gap-10">
        <div>
          <h3 className="font-semibold xs:text-base lg:text-lg py-5">Product</h3>
          <ul className="text-slate-500 grid grid-cols-1 text-sm lg:text-base gap-3">
            <li>Download</li>
            <li>Pricing</li>
            <li>Locations</li>
            <li>Server</li>
            <li>Countries</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold xs:text-base lg:text-lg py-5">Engage</h3>
          <ul className="text-slate-500 grid grid-cols-1 text-sm lg:text-base gap-3">
            <li>LaslesVPN ?</li>
            <li>FAQ</li>
            <li>Tutorials</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold xs:text-base lg:text-lg py-5">Earn Money</h3>
          <ul className="text-slate-500 grid grid-cols-1 text-sm lg:text-base gap-3">
            <li>Affiliate</li>
            <li>Become Partner</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
