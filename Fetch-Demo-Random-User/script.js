
document.querySelector("button").onclick = fetchData;
const box = document.querySelector("div");

function renderData(obj){
    box.innerHTML += `
        <h2 id="name">${obj.name.first} ${obj.name.last}</h2>
        <img id="image" src="${obj.picture.large}">
    `
}


function fetchData(){
    const person = fetch('https://randomuser.me/api/?results=5')
                .then(res => res.json())
                .then(data => {data.results.forEach(obj => renderData(obj))})
}



