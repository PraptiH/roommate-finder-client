import React, { useEffect, useState } from 'react';
import PostCard from '../../components/PostCard/PostCard';
import homie1 from '../../assets/homie1.jpg'
import homie2 from '../../assets/homie2.jpg'
import homie3 from '../../assets/homie3.jpg'
import { Fade, Zoom, Slide } from "react-awesome-reveal";

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
        <div className='min-h-screen bg-gray-50 py-8 border-2 w-11/12 mx-auto'>

            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full relative">
                    <img
                        src={homie1}
                        className="w-full h-96 object-cover blur-xs" />
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='text-center bg-white opacity-60 p-8 rounded-xl shadow-2xl backdrop-blur-sm max-w-md mx-4 border border-gray-200'>
                            <Fade cascade damping={30} >
                                <h2 className='text-3xl font-bold mb-4 text-gray-800'>Find your perfect roommate</h2>
                            </Fade>
                            <Slide direction="up">
                                <p className='text-gray-600 text-lg'>Easily connect with people looking for shared spaces</p>
                            </Slide>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full relative">
                    <img
                        src={homie2}
                        className="w-full h-96 object-cover  blur-xs" />
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='text-center bg-white opacity-60 p-8 rounded-xl shadow-2xl backdrop-blur-sm max-w-md mx-4 border border-gray-200'>
                            <Fade cascade damping={30}>
                                <h2 className='text-3xl font-bold mb-4 text-gray-800'>Post & Discover Rooms</h2>
                            </Fade>
                            <Slide direction='up'>
                                <p className='text-gray-600 text-lg'>Share your listing and find like-minded people</p>
                            </Slide>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full relative">
                    <img
                        src={homie3}
                        className="w-full h-96 object-cover  blur-xs " />
                    <div className='absolute inset-0 flex items-center justify-center '>
                        <div className='text-center bg-white opacity-60  p-8 rounded-xl shadow-2xl border backdrop-blur-sm border-gray-200 max-w-md mx-4 '>
                            <Fade cascade damping={30}>
                                <h2 className='text-3xl font-bold mb-4 text-gray-800'>Safe & Reliable</h2>
                            </Fade>
                            <Slide direction="up">
                                <p className='text-gray-600 text-lg'>Trusted by students and professionals</p>
                            </Slide>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container  px-4 w-11/12 mx-auto'>
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

