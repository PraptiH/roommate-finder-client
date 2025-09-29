import React, { useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthContext';
import PostCard from '../../components/PostCard/PostCard';

const Home = () => {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/homePosts`)
            .then(res => res.json())
            .then(data => {
                setPosts(data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])



    return (
        <div className='min-h-screen bg-gray-50 py-8 border-2'>
            <div className='container mx-auto px-4'>
                <h1 className='text-3xl font-bold text-center mb-8 text-gray-800'>Find Your Roommate</h1>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
                    {
                        posts.filter(post => post.availability === 'Available')
                            .map(post => <PostCard
                                key={post._id}
                                post={post}>
                            </PostCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;