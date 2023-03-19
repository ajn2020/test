import { useState } from "react";
import style from "@/styles/home/Navbar.module.css";

export default function Navbar() {
  const [navList] = useState([
    {
      label: "Recycling Assistant",
      target: "DecisionTree",
    },
    {
      label: "Events",
      target: "EventCardCarousel",
    },
    {
      label: "Recycling Services",
      target: "RecyclingServiceAccordionGrid",
    },
  ]);

  return (
    <div
      className={style["navbar"] + " " + "animate__animated animate__fadeIn"}
    >
      <div className={style["navbar-contents"]}>
        <img className={style["navbar-logo"]} src="/logo.svg" alt="" />
        <div className={style["navbar-title"]}>Hounslow Recycling Hub</div>
        <div className={style["navbar-anchor-box"]}>
          {navList.map((navItem, navItemIndex) => {
            return (
              <a
                key={navItemIndex}
                className={style["navbar-anchor"]}
                href={`#${navItem.target}`}
              >
                {navItem.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
