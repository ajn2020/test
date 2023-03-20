import { useEffect, useRef, useState } from "react";
import style from "@/styles/home/Subheading.module.css";

type SubheadingProps = {
  title: string;
  id: string;
};

export default function Subheading(props: SubheadingProps) {
  const subheadingRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: "-50px 0px 0px 0px" }
    );
    if (subheadingRef.current) {
      observer.observe(subheadingRef.current);
    }
    return () => {
      if (subheadingRef.current) {
        observer.unobserve(subheadingRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`${style["subheading-container-wrapper"]} ${
        isVisible ? style.visible : ""
      }`}
      ref={subheadingRef}
      id={props.id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={style["subheading-container"]}>
        <div className={style["subheading-anchors"]}></div>
        <h3 className={style["subheading-text"]}>{props.title}</h3>
        <div className={style["subheading-anchors"]}></div>
      </div>
      {isHovered && <hr className={style["subheading-separator-hover"]} />}
      {!isHovered && <hr className={style["subheading-separator"]} />}
      <svg
        className={style["wave"]}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 319"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,32L48,53.3C96,75,192,117,288,138.7C384,160,480,160,576,176C672,192,768,224,864,213.3C960,203,1056,149,1152,144C1248,139,1344,181,1392,202.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
