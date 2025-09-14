import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../AuthProvider/AuthContext';
import { GoogleAuthProvider } from 'firebase/auth';

const SignIn = () => {

    const { signInUser, createUser2 } = use(AuthContext)
    const navigate = useNavigate()
    const provider = new GoogleAuthProvider()

    const handleSignIn = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const info = { password, email }
        console.log(info)

        signInUser(email, password)
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleSignIn = () => {
        createUser2(provider)
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
                        <h1 className="text-5xl font-bold">Sign In now!</h1>
                        <form onSubmit={handleSignIn} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" name='email' placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" name='password' placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-active mt-4">Sign In</button>
                            <p className='text-center font-semibold text-sm'>OR</p>
                            <button onClick={handleGoogleSignIn} className="btn btn-active ">Sign In with Google</button>
                            <p className='font-medium text-sm '>Do not have an account? <Link className='text-blue-600' to="/signup">Sign Up</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;