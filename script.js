const searchBox = document.querySelector(".search-area .search");
const addTaskButton = document.querySelector(".search-area .btn");
const taskList = document.querySelector(".task-list");
let taskListArray = document.querySelectorAll(".task-list .task");

addTaskButton.addEventListener("click", (e) => {
    if (searchBox.value !== "") {
        addTasks(searchBox.value);
        searchBox.value = "";
    }
});

taskList.addEventListener("click", (e) => {
    const target = e.target;

    // Check if the clicked element is a paragraph inside a task
    if (target.tagName === "P" && target.closest(".task")) {
        checkBox(target.closest(".task"));
    }

    // Check if the clicked element is an <i> inside a task
    if (target.tagName === "I" && target.closest(".task")) {
        removeTask(target.closest(".task"));
    }
});

const addTasks = (task) => {
    let newDiv = document.createElement("div");
    let content = `
        <div>
            <p>${task}</p>
        </div>
        <span>
            <i class="fa-solid fa-xmark"></i>
        </span>
    `;

    newDiv.classList.add("task");

    newDiv.innerHTML = content;

    taskList.appendChild(newDiv);
};

function checkBox(task) {
    task.classList.toggle("checked");
}

function removeTask(task) {
    console.log("chalgaya");
    task.remove();
}
