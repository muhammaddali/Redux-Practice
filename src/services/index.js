import axios from "axios";

export const getTodos = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
