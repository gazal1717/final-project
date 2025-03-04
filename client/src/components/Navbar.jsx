import React from "react";
import { Link } from "react-router-dom";
import { MdHome, MdFitnessCenter } from "react-icons/md";
import { FaUserPlus, FaSignInAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-900 text-white py-4">
      <div className="w-3/4 mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Gym Tracker
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link className="btn-link flex items-center gap-1" to="/">
            <MdHome />
            Home
          </Link>
          <Link className="btn-link flex items-center gap-1" to="/workouts">
            <MdFitnessCenter />
            Workouts
          </Link>
          <Link className="btn-link flex items-center gap-1" to="/register">
            <FaUserPlus />
            Register
          </Link>
          <Link className="btn-link flex items-center gap-1" to="/login">
            <FaSignInAlt />
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
