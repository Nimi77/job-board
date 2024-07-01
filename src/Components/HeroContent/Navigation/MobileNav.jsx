import { useState } from "react";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import "./Navigation.css";

const MobileNav = () => {
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);

  const menuVariants = {
    hidden: { x: '-100%' },
    visible: { x: 0, transition: { duration: 0.5 } }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 }
    })
  };

  return (
    <div className="mobile-nav mw mx-auto">
      <div className="pt-5 flex items-center justify-between relative z-30">
        <div className="m-logo flex justify-items-center gap-1">
          <img src="../logo.png" alt="JobMaster Logo" width="20px"/>
          <a href="" className="text-lg">
            JobBoard
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

      <motion.div
        className="menu-content px-11 pt-8 bg-[#233C32] z-20"
        variants={menuVariants}
        initial="hidden"
        animate={click ? "visible" : "hidden"}
      >
        <div className="mw flex-col justify-center items-left pt-11">
          <ul className="text-lg text-faint font-normal grid gap-6">
            {['Home', 'About Us', 'Services', 'Job', 'Blogs'].map((text, i) => (
              <motion.li
                key={text}
                custom={i}
                variants={linkVariants}
              >
                <a href={`#${text === 'About Us'? 'about' : text === 'Job' ? 'jobs' : text.toLowerCase() }`} onClick={closeMenu}>
                  {text}
                </a>
              </motion.li>
            ))}
          </ul>
          <motion.button
            className="flex mt-6 text-sm text-activebtn"
            onClick={closeMenu}
            variants={linkVariants}
            custom={5} 
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileNav;
