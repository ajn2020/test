import { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

type HeaderProps = {
  displayEvents: boolean;
};

export default function Header(props: HeaderProps) {
  const [isInput, setIsInput] = useState(false);
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);
  const iconClick = () => {
    setIsInput(true);
  };
  const onBlur = () => {
    setIsInput(false);
  };

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
        {isInput ? (
          <div className="header-search-input" onBlur={onBlur}>
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              style={{ width: 200 }}
            />
          </div>
        ) : (
          <div className="header-search">
            <SearchOutlined onClick={iconClick} />
          </div>
        )}
      </div>
    </>
  );
}
