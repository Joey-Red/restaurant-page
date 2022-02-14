//going to import the divs and img and stuff.
import { component } from "./firstLoad";
import './style.css';
import { contentOne } from "./contentOne";
import { contentTwo } from "./contentTwo";

const tabs = document.createElement("div");
tabs.classList.add("tabs");
document.body.append(tabs);
const tabOne = document.createElement("button");
const tabTwo = document.createElement("button");
const tabThree = document.createElement("button");
tabOne.textContent = "HOME";
tabTwo.textContent = "MENU";
tabThree.textContent = "CONTACT";
tabs.append(tabOne, tabTwo, tabThree);
component();
tabOne.addEventListener("click", function(){
  const header = document.querySelector(".header")
  document.body.removeChild(header);
  component();
});

tabTwo.addEventListener("click", function(){
  contentOne();
});

tabThree.addEventListener("click", function(){
  contentTwo();
});