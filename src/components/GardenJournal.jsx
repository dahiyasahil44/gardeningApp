import React, { useEffect, useState } from 'react';
import { db } from '../services/firebase';
import {
  collection,
  addDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { useSelector } from 'react-redux';

const GardenJournal = () => {
  const user = useSelector((state) => state.auth.user);
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({ title: '', note: '', date: '' });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, 'journalEntries'),
      where('userId', '==', user.uid),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setEntries(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, [user]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.note || !form.date) return;

    if (editId) {
      const docRef = doc(db, 'journalEntries', editId);
      await updateDoc(docRef, {
        ...form,
        updatedAt: serverTimestamp(),
      });
      setEditId(null);
    } else {
      await addDoc(collection(db, 'journalEntries'), {
        ...form,
        userId: user.uid,
        createdAt: serverTimestamp(),
      });
    }

    setForm({ title: '', note: '', date: '' });
  };

  const handleEdit = (entry) => {
    setForm({ title: entry.title, note: entry.note, date: entry.date });
    setEditId(entry.id);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'journalEntries', id));
  };

  return (
    <div className="max-w-3xl mx-auto my-8 p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-bold text-green-700 mb-4">🪴 Garden Journal</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <textarea
          name="note"
          placeholder="Notes"
          value={form.note}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          {editId ? 'Update Entry' : 'Add Entry'}
        </button>
      </form>

      <div className="mt-6 space-y-4">
        {entries.map((entry) => (
          <div key={entry.id} className="border p-3 rounded bg-gray-50">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-green-700">{entry.title}</h3>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(entry)}
                  className="text-blue-600 text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(entry.id)}
                  className="text-red-600 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-700">{entry.note}</p>
            <p className="text-xs text-gray-500">📅 {entry.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GardenJournal;
