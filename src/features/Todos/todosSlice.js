import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { getTodos } from "../../../services";

export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
  const todos = await getTodos();
  return todos;
});

const initialState = {
  todos: [{ id: 1, title: "" }],
};

const todosSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const todo = {
        id: nanoid(),
        title: action.payload,
        status: "idle",
        error: null,
      };
      state.todos.push(todo);
    },
    removeToDo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
        state.todos = [];
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addToDo, removeToDo } = todosSlice.actions;
export default todosSlice.reducer;
