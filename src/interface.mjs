/* eslint-disable no-use-before-define */
// Remember to uninstall npm install --save-dev babel-loader @babel/preset-env and change
// webpack.config to src/index.js when done.
// Get multi-file-debugging to work before starting next project and every project after that

import {
  // ItemFactory,
  // ProjectFactory,
  ItemModule,
  ProjectModule,
  OrganizeModule,
  // eslint-disable-next-line import/extensions
} from "./appLogic.mjs";

// TO DO:
// 4. Overlay and style

// ======================================== CREATE FORMS ====================================

function itemForm() {
  const content = document.querySelector("#content");

  const form = document.createElement("form");
  form.classList.add("form");

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.name = "title";
  titleInput.placeholder = "Title";
  titleInput.required = true;

  const descriptionArea = document.createElement("textarea");
  descriptionArea.name = "description";
  descriptionArea.placeholder = "Description";

  const projectSelect = document.createElement("select");
  projectSelect.name = "project";

  ProjectModule.getAllProjects().forEach((project) => {
    const option = document.createElement("option");
    option.value = project.title;
    option.text = project.title;
    projectSelect.appendChild(option);
  });

  const noProjectOption = document.createElement("option");
  noProjectOption.value = "noProject";
  noProjectOption.text = "No Project";
  projectSelect.appendChild(noProjectOption);

  const priorityInput = document.createElement("select");
  priorityInput.name = "priority";

  const lowOption = document.createElement("option");
  lowOption.value = "low";
  lowOption.text = "Low Priority";
  priorityInput.appendChild(lowOption);

  const mediumOption = document.createElement("option");
  mediumOption.value = "medium";
  mediumOption.text = "Medium Priority";
  priorityInput.appendChild(mediumOption);

  const highOption = document.createElement("option");
  highOption.value = "high";
  highOption.text = "High Priority";
  priorityInput.appendChild(highOption);

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.name = "dueDate";
  dueDateInput.required = true;

  const isDoneInput = document.createElement("input");
  isDoneInput.type = "checkbox";
  isDoneInput.name = "isDone";
  const isDoneLabel = document.createElement("label");
  isDoneLabel.textContent = "Completed";
  isDoneLabel.appendChild(isDoneInput);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Create Item";

  form.appendChild(titleInput);
  form.appendChild(descriptionArea);
  form.appendChild(projectSelect);
  form.appendChild(priorityInput);
  form.appendChild(dueDateInput);
  form.appendChild(isDoneLabel);
  form.appendChild(submitButton);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const selectedProjectTitle = e.target.elements.project.value;
    const selectedProject =
      ProjectModule.getProjectByTitle(selectedProjectTitle);
    const title = e.target.elements.title.value;
    const description = e.target.elements.description.value;
    const priority = e.target.elements.priority.value;
    const dueDate = new Date(e.target.elements.dueDate.value);
    dueDate.setHours(0, 0, 0, 0);
    const isDone = e.target.elements.isDone.checked;
    if (selectedProjectTitle === "noProject") {
      await ItemModule.createItem(
        title,
        description,
        priority,
        dueDate,
        isDone
      );
      e.target.reset();
      form.style.display = "none";
      await displayAllItems();
    } else if (selectedProject) {
      await ProjectModule.addProjectItem(
        selectedProject,
        title,
        description,
        priority,
        dueDate,
        isDone
      );
      e.target.reset();
      form.style.display = "none";
      await displayProjectItems(selectedProject);
    }
  });

  content.appendChild(form);

  return content;
}

