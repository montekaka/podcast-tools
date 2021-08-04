// https://reacttraining.com/react-router/web/api/StaticRouter/context-object
// navigator means history here 
// history come from src/index.js

let navigator;

export const setNavigator = (nav: any) => {
  navigator = nav;
}

export const navigate = (routeName: any) => {
  navigator.push(routeName)
}