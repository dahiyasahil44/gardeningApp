import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/authSlice';

export default function Login() {
  const [form, setForm] = useState({ email: 'sahil@gmail.com', password: '123456' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, user } = useSelector(state => state.auth);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser(form));
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
          src="https://cdn.pixabay.com/photo/2022/07/31/04/42/seat-7354939_1280.png"
          alt="Login"
          className="w-full max-w-md mx-auto"
        />
      </div>

      <div className="md:w-1/2 w-full max-w-md mx-auto bg-white shadow-md rounded-xl p-8">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Login to GreenThumb</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-green-500"
              placeholder="you@example.com"
              value={form.email}
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
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account? <Link to="/register" className="text-green-600 hover:underline">Register</Link>
        </p>
      </div>
    </section>
  );
}
