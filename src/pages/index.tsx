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
import { useRef, useState } from "react";

// API url
import { api } from "@/config/api";

// Data and Data Types
import {
  houseRecyclingServices,
  flatRecyclingServices,
  RecyclingServices,
} from "@/data/RecyclingServices";
import { events, Events } from "@/data/Events";

type Props = {
  events: Events[];
  houseRecyclingServices: RecyclingServices[];
  flatRecyclingServices: RecyclingServices[];
};

export default function Home(props: Props) {
  const [showFlatVersion, setShowFlatVersion] = useState(false);

  function toggle() {
    setShowFlatVersion(!showFlatVersion);
  }

  const recyclingServiceAccordionGridRef =
    useRef<RecyclingServiceAccordionGridRef>(null);

  function openAccordion(id: string) {
    recyclingServiceAccordionGridRef.current?.openAccordion(id);
  }

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

      <Header displayEvents={props.events.length > 0} toggle={toggle} />

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
      <ItemTypeCardGrid
        showFlatVersion={showFlatVersion}
        openAccordion={openAccordion}
      />

      <Subheading
        title="Recycling Services"
        id="RecyclingServiceAccordionGrid"
      />
      <RecyclingServiceAccordionGrid
        showFlatVersion={showFlatVersion}
        houseRecyclingServices={props.houseRecyclingServices}
        flatRecyclingServices={props.flatRecyclingServices}
        ref={recyclingServiceAccordionGridRef}
      />

      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  /*  
  FETCHING DATA FROM BACKEND
  UNCOMMENT WHEN READY TO DEPLOY

  const resE = await fetch(`${api}/events`)
  const events = await resE.json()

  const resHRS = await fetch(`${api}/houserecyclingservices`)
  const houseRecyclingServices = await resHRS.json()

  const resFRS = await fetch(`${api}/flatrecyclingservices`)
  const flatRecyclingServices = await resFRS.json()

  */

  // Mock data from data folder
  const mockEvents = events;
  const mockHouseRecyclingServices = houseRecyclingServices;
  const mockFlatRecyclingServices = flatRecyclingServices;

  return {
    props: {
      events: mockEvents,
      houseRecyclingServices: mockHouseRecyclingServices,
      flatRecyclingServices: mockFlatRecyclingServices,
    },
  };
};
