// TO DO:
// ItemsModule
// An object with functions for creating new todo items, deleting todo items, updating
// todo items, and returning all todo items

// Factories
const ItemFactory = (title, description, priority, dueDate, isDone) => ({
  title,
  description,
  priority,
  dueDate,
  isDone,
});

const ProjectFactory = (title, projectArray = []) => ({
  title,
  projectArray,
});

const NoteFactory = (title, content) => ({ title, content });

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

  return {
    itemArray,
    createItem,
    deleteItem,
  };
})();

// Test
const newTask = ItemsModule.createItem(
  "Learn2Code",
  "Code code code",
  "high",
  "01jul23",
  false
);

console.table(ItemsModule.itemArray);

ItemsModule.deleteItem(newTask);

console.table(ItemsModule.itemArray);
