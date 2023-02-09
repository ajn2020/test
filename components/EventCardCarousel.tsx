import EventCard from "./EventCard";

export default function EventCardCarousel() {
  return (
    <div className='event-card-carousel'>
      <div className="event-card-carousel-button-div">
        <button className="event-card-carousel-button" type="button">Previous</button>
      </div>
      <EventCard 
        image="/favicon.ico"
        title="Event 1"
        date="dd/mm/yyyy"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et pretium orci. Aliquam nec maximus felis, nec fringilla augue. In turpis lorem, tincidunt eget mi non, lobortis condimentum turpis. Pellentesque fermentum lorem et enim vulputate varius. Nam sit amet convallis orci. Etiam lorem turpis, dignissim id sapien at, sodales finibus arcu. Curabitur auctor vehicula turpis, ac mollis neque maximus eu."
      />
      <EventCard 
        image="/favicon.ico"
        title="Event 1"
        date="dd/mm/yyyy"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et pretium orci. Aliquam nec maximus felis, nec fringilla augue. In turpis lorem, tincidunt eget mi non, lobortis condimentum turpis. Pellentesque fermentum lorem et enim vulputate varius. Nam sit amet convallis orci. Etiam lorem turpis, dignissim id sapien at, sodales finibus arcu. Curabitur auctor vehicula turpis, ac mollis neque maximus eu."
      />
      <EventCard 
        image="/favicon.ico"
        title="Event 1"
        date="dd/mm/yyyy"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et pretium orci. Aliquam nec maximus felis, nec fringilla augue. In turpis lorem, tincidunt eget mi non, lobortis condimentum turpis. Pellentesque fermentum lorem et enim vulputate varius. Nam sit amet convallis orci. Etiam lorem turpis, dignissim id sapien at, sodales finibus arcu. Curabitur auctor vehicula turpis, ac mollis neque maximus eu."
      />      
      <div className="event-card-carousel-button-div">
        <button className="event-card-carousel-button" type="button">Next</button>
      </div>
    </div>
  )
}