import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer, filtersReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});










// //только один store
// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";

// const initialState = {
//   tasks: [
//     { id: 0, text: "Learn HTML and CSS", completed: true },
//     { id: 1, text: "Get good at JavaScript", completed: true },
//     { id: 2, text: "Master React", completed: false },
//     { id: 3, text: "Discover Redux", completed: false },
//     { id: 4, text: "Build amazing apps", completed: false },
//   ],
//   filters: {
//     status: "all",
//   },
//   changeFilterInput: {
//     value:''
//   }
// };
// const rootReducer = (state = initialState, action) => {
//   return state;
// };
// // Создаем расширение стора чтобы добавить инструменты разработчика
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);