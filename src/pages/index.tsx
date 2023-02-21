import Head from 'next/head'
import DecisionTree from '@/components/DecisionTree'
import Subheading from '@/components/Subheading'
import EngagingBox from '@/components/EngagingBox'
import EventCardCarousel from '@/components/EventCardCarousel'
import ItemTypeCardGrid from '@/components/ItemTypeCardGrid'
import RecyclingServiceAccordionGrid from '@/components/RecyclingServiceAccordionGrid'
import {api} from '@/config/api'

// Data and Data Types
import { RecyclingServices, mockRecyclingServices } from '@/data/RecyclingServices'
import { Events, mockEvents } from '@/data/Events'



type Props = {
  events: Events[], 
  recyclingServices: RecyclingServices[] 
}

export default function Home(props: Props)  {
  return (
    <>
      <Head>
        <title>Hounslow Recycling Hub</title>
        <meta name="application-name" content="Hounslow Recycling Hub" />
        <meta name="description" content="Your go-to stop for all recycling things in the London Borough of Hounslow!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <EngagingBox />

      <Subheading title="Find out how to recycle your item" />
      <DecisionTree />

      {
        props.events.length > 0 ? (
          <>
            <Subheading title="Events" />
            <EventCardCarousel events={props.events} />
          </>
        ) : ''
      }

      <Subheading title="How to recycle..." />
      <ItemTypeCardGrid />

      <Subheading title="Recycling Services" />
      <RecyclingServiceAccordionGrid recyclingServices={props.recyclingServices} />
    </>
  )
}

export const getServerSideProps = async () => {

  /*  
      FETCHING DATA FROM BACKEND
      UNCOMMENT WHEN READY TO DEPLOY
      
        const resRS = await fetch(`${api}/recyclingservices`)
        const recyclingServices = await resRS.json()

        const resE = await fetch(`${api}/events`)
        const events = await resE.json()
  */
  
  // Mock data from data folder
  
  recyclingService = mockRecyclingServices
  events = mockEvents
  
  return{
    props: {
      events: events,
      recyclingServices: recyclingServices,
    },
  }
}
