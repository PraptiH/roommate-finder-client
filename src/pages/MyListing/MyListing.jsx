import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';


const MyListing = () => {


    const users = useLoaderData();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/posts`)
            .then(res => res.json())
            .then(data => {
                setPosts(data)
                console.log(data)
            })
    }, [])

    const handleDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:3000/posts/${id}`,{
            method : 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("deleted")
            const remainingPost = posts.filter(post=>post._id !== data._id)
            setPosts(remainingPost)
        }
        )
    }

    return (
        <div className='w-11/12 mx-auto my-20'>
            <div className="overflow-x-auto">
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
                        {users.map(user => {
                            const post = posts.find((p) => p.email === user.email);

                            return (
                                post && (
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

                                            <button onClick={()=>handleDelete(post._id)} className='btn text-sm'>Delete</button>

                                        </th>
                                    </tr>
                                )
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyListing;