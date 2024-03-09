import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import AppV1 from './App-v1';

//import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  function handleRating(rating) {
    setMovieRating(rating);
  }

  return (
    <div>
      {/*<StarRating color="blue" maxRating={10} onSetRating={handleRating}/>*/}
      <p>This movies was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {<AppV1 />}
    {/*<StarRating
      maxRating={5}
      messages={["Terrible", "bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={24} color="red" className="test" defaultRating={4} />
*/}
    <Test />
  </React.StrictMode>
);
