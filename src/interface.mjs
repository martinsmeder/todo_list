// Remember to uninstall npm install --save-dev babel-loader @babel/preset-env and change
// webpack.config to src/index.js when done.

import {
  ItemFactory,
  ProjectFactory,
  ItemModule,
  ProjectModule,
  OrganizeModule,
  // eslint-disable-next-line import/extensions
} from "./appLogic.mjs";

console.log(
  ItemFactory,
  ProjectFactory,
  ItemModule,
  ProjectModule,
  OrganizeModule
);

// TO DO:
// 2. Get the projects to work --> Make them into clickable cards with delete/edit buttons
// 3. Get the home, daily, weekly to work
// 4. Implement functionality to organize based on dueDate or priority
// 4. Overlay and style

// ======================================== CREATE FORMS ====================================

function createItemForm() {
  const content = document.querySelector("#content");

  const form = document.createElement("form");
  form.classList.add("form");

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
  highOption.value = "High";
  highOption.text = "High";
  priorityInput.appendChild(highOption);

  const mediumOption = document.createElement("option");
  mediumOption.value = "Medium";
  mediumOption.text = "Medium";
  priorityInput.appendChild(mediumOption);

  const lowOption = document.createElement("option");
  lowOption.value = "Low";
  lowOption.text = "Low";
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

  form.appendChild(titleInput);
  form.appendChild(descriptionInput);
  form.appendChild(priorityInput);
  form.appendChild(dueDateInput);
  form.appendChild(isDoneLabel);
  form.appendChild(submitButton);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const description = e.target.elements.description.value;
    const priority = e.target.elements.priority.value;
    const dueDate = e.target.elements.dueDate.value;
    const isDone = e.target.elements.isDone.checked;
    await ItemModule.createItem(title, description, priority, dueDate, isDone);
    e.target.reset();
    form.style.display = "none";
    await displayItems();
  });

  content.appendChild(form);

  return form;
}

function createEditForm(item, card) {
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
  highOption.value = "High";
  highOption.text = "High";
  priorityInput.appendChild(highOption);

  const mediumOption = document.createElement("option");
  mediumOption.value = "Medium";
  mediumOption.text = "Medium";
  priorityInput.appendChild(mediumOption);

  const lowOption = document.createElement("option");
  lowOption.value = "Low";
  lowOption.text = "Low";
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
    const newDueDate = e.target.elements.dueDate.value;
    const newIsDone = e.target.elements.isDone.checked;
    await ItemModule.editItem(
      item,
      newTitle,
      newDescription,
      newPriority,
      newDueDate,
      newIsDone
    );
    card.replaceWith(await createCard(item));
    e.target.reset();
    form.style.display = "none";
    await displayItems();
  });

  return form;
}

function createProjectForm() {
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

// ===================================== CREATE TASKS/ITEMS ======================================

async function createCard(item) {
  const card = document.createElement("div");
  card.classList.add("card");

  const isDone = document.createElement("input");
  isDone.type = "checkbox";
  isDone.checked = item.isDone;
  isDone.addEventListener("click", async () => {
    await ItemModule.toggleIsDone(item);
    displayItems();
  });

  const title = document.createElement("h3");
  title.textContent = item.title;

  const description = document.createElement("p");
  description.textContent = item.description;

  const priority = document.createElement("p");
  priority.textContent = `Priority: ${item.priority}`;

  const dueDate = document.createElement("p");
  dueDate.textContent = `Due Date: ${item.dueDate}`;

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
    const editForm = createEditForm(item, card);
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

// ========================================= DISPLAY STUFF =====================================

async function displayItems() {
  const content = document.querySelector("#content");
  content.textContent = "";

  const items = ItemModule.getAllItems();

  items.forEach(async (item) => {
    const card = await createCard(item);
    content.appendChild(card);
  });

  return content;
}

async function displayProjects() {
  const projectContainer = document.querySelector("#projectContainer");
  projectContainer.innerHTML = "";

  const projects = await ProjectModule.getAllProjects();

  const ul = document.createElement("ul");

  projects.forEach((project) => {
    const li = document.createElement("li");
    li.textContent = project.title;
    ul.appendChild(li);
  });

  projectContainer.appendChild(ul);
}

// ============================================ CONTROLLER =====================================

function controller() {
  const newTaskBtn = document.querySelector("#newTaskBtn");
  newTaskBtn.addEventListener("click", () => {
    console.log("Hi!");
    createItemForm();
  });

  const newProjectBtn = document.querySelector("#newProjectBtn");
  newProjectBtn.addEventListener("click", () => {
    console.log("Hi!");
    createProjectForm();
  });
}

controller();
