import { Children, useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  return <Steps />;
}
function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlerClickButtonPrevios() {
    if (step > 1) {
      setStep((step) => step - 1);
    }
  }
  function handlerClickButtonNext() {
    if (step < 3) {
      setStep((step) => step + 1);
    }
  }
  return (
    <>
      <button
        className="close"
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <Message step={step}>
            {messages[step - 1]}
            <Button
              onClick={() => {
                alert(`Learn how ${messages[step - 1]}`);
              }}
            >
              LEARN
            </Button>
          </Message>
          <div className="buttons">
            <Button onClick={handlerClickButtonPrevios}>
              <span>👈</span>Previos
            </Button>
            <Button onClick={handlerClickButtonNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
function Button({ onClick, children }) {
  return (
    <button
      style={{ backgroundColor: "#7950f2", color: "#fff" }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
function Message({ step, children }) {
  return (
    <p className="message">
      <h3>step {step}:</h3>
      {children}
    </p>
  );
}
