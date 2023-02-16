import { useState, useEffect, createRef } from "react";
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

  useEffect(() => {
    // Set the min height of the accordions to 0, so that they use their default height.
    refs.forEach((ref) => {
      if (ref.current) {
        ref.current!.style.minHeight = "0px";
      }
    });

    // Find the height of the tallest accordion, ignoring the one that is open.
    let max_height = 0;
    refs.forEach((ref) => {
      if (ref.current?.id != openAccordionID) {
        max_height = Math.max(max_height, ref.current?.offsetHeight || 0);
      }
    });

    // Set the min height of the accordions to the max height.
    refs.forEach((ref) => {
      if (ref.current) {
        ref.current!.style.minHeight = `${max_height}px`;
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
    <div className="recycling-service-accordion-grid">
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

// There is a known bug with the approach used to keep the accordions the same
// height as the tallest one. To recreate this bug, start off with the browser
// window being the maximum width and then open the tallest accordion (the one
// that sets the height for all the other accordions). Next, resize the window
// to be a significantly smaller width and then close the accordion. The closed
// accordion will now be taller than all the other accordions.
//
// This is because when you resized the window and the height of the tallest
// accordion was calculated, the opened accordion was ignored (after all we care
// about the height of the tallest closed accordion). So the height calculated
// was the height of the second tallest accordion, which by definition is less
// than the height of the tallest accordion. So when the tallest accordion is
// closed, the other accordions will be at a smaller height than it is.
//
// While I was able to solve this bug (add openAccordionID to useEffect
// dependencies, keep track of previous openAccordionID using useRef, add a
// setTimeout to the useEffect body with the time being 0 if the previous
// openAccordionID is "" and 200 otherwise, clear timeout in the callback
// function), the solution produced unintended side-effects which I deemed to be
// less desirable than the bug itself. As I was unable to produce a solution
// without these side-effects, the bug remains.
