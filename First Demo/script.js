const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const changeColorButton = document.querySelector('#change-color')
const input = document.querySelector('input')
const addItemButton = document.querySelector("#add-item")
const todoList = document.querySelector('#list')
const pElement = document.querySelector('#p-text')
const showOrHideButton = document.querySelector("#show-or-hide")


changeColorButton.onclick = changeColor;
addItemButton.onclick = addItem;
showOrHideButton.onclick = showOrHide;

function changeColor() {
    h1.style.color = 'blue';
    h2.style.color = 'green';
}

function addItem() {
    const inputText = input.value;
    const newLi = document.createElement('li');
    newLi.innerText = inputText;
    todoList.appendChild(newLi);
    input.value = ""
}

function showOrHide() {
    if(showOrHideButton.innerText == 'Hide')
    {
        pElement.style.display = 'none';
        showOrHideButton.innerText = "Show";
    }
    else{
        pElement.style.display = 'block';
        showOrHideButton.innerHTML = 'Hide';
    }
    
}


