import ReactMarkdown from 'react-markdown'
import { useState } from 'react'

export type EventCardProps = {
    image: string;
    title: string;
    date: string;
    description: string;
}

export default function EventCard(props: EventCardProps) {
    const [isFlipped, setFlipped] = useState(false);

    return (
        <div className="event-card-container" onClick={() => setFlipped(!isFlipped)}>
            <div className={`event-card ${isFlipped ? 'event-card-flipped' : ''}`}>
                <div className="event-card-front">
                    <div>
                        <img className="event-card-image" src={props.image} />
                    </div>
                    <div>
                        <h2>{props.title}</h2>
                        <h3>{props.date}</h3>
                    </div>
                </div>
                <div className="event-card-back">
                    <ReactMarkdown>{props.description}</ReactMarkdown>
                </div>
            </div>
        </div>
    )
}
