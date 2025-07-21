import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  collection,
  query,
  where,
  orderBy,
  addDoc,
  getDocs,
  Timestamp,
} from "firebase/firestore";
import { db } from "../services/firebase";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

export default function GrowthStats() {
  const user = useSelector((state) => state.auth.user);
  const [logs, setLogs] = useState([]);
  const [form, setForm] = useState({
    plantName: "",
    height: "",
    width: "",
    leaves: "",
    date: "",
  });

  const fetchLogs = async () => {
    if (!user) return;
    const q = query(
      collection(db, "growthLogs"),
      where("userId", "==", user.uid),
      orderBy("date", "asc")
    );
    const snap = await getDocs(q);
    const data = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setLogs(data);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const { plantName, height, width, leaves, date } = form;
    if (!plantName || !height || !width || !leaves || !date) return;

    await addDoc(collection(db, "growthLogs"), {
      userId: user.uid,
      plantName,
      height: parseFloat(height),
      width: parseFloat(width),
      leaves: parseInt(leaves),
      date: Timestamp.fromDate(new Date(date)),
      createdAt: Timestamp.now(),
    });

    setForm({ plantName: "", height: "", width: "", leaves: "", date: "" });
    fetchLogs();
  };

  useEffect(() => {
    fetchLogs();
  }, [user]);

  const chartData = {
    labels: logs.map((log) => new Date(log.date.toDate()).toLocaleDateString()),
    datasets: [
      {
        label: "Height (cm)",
        data: logs.map((log) => log.height),
        borderColor: "green",
        fill: false,
      },
      {
        label: "Width (cm)",
        data: logs.map((log) => log.width),
        borderColor: "orange",
        fill: false,
      },
      {
        label: "Leaves Count",
        data: logs.map((log) => log.leaves),
        borderColor: "blue",
        fill: false,
      },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-green-700 mb-4">📈 Plant Growth Stats</h1>

      <form onSubmit={handleAdd} className="bg-white p-4 rounded shadow mb-6 space-y-3">
        <input
          type="text"
          placeholder="Plant Name"
          value={form.plantName}
          onChange={(e) => setForm({ ...form, plantName: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <div className="grid grid-cols-3 gap-2">
          <input
            type="number"
            step="0.1"
            placeholder="Height (cm)"
            value={form.height}
            onChange={(e) => setForm({ ...form, height: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            type="number"
            step="0.1"
            placeholder="Width (cm)"
            value={form.width}
            onChange={(e) => setForm({ ...form, width: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Leaves Count"
            value={form.leaves}
            onChange={(e) => setForm({ ...form, leaves: e.target.value })}
            className="border p-2 rounded"
          />
        </div>
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Add Log
        </button>
      </form>

      {logs.length > 0 ? (
        <Line data={chartData} />
      ) : (
        <p className="text-gray-500 text-sm">No growth logs available yet.</p>
      )}
    </div>
  );
}
