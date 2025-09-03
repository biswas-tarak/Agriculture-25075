// src/components/Features.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Features.css';

export default function Features() {
  const features = [
    { title: 'Learning Through Missions', desc: 'Complete fun, educational quests tailored to your farm.' },
    {
      title: 'Personalized Quests',
      desc: 'Get challenges based on your crop, region, and farm size.',
      isClickable: true
    },
    { title: 'Progress Tracker & Badges', desc: 'Track your sustainability score and earn badges.' },
    { title: 'Leaderboards & Community', desc: 'Compete with local farmers and share your progress.' },
    { title: 'Real-World Rewards', desc: 'Redeem points for schemes, discounts, or recognition.' },
  ];

  return (
    <section className="features-full">
      <div className="features-container">
        {features.map((f, idx) => (
          f.isClickable ? (
            <Link key={idx} to="/quests" className="feature-card clickable">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </Link>
          ) : (
            <div key={idx} className="feature-card">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          )
        ))}
      </div>
    </section>
  );
}
