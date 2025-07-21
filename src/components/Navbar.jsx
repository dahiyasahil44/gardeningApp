import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/authSlice';
import { auth } from '../services/firebase';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = async () => {
    await auth.signOut();
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-green-700">
          🌿 GreenThumb
        </Link>

        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-green-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-green-600">About</Link></li>
          <li><Link to="/services" className="hover:text-green-600">Our Services</Link></li>
          <li><Link to="/blogs" className="hover:text-green-600">Blogs</Link></li>
          <li><Link to="/contact" className="hover:text-green-600">Contact Us</Link></li>
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <Link to="/dashboard" className="hover:text-green-600">My Profile</Link>
              <button
                onClick={handleLogout}
                className="px-4 py-1 border border-red-500 text-red-500 rounded hover:bg-red-100"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="px-4 py-1 border border-green-600 text-green-600 rounded hover:bg-green-100">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
