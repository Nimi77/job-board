import "./Hero.css";

const HeroText = () => {
  return (
    <div className="hero-body">
      <div className="hb-container relative font-Poppins mw mx-auto flex flex-grow items-center justify-center gap-16 pt-14">
        <div className="left-hb flex flex-col">
          {/* the Hero Text */}
          <div className="lhb-text">
            <h2 className="text-4xl font-medium">
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
          <div className="lhb-input absolute bottom-10 left-0 right-0 bg-white shadow-md rounded-md flex items-center justify-between pl-4 h-14 space-x-2 z-10 text-sm transform">
            <div className="flex items-center justify-center space-x-2">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 6h18v2H3zM3 10h18v2H3zM3 14h18v2H3zM3 18h18v2H3z"></path>
              </svg>
              <input
                type="text"
                placeholder="Job Title"
                className="border-none focus:ring-0 placeholder-gray-400 text-gray-600 focus:outline-none"
              />
            </div>
            <div className="border-l h-6 border-gray-300"></div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2a10 10 0 0110 10c0 5.523-10 10-10 10S2 17.523 2 12A10 10 0 0112 2z"></path>
                <path d="M12 14a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
              <input
                type="text"
                placeholder="Location"
                className="border-none focus:ring-0 placeholder-gray-400 text-gray-600 focus:outline-none"
              />
            </div>
            <button className="bg-activebtn text-black px-8 py-2 h-full search-btn">
              Search
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
