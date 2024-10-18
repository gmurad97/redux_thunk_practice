import { createSlice } from "@reduxjs/toolkit";
import { getTodoList } from "./todoThunks.js";

const initialState = {
    items: [],
    isLoading: false,
    errors: ""
};

const todoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTodoList.pending, (state, action) => {
                state.isLoading = true;
                state.errors = "";
            })
            .addCase(getTodoList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
            })
            .addCase(getTodoList.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = "Failed to fetch todos data...";
            });
    }
});

export default todoSlice.reducer;