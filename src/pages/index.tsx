import { useRef, useState, useEffect } from "react";

// Components
import Head from "next/head";
import "animate.css";
import Popup from "reactjs-popup";
import Header from "@/components/home/Header";
import Navbar from "@/components/home/Navbar";
import EngagingBox from "@/components/home/EngagingBox";
import Subheading from "@/components/home/Subheading";
import DecisionTree from "@/components/home/DecisionTree";
import EventCardCarousel from "@/components/home/EventCardCarousel";
import ItemTypeCardGrid from "@/components/home/ItemTypeCardGrid";
import RecyclingServiceAccordionGrid, {
  RecyclingServiceAccordionGridRef,
} from "@/components/home/RecyclingServiceAccordionGrid";
import Footer from "@/components/Footer";

// API URL
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
  const [top, setTop] = useState(false);
  // Find the right
  const [t1, setT1] = useState(false);
  // EVENTS
  const [t2, setT2] = useState(false);
  // How to recycle...
  const [t3, setT3] = useState(false);

  const [showFlatVersion, setShowFlatVersion] = useState<boolean>();
  const [showPopup, setShowPopup] = useState(false);

  // This hook is called when the page loads. It attempts to fetch
  // showFlatVersion from local storage. If it cannot be found, it sets it to
  // the default value of false and shows the popup.
  useEffect(() => {
    if (localStorage.getItem("showFlatVersion") == null) {
      setShowFlatVersion(false);
      setShowPopup(true);
    } else {
      setShowFlatVersion(JSON.parse(localStorage.getItem("showFlatVersion")!));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // This hook is called whenever showFlatVersion changes. It saves it to local
  // storage.
  useEffect(() => {
    if (typeof showFlatVersion !== "undefined") {
      localStorage.setItem("showFlatVersion", JSON.stringify(showFlatVersion));
    }
  }, [showFlatVersion]);

  function handlePopupSelection(selected: boolean) {
    setShowFlatVersion(selected);
    setShowPopup(false);
  }

  function toggleVersion() {
    setShowFlatVersion(!showFlatVersion);
  }

  const recyclingServiceAccordionGridRef =
    useRef<RecyclingServiceAccordionGridRef>(null);

  function openAccordion(id: string) {
    recyclingServiceAccordionGridRef.current?.openAccordion(id);
  }

  useEffect(() => {
    window.onscroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      console.log("scrollTop = ", scrollTop);
      if (scrollTop > 100) {
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

      if (scrollTop >= 1150 && scrollTop <= 5000) {
        setT3(true);
      } else {
        setT3(false);
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

      {/* To reset local storage, type localStorage.clear() into your web browser console. */}
      <Popup modal open={showPopup} className="home-popup">
        <button
          className="home-popup-close"
          onClick={() => setShowPopup(false)}
        >
          &times;
        </button>
        <h1>What best describes your living situation?</h1>
        <button
          type="button"
          className="home-popup-button"
          onClick={() => handlePopupSelection(false)}
        >
          House
        </button>
        <button
          type="button"
          className="home-popup-button"
          onClick={() => handlePopupSelection(true)}
        >
          Flat
        </button>
      </Popup>

      <Header
        displayEvents={props.events.length > 0}
        showFlatVersion={showFlatVersion!}
        toggle={toggleVersion}
      />

      <EngagingBox showFlatVersion={showFlatVersion!} />

      <Subheading title="Recycling Assistant" id="DecisionTree" />
      <DecisionTree />


      {props.events.length > 0 ? (
        <>
 
            <Subheading title="Events" id="EventCardCarousel" />

          <EventCardCarousel events={props.events} />
        </>
      ) : (
        ""
      )}


      <div className={t3 ? "animate__animated animate__fadeInLeft" : ""}>
        <Subheading
          title="Recycling Services"
          id="RecyclingServiceAccordionGrid"
        />
      </div>

      <RecyclingServiceAccordionGrid
        showFlatVersion={showFlatVersion!}
        houseRecyclingServices={props.houseRecyclingServices}
        flatRecyclingServices={props.flatRecyclingServices}
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
