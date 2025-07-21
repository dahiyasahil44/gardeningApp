import React from 'react';

export default function ContactUs() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-green-700 text-center mb-12">Contact Us</h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image + Contact Info */}
        <div className="space-y-6">
          <img
            src="https://cdn.pixabay.com/photo/2022/11/08/14/42/monstera-7578722_1280.png"
            alt="Contact"
            className="w-full max-w-sm mx-auto"
          />
          <div className="space-y-3 text-gray-700 text-center md:text-left">
            <p><strong>📍 Address:</strong> 123 Green Lane, Plant City, Nature 45678</p>
            <p><strong>📧 Email:</strong> support@greenthumb.com</p>
            <p><strong>📞 Phone:</strong> +91 98765 43210</p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form className="bg-white shadow-md rounded-xl p-8 space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="How can we help?"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
