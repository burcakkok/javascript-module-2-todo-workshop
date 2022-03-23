

const createButton = document.querySelector('#create-button');

let index = 0;
const clickEvent = (event) => {
    const colors = ['tomato', 'blue', 'pink'];
    event.preventDefault();
    console.log("Someone just clicked me once!");
    createButton.style.backgroundColor = colors[index];
    index++;
}

createButton.addEventListener("click", clickEvent);

createButton.addEventListener("dblclick", (event) => {
    event.preventDefault();
    console.log("Someone just clicked me twice!");
});

const inputSelect = document.querySelector('#search-text');

inputSelect.addEventListener('input', (event) => {
    event.preventDefault();
    console.log(event.target.value);
});