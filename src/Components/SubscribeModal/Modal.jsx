import PropTypes from "prop-types";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-info"
      aria-modal="true"
      className="fixed inset-0 flex items-center justify-center z-50 font-Lexend"
    >
      <div
        className="fixed inset-0 bg-[rgba(0,0,0,0.8)]"
        onClick={onClose}
      ></div>
      <div className="modal-container bg-white mx-auto flex flex-col justify-center px-6 py-4 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl relative z-10 rounded-lg shadow-lg">
        <div className="text-black text-center">
          <h3
            className="uppercase font-semibold flex align-center justify-center modal-head-font text-lg md:text-xl mb-3"
            id="modal-title"
          >
            🎉 Thank You for Subscribing! 🎉
          </h3>
          <p className="mb-4 md:mb-6" id="modal-info">We will let you know when the website is fully ready.</p>
        </div>
        <button onClick={onClose} className="mt-4 p-2 bg-[#244034] text-white rounded-md hover:bg-[#1b302b]">
          Close
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
