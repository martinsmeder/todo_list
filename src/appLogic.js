// TO DO:
// InterfaceHelpers
// Exports utility functions that help with rendering the interface, such as functions for
// creating HTML elements and attaching event listeners

// Factories
const ItemFactory = (title, description, priority, dueDate, isDone) => ({
  title,
  description,
  priority,
  dueDate,
  isDone,
});

const ProjectFactory = (title, array = []) => ({
  title,
  array,
});

// Modules
const ItemModule = (() => {
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

  const editItem = (item, title, description, priority, dueDate, isDone) => {
    /* eslint-disable no-param-reassign */
    item.title = title;
    item.description = description;
    item.priority = priority;
    item.dueDate = dueDate;
    item.isDone = isDone;
  };

  const getAllItems = () => itemArray;

  return {
    itemArray,
    createItem,
    deleteItem,
    editItem,
    getAllItems,
  };
})();

const ProjectModule = (() => {
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

const OrganizeModule = (() => {
  // Helper functions
  const isDueToday = (dateString) => {
    console.log(dateString);
    const today = new Date();
    const date = new Date(dateString);
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isDueThisWeek = (dateString) => {
    const today = new Date();
    const date = new Date(dateString);
    const endOfWeek = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + (7 - today.getDay())
    );
    return date >= today && date <= endOfWeek;
  };

  // Methods
  const sortByDate = (items) =>
    items.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

  const sortByPriority = (items) => {
    const priorities = ["high", "medium", "low"];
    return items.sort(
      (a, b) => priorities.indexOf(a.priority) - priorities.indexOf(b.priority)
    );
  };

  const getAllDailyItems = () => {
    const allDailyItems = [];
    const allItems = [...ItemModule.itemArray];

    ProjectModule.projectArray.forEach((project) => {
      allItems.push(...project.array);
    });

    allItems.forEach((item) => {
      if (isDueToday(item.dueDate)) {
        allDailyItems.push(item);
      }
    });

    return allDailyItems;
  };

  const getAllWeeklyItems = () => {
    const allWeeklyItems = [];
    const allItems = [...ItemModule.itemArray];

    ProjectModule.projectArray.forEach((project) => {
      allItems.push(...project.array);
    });

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

console.log(OrganizeModule);
