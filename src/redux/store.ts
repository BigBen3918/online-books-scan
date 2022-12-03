import { configureStore } from "@reduxjs/toolkit";
import { bookReducer } from "./reducer";

export const store = configureStore({
    reducer: {
        books: bookReducer,
    },
});
