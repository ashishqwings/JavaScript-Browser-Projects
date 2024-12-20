const getJokeButton = document.querySelector("#get-joke");
const jokeText = document.querySelector("#joke-text")
const anyCategoryInput = document.querySelector("#any-category")
const customCategoryInput = document.querySelector("#custom-category")
const checkboxList = document.querySelectorAll(".category-input");
const BASE_API_URL = 'https://v2.jokeapi.dev/joke/';


function disableCheckboxes() {
    console.log("toggle checkbox called")
    for(let i = 0; i < checkboxList.length; i++){
        checkboxList[i].checked = false;
        checkboxList[i].disabled = true;
    }
}

function enableCheckboxes() {
    for(let i = 0; i < checkboxList.length; i++){
        checkboxList[i].disabled = false;
    }
}


function fetchJoke(event) {
    
    event.preventDefault();
    let urlAddOn = '';
    if(anyCategoryInput.checked)
    {
        urlAddOn = 'Any';
    }
    else{
        checkboxList.forEach(category => {
            if(category.checked) {
                urlAddOn += category.id + ',';
            }
        })
        urlAddOn = urlAddOn.substring(0, urlAddOn.length - 1);
        console.log(urlAddOn)
    }


    fetch(BASE_API_URL + urlAddOn)
        .then(res => res.json())
        .then(data => {
            jokeText.innerHTML = "";
            if(data.type == 'single') {
                jokeText.innerHTML += data.joke;
            }
            else if(data.type == 'twopart'){
                jokeText.innerHTML += data.setup + '</br>' + data.delivery;
            }
        })
        .catch(error => {jokeText.innerHTML = error.message})
}

getJokeButton.addEventListener('click', fetchJoke);
anyCategoryInput.onclick = disableCheckboxes;
customCategoryInput.onclick = enableCheckboxes;