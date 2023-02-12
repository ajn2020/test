import Head from 'next/head'
import DecisionTree from '@/components/DecisionTree'
import Subheading from '@/components/Subheading'
import EngagingBox from '@/components/EngagingBox'
import EventCardCarousel from '@/components/EventCardCarousel'
import events from '@/data/Events'
import ItemTypeCardGrid from '@/components/ItemTypeCardGrid'
import RecyclingServiceAccordionGrid from '@/components/RecyclingServiceAccordionGrid'
import recyclingServices from '@/data/RecyclingServices'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hounslow Recycling Hub</title>
        <meta name="application-name" content="Hounslow Recycling Hub" />
        <meta name="description" content="Your go-to stop for all recycling things in the London Borough of Hounslow!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <EngagingBox/>

      <Subheading title="Find out how to recycle your item" />
      <DecisionTree />

      {
        events.length > 0 ? (
          <>
            <Subheading title="Events" />
            <EventCardCarousel events={events} />
          </>
        ) : ''
      }

      <Subheading title="How to recycle..." />
      <ItemTypeCardGrid />

      <Subheading title="Recycling Services" />
      <RecyclingServiceAccordionGrid recyclingServices={recyclingServices} />
    </>
  )
}
