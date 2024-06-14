import { useState } from "react";
import {
  TfiCup,
  TfiStatsUp,
  TfiPencilAlt,
  TfiBarChartAlt,
  TfiBriefcase,
} from "react-icons/tfi";
import { SiMaterialdesignicons } from "react-icons/si";

function FeaturedJob() {
  // an array of all the jobs available
  const jobs = [
    {
      id: 1,
      company: "Mostow Co",
      category: "Development",
      jobTitle: "Web Development",
      description:
        "Develop and maintain websites, design web application that are responsive.",
      icon: <TfiCup size={22} />,
    },
    {
      id: 2,
      company: "Tam's Stationers",
      category: "Creative",
      jobTitle: "Product Designer",
      description:
        "Create and design new products using Figma, Adobe inDesign and others.",
      icon: <SiMaterialdesignicons size={22} />,
    },
    {
      id: 3,
      company: "Bugle Boy",
      category: "Marketing",
      jobTitle: "Business Management",
      description:
        "Oversee and manage business operations, effectively and with discipline.",
      icon: <TfiPencilAlt size={22} />,
    },
    {
      id: 4,
      company: "Ezhe Source",
      category: "Development",
      jobTitle: "Data Analyst",
      description:
        "Interpret and analyze complex data in a way that others will understand.",
      icon: <TfiStatsUp size={22} />,
    },
    {
      id: 5,
      company: "Electronic Geek",
      category: "Marketing",
      jobTitle: "Sales",
      description:
        "Increase and manage sales activities also share the sales analysis of each month to HR.",
      icon: <TfiBarChartAlt size={22} />,
    },
    {
      id: 6,
      company: "Pacific Stereo",
      category: "Finance",
      jobTitle: "Accounting",
      description:
        "Manage financial records and reports, handle everything pertaining to balancing account.",
      icon: <TfiBriefcase size={22} />,
    },
  ];
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredJobs =
    activeFilter === "All"
      ? jobs
      : jobs.filter((job) => job.category === activeFilter);
  return (
    <div className="feature-section" id="jobs">
      <div className="featured-container flex flex-col items-center justify-center mw mx-auto font-Poppins">
        <div role="heading">
          <h2 className="font-Lexend text-3xl font-semibold text-center">
            Featured Job Of The Month
          </h2>
          <div className="filter-list flex items-center justify-center gap-3">
            {["All", "Marketing", "Creative", "Development", "Finance"].map(
              (filter) => (
                <button
                  key={filter}
                  className={`filter-btn ${
                    activeFilter === filter
                      ? "bg-greenbg text-white"
                      : "bg-transparent text-black border-2 border-greenbg"
                  } text-sm rounded-3xl`}
                  onClick={() => setActiveFilter(filter)}
                >
                  <span>{filter}</span>
                </button>
              )
            )}
          </div>
        </div>
        <div className="job-list mx-auto">
          <div className="job-list-container grid grid-cols-1 ml-0  lg:grid-cols-3 lg:gap-8  md:grid-cols-2 gap-6 mw items-center ">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="job flex flex-col gap-2 justify-center "
              >
                <div role="heading" className="flex items-center gap-3 ">
                  <span className="icon flex items-center justify-center w-12 h-12 rounded-full text-greenbg">
                    {job.icon}
                  </span>
                  <div>
                    <h3>{job.company}</h3>
                    <span>{job.category}</span>
                  </div>
                </div>
                <div className="job-content flex flex-col items-left gap-2 pt-6">
                  <h4>{job.jobTitle}</h4>
                  <p>{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default FeaturedJob;
