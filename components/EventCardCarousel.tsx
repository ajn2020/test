import EventCard from "./EventCard";
import { EventCardProps } from "./EventCard";
import { v4 as uuidv4 } from 'uuid';

type EventCardCarouselProps = {
  events: Array<EventCardProps>
}

export default function EventCardCarousel(props: EventCardCarouselProps) {
  return (
    <div className='event-card-carousel'>
      <div className="event-card-carousel-button-div">
        <button className="event-card-carousel-button" type="button">Previous</button>
      </div>
      {props.events.map(event => (
          <EventCard key={uuidv4()} image={event.image} title={event.title} date={event.date} description={event.description} />
      ))}
      <div className="event-card-carousel-button-div">
        <button className="event-card-carousel-button" type="button">Next</button>
      </div>
    </div>
  )
}