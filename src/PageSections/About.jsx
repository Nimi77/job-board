import { TfiCup } from "react-icons/tfi";
import { PiToolbox } from "react-icons/pi";
import { MdMyLocation } from "react-icons/md";

function About() {
  return (
    <div className="about-section w-full">
      <div className="about-container flex flex-col items-center justify-center mx-auto mw font-Poppins">
        <h2 className="font-semibold text-3xl font-Lexend pb-9 text-center">
          Your Personalized Job Search Assistant
        </h2>
        <div className="card-container flex justify-around gap-8 items-center ">
          <div className="a-card first-card rounded-2xl bg-white shadow-md">
            <div className="icon flex justify-center items-center w-16 h-16 rounded-full bg-faint">
              <TfiCup size={25} color="#244034" />
            </div>
            <div className="text-center mt-6">
              <h3 className="font-semibold">Extensive Job Listing</h3>
              <p className="text-sm pt-2 ">
                Our platform features a vast array of job listings across
                various industries, ensuring that you have access.
              </p>
            </div>
          </div>
          <div className="a-card second-card text-white bg-greenbg rounded-2xl shadow-md">
            <div className="icon flex justify-center items-center w-16 h-16 rounded-full bg-white">
              <PiToolbox size={25} color="#244034" />
            </div>
            <div className="text-center mt-6">
              <h3 className="font-semibold">Personalized Recommendation</h3>
              <p className="text-sm pt-2">
                Our algorithm uses your skills and experience too recommend job
                listings that are a goood fit for you.
              </p>
            </div>
          </div>
          <div className="a-card third-card bg-white rounded-2xl shadow-md">
            <div className="icon flex justify-center items-center w-16 h-16 rounded-full bg-faint">
              <MdMyLocation size={25} color="#244034" />
            </div>
            <div className="text-center gap-1 mt-6">
              <h3 className="font-semibold">Expert Guidance</h3>
              <p className="text-sm pt-2">
                Our team of job expert is available to offer guidance and
                support throughout the job search process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
