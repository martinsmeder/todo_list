// TO DO:
// ProjectsModule --> Delete Item from project

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
const ItemsModule = (() => {
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

// Modules
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

  const addItem = (project, title, description, priority, dueDate, isDone) => {
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

  const getAllProjects = () => projectArray;

  return {
    projectArray,
    createProject,
    deleteProject,
    editProject,
    addItem,
    getAllProjects,
  };
})();

// Tests

const aProject = ProjectModule.createProject("Do Stuff", []);

console.log(aProject);

ProjectModule.addItem(
  aProject,
  "Stuff",
  "Do some stuff",
  "high",
  "01jul23",
  false
);

console.log(aProject);

const newTask = ItemsModule.createItem(
  "Learn2Code",
  "Code code code",
  "high",
  "01jul23",
  false
);

console.log(newTask);
