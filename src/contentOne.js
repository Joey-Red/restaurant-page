import Picture  from './sushiMenu.jpg'

export function contentOne(){
  const mainBody = document.querySelector("#content")
  mainBody.replaceChildren("")
  const header = document.querySelector(".header");
  header.textContent = "Our Menu Items"
  const menuList = ['Sushi','Served with white rice and Edamame.','Nigiri','Served with summer roles and Shumai.'];
  const descriptionList = ['Uramaki','Served with white rice and cheese wonton.','Hosomaki', 'Served with coconut shrimp and soft shell crab.']
  const list = document.createElement("ul");
  list.classList.add("menuList")
  for (let i = 0; i < menuList.length; i++){
    let li = document.createElement("li");
    li.textContent = menuList[i]
    list.append(li)
  };
  for (let j = 0; j < descriptionList.length; j++){
    let lili = document.createElement('li');
    lili.textContent = descriptionList[j]
    list.append(lili); 
  }
  mainBody.append(list);

  const menuImage = new Image();
  menuImage.src = Picture;
  mainBody.append(menuImage)
};