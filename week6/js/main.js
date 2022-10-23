const taskInput = document.querySelector('input');
const taskList = document.querySelector('ul')
const addTask = document.querySelector('#addTask')
const showChecked = document.querySelector('#completed');

function addNewTask() {
    const listItem = document.createElement('li');
    let textNode = null;

    if (taskInput.value === '') {
        textNode = document.createTextNode('Add a new task');
    }
    else {
        textNode = document.createTextNode(taskInput.value);
    }

    listItem.appendChild(textNode);
    taskList.appendChild(listItem);
    taskInput.value = '';

    addCloseSpan(listItem);
}

function addCloseSpan(listItem) {
    const close = document.createElement('button');
    const textNode = document.createTextNode('X');
    close.className = 'close';
    close.appendChild(textNode);
    listItem.appendChild(close);
    close.addEventListener('click', () => listItem.style.display = 'none');
}

function toggleTask(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
}

function showComplete() {
    const listArray = Array.from(taskList.children);
    listArray.forEach(child => child.style.display = 'flex');
}

addTask.addEventListener('click', addNewTask);
taskList.addEventListener('click', toggleTask, false);
showChecked.addEventListener('click', showComplete);