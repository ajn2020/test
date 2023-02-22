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
          <a href="#Header">Back to top</a>
        </div>
        <h3 className="subheading-text">{props.title}</h3>
        <div className="subheading-anchors">
          <a href="#Header">Back to top</a>
        </div>
      </div>
      <hr className="subheading-separator" />
    </div>
  );
}
