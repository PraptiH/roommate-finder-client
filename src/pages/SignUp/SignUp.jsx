import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../AuthProvider/AuthContext';
import { GoogleAuthProvider, updateProfile } from 'firebase/auth';


const SignUp = () => {

    const { createUser, createUser2 } = use(AuthContext)
    const navigate = useNavigate()
    const provider = new GoogleAuthProvider()
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, name, photoURL, ...restFromData } = Object.fromEntries(formData.entries());
        console.log(email, password, name, photoURL, restFromData);

        createUser(email, password)
            .then(async result => {
                const user = result.user;
                
                await updateProfile(user, { displayName: name, photoURL: photoURL });
                const userProfile = {
                    name: name,
                    email: user?.email,
                    photoURL: photoURL,
                    creationTime: user?.metadata.creationTime,
                    lastSignInTime: user?.metadata.lastSignInTime,
                    ...restFromData
                };

                fetch('http://localhost:3000/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            console.log("New User", data);
                        } else {
                            console.log("User Already exist");
                        }
                    });
                navigate('/');
            })
            .catch(error => {
                console.log(error);
            });
    }

    const handleGoogleSignUp = (e) => {

        e.preventDefault()

        createUser2(provider)
            .then(result => {
                const user = result.user;
                const userProfile = {
                    name: user?.displayName,
                    email: user?.email,
                    photoURL: user?.photoURL,
                    creationTime: user?.metadata.creationTime,
                    lastSignInTime: user?.metadata.lastSignInTime
                };

                fetch('http://localhost:3000/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("After save data", data);
                    });
                navigate('/');
            })
            .catch(error => {
                console.log(error);
            });
    }

    const handlePasswordChange = (e) => {
        const pass = e.target.value;
        setPassword(pass)
        if (pass.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }

        if (!/[A-Z]/.test(pass)) {
            setError("Password must contain at least one uppercase letter.");
            return;
        }

        if (!/[a-z]/.test(pass)) {
            setError("Password must contain at least one lowercase letter.");
            return;
        }
        else {
            setError("");
            return;
        }

    }

    return (
        <div>
            <div className="hero  min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <form onSubmit={handleSignUp} className="fieldset">
                            <label className="label">Name</label>
                            <input type="name" className="input" name='name' placeholder="Name" />

                            <label className="label">Email</label>
                            <input type="email" className="input" name='email' placeholder="Email" />

                            <label className="label">Photo URL</label>
                            <input type="text" className="input" name='photoURL' placeholder="Photo URL" />

                            <label className="label">Password</label>
                            <input type="password" className="input" name='password' value={password} onChange={handlePasswordChange} placeholder="Password" />
                            {
                                error && <p className='text-red-500'>{error}</p>
                            }

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-active mt-4">Sign Up</button>
                            <p className='text-center font-semibold text-sm'>OR</p>
                            <button onClick={handleGoogleSignUp} className="btn btn-active ">Sign Up with Google</button>
                            <p className='font-medium text-sm '>Already have an account? <Link className='text-blue-600' to="/signin">Sign In</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;