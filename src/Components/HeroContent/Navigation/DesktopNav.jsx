import { useState } from "react";
import "../Navigation.css";

const DesktopNav = () => {
  const [activeNav, setActiveNav] = useState("home");
  const handleActiveNav = (nav) => {
    setActiveNav(nav);
  };

  return (
    <nav role="banner" className="font-Lexend">
      <div className="DesktopNav nav-container items-center justify-between justify-items-center mx-auto pt-5 mw">
        <div className="logo flex items-center justify-items-center gap-2">
          <img src="../logo.png" width="22px"></img>
          <a href="" className="text-lg">
            JobMaster
          </a>
        </div>
        <div className="NavLinks flex items-center justify-center">
          <ul className="flex space-x-5 text-sm text-faint ">
            <li>
              <a
                href="#"
                className={`nav-link ${
                  activeNav === "home" ? "font-medium text-white" : "text-faint"
                }`}
                onClick={() => handleActiveNav("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about"
                className={`nav-link ${
                  activeNav === "about"
                    ? "font-medium text-white"
                    : "text-faint"
                }`}
                onClick={() => handleActiveNav("about")}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={`nav-link ${
                  activeNav === "services"
                    ? "font-medium text-white"
                    : "text-faint"
                }`}
                onClick={() => handleActiveNav("services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#jobs"
                className={`nav-link ${
                  activeNav === "jobs" ? "font-medium text-white" : "text-faint"
                }`}
                onClick={() => handleActiveNav("jobs")}
              >
                Job
              </a>
            </li>
            <li>
              <a
                href="#blogs"
                className={`nav-link ${
                  activeNav === "blogs"
                    ? "font-medium text-white"
                    : "text-faint"
                }`}
                onClick={() => handleActiveNav("blogs")}
              >
                Blogs
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <button className="d-btn px-6 py-3 rounded-full text-sm bg-activebtn text-black">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};
export default DesktopNav;
