import Head from "next/head";
import Header from "@/components/Header";
import EngagingBox from "@/components/EngagingBox";
import Subheading from "@/components/Subheading";
import DecisionTree from "@/components/DecisionTree";
import EventCardCarousel from "@/components/EventCardCarousel";
import ItemTypeCardGrid from "@/components/ItemTypeCardGrid";
import RecyclingServiceAccordionGrid, {
  RecyclingServiceAccordionGridRef,
} from "@/components/RecyclingServiceAccordionGrid";
import Footer from "@/components/Footer";
import { useRef, useState, useEffect } from "react";

// API url
import { api } from "@/config/api";

// Data and Data Types
import { recyclingServices, RecyclingServices } from "@/data/RecyclingServices";
import { events, Events } from "@/data/Events";

type Props = {
  events: Events[];
  recyclingServices: RecyclingServices[];
};

export default function Home(props: Props) {
  const recyclingServiceAccordionGridRef =
    useRef<RecyclingServiceAccordionGridRef>(null);

  function openAccordion(id: string) {
    recyclingServiceAccordionGridRef.current?.openAccordion(id);
  }
  const [isNextPage, setIsNextPage] = useState(false);
  const nextPageButton = () => {

    setTimeout(() => {
      setIsNextPage(true)
    }, 500)
  }
  useEffect(() => {
    nextPageButton()


  }, [])
  return (
    <>
      {isNextPage ? <div>
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

        <Header displayEvents={props.events.length > 0} />

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
        <ItemTypeCardGrid openAccordion={openAccordion} />

        <Subheading
          title="Recycling Services"
          id="RecyclingServiceAccordionGrid"
        />
        <RecyclingServiceAccordionGrid
          recyclingServices={props.recyclingServices}
          ref={recyclingServiceAccordionGridRef}
        />

        <Footer />
      </div> : <div className="welcome_page"><h1 className="animate__animated animate__heartBeat">welcome</h1></div>}
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
  const mockRecyclingServices = recyclingServices;
  const mockEvents = events;

  return {
    props: {
      events: mockEvents,
      recyclingServices: mockRecyclingServices,
    },
  };
};
