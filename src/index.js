/* eslint-disable no-unused-vars */
import {
  itemForm,
  editItemForm,
  projectForm,
  editProjectForm,
  itemCard,
  projectItemCard,
  projectCard,
  displayAllItems,
  displayDailyItems,
  displayWeeklyItems,
  displayProjects,
  displayProjectItems,
  // eslint-disable-next-line import/extensions
} from "./interface.mjs";

console.log("This seem to be working...");

async function controller(project) {
  displayAllItems();
  displayProjects();

  const allLinks = document.querySelectorAll("#allItems a");
  allLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      // eslint-disable-next-line no-shadow
      allLinks.forEach((link) => {
        link.classList.remove("active");
      });
      e.target.classList.add("active");

      const allProjects = document.querySelectorAll(".card");
      allProjects.forEach((card) => {
        card.classList.remove("active");
      });
    });
  });

  const homeLink = document.querySelector("#allItems a:first-child");
  homeLink.addEventListener("click", async () => {
    await displayAllItems();
  });

  const dailyLink = document.querySelector("#allItems a:nth-child(2)");
  dailyLink.addEventListener("click", async () => {
    await displayDailyItems();
  });

  const weeklyLink = document.querySelector("#allItems a:nth-child(3)");
  weeklyLink.addEventListener("click", async () => {
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
