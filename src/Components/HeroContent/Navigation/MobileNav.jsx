import { useState } from "react";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import "./Navigation.css";

const MobileNav = () => {
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);

  return (
    <>
      <div className="mobile-nav mx-auto mw pt-5 z-30 ">
        <div className="m-logo flex justify-items-center gap-1">
          <img src="../logo.png" alt="JobMaster Logo" width="20px"/>
          <a href="" className="text-lg">
            JobMaster
          </a>
        </div>
        <div>
          {click ? (
            <button>
              <MdClose
                className="HamburgerMenu"
                size="28px"
                color="white"
                onClick={() => setClick(!click)}
              />
            </button>
          ) : (
            <button>
              <MdOutlineMenu
                className="HamburgerMenu"
                size="28px"
                color="white"
                onClick={() => setClick(!click)}
              />
            </button>
          )}
        </div>
      </div>

      {click && (
        <div className="menu-content px-11 pt-8 bg-[#233C32] border-b border-b-white/20 z-20">
          <div className="mw flex-col justify-center items-left pt-11">
            <ul className="text-md text-faint font-normal grid gap-6">
              <li>
                <a href="#home" onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={closeMenu}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" onClick={closeMenu}>
                  Services
                </a>
              </li>
              <li>
                <a href="#jobs" onClick={closeMenu}>
                  Job
                </a>
              </li>
              <li>
                <a href="#blogs" onClick={closeMenu}>
                  Blogs
                </a>
              </li>
            </ul>
            <button
              className="flex mt-6 text-sm text-activebtn"
              onClick={closeMenu}
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
