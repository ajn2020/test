import { useState } from 'react'

type RecyclingServiceProps = {
    title: string;
    description: string;
    content: string;
}

export default function RecyclingServiceAccordion(props: RecyclingServiceProps) {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="accordion-wrapper">
            <div className="accordion">
                <div className="accordion-title">
                    <h2>{props.title}</h2>
                </div>
                <div className="accordion-description">
                    <p>{props.description}</p>
                </div>
                <div className={isOpen? "accordion-content-displayed" : "accordion-content-hidden"}>                    
                    <br />
                    <p>{props.content}</p>
                </div>
            </div>        
            <button className="accordion-button" type="button" onClick={() => setOpen(!isOpen)}>{isOpen? "Collapse" : "Expand"}</button>
        </div>
    )
}
