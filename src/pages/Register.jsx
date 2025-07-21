import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/authSlice';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, user } = useSelector(state => state.auth);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerUser(form));
  };

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-12">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <img
          src="https://cdn.pixabay.com/photo/2024/01/04/09/34/plant-8486960_1280.png"
          alt="Register"
          className="w-full max-w-md mx-auto"
        />
      </div>

      <div className="md:w-1/2 w-full max-w-md mx-auto bg-white shadow-md rounded-xl p-8">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Create Your Account</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-green-500"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-green-500"
              placeholder="you@example.com"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-green-500"
              placeholder="Choose a password"
              onChange={handleChange}
              required
            />
          </div>
          <button disabled={loading}
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account? <Link to="/login" className="text-green-600 hover:underline">Login</Link>
        </p>
      </div>
    </section>
  );
}
