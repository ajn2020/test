import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
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
        <h3>{currentFact?.title}</h3>
      </div>
      <br />
      {typeof currentFact?.content === 'string' && (
        <div>
          <ReactMarkdown>
            {currentFact.content}
          </ReactMarkdown>
        </div>
      )}
      
    </div>
  )
}
