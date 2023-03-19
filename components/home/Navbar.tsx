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
    <div>
      <div
        className={style["navbar"] + " " + "animate__animated animate__fadeIn"}
      >
        <div className={style["navbarCenter"]}>
          <div className={style["navbarCenterLeft"]}>
            <div className={style["navbarCenterLogoBox"]}>
              <img className={style["navbarCenterLogo"]} src="/logo.svg" />
              <div className={style["navbarCenterLogoName"]}>
                Hounslow Recycling Hub
              </div>
            </div>
            <div className={style["navbarItemBox"]}>
              {navList.map((v, i) => {
                return (
                  <a
                    href={`#${v.target}`}
                    key={i}
                    className={style["navbarItem"]}
                  >
                    {v.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={style["fixedHeight"]}></div>
    </div>
  );
}
