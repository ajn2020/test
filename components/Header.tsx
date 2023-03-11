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
      <div className="header animate__animated animate__fadeIn" id="Header">
        <div className="header-title">Hounslow Recycling Hub</div>
        <br />
        <div className="header-description">
          Your go-to stop for all recycling things in the London Borough of
          Hounslow!
        </div>
      </div>
    </>
  );
}
