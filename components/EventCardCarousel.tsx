import EventCard from "./EventCard";
import { EventCardProps } from "./EventCard";

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
          <EventCard image={event.image} title={event.title} date={event.date} description={event.description} />
      ))}
      <div className="event-card-carousel-button-div">
        <button className="event-card-carousel-button" type="button">Next</button>
      </div>
    </div>
  )
}