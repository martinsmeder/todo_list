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

// 1
// Extract the form creation logic into its own function. This function should only be
// responsible for creating and returning the form element. This makes it easier to reuse the
// form creation logic elsewhere in the codebase.

// 2
// Extract the item card creation logic into its own function. Similar to the previous point,
// this function should only be responsible for creating and returning the item card element.
// This makes it easier to reuse the item card creation logic elsewhere in the codebase.

// 3
// Move the logic for displaying items into a separate module or component. This makes it easier
// to reason about the code and keeps the logic for displaying items separate from other
// functionality.

// New task
const newTaskBtn = document.querySelector("#newTaskBtn");
newTaskBtn.addEventListener("click", () => {
  console.log("Hi!");
  createItemForm();
});

async function createItemForm() {
  const content = document.querySelector("#content");
  const form = document.createElement("form");

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.name = "title";
  titleInput.placeholder = "Title";
  form.appendChild(titleInput);

  const descriptionInput = document.createElement("input");
  descriptionInput.type = "text";
  descriptionInput.name = "description";
  descriptionInput.placeholder = "Description";
  form.appendChild(descriptionInput);

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

  form.appendChild(priorityInput);

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.name = "dueDate";
  form.appendChild(dueDateInput);

  const isDoneInput = document.createElement("input");
  isDoneInput.type = "checkbox";
  isDoneInput.name = "isDone";
  const isDoneLabel = document.createElement("label");
  isDoneLabel.textContent = "Completed";
  isDoneLabel.appendChild(isDoneInput);
  form.appendChild(isDoneLabel);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Create Item";
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

  return content;
}

async function displayItems() {
  const content = document.querySelector("#content");
  content.textContent = "";

  const items = ItemModule.getAllItems();

  if (items.length === 0) {
    const message = document.createElement("p");
    message.textContent = "No items found.";
    content.appendChild(message);
    return content;
  }

  items.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const isDone = document.createElement("input");
    isDone.type = "checkbox";
    isDone.checked = item.isDone;
    isDone.addEventListener("change", async () => {
      await ItemModule.toggleIsDone(item);
      displayItems();
    });
    card.appendChild(isDone);

    const title = document.createElement("h3");
    title.textContent = item.title;
    card.appendChild(title);

    const description = document.createElement("p");
    description.textContent = item.description;
    card.appendChild(description);

    const priority = document.createElement("p");
    priority.textContent = `Priority: ${item.priority}`;
    card.appendChild(priority);

    const dueDate = document.createElement("p");
    dueDate.textContent = `Due Date: ${item.dueDate}`;
    card.appendChild(dueDate);

    const deleteLink = document.createElement("a");
    deleteLink.href = "#";
    deleteLink.textContent = "Delete";
    deleteLink.addEventListener("click", async () => {
      await ItemModule.deleteItem(item);
      console.log(ItemModule.itemArray);
      displayItems();
    });
    card.appendChild(deleteLink);

    content.appendChild(card);
  });

  return content;
}
