/* eslint-disable no-use-before-define */

import {
  ItemModule,
  ProjectModule,
  OrganizeModule,
  // eslint-disable-next-line import/extensions
} from "./appLogic.mjs";

// ======================================== CREATE FORMS ====================================

export function itemForm() {
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

export function editItemForm(item, card) {
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
  // Convert dueDate to a valid Date object
  const dueDate =
    item.dueDate instanceof Date ? item.dueDate : new Date(item.dueDate);
  dueDateInput.value = dueDate.toISOString().slice(0, 10);

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

export function projectForm() {
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

export function editProjectForm(project, card) {
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

export async function itemCard(item) {
  // Skip creating the card if the item is not in the itemArray
  if (!ItemModule.itemArray.includes(item)) {
    // Return a comment node
    return document.createComment("Item not in itemArray");
  }

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
  });

  const title = document.createElement("p");
  title.textContent = item.title;

  const dueDate = document.createElement("p");
  const options = { day: "numeric", month: "short", year: "2-digit" };
  if (typeof item.dueDate === "string") {
    // Convert the string date to a Date object
    const date = new Date(item.dueDate);
    dueDate.textContent = date.toLocaleDateString("en-US", options);
  } else {
    // Assume the dueDate is already a Date object
    dueDate.textContent = item.dueDate.toLocaleDateString("en-US", options);
  }

  const editIcon = document.createElement("img");
  editIcon.src = "images/edit.png";
  editIcon.addEventListener("click", () => {
    const editForm = editItemForm(item, card);
    card.replaceWith(editForm);
  });

  const deleteIcon = document.createElement("img");
  deleteIcon.src = "images/delete.png";
  deleteIcon.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("Deleting item:", item); // Log the item being deleted
    await ItemModule.deleteItem(item);
    console.log("Item deleted:", item); // Log that the item has been deleted
    console.log("Updated item array:", ItemModule.getAllItems()); // Log the updated item array
    card.remove();
  });

  leftDiv.appendChild(priority);
  leftDiv.appendChild(isDone);
  leftDiv.appendChild(title);
  card.appendChild(leftDiv);

  rightDiv.appendChild(dueDate);
  rightDiv.appendChild(editIcon);
  rightDiv.appendChild(deleteIcon);
  card.appendChild(rightDiv);

  return card;
}

export async function projectItemCard(projectItem) {
  const card = document.createElement("div");
  card.classList.add("card");
  // card.classList.add("project-item-card");

  const leftDiv = document.createElement("div");
  leftDiv.classList.add("left");

  const rightDiv = document.createElement("div");
  rightDiv.classList.add("right");

  const title = document.createElement("p");
  title.textContent = projectItem.title;

  const priority = document.createElement("div");
  priority.classList.add("priority");
  if (projectItem.priority === "low") {
    priority.classList.add("low");
  } else if (projectItem.priority === "medium") {
    priority.classList.add("medium");
  } else if (projectItem.priority === "high") {
    priority.classList.add("high");
  }

  const isDone = document.createElement("input");
  isDone.classList.add("left");
  isDone.type = "checkbox";
  isDone.checked = projectItem.isDone;
  isDone.addEventListener("click", async () => {
    await ItemModule.toggleIsDone(projectItem);
  });

  const dueDate = document.createElement("p");
  const options = { day: "numeric", month: "short", year: "2-digit" };
  if (typeof projectItem.dueDate === "string") {
    // Convert the string date to a Date object
    const date = new Date(projectItem.dueDate);
    dueDate.textContent = date.toLocaleDateString("en-US", options);
  } else {
    // Assume the dueDate is already a Date object
    dueDate.textContent = projectItem.dueDate.toLocaleDateString(
      "en-US",
      options
    );
  }

  const editIcon = document.createElement("img");
  editIcon.src = "images/edit.png";
  editIcon.addEventListener("click", () => {
    const editForm = editItemForm(projectItem, card); // Need editProjectItemForm as well?
    card.replaceWith(editForm);
  });

  const deleteIcon = document.createElement("img");
  deleteIcon.src = "images/delete.png";
  deleteIcon.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("Deleting project item:", projectItem); // Log the project item being deleted
    const project = ProjectModule.getProjectByTitle(projectItem.title);
    await ProjectModule.deleteProjectItem(project, projectItem);
    console.log("Project item deleted:", projectItem); // Log that the project item has been deleted
    console.log("Updated project array:", ProjectModule.getAllProjects()); // Log the updated project array
    card.remove();
  });

  leftDiv.appendChild(priority);
  leftDiv.appendChild(isDone);
  leftDiv.appendChild(title);
  card.appendChild(leftDiv);

  rightDiv.appendChild(dueDate);
  rightDiv.appendChild(editIcon);
  rightDiv.appendChild(deleteIcon);
  card.appendChild(rightDiv);

  return card;
}

