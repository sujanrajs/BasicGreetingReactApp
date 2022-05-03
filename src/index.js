import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

let curDate = new Date();
curDate = curDate.getHours();
let greeting = "";

const cssStyle = {};

if (curDate >= 1 && curDate < 12) {
  greeting = "Good Morning!";
  cssStyle.color = "green";
} else if (curDate >= 12 && curDate < 19) {
  greeting = "Good Afternoon!";
  cssStyle.color = "orange";
} else {
  greeting = "Good Night!";
  cssStyle.color = "black";
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <div>
      <h1>
        {" "}
        Hello user, <span style={cssStyle}>{greeting}</span>
      </h1>
    </div>
  </>
);
