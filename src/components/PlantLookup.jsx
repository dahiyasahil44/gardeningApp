import React, { useState, useEffect } from 'react';
import { getPlantInfo } from '../services/gemini';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

export default function PlantLookup() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    const data = await getPlantInfo(query);
    setResult(data);
    setLoading(false);
  };

  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  useEffect(() => {
      if (!user) {
        navigate('/login');
      }
    }, [user, navigate]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-green-700 mb-4">🌿 Plant Lookup</h1>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Enter plant name (e.g., Snake Plant)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 border p-2 rounded"
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>
      {result && (
        <div className="bg-white p-4 rounded shadow whitespace-pre-wrap text-gray-800">
          {result}
        </div>
      )}
    </div>
  );
}
