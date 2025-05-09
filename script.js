function completeTask(e) {
    const checkBox = e.target;
    const taskItem = checkBox.parentNode;

    const label = taskItem.querySelector("label");
    const taskName = label.textContent;

    const taskToAdd = generateCompleteTodo(taskName);
    document.querySelector(".complete-list ul").appendChild(taskToAdd);

    taskItem.parentNode.removeChild(taskItem);
}

function deleteTask(e) {
    const taskItem = e.target.parentNode;
    const taskContainer = taskItem.parentNode;

    taskContainer.removeChild(taskItem);
}

// generate incomplete todo
function generateIncompleteTodo(taskName) {
    const listItem = document.createElement("li");
    listItem.classList.add("item");

    const inputItem = document.createElement("input");
    inputItem.setAttribute("type", "checkbox");
    inputItem.onchange = completeTask;

    const label = document.createElement("label");
    label.innerText = taskName;

    listItem.append(inputItem, label);

    return listItem;
}

// generate complete todo
function generateCompleteTodo(taskName) {
    const listItem = document.createElement("li");
    listItem.classList.add("item");

    const button = document.createElement("button");
    button.classList.add("delete");
    button.innerText = "Delete";
    button.onclick = deleteTask;

    listItem.append(taskName, " ", button);

    return listItem;
}

const todoForm = document.querySelector("form");
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskInput = document.querySelector("#new-task");
    const taskName = taskInput.value;

    const listItemToAdd = generateIncompleteTodo(taskName);
    const listContainer = document.querySelector("#items");

    listContainer.appendChild(listItemToAdd);

    taskInput.value = "";
});
