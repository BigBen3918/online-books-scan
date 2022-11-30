import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

const initialState = {
    books: [],
    valueSearch: "",
    category: "all",
    sort: "relevance",
    maxResults: 10,
    loading: false,
    error: null,
};

export const getBooks: any = createAsyncThunk(
    "books/getBooks",
    async (data: any) => {
        const { valueSearch, category, sort, maxResults } = data;
        console.log(data);
        try {
            const response: AxiosResponse = await axios.get("volumes", {
                params: {
                    q: valueSearch + category,
                    orderBy: sort,
                    maxResults: maxResults,
                },
            });

            return response.data.items;
        } catch (err: any) {
            console.log(err);
            return [];
        }
    }
);

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        booksSearch: (state, action) => {
            state.valueSearch = action.payload;
        },
        booksCategory: (state, action) => {
            state.category = action.payload;
        },
        booksSort: (state, action) => {
            state.sort = action.payload;
        },
        booksIndex: (state, action) => {
            state.maxResults = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getBooks.pending, (state) => {
                state.loading = true;
            })
            .addCase(
                getBooks.fulfilled,
                (state, actions: PayloadAction<any>) => {
                    state.loading = false;
                    state.books = actions.payload;
                    console.log(state.books);
                }
            )
            .addCase(getBooks.rejected, (state) => {
                state.loading = false;
            });
    },
});

export default bookSlice.reducer;
export const { booksSearch, booksCategory, booksSort, booksIndex } =
    bookSlice.actions;
