import React from 'react';
import {facts} from '@/data/Facts'

export default function Fact() {
    // Choose at random fact from the list of facts
    const randFactIndex = Math.floor(Math.random() * facts.length);
    const currentFact = facts[randFactIndex]
    return (
      <div>
        <div>
          <h2>{currentFact.title}</h2>
        </div>
        <div>
          {currentFact.content}
        </div>
      </div>
    )
}