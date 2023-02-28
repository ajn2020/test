import ItemTypeCard from "@/components/ItemTypeCard";

type ItemTypeCardGridProps = {
  openAccordion(id: string): void;
};

export default function ItemTypeCardGrid(props: ItemTypeCardGridProps) {
  return (
    <div className="item-type-card-grid">
      <ItemTypeCard
        frontTitle="Plastic"
        frontImage="./plastic.png"
        backTitle="Plastic can be recycled using the red recycling box."
        backImage="./red_recycling_box.png"
        serviceID="Red Recycling Box"
        openAccordion={props.openAccordion}
      />
      <ItemTypeCard
        frontTitle="Metal"
        frontImage="./metal.png"
        backTitle="Metal can be recycled using the red recycling box."
        backImage="./red_recycling_box.png"
        serviceID="Red Recycling Box"
        openAccordion={props.openAccordion}
      />
      <ItemTypeCard
        frontTitle="Card"
        frontImage="./card.png"
        backTitle="Card can be recycled using the blue recycling box."
        backImage="./blue_recycling_box.png"
        serviceID="Blue Recycling Box"
        openAccordion={props.openAccordion}
      />
      <ItemTypeCard
        frontTitle="Paper"
        frontImage="./paper.png"
        backTitle="Paper can be recycled using the blue recycling box."
        backImage="./blue_recycling_box.png"
        serviceID="Blue Recycling Box"
        openAccordion={props.openAccordion}
      />
      <ItemTypeCard
        frontTitle="Glass"
        frontImage="./glass.png"
        backTitle="Glass can be recycled using the green recycling box."
        backImage="./green_recycling_box.png"
        serviceID="Green Recycling Box"
        openAccordion={props.openAccordion}
      />
      <ItemTypeCard
        frontTitle="Textiles"
        frontImage="./textiles.png"
        backTitle="Textiles can be recycled using a tied carrier bag."
        backImage="./tied_carrier_bag_1.png"
        serviceID="Tied Carrier Bag (1)"
        openAccordion={props.openAccordion}
      />
      <ItemTypeCard
        frontTitle="Small Electrical Items"
        frontImage="./small_electrical_items.png"
        backTitle="Small electrical items can be recycled using a tied carrier bag."
        backImage="./tied_carrier_bag_2.png"
        serviceID="Tied Carrier Bag (2)"
        openAccordion={props.openAccordion}
      />
      <ItemTypeCard
        frontTitle="Large Electrical Items"
        frontImage="./large_electrical_items.png"
        backTitle="Large electrical items can be recycled using the Bulky Waste Collection Service."
        backImage="./large_electrical_items.png"
        serviceID="Bulky Waste Collection Service"
        openAccordion={props.openAccordion}
      />
      <ItemTypeCard
        frontTitle="Food Waste"
        frontImage="./food_waste.png"
        backTitle="Food waste can be recycled using the food waste bin."
        backImage="./food_waste_bin.png"
        serviceID="Food Waste Bin"
        openAccordion={props.openAccordion}
      />
      <ItemTypeCard
        frontTitle="Garden Waste"
        frontImage="./garden_waste.png"
        backTitle="Garden waste can be recycled using the brown wheeled bin."
        backImage="./brown_wheeled_bin.png"
        serviceID="Brown Wheeled Bin"
        openAccordion={props.openAccordion}
      />
      <ItemTypeCard
        frontTitle="Furniture"
        frontImage="./bulky_waste.png"
        backTitle="Furniture can be recycled using the Bulky Waste Collection Service."
        backImage="./bulky_waste.png"
        serviceID="Bulky Waste Collection Service"
        openAccordion={props.openAccordion}
      />
      <ItemTypeCard
        frontTitle="Clinical Waste"
        frontImage="./clinical_waste_collection_service.png"
        backTitle="Clinical waste can be disposed of using the Clinical Waste Collection Service."
        backImage="./clinical_waste_collection_service.png"
        serviceID="Clinical Waste Collection Service"
        openAccordion={props.openAccordion}
      />
    </div>
  );
}
