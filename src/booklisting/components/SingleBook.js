import React from 'react'
import { useDispatch } from 'react-redux';
import { setBookData } from '../../redux/reducer/bookReducer';

export default function SingleBook({ item }) {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setBookData(item));
    }

    return (
        <div className="card col-lg-3 col-md-4 col-sm-6 col-12 mx-auto">
            <h2 className='mb-2'>{item?.title}</h2>
            <p>Author: {item?.author}</p>
            <p>Country: {item?.country}</p>
            <p>Language: {item?.language}</p>
            <p>Year: {item?.year}</p>
            <p>Pages: {item?.pages}</p>

            <div className='d-flex'>
                <a className='btn btn-warning col-lg-12' onClick={handleClick}>Edit</a>
            </div>
        </div>
    )
}
