import style from "@/styles/home/Subheading.module.css";

type SubheadingProps = {
  title: string;
  id: string;
};

export default function Subheading(props: SubheadingProps) {
  return (
    <div className={style["subheading-container-wrapper"]} id={props.id}>
      <hr className={style["subheading-separator"]} />
      <div className={style["subheading-container"]}>
        <div className={style["subheading-anchors"]}>
          <a href="#Header">Back to top</a>
        </div>
        <h3 className={style["subheading-text"]}>{props.title}</h3>
        <div className={style["subheading-anchors"]}>
          <a href="#Header">Back to top</a>
        </div>
      </div>
      <hr className={style["subheading-separator"]} />
    </div>
  );
}
