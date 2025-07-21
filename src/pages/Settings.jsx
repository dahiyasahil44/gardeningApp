import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile, updatePassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { logoutUser } from "../redux/authSlice";
import { Link, useNavigate } from 'react-router-dom';

export default function Settings() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [name, setName] = useState(user?.displayName || "");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleNameUpdate = async () => {
    try {
      await updateProfile(auth.currentUser, { displayName: name });
      setMessage("✅ Name updated successfully");
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`);
    }
  };

  const handlePasswordChange = async () => {
    try {
      await updatePassword(auth.currentUser, newPassword);
      setMessage("✅ Password changed successfully");
      setNewPassword("");
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`);
    }
  };

  const handleLogout = () => {
    auth.signOut();
    dispatch(logoutUser());
  };

  
    const navigate = useNavigate();
  useEffect(() => {
      if (!user) {
        navigate('/login');
      }
    }, [user, navigate]);

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded space-y-6 mt-6">
      <h2 className="text-2xl font-bold text-green-700">⚙️ Settings</h2>

      {message && <div className="text-sm text-blue-600">{message}</div>}

      <div>
        <label className="block font-medium mb-1">Display Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          onClick={handleNameUpdate}
          className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Update Name
        </button>
      </div>

      <div>
        <label className="block font-medium mb-1">New Password</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          onClick={handlePasswordChange}
          className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Change Password
        </button>
      </div>

      <div>
        <label className="block font-medium mb-1">Theme</label>
        {/* Optional toggle theme if you implemented ThemeContext */}
        <button
          onClick={() =>
            document.body.classList.toggle("dark")
          }
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Toggle Theme
        </button>
      </div>

      <div className="pt-4 border-t">
        <button
          onClick={handleLogout}
          className="text-red-600 hover:underline text-sm"
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
}
