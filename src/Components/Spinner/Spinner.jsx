import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="pulse-container">
        <div className="pulse-bubble pulse-bubble-1"></div>
        <div className="pulse-bubble pulse-bubble-2"></div>
        <div className="pulse-bubble pulse-bubble-3"></div>
      </div>
    </div>
  );
};

export default Spinner;
