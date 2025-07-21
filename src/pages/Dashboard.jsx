import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Dashboard() {
  const user = useSelector(state => state.auth.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);



  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-700">
            Welcome, {user?.email || 'Gardener'} 🌿
          </h1>
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/my-plants" className="bg-white rounded-xl shadow hover:shadow-md p-6 transition">
            <h2 className="text-xl font-semibold text-green-600 mb-2">🌱 My Plants</h2>
            <p>Track your plants' health and details.</p>
          </Link>

          <Link to="/reminders" className="bg-white rounded-xl shadow hover:shadow-md p-6 transition">
            <h2 className="text-xl font-semibold text-green-600 mb-2">⏰ Care Reminders</h2>
            <p>Set and manage watering or fertilizing reminders.</p>
          </Link>

          <Link to="/journal" className="bg-white rounded-xl shadow hover:shadow-md p-6 transition">
            <h2 className="text-xl font-semibold text-green-600 mb-2">📝 Garden Journal</h2>
            <p>Log notes, pictures, or growth updates for your garden.</p>
          </Link>

          <Link to="/plant-guide" className="bg-white rounded-xl shadow hover:shadow-md p-6 transition">
            <h2 className="text-xl font-semibold text-green-600 mb-2">🔍 Plant Lookup</h2>
            <p>Search and learn about different plants and care tips.</p>
          </Link>

          <Link to="/stats" className="bg-white rounded-xl shadow hover:shadow-md p-6 transition">
            <h2 className="text-xl font-semibold text-green-600 mb-2">📊 Growth Stats</h2>
            <p>View statistics and progress charts of your plants.</p>
          </Link>

          <Link to="/settings" className="bg-white rounded-xl shadow hover:shadow-md p-6 transition">
            <h2 className="text-xl font-semibold text-green-600 mb-2">⚙️ Settings</h2>
            <p>Manage your profile, preferences, and logout.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
