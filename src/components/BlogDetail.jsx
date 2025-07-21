import React from 'react';
import { useParams, Link } from 'react-router-dom';

const mockPosts = {
  1: {
    title: 'Top 10 Indoor Plants for Beginners',
    date: 'July 18, 2025',
    author: 'GreenThumb Team',
    content: `Indoor plants can bring life and vibrance to your living space. Start with easy-care plants like Snake Plant, Pothos, or ZZ plant...`,
  },
  2: {
    title: 'How to Water Your Plants the Right Way',
    date: 'July 15, 2025',
    author: 'Jane Plantlover',
    content: `Watering correctly means understanding your plant's needs, soil drainage, and seasonal changes. Avoid root rot by letting soil dry between waterings...`,
  },
};

export default function BlogDetail(){
  const { id } = useParams();
  const post = mockPosts[id];

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center text-red-600">
        <p>Blog post not found.</p>
        <Link to="/blogs" className="text-green-600 hover:underline block mt-4">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-green-700 mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        By {post.author} • {post.date}
      </p>
      <p className="text-gray-800 leading-relaxed text-lg">{post.content}</p>
      <Link to="/blogs" className="text-green-600 hover:underline block mt-6">
        ← Back to Blog
      </Link>
    </article>
  );
};