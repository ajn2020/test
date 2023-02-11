import { useEffect, useState } from 'react'
import EventCard, { EventCardProps } from "./EventCard";
import { v4 as uuidv4 } from 'uuid';

type EventCardCarouselProps = {
  events: Array<EventCardProps>
}

export default function EventCardCarousel(props: EventCardCarouselProps) {
  const [isDisabledPrevious, setDisabledPrevious] = useState(true)
  const [isDisabledNext, setDisabledNext] = useState(false)
  const [range, setRange] = useState([0, 3]);
  const displayedEvents = props.events.slice(...range);

  useEffect(() => {
    if (range[0] == 0) {
      setDisabledPrevious(true)
    }
    else {
      setDisabledPrevious(false)
    }
    if (range[1] >= props.events.length) {
      setDisabledNext(true)
    }
    else {
      setDisabledNext(false)
    }
  }, [range])

  return (
    <div className='event-card-carousel-container'>
      <div className="event-card-carousel-button-div">
        <button className="event-card-carousel-button" type="button" disabled={isDisabledPrevious} onClick={() => setRange(range.map(x => x-3))}>Previous</button>
      </div>
      <div className='event-card-carousel'>
        {displayedEvents.map(event => (
          <EventCard key={uuidv4()} image={event.image} title={event.title} date={event.date} description={event.description} />
        ))}
      </div>
      <div className="event-card-carousel-button-div">
        <button className="event-card-carousel-button" type="button" disabled={isDisabledNext} onClick={() => setRange(range.map(x => x+3))}>Next</button>
      </div>
    </div>
  )
}
