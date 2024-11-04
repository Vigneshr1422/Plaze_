import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="bg-pink-500 text-white py-4 fixed w-full top-0 left-0 z-50">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                <h1 className="text-3xl font-bold mb-2 md:mb-0">Vignesh_R</h1>
                <nav>
                    <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                        <li>
                            <Link 
                                to="/" 
                                className="no-underline text-xl md:text-2xl transition duration-300 hover:border-b-2 hover:border-white"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/services" 
                                className="no-underline text-xl md:text-2xl transition duration-300 hover:border-b-2 hover:border-white"
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/about" 
                                className="no-underline text-xl md:text-2xl transition duration-300 hover:border-b-2 hover:border-white"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/admin" 
                                className="no-underline text-xl md:text-2xl transition duration-300 hover:border-b-2 hover:border-white"
                            >
                                Admin
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
