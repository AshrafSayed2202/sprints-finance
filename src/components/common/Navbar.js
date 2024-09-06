import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white font-bold text-xl">
                    Portfolio Manager
                </Link>
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/" className="text-white hover:text-gray-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio" className="text-white hover:text-gray-300">
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to="/transactions" className="text-white hover:text-gray-300">
                            Transactions
                        </Link>
                    </li>
                    <li>
                        <Link to="/finance" className="text-white hover:text-gray-300">
                            Finance
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className="text-white hover:text-gray-300">
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
