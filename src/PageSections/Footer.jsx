import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" bg-[#244034] text-white text-center">
      <div className="f-container flex flex-col justify-center py-10 mw mx-auto font-Poppins ">
        <div className="f-top">
          <div className="logo font-Lexend flex items-center justify-items-center gap-2">
            <img src="../logo.png" width="22px"></img>
            <a href="" className="text-lg">
              JobMaster
            </a>
          </div>
          <div className="middle flex justify-between items-center my-6">
            <div className="middle1 flex flex-col gap-4">
              <div className="input-wrapper">
                <input id="input" role="combo-box" type="input" placeholder="Enter email address" className="rounded-full bg-white relative px-6 py-[14px] text-sm w-full"> 
                </input>
                <button className="input-btn rounded-full bg-activebtn text-black absolute px-6 py-[12.6px] left-[385px] text-sm">Search</button>
              </div>
              <div className="social-icons flex  space-x-4 gap-2">
                <a href="" target="_blank" rel="noopener noreferrer" className="s-icon">
                  <FaFacebook/>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" className="s-icon">
                  <FaTwitter/>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" className="s-icon">
                  <FaInstagram/>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" className="s-icon">
                  <FaLinkedin/>
                </a>
              </div>
            </div>
            <div className="middle2 flex flex-col gap-4 text-sm">
              <div className="flex gap-4">
                <li>
                  <a>Popular Features</a>
                </li>
                <li>
                  <a>Free Tools</a>
                </li>
              </div>
              <div className="flex gap-4">
                <li>
                  <a>Customer</a>
                </li>
                <li>
                  <a>Company</a>
                </li>
                <li>
                  <a>Parthners</a>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="f-bottom">
          <div className="border w-full border-gray-300 "></div>
          <div className="flex gap-4 fb-content text-sm text-faint pt-6">
              <a>Privacy Policy</a>
              <a></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
