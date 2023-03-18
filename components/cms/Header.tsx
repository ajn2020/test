import style from "@/styles/cms/Header.module.css";

export default function Header() {
  return (
    <>
      <div className={style["header"]} id="Header">
        <div className={style["header-title"]}>Hounslow Recycling Hub</div>
        <br />
        <div className={style["header-description"]}>
          Content Management System
        </div>
      </div>
    </>
  );
}
