import { useState, useEffect  } from "react";
import "../App.css";
import { FaCheckCircle } from "react-icons/fa";

const guidelines = [
  {
    id: 1,
    title: "Create a Profile",
    content:
      "Sign up for an account and create a profile that highlights your skills and experience.",
    details: [
      "Upload professional photo: Ensure your profile picture is clear, well-lit and represents you professionally.",
      "Write a concise bio: Include key information about yourself, such as your background, skills and interests.",
      "Keep information up-to-date: Regularly update your profile with new achievements, skills or experiences.",
    ],
    image: "../Guideline1.jpg",
  },
  {
    id: 2,
    title: "Search for Jobs",
    content:
      "Use our search functions to find job listings that match your criteria.",
    details: [
      "Upload professional photo: Ensure your profile picture is clear, well-lit and represents you professionally.",
      "Write a concise bio: Include key information about yourself, such as your background, skills and interests.",
      "Keep information up-to-date: Regularly update your profile with new achievements, skills or experiences.",
    ],
    image: "../Guideline2.jpg",
  },
  {
    id: 3,
    title: "Apply for Jobs",
    content: "Submit your application directly through our platform.",
    details: [
      "Set up your CV: Prepare a tailored resume and cover letter for each application for every job position.",
      "Skills & Experience: Highlight your skills and experiences that match the job requirements for chances. ",
      "Consistency: Follow up on your applications to show interest and enthusiasm, work on this through emails.",
    ],
    image: "../Guideline3.jpg",
  },
  {
    id: 4,
    title: "Get Hired",
    content:
      "Our team of job experts will guide you through the interview process.",
    details: [
      "Interviews: Prepare for interviews by practicing common questions and knowing possible questions.",
      "Time Conscious: Dress professionally and arrive on time for your interview even if the interview is virtual.",
      "Regards: Follow up with a thank you note to express your appreciation and the oppourtunity.Good Luck",
    ],
    image: "../Guideline4.jpg",
  },
];

function AboutUs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % guidelines.length);
    }, 5000); // Change content every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentGuideline = guidelines[currentIndex];

  return (
    <div className="about-section" id="about">
      <div className="about-container font-Poppins mx-auto mw flex flex-col justify-center">
        {/* guidelines heading */}
        <div
          role="heading"
          className="top flex items-center justify-item-center font-Lexend"
        >
          <h2 className="discover text-3xl font-semibold">
            Discover Endless Career Oppourtunities
          </h2>
          <p className="w-86 text-ash">
            This platform is created for you to find the perfect job
            oppourtunities<span>.</span> <span className="text-md">tailored to your skills and aspirations discover your
            next career move in JobBoard.</span>
          </p>
        </div>

        {/* guidelines content */}
        <div className="guidelines-content mb-20">
          <div className="gc-container flex flex-col items-center justify-center bg-lightBlue rounded-2xl">
            {/* content */}
            <div className="gc-content flex items-center">
              <img
                src={currentGuideline.image}
                alt={currentGuideline.title}
                className="slide-img"
              />
              <div className="slide-content">
                <span className="font-medium text-lg">
                  {String(currentGuideline.id).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold ">
                    {currentGuideline.title}
                  </h3>
                  <p>{currentGuideline.content}</p>
                  <div className="border w-full border-gray-300 gc-line"></div>
                </div>
                <ul className="space-y-3">
                  {currentGuideline.details.map((detail, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center gap-4"
                    >
                      <FaCheckCircle size={26} className="check-icon" />
                      <li className="text-ash">
                        <span className="font-semibold text-black">
                          {detail.split(":")[0]}:
                        </span>
                        {detail.split(":")[1]}
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* bottom slides */}
        <div className="guidelines-slides">
          <div className="slides-container flex items-center justify-center gap-6">
            {guidelines.map((guideline, index) => (
              <div
                key={guideline.id}
                className={`slide ${currentIndex === index ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              >
                <div className={`border mb-4 ${currentIndex === index ? "border-slate-950":"border-[#808080]"}`}></div>
                <div className="flex flex-col gap-2">
                  <span className={`font-medium text-md ${
                      currentIndex === index ? "text-black" : "text-[#808080]"
                    }`}>
                    {String(guideline.id).padStart(2, "0")}
                  </span>
                  <h4
                    className={`font-medium ${
                      currentIndex === index ? "text-black" : "text-[#808080]"
                    }`}
                  >
                    {guideline.title}
                  </h4>
                  <p
                    className={`text-sm ${
                      currentIndex === index ? "text-black" : "text-[#808080]"
                    }`}
                  >
                    {guideline.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
