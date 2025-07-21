import React from 'react';
import Features from './Features';

export default function AboutUs(){
  return (
    <>
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">About GreenThumb</h2>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://cdn.pixabay.com/photo/2022/06/22/06/53/cabinet-7277181_1280.jpg" // replace with your image
          alt="About Gardening"
          className="rounded-xl shadow-lg w-full"
        />
        <div>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            GreenThumb is your digital gardening companion that helps you manage your plants,
            track their growth, and connect with fellow gardening lovers.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Whether you're a beginner or a seasoned gardener, we provide personalized tools, plant
            databases, community tips, and reminders to help your garden thrive year-round.
          </p>
        </div>
      </div>
    </section>
    <Features />
    </>
  );
};