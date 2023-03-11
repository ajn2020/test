import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EventCard from "./EventCard";
import { Events } from "@/data/Events";

type EventCardCarouselProps = {
  events: Array<Events>;
  t2: boolean;
};

export default function EventCardCarousel(props: EventCardCarouselProps) {
  const [isDisabledPrevious, setDisabledPrevious] = useState(true);
  const [isDisabledNext, setDisabledNext] = useState(false);
  const [range, setRange] = useState([0, 3]);
  const displayedEvents = props.events.slice(...range);

  useEffect(() => {
    if (range[0] == 0) {
      setDisabledPrevious(true);
    } else {
      setDisabledPrevious(false);
    }
    if (range[1] >= props.events.length) {
      setDisabledNext(true);
    } else {
      setDisabledNext(false);
    }
  }, [range, props.events.length]);

  return (
    <div className="event-card-carousel-container">
      <div className="event-card-carousel-button-div">
        <button
          className="event-card-carousel-button"
          type="button"
          disabled={isDisabledPrevious}
          onClick={() => setRange(range.map((x) => x - 3))}
        >
          Previous
        </button>
      </div>
      {/* props.t2 */}
      <div className="event-card-carousel">
        {displayedEvents.map((event, i) => (
          <div
            style={{
              animationDelay: i * 0.2 + "s",
            }}
            className={
              props.t2
                ? `animate__animated animate__rollIn animate__delay-${i + 0.1}s`
                : ""
            }
          >
            <EventCard
              key={uuidv4()}
              image={event.image}
              title={event.title}
              date={event.date}
              description={event.description}
            />
          </div>
        ))}
      </div>
      <div className="event-card-carousel-button-div">
        <button
          className="event-card-carousel-button"
          type="button"
          disabled={isDisabledNext}
          onClick={() => setRange(range.map((x) => x + 3))}
        >
          Next
        </button>
      </div>
    </div>
  );
}
