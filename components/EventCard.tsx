export type EventCardProps = {
    image: string;
    title: string;
    date: string;
    description: string;
}

export default function EventCard(props: EventCardProps) {
    return (
        <div className="event-card">
            <div className="event-card-image-div">
                <img src={props.image} />
            </div>
            <div className="event-card-content">
                <h2>{props.title}</h2>
                <h3>{props.date}</h3>
                <br />
                <p>{props.description}</p>
            </div>
        </div>
    )
}