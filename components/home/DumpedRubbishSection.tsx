import React from "react";
import { Button } from "antd";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import style from "@/styles/home/DumpedRubbishSection.module.css";

export type DumpedRubbishInfoProps = {
  content: string;
  reportPublicForm: string;
  reportPrivateForm: string;
  payPenaltyLink: string;
};

export default function dumpedRubbishSection(props: DumpedRubbishInfoProps) {
  return (
    <div className={style["dumped-rubbish-container"]}>
      <div className={style["dumped-rubbish-image-div"]}>
        <img
          className={style["dumped-rubbish-image"]}
          src="./dumped_rubbish.png"
          alt=""
        />
      </div>
      <div>
        <div className={style["dumped-rubbish-text"]}>
          <ReactMarkdown>{props.content}</ReactMarkdown>
        </div>
        <div className={style["dumped-rubbish-report"]}>
          <h3>Report Dumped Rubbish</h3>
          <Button
            className={style["dumped-rubbish-button"]}
            onClick={() => (location.href = props.reportPublicForm)}
            size="large"
          >
            On public land
          </Button>
          <Button
            className={style["dumped-rubbish-button"]}
            onClick={() =>  (location.href = props.reportPrivateForm)}
            size="large"
          >
            On private land
          </Button>
        </div>
        <div className={style["dumped-rubbish-pay"]}>
          <h3>Pay Penalty Notice</h3>
          <p>If you have fixed penalty notice for fly tipping:</p>
          <Button
            className={style["dumped-rubbish-button"]}
            onClick={() =>  (location.href = props.payPenaltyLink)}
            size="large"
          >
            Pay Here
          </Button>
        </div>
      </div>
    </div>
  );
}
