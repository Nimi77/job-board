import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner-box">
        <div className="pulse-container">
          <div className="pulse-bubble pulse-bubble-1"></div>
          <div className="pulse-bubble pulse-bubble-2"></div>
          <div  className="pulse-bubble pulse-bubble-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
