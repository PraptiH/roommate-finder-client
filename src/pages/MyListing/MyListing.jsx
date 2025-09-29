import React, { use, useEffect, useState } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2'
import { AuthContext } from '../../AuthProvider/AuthContext';


const MyListing = () => {

    const { user } = use(AuthContext)
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/posts`)
            .then(res => res.json())
            .then(data => {
                setPosts(data)
            })
    }, [])

    const myPosts = posts.filter(p => p.email === user?.email);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then(result => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:3000/posts/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your post has been deleted.",
                                    icon: "success"
                                });
                                const remainingPost = posts.filter(post => post._id !== id)
                                setPosts(remainingPost)
                            }
                        })
                } else {
                    Swal.fire({
                        title: "Cancelled",
                        text: "Your post is safe!",
                        icon: "info"
                    });
                }
            });
    }

    return (
        <div className='w-11/12 mx-auto my-20'>
            <h2 className='font-semibold text-4xl text-center mb-20'>My Post</h2>
            {
                myPosts.length === 0 ?
                    (<p>Do not have any post</p>) :
                    (<div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr >
                                    <th className='font-semibold text-2xl'>Location</th>
                                    <th className='font-semibold text-2xl'>Rent</th>
                                    <th className='font-semibold text-2xl'>Lifestyle Preference</th>
                                    <th className='font-semibold text-2xl'>Availability</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {myPosts.map(post => (

                                    <tr key={user._id}>
                                        <td>
                                            <p className='font-medium text-lg'>{post.location}</p>
                                        </td>
                                        <td>
                                            <p className='font-medium text-lg'>{post.rentAmount}</p>
                                        </td>
                                        <td>
                                            <p className='font-medium text-lg'>{post.lifestylePreference}</p>
                                        </td>
                                        <td>
                                            <p className='font-medium text-lg'>{post.availability}</p>
                                        </td>

                                        <th className='flex gap-5'>
                                            <Link to={`/updatepost/${post._id}`}>
                                                <button className='btn text-sm'>Update</button>
                                            </Link>

                                            <button onClick={() => handleDelete(post._id)} className='btn text-sm'>Delete</button>

                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>)
            }

        </div>
    );
};

export default MyListing;