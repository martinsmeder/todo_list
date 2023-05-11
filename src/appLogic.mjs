/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */

// ======================================== FACTORIES ========================================
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

// ========================================= ITEM MODULE ======================================
export const ItemModule = (() => {
  const itemArray = [];

  const createItem = (title, description, priority, dueDate, isDone) => {
    const newItem = ItemFactory(title, description, priority, dueDate, isDone);
    itemArray.push(newItem);
    saveItems(); // Save the updated itemArray
    return newItem;
  };

  const deleteItem = (item) => {
    const index = itemArray.indexOf(item);
    if (index > -1) {
      itemArray.splice(index, 1);
      saveItems(); // Save the updated itemArray after deletion
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
    item.dueDate = new Date(dueDate);
    item.isDone = isDone;
    saveItems(); // Save the updated itemArray after editing
  };

  const toggleIsDone = (item) => {
    item.isDone = !item.isDone;
    saveItems(); // Save the updated itemArray after toggling
  };

  const getAllItems = () => itemArray;

  // Function to save items to local storage
  const saveItems = () => {
    localStorage.setItem("itemArray", JSON.stringify(itemArray));
  };

  // Function to load items from local storage
  const loadItems = () => {
    const storedItems = JSON.parse(localStorage.getItem("itemArray"));
    if (storedItems && Array.isArray(storedItems)) {
      itemArray.length = 0; // Clear the existing itemArray
      itemArray.push(...storedItems); // Push the stored items to the itemArray
    }
  };

  // Call the loadItems function during module initialization to load items from local storage
  loadItems();

  return {
    itemArray,
    createItem,
    deleteItem,
    editItem,
    toggleIsDone,
    getAllItems,
  };
})();

// ========================================== PROJECT MODULE ==================================
export const ProjectModule = (() => {
  const projectArray = [];

  const createProject = (title) => {
    const newProject = ProjectFactory(title, []);
    projectArray.push(newProject);
    saveProjects(); // Save the updated projectArray
    return newProject;
  };

  const deleteProject = (project) => {
    const index = projectArray.indexOf(project);
    if (index > -1) {
      projectArray.splice(index, 1);
      saveProjects(); // Save the updated projectArray after deletion
    }
  };

  const editProject = (project, title) => {
    project.title = title;
    saveProjects(); // Save the updated projectArray after editing
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
    saveProjects(); // Save the updated projectArray
    return newProjectItem;
  };

  const deleteProjectItem = (project, item) => {
    const index = project.array.indexOf(item);
    if (index > -1) {
      project.array.splice(index, 1);
      saveProjects(); // Save the updated projectArray after item deletion
    }
  };

  const getAllProjects = () => projectArray;

  const getProjectByTitle = (title) =>
    ProjectModule.getAllProjects().find((project) => project.title === title);

  // Function to save projects to local storage
  const saveProjects = () => {
    localStorage.setItem("projectArray", JSON.stringify(projectArray));
  };

  // Function to load projects from local storage
  const loadProjects = () => {
    const storedProjects = JSON.parse(localStorage.getItem("projectArray"));
    if (storedProjects && Array.isArray(storedProjects)) {
      projectArray.length = 0; // Clear the existing projectArray
      projectArray.push(...storedProjects); // Push the stored projects to the projectArray
    }
  };

  // Call the loadProjects function during module initialization to load projects from local storage
  loadProjects();

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

// ========================================= ORGANIZE MODULE ==================================
export const OrganizeModule = (() => {
  // ================ Helper functions ==============
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

  // ================== Methods ==============
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

// ======================================== DUMMY ITEMS ======================================
const today = new Date();

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const twoDaysFromNow = new Date();
twoDaysFromNow.setDate(twoDaysFromNow.getDate() + 2);

const thirtyDaysFromNow = new Date();
thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);

const item1 = ItemFactory(
  "Finish this lengthy todo list project",
  "Some words",
  "low",
  today,
  true
);
ItemModule.itemArray.push(item1);

const item2 = ItemFactory(
  "Buy snus and coffee to celebrate",
  "Some words",
  "medium",
  tomorrow,
  false
);
ItemModule.itemArray.push(item2);

const item3 = ItemFactory(
  "Ingest snus and coffee",
  "Some words",
  "high",
  twoDaysFromNow,
  false
);
ItemModule.itemArray.push(item3);

const project1 = ProjectFactory("Merge with AI", []);
ProjectModule.projectArray.push(project1);

const item4 = ItemFactory(
  "Acquire lots of money",
  "Some words",
  "low",
  today,
  false
);
project1.array.push(item4);

const item5 = ItemFactory(
  "Pre-order neuralink",
  "Some words",
  "medium",
  tomorrow,
  false
);
project1.array.push(item5);

const item6 = ItemFactory(
  "Profit",
  "Some words",
  "high",
  twoDaysFromNow,
  false
);
project1.array.push(item6);

const project2 = ProjectFactory("Future thing", []);
ProjectModule.projectArray.push(project2);

const item7 = ItemFactory(
  "The thing that never get done",
  "Some words",
  "low",
  thirtyDaysFromNow,
  false
);
project2.array.push(item7);
