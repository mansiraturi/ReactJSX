import React from "react";
import ReactDom from "react-dom";

const date = new Date();
const curtime = date.getHours();

var greet;
if (curtime < 12) {
  greet = "good morning!";
} else if (curtime < 18) {
  greet = "good afternoon!";
} else {
  greet = "good night!";
}

console.log(date);

ReactDom.render(
  <h1 className="title"> {{ greet }} </h1>,

  document.getElementById("root")
);
