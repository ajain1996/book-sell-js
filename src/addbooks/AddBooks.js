// AddBookForm.js
import React, { useEffect, useState } from 'react';
import './AddBook.css'; // Import your CSS file
import { createBookAPI, editBookAPI } from '../API/API';
import { useDispatch, useSelector } from 'react-redux';
import { removeBookData, setBookData } from '../redux/reducer/bookReducer';

const AddBookForm = ({ }) => {
  const dispatch = useDispatch();
  const { bookData, isEditable, bookId } = useSelector(state => state.Book);

  console.log('====================================');
  console.log(bookId);
  console.log('====================================');

  const [formData, setFormData] = useState({
    author: '',
    country: '',
    language: '',
    link: '',
    pages: '',
    title: '',
    year: '',
    id: 556,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddBook = () => {
    if (isEditable) {
      editBookAPI(formData, bookId, (res) => {
        if (res !== null) {
          alert("Book " + bookId + "Edited")
          dispatch(removeBookData({}));
          setFormData({
            author: '',
            country: '',
            language: '',
            link: '',
            pages: '',
            title: '',
            year: '',
          });
        }
      })
    } else {
      createBookAPI(formData, (res) => {
        if (res !== null) {
          alert("Data Created")
          dispatch(removeBookData({}));
          setFormData({
            author: '',
            country: '',
            language: '',
            link: '',
            pages: '',
            title: '',
            year: '',
          });
        }
      });
    }
  };

  // useEffect(() => {
  //   setFormData({
  //     author: bookData?.author ? bookData?.author : '',
  //     country: bookData?.country ? bookData?.country : '',
  //     language: bookData?.language ? bookData?.language : '',
  //     link: bookData?.link ? bookData?.link : '',
  //     pages: bookData?.pages ? bookData?.pages : '',
  //     title: bookData?.title ? bookData?.title : '',
  //     year: bookData?.year ? bookData?.year : '',
  //     id: 556,
  //   })
  // }, [])


  return (
    <div className="add-book-form-container">
      <h2>Add a New Book</h2>
      <div className="form-fields">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              name="author"
              defaultValue={isEditable ? bookData?.author : formData.author}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              defaultValue={isEditable ? bookData?.country : formData.country}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="language">Language</label>
            <input
              type="text"
              id="language"
              name="language"
              defaultValue={isEditable ? bookData?.language : formData.language}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="link">Link</label>
            <input
              type="text"
              id="link"
              name="link"
              defaultValue={isEditable ? bookData?.link : formData.link}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="pages">Pages</label>
            <input
              type="text"
              id="pages"
              name="pages"
              defaultValue={isEditable ? bookData?.pages : formData.pages}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={isEditable ? bookData?.title : formData.title}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="year">Year</label>
            <input
              type="text"
              id="year"
              name="year"
              defaultValue={isEditable ? bookData?.year : formData.year}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <button onClick={handleAddBook} className="add-book-button">
        {isEditable ? "Edit Book" : "Add Book"}
      </button>
    </div>
  );
};

export default AddBookForm;
