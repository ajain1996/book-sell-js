import { createSlice } from '@reduxjs/toolkit';

export const booksSlice = createSlice({
    name: 'booksData',
    initialState: {
        booksData: [],
        login: false,
        isFreeAccess: true,
    },
    reducers: {
        setBooksData(state, action) {
            const books = action.payload;
            return { ...state, booksData: books };
        },
        removeBooksData(state, action) {
            return { ...state, booksData: [] };
        },
    },
});



export const { setBooksData, removeBooksData } = booksSlice.actions;

export default booksSlice.reducer;
