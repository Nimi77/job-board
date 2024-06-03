import "./Navigation.css";

const NavLink = () => {
  return (
    <div className="Navlinks  fixed left-0 shadow-4xl right-0 top-[3.9rem] px-11 py-4 bg-[#0b291c] z-10 border-b border-b-white/20">
      <div className="mw-90 flex flex-col justify-center items-left">
        <ul className="text-sm text-faint font-normal grid gap-3">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#jobs">Job</a>
          </li>
          <li>
            <a href="#blogs">Blogs</a>
          </li>
        </ul>
        <button className=" flex mt-3 text-sm text-activebtn">Get Started</button>
      </div>
    </div>
  );
};

export default NavLink;
