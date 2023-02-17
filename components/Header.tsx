import { Anchor, Col, Row } from 'antd';

export default function Header() {
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
      </div>
    </>
  );
}
