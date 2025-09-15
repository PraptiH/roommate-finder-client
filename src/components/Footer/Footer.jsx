import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
const Footer = () => {
    return (

        <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10 mt-10">
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
            </nav>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4">
                    <a className='text-2xl' target='_blank' href='https://www.facebook.com/'>
                        <FaFacebook />
                    </a>
                    <a className='text-2xl' target='_blank' href='https://www.instagram.com/'>
                        <FaInstagramSquare />
                    </a>
                    <a className='text-2xl' target='_blank' href='https://x.com/home'>
                        <RiTwitterXFill />
                    </a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;