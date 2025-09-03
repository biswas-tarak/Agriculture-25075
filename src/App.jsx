// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Features from './Features';
import QuestCards from './QuestCards';
import QuestDetail from './QuestDetail';
import FarmerSignIn from './FarmerSignIn';

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<FarmerSignIn />} />
        <Route path="/quests" element={<QuestCards />} />
        <Route path="/quest-detail" element={<QuestDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
