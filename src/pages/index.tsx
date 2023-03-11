import Head from "next/head";
import "animate.css";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import EngagingBox from "@/components/EngagingBox";
import Subheading from "@/components/Subheading";
import DecisionTree from "@/components/DecisionTree";
import EventCardCarousel from "@/components/EventCardCarousel";
import ItemTypeCardGrid from "@/components/ItemTypeCardGrid";
import RecyclingServiceAccordionGrid, {
  RecyclingServiceAccordionGridRef,
} from "@/components/RecyclingServiceAccordionGrid";
import Footer from "@/components/Footer";
import { useRef } from "react";

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
  const [top, setTop] = useState(false);
  // Find the right
  const [t1, setT1] = useState(false);
  // EVENTS
  const [t2, setT2] = useState(false);
  // How to recycle...
  const [t3, setT3] = useState(false);
  const [t4, setT4] = useState(false);

  const recyclingServiceAccordionGridRef =
    useRef<RecyclingServiceAccordionGridRef>(null);

  function openAccordion(id: string) {
    recyclingServiceAccordionGridRef.current?.openAccordion(id);
  }

  useEffect(() => {
    window.onscroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      console.log("scrollTop = ", scrollTop);
      if (scrollTop > 1000) {
        setTop(true);
      } else {
        setTop(false);
      }
      if (scrollTop >= 100 && scrollTop <= 1150) {
        setT1(true);
      } else {
        setT1(false);
      }

      if (scrollTop >= 560 && scrollTop <= 1350) {
        setT2(true);
      } else {
        setT2(false);
      }

      if (scrollTop >= 1150 && scrollTop <= 2500) {
        setT3(true);
      } else {
        setT3(false);
      }

      if (scrollTop >= 2000) {
        setT4(true);
      } else {
        setT4(false);
      }
    };
    return () => {
      window.onscroll = null;
    };
  }, []);
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

      <Navbar />

      <Header displayEvents={props.events.length > 0} />

      <div className="animate__animated animate__fadeInRight">
        <EngagingBox />
      </div>

      <div className="animate__animated animate__fadeInLeft">
        <Subheading
          title="Find out how to recycle your item"
          id="DecisionTree"
        />
      </div>

      <div className={t1 ? "animate__animated animate__jello" : ""}>
        <DecisionTree />
      </div>

      {props.events.length > 0 ? (
        <>
          <div className={t2 ? "animate__animated animate__fadeInLeft" : ""}>
            <Subheading title="Events" id="EventCardCarousel" />
          </div>

          <EventCardCarousel t2={t2} events={props.events} />
        </>
      ) : (
        ""
      )}
      <div className={t3 ? "animate__animated animate__fadeInLeft" : ""}>
        <Subheading title="How to recycle..." id="ItemTypeCardGrid" />
      </div>

      <ItemTypeCardGrid t3={t3} openAccordion={openAccordion} />

      <div className={t4 ? "animate__animated animate__fadeInLeft" : ""}>
        <Subheading
          title="Recycling Services"
          id="RecyclingServiceAccordionGrid"
        />
      </div>
      <RecyclingServiceAccordionGrid
        t4={t4}
        recyclingServices={props.recyclingServices}
        ref={recyclingServiceAccordionGridRef}
      />
      {top && (
        <a href="#">
          <button className="toTop">Top</button>
        </a>
      )}
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
  const mockRecyclingServices = recyclingServices;
  const mockEvents = events;

  return {
    props: {
      events: mockEvents,
      recyclingServices: mockRecyclingServices,
    },
  };
};
