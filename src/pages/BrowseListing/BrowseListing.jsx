import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import profile from '../../assets/profile.jpg'

const BrowseListing = () => {
    const posts = useLoaderData();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/users`)
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [])

    return (
        <div className='w-11/12 mx-auto my-20'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr >

                            <th className='font-bold text-2xl'>Name</th>
                            <th className='font-bold text-2xl'>Location</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(post => {
                            const user = users.find((u) => u.email === post.email);

                            return (
                                <tr key={post._id}>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    {user && (
                                                        <img
                                                            src={user?.photoURL || profile}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    )}
                                                </div>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-xl">{post.name}</p>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='text-lg font-medium'>{post.location}</p>
                                    </td>

                                    <th>
                                        <Link to={`/posts/${post._id}`}>
                                            <button className='btn text-lg'>Details</button>
                                        </Link>
                                    </th>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BrowseListing;