# Redux Practice Project

## What is Redux?

Redux is a global state management library often described as the **single source of truth**. It is designed to solve problems like **props drilling** and **complex state management** in JavaScript applications.

Before Redux, a pattern called Flux was commonly used, but it had some limitations. In 2015, during a React conference, **Dan Abramov** introduced Redux as a simpler and more predictable alternative. Although it's commonly used with React, Redux is an **independent library** and can be used with any JavaScript framework.
Source: https://www.youtube.com/watch?v=1i04-A7kfFI&t=126s

---

## Slices

### `todosSlice`

**Purpose:**  
Manages the state and actions related to the **todo list** feature.

**Details:**
- Handles a list of todos with properties like `id`, `title`, `status`, and `error`.
- Provides actions such as:
  - `addToDo` – to add a new todo item.
  - `removeToDo` – to remove a todo by its ID.
- Supports asynchronous fetching of todos using `fetchTodos` (implemented via `createAsyncThunk`).
- Manages state transitions for loading, success, and error cases.
- Used in the `Todos` component to display, add, and remove todos, while also handling loading and error states in the UI.

---

### `counterSlice`

**Purpose:**  
Manages the state and actions for a **counter** feature.

**Details:**
- Tracks a numeric value (e.g., a counter).
- Provides actions such as:
  - `increment`
  - `decrement`
  - `reset`
- Used in the `Counter` component to display and update the counter value.

---

## Store Setup

The Redux store is configured to include both `todosSlice` and `counterSlice` reducers. This enables centralized and global state management for both the todo list and counter features.



https://github.com/user-attachments/assets/63e771af-6b41-43a1-a617-350049029062


