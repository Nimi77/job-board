import { IoIosList } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import "./Hero.css";

const HeroText = () => {
  return (
    <div className="hero-body" id="main">
      <div className="hb-container font-Poppins mw mx-auto ">
        <div className="left-hb flex flex-col">
          {/* the Hero Text */}
          <div className="lhb-text">
            <h2 className="text-4xl font-semibold">
              Find a job that suit your interest and skills
            </h2>
            <p className="text-sm font-Inter py-3">
              Welcome to JobBoard, your go-to platform for finding the perfect
              job oppourtunities tailored to your skills and aspirations.{" "}
              <slot>
                Whether a seasoned professional, discover your next career move
                with JobBoard where your future begins.
              </slot>
            </p>
          </div>
          {/* The Form Input */}
          <div className="lhb-input bg-white shadow-md rounded-md z-10">
            <div className="flex items-center justify-center space-x-2">
              <IoIosList className="input-logo text-gray-400" />
              <input
                type="text"
                placeholder="Job Title"
                className="border-none focus:ring-0 placeholder-gray-400 text-gray-600 focus:outline-none"
              />
            </div>
            <div className="border-l h-6 border-gray-300 mr-4"></div>
            <div className="flex items-center space-x-2">
              <IoLocationOutline className="input-logo text-gray-400" />
              <input
                type="text"
                placeholder="Location"
                className="border-none focus:ring-0 placeholder-gray-400 text-gray-600 focus:outline-none"
              />
            </div>
            <button className="bg-activebtn text-black h-full search-btn">
              Search
            </button>
          </div>
          {/* Get Started button- visible in mobile screen */}
          <div className="flex items-center justify-center mt-3">
            <button className="action-btn px-6 py-3 rounded-full text-sm bg-activebtn text-black">
              Get Started
            </button>
          </div>
        </div>
        <div className="right-hb">
          <div className="rhb-container relative flex justify-center items-center">
            <div className="relative">
              {/* Background pattern */}
              <div className="pattern-container absolute inset-0 transform -translate-x-5">
                <div className="bg-pattern h-full w-full"></div>
              </div>
              <img
                src="../hImg.jpg"
                className="relative shadow-lg translate-y-5"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroText;
