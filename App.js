import { useState } from "react";
const message = ["Learn React", "Apply for Jobs", "Invest your new Income"];
export default function App() {
  const [step, setStep] = useState(2);
  const [isOpen, setOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((step) => step - 1);
  }
  function handleNext() {
    if (step < 3) setStep((step) => step + 1);
  }
  function handleClose() {
    setOpen((isOpen) => !isOpen);
  }
  return (
    <>
      <button className="close" onClick={handleClose}>
        &times;
      </button>
      {isOpen && (
        <div className="body">
          <div className="numbers">
            <div className={step === 1 ? "active" : ""}>1</div>
            <div className={step === 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>
          <div className="content">
            Step {step} : {message[step - 1]}
          </div>

          <div className="btn">
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </>
  );
}
