import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../AuthProvider/AuthContext';

const SignUp = () => {

    const { createUser } = use(AuthContext)
    const navigate= useNavigate()

    const handleSignUp = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoUrl = e.target.photoUrl.value;
        const password = e.target.password.value;
        const info = { name, email, photoUrl, password };
        console.log(info)

        createUser(email, password)
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
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
                            <input type="text" className="input" name='photoUrl' placeholder="Photo URL" />

                            <label className="label">Password</label>
                            <input type="password" className="input" name='password' placeholder="Password" />

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-active mt-4">Sign Up</button>
                            <p className='text-center font-semibold text-sm'>OR</p>
                            <button className="btn btn-active ">Sign Up with Google</button>
                            <p className='font-medium text-sm '>Already have an account? <Link className='text-blue-600' to="/signin">Sign In</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;