/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { LoaderOptionsPlugin } from "webpack";

window.onload = function() {
  //write your code here
  let ArrPalo = ["♦", "♥", "♠", "♣"];

  let ArrNum = [
    "As",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let LargoArrPalo = ArrPalo.length;
  let LargoArrNum = ArrNum.length;

  console.log("Hello Rigo from the console!");
};
