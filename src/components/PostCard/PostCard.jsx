import React from 'react';
import room from '../../assets/Room.jpg';
import { Link } from 'react-router';

const PostCard = ({ post }) => {


    return (
        <div className='border-2 border-gray-200 rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow'>
            <div className='space-y-3'>
                <img className='w-full h-48 object-cover rounded-lg' src={room} alt="Room" />
                <div className='flex justify-between items-center'>
                    <h3 className='text-lg font-semibold text-gray-800'>{post.name}</h3>
                    <p className='text-xl font-bold text-green-600'>{post.rentAmount}</p>
                </div>
                <p className='text-gray-600 text-sm line-clamp-3'>{post.description}</p>
                <Link to={`/posts/${post._id}`}>
                    <button className='btn'>Details</button>
                </Link>
            </div>
        </div>
    );
};

export default PostCard;

// {post, posts, setPosts}