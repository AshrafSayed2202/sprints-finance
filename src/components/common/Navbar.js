import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4">
            <ul className="flex justify-between text-white">
                <li>
                    <Link to="/" className="hover:underline">Home</Link>
                </li>
                <li>
                    <Link to="/inventory" className="hover:underline">Inventory</Link>
                </li>
                <li>
                    <Link to="/finance" className="hover:underline">Finance</Link>
                </li>
                <li>
                    <Link to="/sales" className="hover:underline">Sales</Link>
                </li>
                <li>
                    <Link to="/login" className="hover:underline">Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
