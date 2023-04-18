// TO DO:
// Organize
// An object with functions for organizing todo items by due date, priority, etc such as getting all
// items due today or this week and sorting by priority or date

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

console.log(ItemModule, ProjectModule);
