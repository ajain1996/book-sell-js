import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
    name: 'bookData',
    initialState: {
        bookData: {},
        isEditable: false,
        bookId: "",
    },
    reducers: {
        setBookData(state, action) {
            const book = action.payload;
            return { ...state, bookData: book, isEditable: true, bookId: book?.id };
        },
        removeBookData(state, action) {
            return { ...state, bookData: {}, isEditable: false };
        },
    },
});



export const { setBookData, removeBookData } = bookSlice.actions;

export default bookSlice.reducer;
