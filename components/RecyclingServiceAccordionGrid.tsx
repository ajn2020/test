import { useState, useEffect, createRef, useRef } from "react";
import RecyclingServiceAccordion from "@/components/RecyclingServiceAccordion";
import { RecyclingServices } from "@/data/RecyclingServices";

type RecyclingServiceAccordionGridProps = {
  recyclingServices: Array<RecyclingServices>;
};

export default function RecyclingServiceAccordionGrid(
  props: RecyclingServiceAccordionGridProps
) {
  const [openAccordionID, setOpenAccordionID] = useState("");
  const [windowWidth, setWindowWidth] = useState(0);

  const redRecyclingBoxRef = createRef<HTMLDivElement>();
  const blueRecyclingBoxRef = createRef<HTMLDivElement>();
  const greenRecyclingBoxRef = createRef<HTMLDivElement>();
  const tiedCarrierBagOneRef = createRef<HTMLDivElement>();
  const tiedCarrierBagTwoRef = createRef<HTMLDivElement>();
  const foodWasteBinRef = createRef<HTMLDivElement>();
  const brownWheeledBinRef = createRef<HTMLDivElement>();
  const blackWheeledBinRef = createRef<HTMLDivElement>();
  const bulkyWasteCollectionServiceRef = createRef<HTMLDivElement>();
  const clinicalWasteCollectionServiceRef = createRef<HTMLDivElement>();
  const hounslowFurnitureRecyclingProjectRef = createRef<HTMLDivElement>();

  let refs = [
    redRecyclingBoxRef,
    blueRecyclingBoxRef,
    greenRecyclingBoxRef,
    tiedCarrierBagOneRef,
    tiedCarrierBagTwoRef,
    foodWasteBinRef,
    brownWheeledBinRef,
    blackWheeledBinRef,
    bulkyWasteCollectionServiceRef,
    clinicalWasteCollectionServiceRef,
    hounslowFurnitureRecyclingProjectRef,
  ];

  const accordionsMaxHeight = useRef(0); // This is the (closed) height of the tallest accordion.
  const previousOpenAccordionID = useRef("");

  // This hook runs when an accordion is opened or closed. It updates the
  // variable keeping track of the max height of the accordions.
  useEffect(() => {
    // We need to add a delay to take into account an accordion closing before
    // we can calculate the max height.
    const timer = setTimeout(() => {
      // We only need to update max height if an accordion was just closed.
      if (previousOpenAccordionID.current != "") {
        // Find the ref for the accordion that just closed and set the min
        // height of that accordion to 0 so that it uses it's default height.
        // Update max height only if this default height is greater.
        refs.forEach((ref) => {
          if (ref.current?.id == previousOpenAccordionID.current) {
            ref.current!.style.minHeight = "0px";
            accordionsMaxHeight.current = Math.max(
              accordionsMaxHeight.current,
              ref.current?.offsetHeight
            );
          }
        });

        // Set the min height of the accordions to the max height.
        refs.forEach((ref) => {
          if (ref.current) {
            ref.current!.style.minHeight = `${accordionsMaxHeight.current}px`;
          }
        });
      }

      // Update the previous open accordion ID.
      previousOpenAccordionID.current = openAccordionID;
    }, 200);

    // Cleanup timer
    return () => {
      clearTimeout(timer);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openAccordionID]);

  // This hook runs when the width of the browser window changes. It updates the
  // variable keeping track of the max height of the accordions.
  useEffect(() => {
    // Set the min height of the accordions to 0, so that they use their default height.
    refs.forEach((ref) => {
      if (ref.current) {
        ref.current!.style.minHeight = "0px";
      }
    });

    // Find the height of the tallest accordion, ignoring the one that is potentially open.
    let calculatedMaxHeight = 0;
    refs.forEach((ref) => {
      if (ref.current?.id != openAccordionID) {
        calculatedMaxHeight = Math.max(
          calculatedMaxHeight,
          ref.current?.offsetHeight || 0
        );
      }
    });

    // Update max height.
    accordionsMaxHeight.current = calculatedMaxHeight;

    // Set the min height of the accordions to the max height.
    refs.forEach((ref) => {
      if (ref.current) {
        ref.current!.style.minHeight = `${accordionsMaxHeight.current}px`;
      }
    });

    // Add window listener.
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup window listener.
    return () => {
      window.removeEventListener("resize", handleResize);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowWidth]);

  function handleClick(id: string) {
    setOpenAccordionID(id == openAccordionID ? "" : id);
  }

  return (
    <div className="recycling-service-accordion-grid" id="fivePast">
      <div className="recycling-service-accordion-grid-col">
        {props.recyclingServices
          .slice(0, Math.ceil(props.recyclingServices.length / 2))
          .map((recyclingService, index) => (
            <RecyclingServiceAccordion
              key={recyclingService.title}
              id={recyclingService.title}
              title={recyclingService.title}
              description={recyclingService.description}
              content={recyclingService.content}
              isOpen={openAccordionID == recyclingService.title}
              handleClick={handleClick}
              ref={refs[index]}
            />
          ))}
      </div>
      <div className="recycling-service-accordion-grid-col">
        {props.recyclingServices
          .slice(Math.ceil(props.recyclingServices.length / 2))
          .map((recyclingService, index) => (
            <RecyclingServiceAccordion
              key={recyclingService.title}
              id={recyclingService.title}
              title={recyclingService.title}
              description={recyclingService.description}
              content={recyclingService.content}
              isOpen={openAccordionID == recyclingService.title}
              handleClick={handleClick}
              ref={refs[index + Math.ceil(props.recyclingServices.length / 2)]}
            />
          ))}
      </div>
    </div>
  );
}
