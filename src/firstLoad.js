import Icon from './sushipic2.jpg'

export function component(){
  const element = document.createElement('div');
  element.classList.add('header')
  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.style.width = "100%"
  myIcon.style.height = "50vh"
  element.appendChild(myIcon);

  
  const main = document.createElement('div')
  main.classList.add("main");
  main.textContent = "Welcome to Fish's Sushi, we don't dissapoint.";
  main.style.fontSize = "2rem"
  main.style.textAlign = "center"
  element.appendChild(main)

  const tabs = document.createElement("div");
  tabs.classList.add("tabs");

  return element
}
document.body.appendChild(component());
