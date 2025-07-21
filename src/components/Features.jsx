import React from 'react';

const features = [
  {
    title: 'AI-Powered Pest & Disease Identifier',
    desc: 'Snap a photo and let AI detect plant pests or diseases with treatment tips.',
    icon: 'https://cdn-icons-png.flaticon.com/512/2906/2906279.png',
  },
  {
    title: 'Interactive Gardening Challenges',
    desc: 'Join seasonal challenges, earn rewards, and share your gardening progress.',
    icon: 'https://cdn-icons-png.flaticon.com/512/2038/2038854.png',
  },
  {
    title: 'Personal Plant Journal with Photos',
    desc: 'Maintain logs and upload photos to track your plant’s growth and care.',
    icon: 'https://cdn-icons-png.flaticon.com/512/2807/2807452.png',
  },
  {
    title: 'Seasonal Tips Based on Location',
    desc: 'Receive gardening recommendations tailored to your region and weather.',
    icon: 'https://cdn-icons-png.flaticon.com/512/2909/2909690.png',
  },
  {
    title: 'Dark/Light Theme Toggle',
    desc: 'Choose a theme that suits your vibe with a single click.',
    icon: 'https://cdn-icons-png.flaticon.com/512/841/841536.png',
  },
];

export default function Features() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-12">
        Why Choose GreenThumb?
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-700 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
