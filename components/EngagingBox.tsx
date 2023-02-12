// This file contains the box which displays either a quiz question or a fun fact
import React from 'react';
import Fact from './Fact'
import Question from './Question'

function renderContent() {
  // Choose 0 or 1 at random
  // If 0, display fun fact
  // If 1, display question
  const randNum = Math.floor(Math.random() * 2);
  if (randNum) return Question();
  else return Fact();
}

export default function EngagingBox() {  
    return (
      <div className="engaging-box-wrapper">
        {renderContent()}
      </div>
    );
  }