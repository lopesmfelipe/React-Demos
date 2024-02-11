import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 💷",
];

function App() {
  return (
    <>
      <Steps />
      <Steps />
      <Steps />
    </>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function openClose() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  function handlePrevious() {
    //setStep(step > 1 ? step - 1 : step);
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    //setStep(step < 3 ? step + 1 : step);
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((isOp) => !isOp)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}> 1 </div>
            <div className={step >= 2 ? "active" : ""}> 2 </div>
            <div className={step >= 3 ? "active" : ""}> 3 </div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{
                backgroundColor: "#7950f2",
                color: "#fff",
              }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{
                backgroundColor: "#7950f2",
                color: "#fff",
              }}
              onClick={handleNext}
            >
              Next
            </button>
/;          </div>
        </div>
      )}
    </div>
  );
}

export default App;
