/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let whoArray = ["The dog", "My grandma", "The mailman", "My bird"];
  let actionArray = ["ate", "peed", "crushed", "broke"];
  let whatArray = ["my homework", "my phone", "the car"];
  let whenArray = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let index1 = Math.floor(Math.random() * whoArray.length);
  let index2 = Math.floor(Math.random() * actionArray.length);
  let index3 = Math.floor(Math.random() * whatArray.length);
  let index4 = Math.floor(Math.random() * whenArray.length);

  let excuse =
    whoArray[index1] +
    " " +
    actionArray[index2] +
    " " +
    whatArray[index3] +
    " " +
    whenArray[index4];

  document.querySelector("#excuse").innerHTML = excuse;
};
