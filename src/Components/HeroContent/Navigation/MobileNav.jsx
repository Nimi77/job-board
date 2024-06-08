import { useState } from "react";
import NavLink from "./NavLink";
import { MdOutlineMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import "../Navigation.css";

const MobileNav = () => {
  const [click, setclick] = useState(false);
  const Hamburger = (
    <MdOutlineMenu
      className="HamburgerMenu"
      size="28px"
      color="white"
      onClick={() => setclick(!click)}
    />
  );
  const Close = (
    <MdClose
      className="HamburgerMenu"
      size="28px"
      color="white"
      onClick={() => setclick(!click)}
    />
  );
  const closeMenu = () => setclick(false);

  return (
    <nav role="banner" className="font-Lexend">
      <div className="MobileNav mx-auto mw pt-5">
        <div className="m-logo flex justify-items-center gap-1">
          <img src="../logo.png" width="24px"></img>
          <a href="" className="text-lg">
            JobMaster
          </a>
        </div>
        {click ? Close : Hamburger}
        {click && <NavLink isClicked={true} closeMenu={closeMenu} />}
      </div>
    </nav>
  );
};
export default MobileNav;
