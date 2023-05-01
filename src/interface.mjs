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
// 4. Implement functionality to organize based on dueDate or priority
// 4. Overlay and style

// ================================== PUT ME IN A FUNCTION PLZ =============================

let currentItems = [];

// ======================================== CREATE FORMS ====================================

function itemForm() {
  const content = document.querySelector("#content");

  const form = document.createElement("form");
  form.classList.add("form");

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
  noProjectOption.text = "No project";
  projectSelect.appendChild(noProjectOption);

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.name = "title";
  titleInput.placeholder = "Title";

  const descriptionInput = document.createElement("input");
  descriptionInput.type = "text";
  descriptionInput.name = "description";
  descriptionInput.placeholder = "Description";

  const priorityInput = document.createElement("select");
  priorityInput.name = "priority";

  const highOption = document.createElement("option");
  highOption.value = "high";
  highOption.text = "high";
  priorityInput.appendChild(highOption);

  const mediumOption = document.createElement("option");
  mediumOption.value = "medium";
  mediumOption.text = "medium";
  priorityInput.appendChild(mediumOption);

  const lowOption = document.createElement("option");
  lowOption.value = "low";
  lowOption.text = "low";
  priorityInput.appendChild(lowOption);

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.name = "dueDate";

  const isDoneInput = document.createElement("input");
  isDoneInput.type = "checkbox";
  isDoneInput.name = "isDone";
  const isDoneLabel = document.createElement("label");
  isDoneLabel.textContent = "Completed";
  isDoneLabel.appendChild(isDoneInput);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Create Item";

  form.appendChild(projectSelect);
  form.appendChild(titleInput);
  form.appendChild(descriptionInput);
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
    console.log(selectedProject);
    console.log(title, description, priority, dueDate, isDone);
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

  return form;
}

function editItemForm(item, card) {
  const form = document.createElement("form");
  form.classList.add("form");

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.name = "title";
  titleInput.value = item.title;

  const descriptionInput = document.createElement("input");
  descriptionInput.type = "text";
  descriptionInput.name = "description";
  descriptionInput.value = item.description;

  const priorityInput = document.createElement("select");
  priorityInput.name = "priority";

  const highOption = document.createElement("option");
  highOption.value = "high";
  highOption.text = "high";
  priorityInput.appendChild(highOption);

  const mediumOption = document.createElement("option");
  mediumOption.value = "medium";
  mediumOption.text = "medium";
  priorityInput.appendChild(mediumOption);

  const lowOption = document.createElement("option");
  lowOption.value = "low";
  lowOption.text = "low";
  priorityInput.appendChild(lowOption);

  priorityInput.value = item.priority;

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.name = "dueDate";
  dueDateInput.value = item.dueDate;

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
  form.appendChild(descriptionInput);
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

  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Title:";
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.name = "title";
  titleInput.required = true;

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Create Project";

  form.appendChild(titleLabel);
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

  const isDone = document.createElement("input");
  isDone.type = "checkbox";
  isDone.checked = item.isDone;
  isDone.addEventListener("click", async () => {
    await ItemModule.toggleIsDone(item);
    displayAllItems();
  });

  const title = document.createElement("h3");
  title.textContent = item.title;

  const description = document.createElement("p");
  description.textContent = item.description;

  const priority = document.createElement("p");
  priority.textContent = `Priority: ${item.priority}`;

  const dueDate = document.createElement("p");
  dueDate.textContent = `Due Date: ${item.dueDate.toLocaleDateString()}`;

  const deleteLink = document.createElement("a");
  deleteLink.href = "#";
  deleteLink.textContent = "Delete";
  deleteLink.addEventListener("click", async (e) => {
    e.preventDefault();
    await ItemModule.deleteItem(item);
    card.remove();
  });

  const editLink = document.createElement("a");
  editLink.href = "#";
  editLink.textContent = "Edit";
  editLink.addEventListener("click", () => {
    const editForm = editItemForm(item, card);
    card.replaceWith(editForm);
  });

  card.appendChild(isDone);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(priority);
  card.appendChild(dueDate);
  card.appendChild(deleteLink);
  card.appendChild(editLink);

  return card;
}

async function projectCard(project) {
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("h3");
  title.textContent = project.title;
  title.addEventListener("click", () => {
    console.log(project);
    displayProjectItems(project);
  });

  const deleteLink = document.createElement("a");
  deleteLink.href = "#";
  deleteLink.textContent = "Delete";
  deleteLink.addEventListener("click", async (e) => {
    e.preventDefault();
    await ProjectModule.deleteProject(project);
    card.remove();
  });

  const editLink = document.createElement("a");
  editLink.href = "#";
  editLink.textContent = "Edit";
  editLink.addEventListener("click", () => {
    const editForm = editProjectForm(project, card);
    card.replaceWith(editForm);
  });

  card.appendChild(title);
  card.appendChild(deleteLink);
  card.appendChild(editLink);

  return card;
}

// ========================================= DISPLAY STUFF =====================================

async function displayAllItems() {
  const content = document.querySelector("#content");
  content.textContent = "";

  currentItems = await OrganizeModule.getAllTotalItems();

  currentItems.forEach(async (item) => {
    const card = await itemCard(item);
    content.appendChild(card);
  });

  return content;
}

async function displayDailyItems() {
  const content = document.querySelector("#content");
  content.textContent = "";

  currentItems = await OrganizeModule.getAllDailyItems();

  currentItems.forEach(async (item) => {
    const card = await itemCard(item);
    content.appendChild(card);
  });

  return content;
}

async function displayWeeklyItems() {
  const content = document.querySelector("#content");
  content.textContent = "";

  currentItems = await OrganizeModule.getAllWeeklyItems();

  currentItems.forEach(async (item) => {
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

  currentItems = project.array;

  currentItems.forEach(async (item) => {
    const card = await itemCard(item);
    content.appendChild(card);
  });

  return content;
}

async function displayByDate(project) {
  const content = document.querySelector("#content");
  content.textContent = "";

  let sortedItems = OrganizeModule.sortByDate(currentItems);

  if (project) {
    sortedItems = [...sortedItems, ...project.array];
  }

  sortedItems.forEach(async (item) => {
    const card = await itemCard(item);
    content.appendChild(card);
  });
}

async function displayByPriority(project) {
  const content = document.querySelector("#content");
  content.textContent = "";

  let sortedItems = OrganizeModule.sortByPriority(currentItems);

  if (project) {
    sortedItems = [...sortedItems, ...project.array];
  }

  sortedItems.forEach(async (item) => {
    const card = await itemCard(item);
    content.appendChild(card);
  });
}

// ============================================ CONTROLLER =====================================

async function controller(project) {
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

  const sortSelect = document.querySelector("#sort");
  sortSelect.addEventListener("change", async (e) => {
    const selectedOption = e.target.value;
    if (selectedOption === "dueDate") {
      console.log("due date");
      await displayByDate(project, currentItems);
    } else if (selectedOption === "priority") {
      console.log("priority");
      await displayByPriority(project, currentItems);
    }
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

displayAllItems();
displayProjects();
controller();
