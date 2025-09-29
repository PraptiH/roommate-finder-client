import React from 'react';
import { useLoaderData } from 'react-router';
import room from '../../assets/Room.jpg'
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { useState } from 'react';
import { use } from 'react';
import { AuthContext } from '../../AuthProvider/AuthContext';


const PostDetails = () => {
    const post = useLoaderData();
    const { user } = use(AuthContext)
    const { name, email, contactInfo, rentAmount, location, description, availability } = post
    const [liked, setLiked] = useState(false)
    const [count, setCount] = useState(0)

    const handleLike = () => {
        if (user.email === email) {
            return
        }

        setLiked(true)
        setCount(count + 1)
    }
    return (
        <div className='border-2 border-gray-200 rounded-lg shadow-md p-4 bg-white w-7/12 mx-auto mt-10 hover:shadow-lg transition-shadow'>
            {
                count > 0 && <p className='font-thin text-lg my-5'>{count} Peolple like your post </p>
            }
            <div className='space-y-3'>
                <img className='w-full h-90 object-cover rounded-lg' src={room} alt="Room" />
                <div className='flex justify-between items-center'>
                    <h3 className='text-lg font-semibold text-gray-800'>{name}</h3>
                    <p className='text-xl font-bold text-green-600'>{rentAmount}</p>
                </div>
                <p className='text-gray-600 text-sm line-clamp-3'>{description}</p>
                <div className='flex justify-between'>
                    <p className='text-gray-600 text-sm line-clamp-3'>{location}</p>
                    <p className='text-gray-600 text-sm line-clamp-3'>{availability}</p>
                </div>
                <p className='text-gray-600 text-sm line-clamp-3'>{email}</p>
                <div className='flex items-center justify-between'>

                    <button onClick={handleLike}>
                        {
                            liked ? <BiSolidLike /> : <BiLike />
                        }
                    </button>

                    {
                        liked ? <p className='text-gray-600 text-sm line-clamp-3'>{contactInfo} </p> : " "
                    }
                </div>
            </div>
        </div>
    );
};

export default PostDetails;

