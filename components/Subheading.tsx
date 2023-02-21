type SubheadingProps = {
  title: string;
  id: string;
};

export default function Subheading(props: SubheadingProps) {
  return (
    <div className="subheading-container" id={props.id}>
      <hr className="subheading-separator" />
      <h2 className="subheading-text">{props.title}</h2>
      <hr className="subheading-separator" />
    </div>
  );
}
