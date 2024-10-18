import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodoList = createAsyncThunk("todo/getTodoList", async () => {
    const response = await axios.get("https://dummyjson.com/todos");
    return response.data.todos;
});