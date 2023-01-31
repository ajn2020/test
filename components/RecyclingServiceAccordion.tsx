import { useState } from 'react'

export default function RecyclingServiceAccordion() {
    const [isOpen, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!isOpen)
    }

    return (
        <div className="accordion-wrapper">
            <div className="accordion">
                <div className="accordion-title">
                    <h2>Lorem Ipsum</h2>
                </div>
                <div className="accordion-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className={isOpen? "accordion-content-displayed" : "accordion-content-hidden"}>                    
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>        
            <button className="accordion-button" type="button" onClick={handleClick}>{isOpen? "Collapse" : "Expand"}</button>
        </div>
    )
}