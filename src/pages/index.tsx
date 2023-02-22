import Head from "next/head";
import Header from "@/components/Header";
import EngagingBox from "@/components/EngagingBox";
import Subheading from "@/components/Subheading";
import DecisionTree from "@/components/DecisionTree";
import EventCardCarousel from "@/components/EventCardCarousel";
import ItemTypeCardGrid from "@/components/ItemTypeCardGrid";
import RecyclingServiceAccordionGrid from "@/components/RecyclingServiceAccordionGrid";
import Footer from "@/components/Footer";

// API url
import {api} from '@/config/api'

// Data and Data Types
import mockRecyclingServices, { RecyclingServices } from '@/data/RecyclingServices'
import mockEvents, { Events } from '@/data/Events'


type Props = {
  events: Events[], 
  recyclingServices: RecyclingServices[] 
}

export default function Home(props: Props) {
  return (
    <>
      <Head>
        <title>Hounslow Recycling Hub</title>
        <meta name="application-name" content="Hounslow Recycling Hub" />
        <meta
          name="description"
          content="Your go-to stop for all recycling things in the London Borough of Hounslow!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <EngagingBox />

      <Subheading title="Find out how to recycle your item" id="DecisionTree" />
      <DecisionTree />

      {props.events.length > 0 ? (
        <>
          <Subheading title="Events" id="EventCardCarousel" />
          <EventCardCarousel events={props.events} />
        </>
      ) : (
        ""
      )}

      <Subheading title="How to recycle..." id="ItemTypeCardGrid" />
      <ItemTypeCardGrid />

      <Subheading
        title="Recycling Services"
        id="RecyclingServiceAccordionGrid"
      />
      <RecyclingServiceAccordionGrid recyclingServices={props.recyclingServices} />

      <Footer />
    </>
  );
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
  const recyclingServices = mockRecyclingServices
  const events = mockEvents

  
  return{
    props: {
      events: events,
      recyclingServices: recyclingServices,
    },
  }
}
