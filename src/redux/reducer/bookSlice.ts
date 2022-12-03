import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { Action } from "../../services";

const initialState: StateObject = {
    books: [],
    valueSearch: "",
    category: "1",
    sort: "relevance",
    maxResults: 10,
    loading: false,
};

export const getBooks: any = createAsyncThunk(
    "books/getBooks",
    async (data: any) => {
        const { valueSearch, category, sort, maxResults } = data;
        try {
            const response: AxiosResponse = await Action.get("volumes", {
                params: {
                    q: valueSearch + category,
                    orderBy: sort,
                    maxResults: maxResults,
                    startIndex: 1,
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
