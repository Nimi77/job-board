import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import Modal from "../Components/SubscribeModal/Modal";

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
 
  // Email validation
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setError("Please Enter a valid email address.");
    } else {
      setError("");
      handleOpenModal();
    }
  };

  return (
    <footer className=" bg-[#244034] text-white text-center">
      <div className="f-container flex flex-col justify-center py-10 mw mx-auto font-Poppins ">
        <div className="f-top">
          <div className="logo font-Lexend flex items-center justify-items-center gap-2" >
            <img src="../logo.png" width="22px"></img>
            <a href="" className="text-lg" tabIndex={-1}>
              JobMaster
            </a>
          </div>
          <div className="middle flex justify-between items-center my-6">
            <div className="middle1 flex flex-col gap-4">
              <form onSubmit={handleSubmit} className="input-wrapper relative">
              {error && (
                  <p className="text-red-500 text-sm italic">{error}</p>
                )}
                <input
                  id="emailAddress"
                  role="combo-box"
                  type="email"
                  placeholder="Enter email address"
                  className="rounded-full text-black bg-white relative px-6 py-[14px] text-sm w-full"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <button
                  type="submit"
                  className="input-btn rounded-full bg-activebtn text-black font-semibold text-sm  focus:shadow-none"
                >
                  Submit
                </button>
              </form>
              <div className="social-icons flex  space-x-4 gap-2">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="s-icon"
                >
                  <FaFacebook />
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="s-icon"
                >
                  <FaTwitter />
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="s-icon"
                >
                  <FaInstagram />
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="s-icon"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
            <div className="middle2 flex flex-col gap-4 text-sm text-white">
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
          <div className="text-faint fb-content pt-6 flex justify-between items-left">
            <div className="flex gap-4" >
              <a  href="">Privacy Policy</a>
              <a href="">Terms & Conditions</a>
            </div>
            <div>
              <span>&copy; Abimbola Oladejo - All rights reserved</span>
            </div>
          </div>
        </div>
        {/* open modal box */}
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}></Modal>
      </div>
    </footer>
  );
}
export default Footer;
