import { v4 as uuidv4 } from 'uuid';
import RecyclingServiceAccordion, { RecyclingServiceAccordionProps } from '@/components/RecyclingServiceAccordion'

type RecyclingServiceAccordionGridProps = {
  recyclingServices: Array<RecyclingServiceAccordionProps>
}

export default function RecyclingServiceAccordionGrid(props: RecyclingServiceAccordionGridProps) {
  return (
    <div className='recycling-service-accordion-grid'>
      {props.recyclingServices.map(recyclingService => (
          <RecyclingServiceAccordion key={uuidv4()} title={recyclingService.title} description={recyclingService.description} content={recyclingService.content} />
        ))}
    </div>
  )
}
