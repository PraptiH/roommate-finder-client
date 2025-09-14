import React from 'react';
import logo from '../../assets/WebsiteLogo.jpg'
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='w-11/12 mx-auto mt-10 flex items-center justify-between'>
            <div>
                <img className='w-20' src={logo} alt="" />
            </div>
            
            <div className='space-x-5'>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/findRoommate'>Find Roommate</NavLink>
                <NavLink to='/browseListing'>Browse Listing</NavLink>
                <NavLink to='/myListing'>My Listing</NavLink>
            </div>

            <div>
                <button  className='btn btn-active'>Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;