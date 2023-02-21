import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useState } from "react";

export default function Header() {
  const { Search } = Input;
  const [isInput, setIsInput] = useState(false);
  const onSearch = (value: string) => console.log(value);
  const iconClick = () => {
    setIsInput(true);
  };
  const onBlur = () => {
    setIsInput(false);
  };

  return (
    <>
      <div className="header">
        <div className="header-title">Hounslow Recycling Hub</div>
        <br />
        <div className="header-description">
          Your go-to stop for all recycling things in the London Borough of
          Hounslow!
        </div>
        <div className="stepFind">
          <a href="#DecisionTree">Find out how to recycle your item</a>
          <a href="#EventCardCarousel">Events</a>
          <a href="#ItemTypeCardGrid">How to recycle...</a>
          <a href="#RecyclingServiceAccordionGrid">Recycling Services</a>
        </div>
        {isInput ? (
          <div className="Seach_input" onBlur={onBlur}>
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              style={{ width: 200 }}
            />
          </div>
        ) : (
          <div className="Seach_tan">
            <SearchOutlined onClick={iconClick} />{" "}
          </div>
        )}
      </div>
    </>
  );
}
