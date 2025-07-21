import React from 'react';

const services = [
  {
    title: 'Plant Database',
    desc: 'Detailed care instructions, watering schedules, and sunlight preferences for hundreds of plants.',
  },
  {
    title: 'Garden Tracker',
    desc: 'Keep track of your plant growth, planting dates, and care history.',
  },
  {
    title: 'Reminders',
    desc: 'Get timely notifications for watering, fertilizing, and pruning your plants.',
  },
  {
    title: 'Community Forum',
    desc: 'Share experiences, ask questions, and get answers from gardening enthusiasts.',
  },
];

export default function Services(){
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-10">Our Services</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((s, idx) => (
          <div key={idx} className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-800 mb-2">{s.title}</h3>
            <p className="text-gray-700">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};