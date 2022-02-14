import Owners from './owners.jpg'
import Mapimg from './map.png'
export function contentTwo(){
  const mainBody = document.querySelector("#content");
  const header = document.querySelector(".header");
  header.textContent = "Contact Us"
  mainBody.replaceChildren("");
  const belowImg = document.createElement('div');
  belowImg.classList.add("belowImg");
  const ownersImage = new Image();
  ownersImage.src = Owners;
  mainBody.append(ownersImage)
  mainBody.append(belowImg)
  ownersImage.classList.add("owners")
  const map = new Image();
  map.src = Mapimg;
  map.classList.add('map')
  belowImg.append(map)

  const contactInfo = document.createElement('div');
  contactInfo.classList.add('contactInfo')
  contactInfo.innerText=`Telephone Number: 440-473-6526\n
  Street Address: 4612 Bingamon Road\n
City: Mayfield Heights\n
State: Ohio\n
Zipcode: 44124\n
`
  belowImg.append(contactInfo)
  
}