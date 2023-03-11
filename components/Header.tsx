import { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

type HeaderProps = {
  displayEvents: boolean;
  showFlatVersion: boolean;
  toggle(): void;
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
        <div className="header-top">
          <div className="switch-with-labels">
            <h3>House</h3>
            <div className="switch-wrapper">
              <label className="switch">
                <input
                  type="checkbox"
                  defaultChecked={props.showFlatVersion}
                  onClick={props.toggle}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <h3>Flat</h3>
          </div>
          <div className="header-title">Hounslow Recycling Hub</div>
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
        <br />
        <div className="header-description">
          Your go-to stop for all recycling things in the London Borough of
          Hounslow!
        </div>
      </div>
    </>
  );
}
