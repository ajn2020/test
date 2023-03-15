import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { facts } from "@/data/Facts";
import style from "@/styles/home/Fact.module.css";

type Fact = {
  title: string;
  content: string;
};

export default function Fact() {
  const [currentFact, setCurrentFact] = useState<Fact>(
    facts[Math.floor(Math.random() * facts.length)]
  );

  return (
    <div>
      <h2>
        <ReactMarkdown>{currentFact.title}</ReactMarkdown>
      </h2>
      <br />
      <ReactMarkdown className={style["fact-box-content"]}>
        {currentFact.content}
      </ReactMarkdown>
    </div>
  );
}
