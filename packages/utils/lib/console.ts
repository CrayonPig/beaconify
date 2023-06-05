import { PKG_NAME } from './const';

const consoleTitle = `【${PKG_NAME}】`;

export const log = (...arg) => console.log(consoleTitle, ...arg);

export const error = (...arg) => console.error(consoleTitle, ...arg);
