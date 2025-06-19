const taskInputValue = document.getElementById("main-input-task-val");
const taskAddBtn = document.getElementById("main-btn");
const taskStatus = document.getElementById("task-status");
const mainTaskContainer = document.getElementById("tasks-container");
const allTaskBtn = document.getElementById("all-task");
const activeTaskBtn = document.getElementById("active-task");
const finishedTaskBtn = document.getElementById("finished-task");
const checkBoxBtn = document.querySelector(".checkBox");
const tasks = [];
const tabContainer = document.getElementById("tab-container");
const activeUser = document.querySelector("#active-user")

activeUser.textContent  = localStorage.getItem("username")

if (tasks.length !== 0)
  checkBoxBtn.addEventListener("click", () => {
    console.log("gvahshd ");
  });

const renderTasks = (newTasks) => {
  mainTaskContainer.textContent = "";
  if (newTasks.length === 0) {
    taskStatus.classList.remove("none");
  } else taskStatus.classList.add("none");

  newTasks.forEach((task) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
      <div class="task">
        <div class="task-info">
          <input class="checkBox" type="checkbox" ${
            task.status === "finished" ? "checked" : ""
          } />
          <p class=${task.status === "finished" ? "done" : ""}>${
      task.taskName
    }</p>
          <input type="text" class="edit-text none" placeholder="Edit Task Name"/>
          </div>
          <div class="edit-options">
          <i class="delete-icon edit-option fa-solid fa-xmark fa-2xl"></i>
          <i class="edit-icon edit-option fa-solid fa-pen-to-square fa-xl"></i>
        </div>
      </div>
    `;
    mainTaskContainer.append(wrapper.firstElementChild);
  });
};

let taskValue;
// add task
taskAddBtn.addEventListener("click", () => {
  taskValue = taskInputValue.value.trim();
  if (taskValue) {
    const taskId = Date.now();
    const taskObj = {
      taskId: taskId,
      taskName: taskValue,
      status: "active",
    };
    tasks.push(taskObj);
    renderTasks(tasks);
    taskInputValue.value = "";
    if (tasks.length) taskStatus.classList.add("none");
  }
});

// all btn
allTaskBtn.addEventListener("click", () => {
  renderTasks(tasks);
});

// active
activeTaskBtn.addEventListener("click", () => {
  const activeTasks = tasks.filter((task) => task.status === "active");
  renderTasks(activeTasks);
});

// finished
finishedTaskBtn.addEventListener("click", () => {
  const finishedTasks = tasks.filter((task) => task.status === "finished");
  renderTasks(finishedTasks);
});

mainTaskContainer.addEventListener("click", (e) => {
  if (e.target && e.target.matches(".checkBox")) {
    const taskText = e.target.nextElementSibling.textContent;
    const task = tasks.find((t) => t.taskName === taskText);
    if (task) {
      task.status = e.target.checked ? "finished" : "active";
      if (task.status === "finished")
        e.target.nextElementSibling.classList.add("done");
      else e.target.nextElementSibling.classList.remove("done");
    }
  }
  if (e.target && e.target.matches(".delete-icon")) {
    const taskElement = e.target.closest(".task");

    const taskName = taskElement.querySelector("p").textContent.trim();
    const index = tasks.find((task) => task.taskName === taskName);
    if (index != -1) tasks.splice(index, 1);
    taskElement.remove();
    renderTasks(tasks);
  }

  if (e.target && e.target.matches(".edit-icon")) {
    const taskElement = e.target.closest(".task");
    const inputField = taskElement.querySelector(".edit-text");
    const taskPara = taskElement.querySelector("p");

    taskPara.classList.add("none");
    inputField.classList.remove("none");
    inputField.classList.add("show");
    inputField.value = taskPara.textContent;
    inputField.focus()

    const task = tasks.find((task) => task.taskName === taskPara.textContent);

    inputField.addEventListener(
      "blur",
      () => {
        const updatedName = inputField.value.trim();
        if (updatedName && task) {
          task.taskName = updatedName;
          renderTasks(tasks); 
        }
      },
      { once: true }
    ); 
  }
});

tabContainer.addEventListener("click", (e) => {
  const clickedTab = e.target;

  const allTabs = tabContainer.querySelectorAll(".tab");
  allTabs.forEach((tab) => tab.classList.remove("active"));

  clickedTab.classList.add("active");
});
