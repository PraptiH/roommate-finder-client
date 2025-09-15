import React from 'react';
import errorImage from '../../assets/ErrorImage.jpeg'
import { NavLink } from 'react-router';
import { FaArrowLeftLong } from "react-icons/fa6";

const ErrorPage = () => {
    return (
        <div className='w-11/12 mx-auto  my-50'>
            <img className='w-6xl rounded-2xl' src={errorImage} alt="" />
            <div className='flex items-center justify-center gap-2'>
                <FaArrowLeftLong />
                <NavLink className='italic font-medium text-lg text-center' to='/'>Return Home</NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;