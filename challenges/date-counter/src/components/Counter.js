import { useState } from "react";
import "./styles/counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const theFutureDate = () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + count);
    return futureDate.toDateString();
  };


  return (
    <div>
      <div>
        <button onClick={() => setStep((s) => s - 1)}> - </button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}> + </button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}> - </button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}> + </button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${count} days ago was `}
        </span>
        <span>{theFutureDate()}</span>
      </p>
    </div>
  );
}

export default Counter;
