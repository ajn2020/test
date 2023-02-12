import { useState } from 'react'

type ItemTypeCardProps = {
    frontTitle: string;
    frontImage: string;
    backTitle: string;
    backImage: string;
}

export default function ItemTypeCard(props: ItemTypeCardProps) {
    const [isFlipped, setFlipped] = useState(false);

    return (
        <div className="item-type-card-container" onClick={() => setFlipped(!isFlipped)}>
          <div className={`item-type-card ${isFlipped ? 'item-type-card-flipped' : ''}`}>
            <div className="item-type-card-front">
              <h2>{props.frontTitle}</h2>
              <img className='item-type-card-image' src={props.frontImage} />
            </div>
            <div className="item-type-card-back">
              <h3>{props.backTitle}</h3>
              <img className='item-type-card-image' src={props.backImage} />
            </div>
          </div>
        </div>
      );
}
