import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./todo/todoSlice.js";

const rootReducer = combineReducers({
    todo: todoReducer
});

export default rootReducer;