export async function projectCard(project) {
  const card = document.createElement("div");
  card.classList.add("card");

  const leftDiv = document.createElement("div");
  leftDiv.classList.add("left");

  const rightDiv = document.createElement("div");
  rightDiv.classList.add("right");

  const title = document.createElement("a");
  title.href = "#";
  title.textContent = project.title;
  title.addEventListener("click", async () => {
    const allLinks = document.querySelectorAll("#allItems a");
    allLinks.forEach((link) => {
      link.classList.remove("active");
    });

    const allCards = document.querySelectorAll("#projectContainer > .card");
    // eslint-disable-next-line no-shadow
    allCards.forEach((card) => {
      card.classList.remove("active");
    });
    card.classList.add("active");

    await displayProjectItems(project);
  });

  const editIcon = document.createElement("img");
  editIcon.src = "images/edit.png";
  editIcon.addEventListener("click", () => {
    const editForm = editProjectForm(project, card);
    card.replaceWith(editForm);
  });

  const deleteIcon = document.createElement("img");
  deleteIcon.src = "images/delete.png";
  deleteIcon.addEventListener("click", async (e) => {
    e.preventDefault();
    await ProjectModule.deleteProject(project);
    card.remove();
  });

  leftDiv.appendChild(title);

  rightDiv.appendChild(editIcon);
  rightDiv.appendChild(deleteIcon);

  card.appendChild(leftDiv);
  card.appendChild(rightDiv);

  return card;
}

// ========================================= DISPLAY STUFF =====================================

export async function displayAllItems() {
  const content = document.querySelector("#content");
  content.textContent = "";

  const allProjects = document.querySelectorAll(".card");
  allProjects.forEach((card) => {
    card.classList.remove("active");
  });

  const homeLink = document.querySelector("#allItems a:first-child");
  homeLink.classList.add("active");

  const items = await OrganizeModule.getAllTotalItems();
  const projects = await ProjectModule.getAllProjects();

  items.forEach(async (item) => {
    const card = await itemCard(item);
    content.appendChild(card);
  });

  projects.forEach(async (project) => {
    project.array.forEach(async (projectItem) => {
      const card = await projectItemCard(projectItem);
      content.appendChild(card);
    });
  });

  return content;
}

export async function displayDailyItems() {
  const content = document.querySelector("#content");
  content.textContent = "";

  const items = await OrganizeModule.getAllDailyItems();
  const projects = ProjectModule.getAllProjects();

  items.forEach(async (item) => {
    const card = await itemCard(item);
    content.appendChild(card);
  });

  projects.forEach(async (project) => {
    project.array.forEach(async (projectItem) => {
      const card = await projectItemCard(projectItem);
      content.appendChild(card);
    });
  });

  return content;
}

export async function displayWeeklyItems() {
  const content = document.querySelector("#content");
  content.textContent = "";

  const items = await OrganizeModule.getAllWeeklyItems();
  const projects = ProjectModule.getAllProjects();

  items.forEach(async (item) => {
    const card = await itemCard(item);
    content.appendChild(card);
  });

  projects.forEach(async (project) => {
    project.array.forEach(async (projectItem) => {
      const card = await projectItemCard(projectItem);
      content.appendChild(card);
    });
  });

  return content;
}

export async function displayProjects() {
  const projectContainer = document.querySelector("#projectContainer");
  projectContainer.textContent = "";

  const projects = await ProjectModule.getAllProjects();

  projects.forEach(async (project) => {
    const card = await projectCard(project);
    projectContainer.appendChild(card);
  });

  return projectContainer;
}

export async function displayProjectItems(project) {
  const content = document.querySelector("#content");
  content.textContent = "";

  const projectItems = project.array;

  projectItems.forEach(async (projectItem) => {
    const card = await projectItemCard(projectItem);
    content.appendChild(card);
  });

  return content;
}
