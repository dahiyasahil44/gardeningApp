import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { db } from '../services/firebase';
import {
  collection,
  query,
  where,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  orderBy,
  Timestamp
} from 'firebase/firestore';

export default function Reminders() {
  const user = useSelector(state => state.auth.user);
  const [reminders, setReminders] = useState([]);
  const [form, setForm] = useState({
    plantName: '',
    task: '',
    frequency: '',
    notes: '',
    nextDue: ''
  });

  const sendNotificationIfDue = (reminders) => {
  reminders.forEach(reminder => {
    const dueDate = reminder.nextDue.toDate();
    const today = new Date();
    
    const isSameDay =
      dueDate.getFullYear() === today.getFullYear() &&
      dueDate.getMonth() === today.getMonth() &&
      dueDate.getDate() === today.getDate();

    if (isSameDay && Notification.permission === 'granted') {
      new Notification(`🌱 Reminder: ${reminder.plantName}`, {
        body: `${reminder.task} today. Frequency: ${reminder.frequency}`,
        icon: '/plant-icon.png', // optional: add icon in public/
      });
    }
  });
};

  const fetchReminders = async () => {
    if (!user) return;
    const q = query(
      collection(db, 'reminders'),
      where('userId', '==', user.uid),
      orderBy('nextDue', 'asc')
    );
    const snap = await getDocs(q);
    const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setReminders(data);
    sendNotificationIfDue(data); // <--- ADD THIS
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const { plantName, task, frequency, notes, nextDue } = form;
    if (!plantName || !task || !frequency || !nextDue) return;

    await addDoc(collection(db, 'reminders'), {
      userId: user.uid,
      plantName,
      task,
      frequency,
      notes,
      nextDue: Timestamp.fromDate(new Date(nextDue)),
      createdAt: Timestamp.now()
    });

    setForm({ plantName: '', task: '', frequency: '', notes: '', nextDue: '' });
    fetchReminders();
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'reminders', id));
    fetchReminders();
  };

  useEffect(() => {
    fetchReminders();
  }, [user]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-green-700 mb-4">⏰ Care Reminders</h1>

      <form onSubmit={handleAdd} className="bg-white p-4 rounded shadow space-y-3 mb-8">
        <input
          type="text"
          placeholder="Plant Name"
          value={form.plantName}
          onChange={(e) => setForm({ ...form, plantName: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Task (e.g., Water)"
          value={form.task}
          onChange={(e) => setForm({ ...form, task: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Frequency (e.g., Every 2 days)"
          value={form.frequency}
          onChange={(e) => setForm({ ...form, frequency: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          type="date"
          value={form.nextDue}
          onChange={(e) => setForm({ ...form, nextDue: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Optional Notes"
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Add Reminder
        </button>
      </form>

      <div className="space-y-4">
        {reminders.map(reminder => (
          <div key={reminder.id} className="bg-white p-4 rounded shadow flex justify-between items-start">
            <div>
              <h2 className="font-semibold text-lg text-green-700">{reminder.plantName} – {reminder.task}</h2>
              <p className="text-gray-600 text-sm">
                Frequency: {reminder.frequency} | Next Due: {reminder.nextDue.toDate().toDateString()}
              </p>
              {reminder.notes && <p className="text-sm mt-1 italic">{reminder.notes}</p>}
            </div>
            <button onClick={() => handleDelete(reminder.id)} className="text-red-500 hover:underline">
              Delete
            </button>
          </div>
        ))}
        {reminders.length === 0 && <p className="text-gray-500">No reminders yet.</p>}
      </div>
    </div>
  );
}
