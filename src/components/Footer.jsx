import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="font-semibold text-lg mb-2">About GreenThumb</h3>
          <p className="text-sm">
            GreenThumb is your personal gardening assistant — track plant growth, set reminders, and join a vibrant community of garden lovers.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/blogs" className="hover:underline">Blogs</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Support</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Help Center</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
          <p className="text-sm">
            📍 123 Green Street, Garden City<br />
            📧 support@greenthumb.com<br />
            📞 +91 98765 43210
          </p>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} GreenThumb. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
