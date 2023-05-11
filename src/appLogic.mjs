/* eslint-disable no-unused-vars */

// Factories
export const ItemFactory = (title, description, priority, dueDate, isDone) => ({
  title,
  description,
  priority,
  dueDate,
  isDone,
});

export const ProjectFactory = (title, array = []) => ({
  title,
  array,
});

// Modules
export const ItemModule = (() => {
  const itemArray = [];

  const createItem = (title, description, priority, dueDate, isDone) => {
    const newItem = ItemFactory(title, description, priority, dueDate, isDone);
    itemArray.push(newItem);
    return newItem;
  };

  const deleteItem = (item) => {
    const index = itemArray.indexOf(item);
    if (index > -1) {
      itemArray.splice(index, 1);
    }
  };

  const editItem = async (
    item,
    title,
    description,
    priority,
    dueDate,
    isDone
  ) => {
    /* eslint-disable no-param-reassign */
    item.title = title;
    item.description = description;
    item.priority = priority;
    item.dueDate = dueDate;
    item.isDone = isDone;
  };

  const toggleIsDone = (item) => {
    item.isDone = !item.isDone;
  };

  const getAllItems = () => itemArray;

  return {
    itemArray,
    createItem,
    deleteItem,
    editItem,
    toggleIsDone,
    getAllItems,
  };
})();

export const ProjectModule = (() => {
  const projectArray = [];

  const createProject = (title) => {
    const newProject = ProjectFactory(title, []);
    projectArray.push(newProject);
    return newProject;
  };

  const deleteProject = (project) => {
    const index = projectArray.indexOf(project);
    if (index > -1) {
      projectArray.splice(index, 1);
    }
  };

  const editProject = (project, title) => {
    project.title = title;
  };

  const addProjectItem = (
    project,
    title,
    description,
    priority,
    dueDate,
    isDone
  ) => {
    const newProjectItem = ItemFactory(
      title,
      description,
      priority,
      dueDate,
      isDone,
      project
    );
    project.array.push(newProjectItem);
    return newProjectItem;
  };

  const deleteProjectItem = (project, item) => {
    const index = project.array.indexOf(item);
    if (index > -1) {
      project.array.splice(index, 1);
    }
  };

  const getAllProjects = () => projectArray;

  const getProjectByTitle = (title) =>
    ProjectModule.getAllProjects().find((project) => project.title === title);

  return {
    projectArray,
    createProject,
    deleteProject,
    editProject,
    addProjectItem,
    deleteProjectItem,
    getAllProjects,
    getProjectByTitle,
  };
})();

export const OrganizeModule = (() => {
  // ============== Helper functions ===============
  const isDueToday = (dateString) => {
    // console.log(`datestring: ${dateString}`);
    const today = new Date(); // Create a new Date object representing today's date.
    today.setHours(0, 0, 0, 0); // Set time to midnight to reset the clock
    const date = new Date(dateString); // Create a new Date object from the dateString argument.

    // Check if the date's day, month, and year are equal to the current date's day, month, and year.
    // If all three are true, return true (meaning the date is due today). Otherwise, return false.
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isDueThisWeek = (dateString) => {
    // console.log(`datestring: ${dateString}`);
    const today = new Date(); // Create a new Date object from the dateString argument.
    today.setHours(0, 0, 0, 0); // Set time to midnight to reset the clock
    const date = new Date(Date.parse(dateString)); // Create a new Date object from the dateString argument.
    const endOfWeek = new Date( // Create a new Date object representing the end of the current week.
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + (7 - today.getDay())
    );
    // Return true if the date falls between today and the end of the week, false otherwise.
    return date >= today && date <= endOfWeek;
  };

  // =================== Methods ====================
  const getAllDailyItems = () => {
    const allDailyItems = [];

    // Create a copy of the array of all items using the spread operator
    const allItems = [...ItemModule.itemArray];

    // Iterate through all projects and add their items to the allItems array
    ProjectModule.projectArray.forEach((project) => {
      allItems.push(...project.array);
    });

    // Iterate through all items
    allItems.forEach((item) => {
      // Check if the item is due today...
      if (isDueToday(item.dueDate)) {
        // ...if the item is due today, add it to the allDailyItems array
        allDailyItems.push(item);
      }
    });

    return allDailyItems;
  };

  const getAllWeeklyItems = () => {
    const allWeeklyItems = [];

    // Create a copy of the array of all items using the spread operator
    const allItems = [...ItemModule.itemArray];

    // Add items from each project to the allItems array
    ProjectModule.projectArray.forEach((project) => {
      allItems.push(...project.array);
    });

    // Add all the items that are due within this week to the allWeeklyItems array
    allItems.forEach((item) => {
      if (isDueThisWeek(item.dueDate)) {
        allWeeklyItems.push(item);
      }
    });

    return allWeeklyItems;
  };

  const getAllTotalItems = () => {
    const allTotalItems = [...ItemModule.itemArray];

    ProjectModule.projectArray.forEach((project) => {
      allTotalItems.push(...project.array);
    });

    return allTotalItems;
  };

  return {
    isDueToday,
    isDueThisWeek,
    getAllDailyItems,
    getAllWeeklyItems,
    getAllTotalItems,
  };
})();

// Tests...
const item1 = ItemModule.createItem(
  "Item1",
  "First item",
  "medium",
  new Date(2023, 4, 11),
  false
);
const item2 = ItemModule.createItem(
  "Item2",
  "Second item",
  "high",
  new Date(2023, 4, 12),
  false
);
const item3 = ItemModule.createItem(
  "Item3",
  "Third item",
  "low",
  new Date(2023, 4, 13),
  false
);

const aProject = ProjectModule.createProject("aProject", []);

const item4 = ProjectModule.addProjectItem(
  aProject,
  "Item4",
  "Fourth item",
  "medium",
  new Date(2023, 4, 11),
  false
);
const item5 = ProjectModule.addProjectItem(
  aProject,
  "Item5",
  "Fifth item",
  "high",
  new Date(2023, 4, 12),
  false
);
const item6 = ProjectModule.addProjectItem(
  aProject,
  "Item6",
  "Sixth item",
  "low",
  new Date(2023, 4, 13),
  false
);
