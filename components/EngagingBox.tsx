// This file contains the box which displays either a quiz question or a fun fact
import React, { useState, useEffect } from "react";
import Fact from "./Fact";
import Question from "./Question";

export default function EngagingBox() {
  const [randNum, setRandNum] = useState<number>();

  useEffect(() => {
    setRandNum(Math.floor(Math.random() * 2));
  }, []);

  return (
    <div className="engaging-box-wrapper">
      {randNum == 0 && <Fact />}
      {randNum == 1 && <Question />}
    </div>
  );
}
