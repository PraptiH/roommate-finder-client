import React, { useEffect, useState } from 'react';
import PostCard from '../../components/PostCard/PostCard';
import homie1 from '../../assets/homie1.jpg'
import homie2 from '../../assets/homie2.jpg'
import homie3 from '../../assets/homie3.jpg'
import { Fade, Slide } from "react-awesome-reveal";
import Dhaka from '../../assets/Dhaka.jpg'
import Chittagong from '../../assets/chittagong.jpg'
import Saidpur from '../../assets/Saidpur.jpg'
import Sylhet from '../../assets/sylhet.jpg'

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

            <div className='mt-10 w-11/12 mx-auto'>
                <h1 className='text-3xl font-bold text-center mb-8 text-gray-800'>Find Out Your Desired Location </h1>
                <div className='flex gap-4'>
                    <div>
                        <img className='rounded-xl w-full h-60' src={Dhaka} alt="" />
                        <p className='text-center font-medium text-lg'>Dhaka</p>
                    </div>
                    <div>
                        <img className='rounded-xl w-full h-60' src={Chittagong} alt="" />
                        <p className='text-center font-medium text-lg'>Chittagong</p>
                    </div>
                    <div>
                        <img className='rounded-xl w-full h-60' src={Saidpur} alt="" />
                        <p className='text-center font-medium text-lg'>Saidpur</p>
                    </div>
                    <div>
                        <img className='rounded-xl w-full h-60' src={Sylhet} alt="" />
                        <p className='text-center font-medium text-lg'>Sylhet</p>
                    </div>
                </div>
            </div>

            <div className='mt-10 w-11/12 mx-auto'>
                <h1 className='text-3xl font-bold text-center mb-8 text-gray-800'>Frequently Asked Question</h1>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-semibold">Is using this platform free?</div>
                    <div className="collapse-content text-sm">Yes, creating an account and browsing roommate posts is completely free. You only pay your share of rent and bills directly to your roommate/landlord.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">How do I contact a roommate or landlord?</div>
                    <div className="collapse-content text-sm">You can view the contact details provided in each post to safely contact with them.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">Can I post my own listing?</div>
                    <div className="collapse-content text-sm">Absolutely! Once you sign in, you can create a new post by sharing details like location, rent, and availability.</div>
                </div>
            </div>
        </div>
    );
};

export default Home;

