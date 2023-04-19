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
