import Icon from './sushipic2.jpg'

export function component(){
  const mainBody = document.querySelector("#content");
  mainBody.replaceChildren("")
  const header = document.createElement('div');
  const element = document.createElement('div');
  element.classList.add('header')
  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.style.width = "100%"
  myIcon.style.height = "30vh"
  
  header.classList.add("header");
  header.textContent = "Welcome to Fish's Sushi, we don't dissapoint.";
  header.style.fontSize = "2rem"
  header.style.textAlign = "center"
  document.body.append(header)

  
  
  mainBody.classList.add("main");
  mainBody.append(myIcon);
  const mainText = document.createElement("div");
  mainText.classList.add("mainText")
  mainText.textContent='Ohios premier Sushi restaurant.'

  const secondaryText = document.createElement("div");
  secondaryText.classList.add("secondaryText")
  secondaryText.innerText=`2 Michelin stars \n 2014's USA's top 45.`

  const thirdText = document.createElement("div");
  thirdText.classList.add("thirdText")
  thirdText.innerText=`I've never tasted such exquisite food.\n I can definitely see why they are so successful 
  -Erica Phannavong \n \nThe best dish I have ever had. I will be back for years to come. \n-Joshua Fairtree`
  document.body.append(mainBody);
  mainBody.append(mainText);
  mainBody.append(secondaryText);
  mainBody.append(thirdText);
}

