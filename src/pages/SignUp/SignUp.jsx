import React from 'react';
import { Link } from 'react-router';

const SignUp = () => {
    return (
        <div>
            <div className="hero  min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <form className="fieldset">
                            <label className="label">Name</label>
                            <input type="name" className="input" placeholder="Name" />

                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />

                            <label className="label">Photo URL</label>
                            <input type="text" className="input" placeholder="Photo URL" />

                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            
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