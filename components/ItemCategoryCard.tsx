import { useState } from 'react'

type ItemCategoryProps = {
    frontTitle: string;
    frontImage: string;
    backTitle: string;
    backImage: string;
}

export default function ItemCategoryCard(props: ItemCategoryProps) {
    const [isFlipped, setFlipped] = useState(false);

    return (
        <div className="card-container" onClick={() => setFlipped(!isFlipped)}>
          <div className={`card ${isFlipped ? 'card-flipped' : ''}`}>
            <div className="card-front">
              <h2>{props.frontTitle}</h2>
              <img src={props.frontImage} />
            </div>
            <div className="card-back">
              <h3>{props.backTitle}</h3>
              <img src={props.backImage} />
            </div>
          </div>
        </div>
      );
}