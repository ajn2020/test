import { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

type NavbarProps = {};

export default function Navbar(props: NavbarProps) {
  const [navList] = useState([
    {
      label: "Find out how",
      target: "DecisionTree",
    },
    {
      label: "Events",
      target: "EventCardCarousel",
    },
    {
      label: "How to recycle",
      target: "ItemTypeCardGrid",
    },
    {
      label: "Recycling Services",
      target: "RecyclingServiceAccordionGrid",
    },
  ]);

  return (
    <div>
      <div className="navbar">
        <div className="navbarCenter">
          <div className="navbarCenterLeft">
            <div className="navbarCenterLogoBox">
              <img className="navbarCenterLogo" src="/logo.svg" />
              <div className="navbarCenterLogoName">HOUNSLOW</div>
            </div>
            <div className="navbarItemBox">
              {navList.map((v, i) => {
                return <a href={`#${v.target}`} key={i} className="navbarItem">{v.label}</a>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="fixedHeight"></div>
    </div>
  );
}
