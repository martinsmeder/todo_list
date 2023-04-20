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

  // return form;
}

async function displayItems() {
  const content = document.querySelector("#content");

  const items = ItemModule.getAllItems();
  if (items.length === 0) {
    const message = document.createElement("p");
    message.textContent = "No items found.";
    content.appendChild(message);
  } else {
    const table = document.createElement("table");

    const tableHeader = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const titleHeader = document.createElement("th");
    titleHeader.textContent = "Title";
    headerRow.appendChild(titleHeader);
    const descriptionHeader = document.createElement("th");
    descriptionHeader.textContent = "Description";
    headerRow.appendChild(descriptionHeader);
    const priorityHeader = document.createElement("th");
    priorityHeader.textContent = "Priority";
    headerRow.appendChild(priorityHeader);
    const dueDateHeader = document.createElement("th");
    dueDateHeader.textContent = "Due Date";
    headerRow.appendChild(dueDateHeader);
    const isDoneHeader = document.createElement("th");
    isDoneHeader.textContent = "Is Done?";
    headerRow.appendChild(isDoneHeader);
    tableHeader.appendChild(headerRow);
    table.appendChild(tableHeader);

    const tableBody = document.createElement("tbody");
    items.forEach((item) => {
      const row = document.createElement("tr");

      const titleCell = document.createElement("td");
      titleCell.textContent = item.title;
      row.appendChild(titleCell);

      const descriptionCell = document.createElement("td");
      descriptionCell.textContent = item.description;
      row.appendChild(descriptionCell);

      const priorityCell = document.createElement("td");
      priorityCell.textContent = item.priority;
      row.appendChild(priorityCell);

      const dueDateCell = document.createElement("td");
      dueDateCell.textContent = item.dueDate;
      row.appendChild(dueDateCell);

      const isDoneCell = document.createElement("td");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = item.isDone;
      checkbox.addEventListener("change", () => {
        ItemModule.toggleIsDone(item);
        displayItems();
      });
      isDoneCell.appendChild(checkbox);
      row.appendChild(isDoneCell);

      const deleteCell = document.createElement("td");
      const deleteLink = document.createElement("a");
      deleteLink.href = "#";
      deleteLink.textContent = "Delete";
      deleteLink.addEventListener("click", async () => {
        await ItemModule.deleteItem(item);
        console.log(ItemModule.itemArray);
        displayItems();
      });

      deleteCell.appendChild(deleteLink);
      row.appendChild(deleteCell);

      tableBody.appendChild(row);
    });
    table.appendChild(tableBody);
    content.appendChild(table);
  }
}
