import { RecyclingServices } from "@/data/RecyclingServices";
import React, { Ref } from "react";
import ReactMarkdown from "react-markdown";

export type RecyclingServiceAccordionProps = RecyclingServices & {
  id: string;
  isOpen: boolean;
  handleClick: (id: string) => void;
};

export default React.forwardRef<HTMLDivElement, RecyclingServiceAccordionProps>(
  function RecyclingServiceAccordion(props, ref) {
    return (
      <div
        ref={ref}
        id={props.id}
        className="recycling-service-accordion-wrapper"
        onClick={() => props.handleClick(props.id)}
      >
        <div className="recycling-service-accordion">
          <div>
            <img
              className="recycling-service-accordion-item-image"
              src={props.itemImage}
              alt=""
            />
            <div className="recycling-service-accordion-title">
              <h2>{props.title}</h2>
            </div>
          </div>
          <div className="recycling-service-accordion-description">
            <ReactMarkdown>{props.description}</ReactMarkdown>
          </div>
          <div
            className={
              props.isOpen
                ? "recycling-service-accordion-content-displayed"
                : "recycling-service-accordion-content-hidden"
            }
          >
            {props.binImage != null ? (
              <img
                className="recycling-service-accordion-bin-image"
                src={props.binImage}
                alt=""
              />
            ) : (
              <br />
            )}
            <ReactMarkdown>{props.content}</ReactMarkdown>
            {props.infographic != null ? (
              <>
                <img
                  className="recycling-service-accordion-infographic"
                  src={props.infographic}
                  alt=""
                />
              </>
            ) : (
              <br />
            )}
            <ReactMarkdown>
              {`[Link for more details.](${props.link})`}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    );
  }
);
