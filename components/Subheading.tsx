type SubheadingProps = {
    title: string;
}

export default function Subheading(props: SubheadingProps) {
    return (
        <div className="subheading-container">            
            <hr className="subheading-separator" />
            <h2 className="subheading-text">{props.title}</h2>
            <hr className="subheading-separator" />
        </div>
    )
}
