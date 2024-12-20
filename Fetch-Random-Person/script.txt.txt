const RANDOM_USER_BASE_URL = "https://randomuser.me/api/";
const container = document.querySelector("#container");

const fetchButton = document.querySelector("#fetch-random-btn");

let new_url = `${RANDOM_USER_BASE_URL}?results=10&nat=IN`;

let users = [];

fetchButton.addEventListener("click", fetchRandomPeople)

function fetchRandomPeople(){
    container.innerHTML = "";
    fetch(new_url)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            users = data.results;
            
            users.forEach((user) => {
                container.innerHTML += `
                <div class="user-profile">
                    <img src="${user.picture.large}" id="user-image">
                    <div id="user-full-name">${user.name.first} ${user.name.last}</div>
                    <div id="user-country">${user.location.country}</div>
                    <div id="user-contact">${user.phone}</div>
                </div>
            `
            })

            

        })
}