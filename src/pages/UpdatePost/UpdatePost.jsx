import React, { use } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../../AuthProvider/AuthContext';
import Swal from 'sweetalert2';

const UpdatePost = () => {

    const { _id, rentAmount, availability, lifestylePreference, description, contactInfo, location } = useLoaderData()
    const { user } = use(AuthContext)
    const navigate = useNavigate()

    const updatePost = e => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const updatedPost = Object.fromEntries(formData.entries())
        console.log(updatedPost)

        fetch(`http://localhost:3000/posts/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updatedPost)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Updated Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                navigate('/')
            })
    }

    return (
        <div>
            <div className="hero  min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-2xl text-center font-bold">Update Your Post</h1>
                        <form onSubmit={updatePost} className="fieldset">

                            <label className="label">Location</label>
                            <input type="text" className="input" name='location' defaultValue={location} placeholder="Location" />

                            <label className="label">Rent Amount</label>
                            <input type="text" className="input" name='rentAmount' defaultValue={rentAmount} placeholder="Rent Amount" />

                            <label className="label">Room Type</label>
                            <select name='roomType' className="select">
                                <option value="">Room Type</option>
                                <option>Single</option>
                                <option>Shared</option>
                            </select>

                            <label className="label">Lifestyle Preference</label>
                            <select name='lifestylePreference' defaultValue={lifestylePreference} className="select">
                                <option value="">Lifestyle Preference</option>
                                <option>Pets</option>
                                <option>Non-smoker</option>
                            </select>

                            <label className="label">Description</label>
                            <textarea name='description' className="textarea" defaultValue={description} placeholder="Description"></textarea>

                            <label className="label">Contact Info</label>
                            <input type="text" className="input" name='contactInfo' defaultValue={contactInfo} placeholder="Contact Info" />

                            <label className="label">Availability</label>
                            <select name='availability' defaultValue={availability} className="select">
                                <option value="">Select availability</option>
                                <option>Available</option>
                                <option>Not Available</option>
                            </select>

                            <label className="label">Name</label>
                            {
                                user && <input type="name" defaultValue={user.displayName || user.name} className="input" name='name' readOnly />
                            }

                            <label className="label">Email</label>
                            {
                                user && <input type="email" defaultValue={user.email} className="input" name='email' readOnly />
                            }

                            <button className="btn btn-active mt-4 font-semibold text-2xl">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatePost;