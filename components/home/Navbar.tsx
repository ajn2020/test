import { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

type NavbarProps = {};

export default function Navbar(props: NavbarProps) {
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
      <div className="navbar animate__animated animate__fadeIn">
        <div className="navbarCenter">
          <div className="navbarCenterLeft">
            <a href="/" className="navbarCenterLogoBox">
              <img className="navbarCenterLogo" src="/logo.svg" />
              <div className="navbarCenterLogoName">Hounslow Recycling Hub</div>
            </a>
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