function editItemForm(item, card) {
  const form = document.createElement("form");
  form.classList.add("form");

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.name = "title";
  titleInput.value = item.title;

  const descriptionArea = document.createElement("textarea");
  descriptionArea.name = "description";
  descriptionArea.value = item.description;

  const priorityInput = document.createElement("select");
  priorityInput.name = "priority";

  const lowOption = document.createElement("option");
  lowOption.value = "low";
  lowOption.text = "Low Priority";
  priorityInput.appendChild(lowOption);

  const mediumOption = document.createElement("option");
  mediumOption.value = "medium";
  mediumOption.text = "Medium Priority";
  priorityInput.appendChild(mediumOption);

  const highOption = document.createElement("option");
  highOption.value = "high";
  highOption.text = "High Priority";
  priorityInput.appendChild(highOption);

  priorityInput.value = item.priority;

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.name = "dueDate";
  dueDateInput.value = item.dueDate.toISOString().slice(0, 10);

  const isDoneInput = document.createElement("input");
  isDoneInput.type = "checkbox";
  isDoneInput.name = "isDone";
  isDoneInput.checked = item.isDone;
  const isDoneLabel = document.createElement("label");
  isDoneLabel.textContent = "Completed";
  isDoneLabel.appendChild(isDoneInput);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Update Item";

  form.appendChild(titleInput);
  form.appendChild(descriptionArea);
  form.appendChild(priorityInput);
  form.appendChild(dueDateInput);
  form.appendChild(isDoneLabel);
  form.appendChild(submitButton);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const newTitle = e.target.elements.title.value;
    const newDescription = e.target.elements.description.value;
    const newPriority = e.target.elements.priority.value;
    const newDueDate = new Date(e.target.elements.dueDate.value);
    newDueDate.setHours(0, 0, 0, 0);
    const newIsDone = e.target.elements.isDone.checked;
    await ItemModule.editItem(
      item,
      newTitle,
      newDescription,
      newPriority,
      newDueDate,
      newIsDone
    );
    card.replaceWith(await itemCard(item));
    e.target.reset();
    form.style.display = "none";

    await displayAllItems();
  });

  return form;
}

function projectForm() {
  const content = document.querySelector("#content");

  const form = document.createElement("form");
  form.classList.add("form");

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.name = "title";
  titleInput.placeholder = "Title";
  titleInput.required = true;

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Create Project";

  form.appendChild(titleInput);
  form.appendChild(submitButton);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    ProjectModule.createProject(title);
    e.target.reset();
    form.style.display = "none";
    displayProjects();
  });

  content.appendChild(form);

  return form;
}

function editProjectForm(project, card) {
  const form = document.createElement("form");
  form.classList.add("form");

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.name = "title";
  titleInput.value = project.title;

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Update Project";

  form.appendChild(titleInput);
  form.appendChild(submitButton);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const newTitle = e.target.elements.title.value;
    await ProjectModule.editProject(project, newTitle);
    card.replaceWith(await projectCard(project));
    e.target.reset();
    form.style.display = "none";
    await displayProjects();
  });

  return form;
}

// ===================================== CREATE TASKS/ITEMS ======================================

async function itemCard(item) {
  const card = document.createElement("div");
  card.classList.add("card");

  const leftDiv = document.createElement("div");
  leftDiv.classList.add("left");

  const rightDiv = document.createElement("div");
  rightDiv.classList.add("right");

  const priority = document.createElement("div");
  priority.classList.add("priority");
  if (item.priority === "low") {
    priority.classList.add("low");
  } else if (item.priority === "medium") {
    priority.classList.add("medium");
  } else if (item.priority === "high") {
    priority.classList.add("high");
  }

  const isDone = document.createElement("input");
  isDone.classList.add("left");
  isDone.type = "checkbox";
  isDone.checked = item.isDone;
  isDone.addEventListener("click", async () => {
    await ItemModule.toggleIsDone(item);
    displayAllItems();
  });

  const title = document.createElement("p");
  title.textContent = item.title;

  const dueDate = document.createElement("p");
  const options = { day: "numeric", month: "short", year: "2-digit" };
  dueDate.textContent = item.dueDate.toLocaleDateString("en-US", options);

  const editLink = document.createElement("a");
  editLink.href = "#";
  editLink.textContent = "Edit";
  editLink.addEventListener("click", () => {
    const editForm = editItemForm(item, card);
    card.replaceWith(editForm);
  });

  const deleteLink = document.createElement("a");
  deleteLink.href = "#";
  deleteLink.textContent = "Delete";
  deleteLink.addEventListener("click", async (e) => {
    e.preventDefault();
    await ItemModule.deleteItem(item);
    card.remove();
  });

  leftDiv.appendChild(priority);
  leftDiv.appendChild(isDone);
  leftDiv.appendChild(title);
  card.appendChild(leftDiv);

  rightDiv.appendChild(dueDate);
  rightDiv.appendChild(editLink);
  rightDiv.appendChild(deleteLink);
  card.appendChild(rightDiv);

  return card;
}

