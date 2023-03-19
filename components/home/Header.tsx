import { useState } from "react";
import { Input } from "antd";
import style from "@/styles/home/Header.module.css";

type HeaderProps = {
  displayEvents: boolean;
  showFlatVersion: boolean;
  toggle(): void;
};

export default function Header(props: HeaderProps) {
  return (
    <div className={style["header"]} id="Header">
      <div className={style["header-top"]}>
        <div className={style["switch-with-labels"]}>
          <h3>House</h3>
          <div className={style["switch-wrapper"]}>
            <label className={style["switch"]}>
              <input
                type="checkbox"
                defaultChecked={props.showFlatVersion}
                onClick={props.toggle}
              />
              <span className={style["slider"] + " " + style["round"]}></span>
            </label>
          </div>
          <h3>Flat</h3>
        </div>
        <div className={style["header-title"]}>Hounslow Recycling Hub</div>
      </div>
      <div className={style["header-description"]}>
        Your go-to stop for all recycling things in the London Borough of
        Hounslow!
      </div>
    </div>
  );
}
