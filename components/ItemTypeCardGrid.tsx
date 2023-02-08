import ItemTypeCard from '@/components/ItemTypeCard'

export default function ItemTypeCardGrid() {
  return (
    <div className='item-type-card-grid'>
      <ItemTypeCard frontTitle="Plastic" frontImage="./favicon.ico" backTitle="Plastic can be recycled using the red recycling box." backImage='./favicon.ico' />
      <ItemTypeCard frontTitle="Metal" frontImage="./favicon.ico" backTitle="Metal can be recycled using the red recycling box." backImage='./favicon.ico' />
      <ItemTypeCard frontTitle="Card" frontImage="./favicon.ico" backTitle="Card can be recycled using the blue recycling box." backImage='./favicon.ico' />
      <ItemTypeCard frontTitle="Paper" frontImage="./favicon.ico" backTitle="Paper can be recycled using the blue recycling box." backImage='./favicon.ico' />
      <ItemTypeCard frontTitle="Glass" frontImage="./favicon.ico" backTitle="Glass can be recycled using the green recycling box." backImage='./favicon.ico' />
      <ItemTypeCard frontTitle="Textiles" frontImage="./favicon.ico" backTitle="Textiles can be recycled using a tied carrier bag." backImage='./favicon.ico' />
      <ItemTypeCard frontTitle="Small Electrical Items" frontImage="./favicon.ico" backTitle="Small electrical items can be recycled using a tied carrier bag." backImage='./favicon.ico' />
      <ItemTypeCard frontTitle="Large Electrical Items" frontImage="./favicon.ico" backTitle="Large electrical items can be recycled using the Bulky Waste Collection Service." backImage='./favicon.ico' />
      <ItemTypeCard frontTitle="Food Waste" frontImage="./favicon.ico" backTitle="Food waste can be recycled using the food waste bin." backImage='./favicon.ico' />
      <ItemTypeCard frontTitle="Garden Waste" frontImage="./favicon.ico" backTitle="Garden waste can be recycled using the brown wheeled bin." backImage='./favicon.ico' />
      <ItemTypeCard frontTitle="Furniture" frontImage="./favicon.ico" backTitle="Furniture can be recycled using the Bulky Waste Collection Service." backImage='./favicon.ico' />
      <ItemTypeCard frontTitle="Clinical Waste" frontImage="./favicon.ico" backTitle="Clinical waste can be disposed of using the Clinical Waste Collection Service." backImage='./favicon.ico' />
    </div>
  )
}