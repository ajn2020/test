import React, { useState, useEffect } from 'react';
import {facts} from '@/data/Facts'

type Fact = {
  title: string,
  content: string
}

export default function Fact() {
  const [currentFact, setCurrentFact] = useState<Fact>();

  useEffect(() => {
    setCurrentFact(facts[Math.floor(Math.random() * facts.length)]);
  }, [])

  return (
    <div>
      <div>
        <h2>{currentFact?.title}</h2>
      </div>
      <div>
        {currentFact?.content}
      </div>
    </div>
  )
}
