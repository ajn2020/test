import Head from 'next/head'
import DecisionTree from '@/components/DecisionTree'
import Subheading from '@/components/Subheading'
import ItemTypeCardGrid from '@/components/ItemTypeCardGrid'
import RecyclingServiceAccordionGrid from '@/components/RecyclingServiceAccordionGrid'
import EventCardCarousel from '@/components/EventCardCarousel'

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

      <DecisionTree />

      <Subheading title="Events" />
      <EventCardCarousel />

      <Subheading title="How to recycle..." />
      <ItemTypeCardGrid />

      <Subheading title="Recycling Services Available" />
      <RecyclingServiceAccordionGrid />
    </>
  )
}
