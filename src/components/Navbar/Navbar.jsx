import React, { use } from 'react';
import logo from '../../assets/WebsiteLogo.jpg'
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../AuthProvider/AuthContext';
import profile from '../../assets/profile.jpg'

const Navbar = () => {

    const navigate = useNavigate()
    const { user, logOut } = use(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='w-11/12 mx-auto mt-10 flex items-center justify-between'>
            <div>
                <img className='w-20' src={logo} alt="" />
            </div>

            <div className='space-x-5'>
                <NavLink to='/home' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-gray-500'}>Home</NavLink>
                <NavLink to='/findRoommate' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-gray-500'}>Find Roommate</NavLink>
                <NavLink to='/browseListing' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-gray-500'}>Browse Listing</NavLink>
                <NavLink to='/myListing' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-gray-500'}>My Listing</NavLink>
            </div>

            <div className='flex items-center gap-5'>
                {
                    user && <img className='w-10 h-10 rounded-full border-1' src={user.photoURL ? user.photoURL : profile} title={user.displayName ? user.displayName : 'User'} alt="" />
                }
                {
                    user ?
                        (<button onClick={handleLogOut} className='btn btn-active'>Log Out</button>) :
                        (<NavLink className='btn btn-active' to="signin">Log In</NavLink>)
                }
            </div>
        </div>
    );
};

export default Navbar;