import React, { use } from 'react';
import { AuthContext } from '../../AuthProvider/AuthContext';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router';

const FindRoommate = () => {

    const { user } = use(AuthContext)
    const navigate = useNavigate()

    const handleFindRoommate = e => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const newPost = Object.fromEntries(formData.entries())
        console.log(newPost)

        fetch(`http://localhost:3000/posts`, {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newPost)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Your post has been Added!",
                        icon: "success",
                        draggable: true
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
                        <h1 className="text-2xl text-center font-bold">Looking for a Roommate</h1>
                        <form onSubmit={handleFindRoommate} className="fieldset">

                            <label className="label">Location</label>
                            <input type="text" className="input" name='location' required placeholder="Location" />

                            <label className="label">Rent Amount</label>
                            <input type="text" className="input" name='rentAmount' required placeholder="Rent Amount" />

                            <label className="label">Room Type</label>
                            <select name='roomType' required className="select">
                                <option value="">Room Type</option>
                                <option>Single</option>
                                <option>Shared</option>
                            </select>

                            <label className="label">Lifestyle Preference</label>
                            <select name='lifestylePreference' required className="select">
                                <option value="">Lifestyle Preference</option>
                                <option>Pets</option>
                                <option>Non-smoker</option>
                            </select>

                            <label className="label">Description</label>
                            <textarea name='description' className="textarea" required placeholder="Description"></textarea>

                            <label className="label">Contact Info</label>
                            <input type="text" className="input" name='contactInfo' required placeholder="Contact Info" />

                            <label className="label">Availability</label>
                            <select name='availability' required className="select">
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




                            <button className="btn btn-active mt-4 font-semibold text-2xl">Post</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindRoommate;