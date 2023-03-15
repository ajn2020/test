import ReactMarkdown from "react-markdown";
import { useState } from "react";
import style from "@/styles/home/EventCard.module.css";

export type EventCardProps = {
  image: string;
  title: string;
  date: string;
  description: string;
};

export default function EventCard(props: EventCardProps) {
  const [isFlipped, setFlipped] = useState(false);

  return (
    <div
      className={style["event-card-container"]}
      onClick={() => setFlipped(!isFlipped)}
    >
      <div
        className={
          style["event-card"] +
          (isFlipped ? " " + style["event-card-flipped"] : "")
        }
      >
        <div className={style["event-card-front"]}>
          <div>
            <img
              className={style["event-card-image"]}
              src={props.image}
              alt=""
            />
          </div>
          <div>
            <h2>{props.title}</h2>
            <h3>{props.date}</h3>
          </div>
        </div>
        <div className={style["event-card-back"]}>
          <ReactMarkdown>{props.description}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
