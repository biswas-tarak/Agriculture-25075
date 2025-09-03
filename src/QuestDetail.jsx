import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './QuestDetail.css';

export default function QuestDetail() {
  const { state: quest } = useLocation();
  const navigate = useNavigate();

  if (!quest) {
    return (
      <div className="quest-detail">
        <p>No quest selected.</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  const handleComplete = () => {
    alert('Quest Completed!');
    // Additional logic for quest completion
  };

  const handleGetPoints = () => {
    alert('Points Awarded!');
    // Additional logic for awarding points
  };

  return (
    <div className="quest-detail">
      <h1>{quest.title}</h1>
      <div className="icon">{quest.icon}</div>
      <p>{quest.description}</p>
      <p><strong>Reward:</strong> {quest.reward}</p>
      <p><em>Impact:</em> {quest.impact}</p>
      <div className="buttons">
        <button className="btn complete" onClick={handleComplete}>Complete</button>
        <button className="btn points" onClick={handleGetPoints}>Get Your Points</button>
        <button onClick={() => navigate(-1)}>← Back</button>
      </div>
      
    </div>
  );
}
