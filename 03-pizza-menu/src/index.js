import React from "react";
import ReactDOM from "react-dom";

function App() {
  return <h1> Why does Java sucks so much?</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
