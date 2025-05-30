import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../../features/Todos/todosSlice";
import counterReducer from "../../features/Counter/counterSlice";



export const store = configureStore({
  reducer: {
    todos:todosReducer, 
    counter:counterReducer
  },
});