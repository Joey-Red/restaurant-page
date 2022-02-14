
export function contentOne(){
  const mainBody = document.querySelector(".main")
  mainBody.replaceChildren("")
  
  const menuList = ['Sushi','Uramaki','Hosomaki','Nigiri'];
  const descriptionList = ['Served with white rice and Edamame.','Served with white rice and cheese wonton.','Served with summer roles and Shumai.', 'Served with coconut shrimp and soft shell crab.']
  const list = document.createElement("ul");
  list.classList.add("menuList")
  for (let i = 0; i < menuList.length; i++){
    let li = document.createElement("li");
    li.textContent = menuList[i]
    list.append(li)

    for (let j = 0; j < descriptionList.length; j++){
    let lili = document.createElement('li');
    lili.textContent = descriptionList[j]
    li.append(lili);
  }
  };
  
  mainBody.append(list);
};