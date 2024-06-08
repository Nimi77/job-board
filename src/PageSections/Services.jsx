import { FaCalculator } from "react-icons/fa6";
import { PiToolbox } from "react-icons/pi";
import { SiMaterialdesignicons } from "react-icons/si";
import { TfiCup } from "react-icons/tfi";

function Services() {
  return (
    <div className="categories-section" id="services">
      <div className="c-container mx-auto mw">
        <div className="left-container flex flex-col gap-4">
          <div role="heading">
            <h2 className="text-3xl font-semibold md:w-72 font-Lexend">
              Job List Across Various Categories
            </h2>
          </div>
          <div className="job-categories grid grid-cols-1 sm:grid-cols-2 gap-6 font-Poppins py-4">
            <div className="marketing flex flex-col gap-2 justify-center">
              <div role="heading" className="flex items-center gap-2">
                <span className="flex justify-center items-center w-8 h-8 rounded-full bg-faint">
                  <PiToolbox size={17}/>
                </span>
                <h3>Marketing</h3>
              </div>
              <p className="text-sm">
                We offer a wide range of job listings in the business category,
                including sales.
              </p>
            </div>
            <div className="development flex flex-col gap-2 justify-center">
              <div role="heading " className="flex items-center gap-2">
                <span className="flex justify-center items-center w-8 h-8 rounded-full bg-faint">
                  <TfiCup />
                </span>
                <h3>Development</h3>
              </div>
              <p className="text-sm">
                Get job listing on your career in software development or web
                development.
              </p>
            </div>

            <div className="creative flex flex-col gap-2 justify-center">
              <div role="heading" className="flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-faint">
                  <SiMaterialdesignicons />
                </span>
                <h3>Creative</h3>
              </div>
              <p className="text-sm">
                Get job listing on your career in software development or web
                development.
              </p>
            </div>
            <div className="finance flex flex-col gap-2 justify-center">
              <div role="heading " className="flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-faint">
                  <FaCalculator />
                </span>
                <h3>Finance</h3>
              </div>
              <p className="text-sm">
                Get job listing on your career in software development or web
                development.
              </p>
            </div>
          </div>
        </div>
        <div className="right-container w-[80%] relative">
        <div className="absolute left-6 bottom-9  bg-blue-100  mix-blend-multiply rounded-lg w-[400px] h-52 z-10"></div>
        <div className="relative left-16 top-2 inset-0 bg-[#ffd0ad] rounded-lg w-[460px] h-56 z-20"></div>
          <img
            src="../Lady.jpg"
            alt="A lady searching job list categories on her pc"
            className="z-30 category-img rounded-lg absolute left-24 bottom-[-34px]"
          ></img>
         
        </div>
      </div>
    </div>
  );
}
export default Services;
