type SubheadingProps = {
  title: string;
  id: string;
};

export default function Subheading(props: SubheadingProps) {
  return (
    <div className="subheading-container-wrapper" id={props.id}>
      <hr className="subheading-separator" />
      <div className="subheading-container">
        <div className="subheading-anchors">
          <a href="#">
            <button className="c-button c-button--gooey">
              Back to top
              <div className="c-button__blobs">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </button>
          </a>

          <svg
            className="svgBtn"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  result="blur"
                  stdDeviation="10"
                  in="SourceGraphic"
                ></feGaussianBlur>
                <feColorMatrix
                  result="goo"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                  mode="matrix"
                  in="blur"
                ></feColorMatrix>
                <feBlend in2="goo" in="SourceGraphic"></feBlend>
              </filter>
            </defs>
          </svg>
        </div>
        <h3 className="subheading-text">{props.title}</h3>
        <div className="subheading-anchors">
          <a href="#">
            <button className="c-button c-button--gooey">
              Back to top
              <div className="c-button__blobs">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </button>
          </a>
        </div>
      </div>
      <hr className="subheading-separator" />
    </div>
  );
}
