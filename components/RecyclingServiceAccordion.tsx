import React, { Ref} from "react";

type RecyclingServiceProps = {
    id: string;
    title: string;
    description: string;
    content: string;
    isOpen: boolean;
    handleClick: (id: string) => void;
}

export default React.forwardRef((props: RecyclingServiceProps, ref: Ref<HTMLDivElement>) => (
    <div ref={ref} id={props.id} className="accordion-wrapper" onClick={() => props.handleClick(props.id)}>
        <div className="accordion">
            <div className="accordion-title">
                <h2>{props.title}</h2>
            </div>
            <div className="accordion-description">
                <p>{props.description}</p>
            </div>
            <div className={props.isOpen ? "accordion-content-displayed" : "accordion-content-hidden"}>
                <br />
                <p>{props.content}</p>
            </div>
        </div>
    </div>
))
