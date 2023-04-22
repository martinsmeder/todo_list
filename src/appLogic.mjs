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
      isDone
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

  return {
    projectArray,
    createProject,
    deleteProject,
    editProject,
    addProjectItem,
    deleteProjectItem,
    getAllProjects,
  };
})();

export const OrganizeModule = (() => {
  // ============== Helper functions ===============
  const isDueToday = (dateString) => {
    const today = new Date(); // Create a new Date object representing today's date.
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
    const today = new Date(); // Create a new Date object from the dateString argument.
    const date = new Date(dateString); // Create a new Date object from the dateString argument.
    const endOfWeek = new Date( // Create a new Date object representing the end of the current week.
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + (7 - today.getDay())
    );
    // Return true if the date falls between today and the end of the week, false otherwise.
    return date >= today && date <= endOfWeek;
  };

  // =================== Methods ====================
  const sortByDate = (items) =>
    // Sort the items in place
    items.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

  const sortByPriority = (items) => {
    const priorities = ["high", "medium", "low"];
    // Sort the items in place
    return items.sort(
      (a, b) => priorities.indexOf(a.priority) - priorities.indexOf(b.priority)
    );
  };

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

  return {
    getAllDailyItems,
    getAllWeeklyItems,
    sortByDate,
    sortByPriority,
  };
})();
