import { imageConfigDefault } from 'next/dist/shared/lib/image-config';
import { useState } from 'react'
import picDress from "./pictureAddress";
type RecyclingServiceProps = {
    title: string;
    description: string;
    content: string;
}

export default function RecyclingServiceAccordion(props: RecyclingServiceProps) {
const {PictureAddress,topAddress}=picDress;
    const [isOpen, setOpen] = useState(false);
    const [accordionButton,SetAccordionButton]=useState('accordion-button')
    const handleClick = () => {
        setOpen(!isOpen);
        if(accordionButton==="accordion-button"){
            SetAccordionButton("accordion-button accordion-button-active");
        }else{
            SetAccordionButton("accordion-button");
        }
    }

    return (
        <div className="accordion-wrapper" onClick={handleClick}>
            <div className="accordion">
                <div className="accordion-title">
                    <h2>{props.title}</h2>
                </div>
                <div className="accordion-description">
                    <p>{props.description}</p>
                </div>
                <div className={isOpen? "accordion-content-displayed" : "accordion-content-hidden"}>                    
                    {/* <br /> */}
                    <p>{props.content}</p>
                </div>
            </div>  
            {/* "Expand"       */}
            <button className={accordionButton} type="button" >{isOpen? <img src={topAddress}/>: "click anywhere to expand"}</button>
        </div>
    )
}