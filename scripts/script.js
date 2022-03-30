

// const createButton = document.querySelector('#create-button');

// let index = 0;
// const clickEvent = (event) => {
//     const colors = ['tomato', 'blue', 'pink'];
//     event.preventDefault();
//     console.log("Someone just clicked me once!");
//     createButton.style.backgroundColor = colors[index];
//     index++;
// }

// createButton.addEventListener("click", clickEvent);

// createButton.addEventListener("dblclick", (event) => {
//     event.preventDefault();
//     console.log("Someone just clicked me twice!");
// });

// const inputSelect = document.querySelector('#search-text');

// inputSelect.addEventListener('input', (event) => {
//     event.preventDefault();
//     console.log(event.target.value);
// });


// EXERCISE 5

let todos = [];

const createTodo = (text) => {
    todos.push(text);
};

document.querySelector("#new-todo").addEventListener("submit", (event) => {
    event.preventDefault();
    const textFromForm = event.target.elements.text.value.trim();

    if (textFromForm.length > 0) {
        createTodo(textFromForm);
        event.target.elements.text.value = "";
        console.log("todos", todos);
    }
renderTodos(todos);
});

// EXERCISE 9
const removeTodo = (todoEl) => {
    const todoIndex = todos.findIndex((todo) => {
        return todo.toLowerCase() === todoEl.textContent.toLowerCase()
    });
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    };
};

// EXERCISE 10
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('label');
    const containerEl = document.createElement('div');
    const todoText = document.createElement('span');
    const removeTodoButton = document.createElement('button');

    // Setup the todo text
    todoText.textContent = todo;
    containerEl.appendChild(todoText);

    // Setup container
    todoEl.classList.add('list-item');
    containerEl.classList.add('list-item__container');
    todoEl.appendChild(containerEl);

    // Setup the remove button
    removeTodoButton.textContent = 'remove';
    removeTodoButton.classList.add('button', 'button--text');
    todoEl.appendChild(removeTodoButton);
    removeTodoButton.addEventListener('click', () => {
        removeTodo(todoText);
        renderTodos(todos);
    });

    return todoEl;
};

EXERCISE 6

function generateTodoDOM(todo) {
    const todoEl = document.createElement('label');
    const containerEl = document.createElement('div');
    const todoText = document.createElement('span');

    todoText.textContent = todo;
    todoEl.classList.add("list-item");
    containerEl.classList.add("list-item__container");

    containerEl.appendChild(todoText);
    todoEl.appendChild(containerEl);

    return todoEl;

};

EXERCISE 7

function renderTodos(todos) {

    const todoList = document.querySelector('#todos');
    todoList.innerHTML = "";

    todos.forEach((elementInTodoArray) => {
        console.log("elementInTodoArray", elementInTodoArray);
        todoList.appendChild(generateTodoDOM(elementInTodoArray));
    });
};

EXERCISE 8

function renderTodos(todos) {

    const todoList = document.querySelector('#todos');
    todoList.innerHTML = "";
    
    if(todos.length > 0) {
    todos.forEach((elementInTodoArray) => {
        console.log("elementInTodoArray", elementInTodoArray);
        todoList.appendChild(generateTodoDOM(elementInTodoArray));
    });
    } else {
        const noTodoMessage = document.createElement('p');
        noTodoMessage.classList.add("empty-message");
        noTodoMessage.innerText = 'There are no todos to show';
        todoList.appendChild(noTodoMessage);
    }
};

renderTodos(todos);













