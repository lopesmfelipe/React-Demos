import { useState } from "react";
import "./styles/counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [rangeValue, setRangeValue] = useState(1);

  const theFutureDate = () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + count);
    return futureDate.toDateString();
  };

  return (
    <div>
      <div className="container">
        <input
          type="range"
          min="0"
          max="10"
          style={{ marginBottom: "20px" }}
          onChange={(e) => {
            let strin = e.target.value;
            let numb = Number(strin);
            setRangeValue(numb);
            setStep(numb);
          }}
        />
        <output style={{ color: "white" }}>{rangeValue}</output>

        <div>
          <button onClick={() => setStep((s) => s - 1)}> - </button>
          <span>Step: {step}</span>
          <button onClick={() => setStep((s) => s + 1)}> + </button>
        </div>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}> - </button>

        <input
          type="text"
          value={count}
          onChange={(e) => {
            let str = e.target.value;
            let num = Number(str);
            setCount(num);
            console.log(count);
          }}
        />

        <button onClick={() => {setCount((c) => c + step)}}> + </button>
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

      {count !== 0 ? (
        <button
          onClick={() => {
            setCount(0);
            setStep(1);
            setRangeValue(1);
          }}
        >
          Reset
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Counter;
