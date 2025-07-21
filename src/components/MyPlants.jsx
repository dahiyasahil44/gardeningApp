// src/pages/MyPlants.jsx
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../services/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

export default function MyPlants() {
  const [selectedPlant, setSelectedPlant] = useState(null);

  const user = useSelector((state) => state.auth.user);
  const [plants, setPlants] = useState([]);
  const [newPlant, setNewPlant] = useState({
    name: "",
    type: "",
    wateringFrequency: "",
    sunlight: "",
    notes: "",
    image: "",
  });

  const fetchPlants = async () => {
    if (!user) return;
    const q = query(collection(db, "plants"), where("userId", "==", user.uid));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setPlants(data);
  };

  const handleAddPlant = async (e) => {
    e.preventDefault();
    const { name, type, wateringFrequency, sunlight } = newPlant;
    if (!name || !type || !wateringFrequency || !sunlight) return;

    if (selectedPlant) {
      // Edit mode
      const plantRef = doc(db, "plants", selectedPlant.id);
      await updateDoc(plantRef, {
        ...newPlant,
      });
      setSelectedPlant(null);
    } else {
      // Add mode
      await addDoc(collection(db, "plants"), {
        ...newPlant,
        userId: user.uid,
        addedOn: serverTimestamp(),
      });
    }

    setNewPlant({
      name: "",
      type: "",
      wateringFrequency: "",
      sunlight: "",
      notes: "",
      image: "",
    });

    fetchPlants();
  };

  const handleEdit = (plant) => {
    setSelectedPlant(plant);
    setNewPlant({
      name: plant.name,
      type: plant.type,
      wateringFrequency: plant.wateringFrequency,
      sunlight: plant.sunlight,
      notes: plant.notes || "",
      image: plant.image || "",
    });
  };

  const cancelEdit = () => {
    setSelectedPlant(null);
    setNewPlant({
      name: "",
      type: "",
      wateringFrequency: "",
      sunlight: "",
      notes: "",
      image: "",
    });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "plants", id));
    fetchPlants();
  };

  useEffect(() => {
    fetchPlants();
  }, [user]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-green-700 mb-6">🌿 My Plants</h2>

      <form
        onSubmit={handleAddPlant}
        className="space-y-4 mb-10 bg-white p-6 rounded-xl shadow"
      >
        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Plant Name"
            value={newPlant.name}
            onChange={(e) => setNewPlant({ ...newPlant, name: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Type (e.g., Succulent)"
            value={newPlant.type}
            onChange={(e) => setNewPlant({ ...newPlant, type: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Watering Frequency"
            value={newPlant.wateringFrequency}
            onChange={(e) =>
              setNewPlant({ ...newPlant, wateringFrequency: e.target.value })
            }
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Sunlight (e.g., Indirect)"
            value={newPlant.sunlight}
            onChange={(e) =>
              setNewPlant({ ...newPlant, sunlight: e.target.value })
            }
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Image URL (optional)"
            value={newPlant.image}
            onChange={(e) =>
              setNewPlant({ ...newPlant, image: e.target.value })
            }
            className="border p-2 rounded"
          />
          <textarea
            placeholder="Notes (optional)"
            value={newPlant.notes}
            onChange={(e) =>
              setNewPlant({ ...newPlant, notes: e.target.value })
            }
            className="border p-2 rounded col-span-full"
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          {selectedPlant ? "Update Plant" : "Add Plant"}
        </button>
        {selectedPlant && (
          <button
            type="button"
            onClick={cancelEdit}
            className="mx-2 px-6 py-2 border border-red-500 text-red-500 rounded hover:bg-red-100"
          >
            Cancel
          </button>
        )}
      </form>

      <div className="grid gap-4">
        {plants.map((plant) => (
          <div
            key={plant.id}
            className="bg-white shadow p-4 rounded flex justify-between items-start"
          >
            <div className="flex gap-4">
              {plant.image && (
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-20 h-20 object-cover rounded"
                />
              )}
              <div>
                <h3 className="text-xl font-semibold">{plant.name}</h3>
                <p className="text-gray-600">{plant.type}</p>
                <p className="text-sm text-gray-500">
                  💧 {plant.wateringFrequency} | ☀️ {plant.sunlight}
                </p>
                {plant.notes && (
                  <p className="text-sm mt-1 text-gray-700">{plant.notes}</p>
                )}
              </div>
            </div>
            <div>
            <button
              onClick={() => handleEdit(plant)}
              className="text-blue-500 hover:underline text-sm mr-4"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(plant.id)}
              className="text-red-500 hover:underline text-sm"
            >
              Delete
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
