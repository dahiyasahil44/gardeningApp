import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import ContactUs from '../components/ContactUs';
import Features from '../components/Features';
import Blog from '../components/Blog';
import BlogDetail from '../components/BlogDetail';
import MyPlants from '../components/MyPlants';
import Reminders from '../pages/Reminders';
import GardenJournal from '../components/GardenJournal';
import PlantLookup from '../components/PlantLookup';
import GrowthStats from '../components/GrowthStats';
import Settings from '../pages/Settings';

const AppRouter = () => (
 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/features" element={<Features />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:id" element={<BlogDetail />} />
      <Route path="/my-plants" element={<MyPlants />} />
      <Route path="/reminders" element={<Reminders />} />
      <Route path="/journal" element={<GardenJournal />} />
      <Route path="/plant-guide" element={<PlantLookup />} />
      <Route path="/stats" element={<GrowthStats />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
);

export default AppRouter;
