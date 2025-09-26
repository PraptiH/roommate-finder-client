import React from 'react';
import { useLoaderData } from 'react-router';
import room from '../../assets/Room.jpg'

const PostDetails = () => {
    const post = useLoaderData();
    console.log(post)
    const {name, email, contactInfo, rentAmount, location, description} = post
    return (
         <div className='border-2 border-gray-200 rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow'>
                    <div className='space-y-3'>
                        <img className='w-full h-48 object-cover rounded-lg' src={room} alt="Room" />
                        <div className='flex justify-between items-center'>
                            <h3 className='text-lg font-semibold text-gray-800'>{name}</h3>
                            <p className='text-xl font-bold text-green-600'>{rentAmount}</p>
                        </div>
                        <p className='text-gray-600 text-sm line-clamp-3'>{description}</p>
                        <p className='text-gray-600 text-sm line-clamp-3'>{location}</p>
                        <p className='text-gray-600 text-sm line-clamp-3'>{email}</p>
                        <p className='text-gray-600 text-sm line-clamp-3'>{contactInfo}</p>
                       
                    </div>
                </div>
    );
};

export default PostDetails;

// name, email, contactInfo, rentInfo, location