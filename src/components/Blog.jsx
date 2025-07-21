import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Indoor Plants for Beginners',
    summary: 'Start your plant journey with these easy-to-care indoor favorites...',
    date: 'July 18, 2025',
    author: 'GreenThumb Team',
  },
  {
    id: 2,
    title: 'How to Water Your Plants the Right Way',
    summary: 'Overwatering is a common mistake. Learn the right balance...',
    date: 'July 15, 2025',
    author: 'Jane Plantlover',
  },
];

export default function Blog(){
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Our Gardening Blog</h2>
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold text-green-800 mb-2">{post.title}</h3>
            <p className="text-sm text-gray-500 mb-2">
              By {post.author} • {post.date}
            </p>
            <p className="text-gray-700 mb-4">{post.summary}</p>
            <Link
              to={`/blogs/${post.id}`}
              className="text-green-600 hover:underline font-medium"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

