import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer p-[2rem] sm:p-[3rem] lg:p-[5rem] bg-blueColor rounded-[10px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[2rem] lg:gap-[8px] m-auto items-start justify-center">
      <div>
        <div className="logoDiv">
          <h1 className="logo text-[20px] sm:text-[25px] text-white pb-[1.5rem]">
            <strong className="to-blue-700">Job</strong>Search
          </h1>
        </div>
        <p className="text-white pb-[13px] opacity-70 leading-7">
          We always make our seekers and companies find the best jobs and
          employers find the best candidates.
        </p>
      </div>
      <div className="grid">
        <span className="divTitle text-[16px] sm:text-[18px] font-semibold pb-[1.5rem] text-white">
          Company
        </span>
        <ul className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            About Us
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            Features
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">News</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">FAQ</li>
        </ul>
      </div>
      <div className="grid">
        <span className="divTitle text-[16px] sm:text-[18px] font-semibold pb-[1.5rem] text-white">
          Resources
        </span>
        <ul className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-[1]">Account</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            Support Center
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            Feedback
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            Contact Us
          </li>
        </ul>
      </div>
      <div className="grid">
        <span className="divTitle text-[16px] sm:text-[18px] font-semibold pb-[1.5rem] text-white">
          Support
        </span>
        <ul className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-[1]">Events</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Promo</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">ReqDemo</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Careers</li>
        </ul>
      </div>
      <div className="grid">
        <span className="divTitle text-[16px] sm:text-[18px] font-semibold pb-[1.5rem] text-white">
          Contact Info
        </span>
        <div>
          <small className="text-[14px] text-white">
            ramiliaengineer@outlook.com
          </small>
          <div className="icons flex gap-4 py-[1rem]">
            <FaInstagram className="text-white h-[30px] w-[30px] " />
            <FaInstagram className="text-white h-[30px] w-[30px] " />
            <FaInstagram className="text-white h-[30px] w-[30px] " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
