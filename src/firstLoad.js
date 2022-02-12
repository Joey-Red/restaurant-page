// import Icon from './sushipic2.jpg'

export function component(){
  const element = document.createElement('div');
  element.classList.add('header')
  // const myIcon = new Image();
  // myIcon.src = Icon;
  // myIcon.style.width = "100%"
  // myIcon.style.height = "50vh"
  // element.appendChild(myIcon);

  
  const header = document.createElement('div')
  header.classList.add("header");
  header.textContent = "Welcome to Fish's Sushi, we don't dissapoint.";
  header.style.fontSize = "2rem"
  header.style.textAlign = "center"
  document.body.append(header)

  const tabs = document.createElement("div");
  tabs.classList.add("tabs");
  document.body.append(tabs)
  const tabOne = document.createElement("button");
  const tabTwo = document.createElement("button");
  const tabThree = document.createElement("button");
  tabOne.textContent = "HOME";
  tabTwo.textContent = "MENU";
  tabThree.textContent = "CONTACT";
  tabs.append(tabOne, tabTwo, tabThree)

  const mainBody = document.createElement("div");
  mainBody.classList.add("main");
  mainBody.textContent="TEST TEXT EXAMPLE TEST EXAMPLE TEXT TEST TEST"
  document.body.append(mainBody);
}

