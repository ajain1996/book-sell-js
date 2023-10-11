import React, { useEffect } from 'react'
import './BookListing.css';
import { getAllBooksAPI } from '../API/API';
import { useDispatch, useSelector } from 'react-redux';
import { setBooksData } from '../redux/reducer/booksReducer';
import SingleBook from './components/SingleBook';
const BookListing = () => {
  const dispatch = useDispatch();
  const { booksData } = useSelector(state => state.Books);

  useEffect(() => {
    getAllBooksAPI((res) => {
      if (res !== null) {
        dispatch(setBooksData(res?.data))
      }
    })
  }, []);

  return (
    <div className='main-container mt-5'>
      <div className="card-container row mx-auto">
        {
          booksData?.map((item, indx) => {
            return (
              <SingleBook key={indx} item={item} />
            );
          })
        }
      </div></div>
  )
}

export default BookListing