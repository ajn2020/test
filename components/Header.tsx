import { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { AlignCenterOutlined } from '@ant-design/icons';
type HeaderProps = {
  displayEvents: boolean;
};

export default function Header(props: HeaderProps) {

  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);


  const [isGuide, setIsGuide] = useState(true);
  const isGuideChange = () => {
    if (isGuide) {
      setIsGuide(false);
    } else {
      setIsGuide(true)
    }

  }

  return (
    <>
      <div className="header" id="Header">
        <div className="header-title">Hounslow Recycling Hub</div>
        <br />
        <div className="header-description">
          Your go-to stop for all recycling things in the London Borough of
          Hounslow!
        </div>
        <div className="header-anchors">
          <a href="#DecisionTree">Find out how...</a>
          <div className="header-quan"></div>
          {props.displayEvents ? <a href="#EventCardCarousel">Events</a> : ""}
          <div className="header-quan"></div>
          <a href="#ItemTypeCardGrid">How to recycle...</a>
          <div className="header-quan"></div>
          <a href="#RecyclingServiceAccordionGrid">Recycling Services</a>
        </div>


        <div className="guide_div">
          {isGuide ? <div className="isGuide" onClick={() => { isGuideChange }}>
            <div>
              <div><a href="#DecisionTree">Find out how...</a></div>

              <div><a href="#EventCardCarousel">Events</a></div>

              <div><a href="#ItemTypeCardGrid">How to recycle...</a></div>

              <div><a href="#RecyclingServiceAccordionGrid">Recycling Services</a></div>
            </div>
          </div> : <div className="guide_retraction" onClick={() => { isGuideChange }}><AlignCenterOutlined /></div>}


        </div>


      </div>
    </>
  );
}
