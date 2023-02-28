import { useState } from "react";

type ItemTypeCardProps = {
  frontTitle: string;
  frontImage: string;
  backTitle: string;
  backImage: string;
  serviceID: string;
  openAccordion(id: string): void;
};

export default function ItemTypeCard(props: ItemTypeCardProps) {
  const [isFlipped, setFlipped] = useState(false);

  async function jumpToAccordion(
    event: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) {
    event.stopPropagation();
    props.openAccordion(id);
    await new Promise((r) => setTimeout(r, 200));
    document.getElementById(id)?.scrollIntoView();
  }

  return (
    <div
      className="item-type-card-container"
      onClick={() => setFlipped(!isFlipped)}
    >
      <div
        className={`item-type-card ${
          isFlipped ? "item-type-card-flipped" : ""
        }`}
      >
        <div className="item-type-card-front">
          <h2>{props.frontTitle}</h2>
          <img
            className="item-type-card-image"
            src={props.frontImage}
            alt={props.frontTitle}
          />
        </div>
        <div className="item-type-card-back">
          <div>
            <h3 className="item-type-card-back-title">{props.backTitle}</h3>
            <button
              className="item-type-card-button"
              type="button"
              onClick={(event) => jumpToAccordion(event, props.serviceID)}
            >
              Click me for more info!
            </button>
          </div>
          <img
            className="item-type-card-image"
            src={props.backImage}
            alt={props.backTitle}
          />
        </div>
      </div>
    </div>
  );
}
