// Remember to uninstall npm install --save-dev babel-loader @babel/preset-env and change
// webpack.config to src/index.js when done.

// TO DO:
// SidebarModule:
// * addProjectToSiderbar()
// * removeProjectFromSidebar()

// DisplayContentModule:
// * displayAllItems()
// * displayDailyItems()
// * displayWeeklyItems()
// * displayProjectItems()
// * displayItem()

// FormModule:
// * openNewItemForm()
// * openNewProjectForm()

// EditModule:
// * removeItem()
// * editItem()
// * toggleDone()

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
