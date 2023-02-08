import { useState } from 'react'

type RecyclingServiceAccordionProps = {
    title: string;
    description: string;
    content: string;
}

export default function RecyclingServiceAccordion(props: RecyclingServiceAccordionProps) {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="recycling-service-accordion-wrapper">
            <div className="recycling-service-accordion">
                <div className="recycling-service-accordion-title">
                    <h2>{props.title}</h2>
                </div>
                <div className="recycling-service-accordion-description">
                    <p>{props.description}</p>
                </div>
                <div className={isOpen? "recycling-service-accordion-content-displayed" : "recycling-service-accordion-content-hidden"}>                    
                    <br />
                    <p>{props.content}</p>
                </div>
            </div>        
            <button className="recycling-service-accordion-button" type="button" onClick={() => setOpen(!isOpen)}>{isOpen? "Collapse" : "Expand"}</button>
        </div>
    )
}
