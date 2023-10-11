import { combineReducers } from "redux";

import Books from './booksReducer';
import Book from './bookReducer';

export default combineReducers({
    Books,
    Book
})
