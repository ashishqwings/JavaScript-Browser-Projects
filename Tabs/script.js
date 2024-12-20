const buttons = document.querySelectorAll("button");
const texts = document.querySelectorAll("p");
let num = buttons.length;
for(let i = 0; i < num; i++){
    buttons[i].index = i;
    texts[i].index = i;
}

buttons.forEach(button => {button.addEventListener('click',changeTab)})


function changeTab(event){
    buttons.forEach(button => {
        button.classList.remove("selected-button");
    })

    texts.forEach(text => {
        text.classList.remove("hidden-text");
    })

    let index = event.target.index;
    buttons[index].classList.add("selected-button");

    for(let i = 0; i < num; i++){
        if(index != i){ 
            texts[i].classList.add("hidden-text")
        }
    }
}