async function projectCard(project) {
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("h3");
  title.textContent = project.title;
  title.addEventListener("click", async () => {
    displayProjectItems(project);
  });

  const editLink = document.createElement("a");
  editLink.href = "#";
  editLink.textContent = "Edit";
  editLink.addEventListener("click", () => {
    const editForm = editProjectForm(project, card);
    card.replaceWith(editForm);
  });

  const deleteLink = document.createElement("a");
  deleteLink.href = "#";
  deleteLink.textContent = "Delete";
  deleteLink.addEventListener("click", async (e) => {
    e.preventDefault();
    await ProjectModule.deleteProject(project);
    card.remove();
  });

  card.appendChild(title);
  card.appendChild(editLink);
  card.appendChild(deleteLink);

  return card;
}

// ========================================= DISPLAY STUFF =====================================

async function displayAllItems() {
  const content = document.querySelector("#content");
  content.textContent = "";

  const items = await OrganizeModule.getAllTotalItems();

  items.forEach(async (item) => {
    const card = await itemCard(item);
    content.appendChild(card);
  });

  return content;
}

async function displayDailyItems() {
  const content = document.querySelector("#content");
  content.textContent = "";

  const items = await OrganizeModule.getAllDailyItems();

  items.forEach(async (item) => {
    const card = await itemCard(item);
    content.appendChild(card);
  });

  return content;
}

async function displayWeeklyItems() {
  const content = document.querySelector("#content");
  content.textContent = "";

  const items = await OrganizeModule.getAllWeeklyItems();

  items.forEach(async (item) => {
    const card = await itemCard(item);
    content.appendChild(card);
  });

  return content;
}

async function displayProjects() {
  const projectContainer = document.querySelector("#projectContainer");
  projectContainer.textContent = "";

  const projects = await ProjectModule.getAllProjects();

  projects.forEach(async (project) => {
    const card = await projectCard(project);
    projectContainer.appendChild(card);
  });

  return projectContainer;
}

async function displayProjectItems(project) {
  const content = document.querySelector("#content");
  content.textContent = "";

  const items = project.array;

  items.forEach(async (item) => {
    const card = await itemCard(item);
    content.appendChild(card);
  });

  return content;
}

// ============================================ CONTROLLER =====================================

async function controller(project) {
  displayAllItems();
  displayProjects();

  const homeBtn = document.querySelector("#allItems a:first-child");
  homeBtn.addEventListener("click", async () => {
    await displayAllItems();
  });

  const dailyBtn = document.querySelector("#allItems a:nth-child(2)");
  dailyBtn.addEventListener("click", async () => {
    await displayDailyItems();
  });

  const weeklyBtn = document.querySelector("#allItems a:nth-child(3)");
  weeklyBtn.addEventListener("click", async () => {
    await displayWeeklyItems();
  });

  const newTaskBtn = document.querySelector("#newTaskBtn");
  newTaskBtn.addEventListener("click", () => {
    itemForm(project);
  });

  const newProjectBtn = document.querySelector("#newProjectBtn");
  newProjectBtn.addEventListener("click", () => {
    projectForm();
  });
}

controller();
