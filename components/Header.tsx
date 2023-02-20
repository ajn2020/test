import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useState } from 'react';

export default function Header() {
  const { Search } = Input;
  const [isInput, setIsInput] = useState(false);
  const onSearch = (value: string) => console.log(value);
  const iconClick = () => {
    setIsInput(true);
  }
  const onBlur = () => {
    setIsInput(false);
  }

  return (
    <>
      <div className="header">
        <div className="header-title">Hounslow Recycling Hub</div>
        <br />
        <div className="header-description">
          Your go-to stop for all recycling things in the London Borough of
          Hounslow!
        </div>
        <div className='stepFind'>
          <a href="#onePast">frist component</a>
          <a href="#twoPast">second component</a>
          <a href="#threePast">events</a>
          <a href="#fourPast">4th component</a>
          <a href="#fivePast">5th component</a>
        </div>
        {isInput ? <div className='Seach_input' onBlur={onBlur}><Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} /></div> : <div className='Seach_tan'><SearchOutlined onClick={iconClick} /> </div>}


      </div>
    </>
  );
}
