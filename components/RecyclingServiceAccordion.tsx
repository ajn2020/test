import React, { useState, Ref } from "react";
import ReactMarkdown from 'react-markdown'

export type RecyclingServiceAccordionProps = {
    id: string;
    title: string;
    description: string;
    content: string;
    isOpen: boolean;
    handleClick: (id: string) => void;
}

export default React.forwardRef((props: RecyclingServiceAccordionProps, ref: Ref<HTMLDivElement>) => (
    <div ref={ref} id={props.id} className="recycling-service-accordion-wrapper" onClick={() => props.handleClick(props.id)}>
        <div className="recycling-service-accordion">
            <div className="recycling-service-accordion-title">
                <h2>{props.title}</h2>
            </div>
            <div className="recycling-service-accordion-description">
                <p>{props.description}</p>
            </div>
            <div className={props.isOpen ? "recycling-service-accordion-content-displayed" : "recycling-service-accordion-content-hidden"}>
                <br />
                <ReactMarkdown>{props.content}</ReactMarkdown>
            </div>
        </div>
    </div>
))
