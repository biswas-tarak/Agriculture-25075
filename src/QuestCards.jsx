// src/components/QuestCards.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './QuestCards.css';

const quests = [
  {
    title: 'Contour Cropping Champion: The Hillside Harvester',
    description: 'Implement contour cropping on a sloped section of your farm to prevent soil erosion. Keep that precious topsoil in place!',
    icon: '⛰️🌿',
    reward: 'Slope Points + "Contour Master" Badge',
    impact: 'Reduces soil erosion, conserves soil fertility, and improves water retention on sloped lands.'
  },
  {
    title: 'Green Manuring Guru: The Soil’s Secret Superfood',
    description: 'Grow a green manure crop like sunn hemp or dhaincha and incorporate it back into the soil before planting your main crop. Nourish your soil naturally!',
    icon: '🌿💚',
    reward: 'Fertility Points + "Green Thumb Guru" Title',
    impact: 'Enhances soil organic matter, improves soil structure, and reduces the need for synthetic fertilizers.'
  },
  {
    title: 'Agroforestry Architect: The Tree-Crop Team Builder',
    description: 'Plant fruit or timber trees within your crop fields to create a harmonious ecosystem!',
    icon: '🌳🌽',
    reward: 'Canopy Points + "Forest Farmer" Badge',
    impact: 'Improves biodiversity, provides shade, enhances soil health, and offers additional income sources.'
  },
  {
    title: 'Water Storage Protector: The Water Body Watchman',
    description: 'Clean and maintain an existing on-farm water storage pond or dig a small one for rainwater harvesting. Secure your water future!',
    icon: '🏞️💧',
    reward: 'Reservoir Points + "Aqua Guardian" Title',
    impact: 'Increases water availability for irrigation, reduces reliance on external water sources, and supports local ecosystems.'
  },
  {
    title: 'Organic Spice Cultivation Steward: The Aromatic Alchemist',
    description: 'Cultivate a traditional spice crop (e.g., pepper, cardamom, ginger) using organic methods. Bring out the true flavor!',
    icon: '🌶️🌿',
    reward: 'Aroma Points + "Spice Master" Badge',
    impact: 'Promotes organic cultivation of high-value crops, preserves traditional practices, and ensures chemical-free produce.'
  },
  {
    title: 'Natural Pest Control Protector: The Pest-Resistant Paladin',
    description: 'Implement natural pest control (beneficial insects, traditional repellents) instead of chemicals. Protect your crops naturally!',
    icon: '🌾🐞',
    reward: 'Grain Points + "Paddy Paladin" Title',
    impact: 'Reduces chemical pollution, protects biodiversity, and ensures healthier crops.'
  },
  {
    title: 'Coconut Coir Utilization Crafter: The Coir Commander',
    description: 'Process coconut husks into coir for use as a growing medium or mulch. Turn waste into wealth!',
    icon: '🥥🧶',
    reward: 'Fiber Points + "Coir Creator" Badge',
    impact: 'Promotes waste utilization, reduces reliance on external media, and adds value to by-products.'
  },
  {
    title: 'Palmyra Palm Planting Pioneer: The Palmyra Protector',
    description: 'Plant Palmyra palm saplings on your farm. These resilient trees offer multiple benefits!',
    icon: '🌴🌱',
    reward: 'Palm Points + "Desert Bloomer" Title',
    impact: 'Supports reforestation, provides food/fodder/materials, and enhances biodiversity.'
  },
  {
    title: 'Traditional Seed Saving Keeper: The Heritage Keeper',
    description: 'Save seeds from one traditional or heirloom crop variety. Preserve the genetic legacy!',
    icon: '🌰🏺',
    reward: 'Legacy Points + "Seed Sentinel" Badge',
    impact: 'Preserves crop diversity, promotes self-sufficiency, and adapts to local conditions.'
  },
  {
    title: 'Bio-Pesticide Preparation Brewer: The Natural Nuisance Neutralizer',
    description: 'Prepare & apply a homemade bio-pesticide using local ingredients (like garlic, chili, cow urine). Your farm’s natural defense!',
    icon: '🧪🐜',
    reward: 'Brew Points + "Eco-Defender" Title',
    impact: 'Reduces synthetic pesticide use, protects beneficial insects, and promotes a healthier ecosystem.'
  }
];

const QuestCards = () => {
  const navigate = useNavigate();

  const handleClick = (quest) => {
    navigate('/quest-detail', { state: quest });
  };

  return (
    <div className="quests-container">
      {quests.map((q, idx) => (
        <div
          key={idx}
          className="quest-card"
          onClick={() => handleClick(q)}
        >
          <div className="icon">{q.icon}</div>
          <h2 className="quest-title">{q.title}</h2>
          <p className="quest-desc">{q.description}</p>
          <div className="quest-reward"><strong>Reward:</strong> {q.reward}</div>
          <div className="quest-impact"><em>Impact:</em> {q.impact}</div>
        </div>
      ))}
    </div>
  );
};

export default QuestCards;
