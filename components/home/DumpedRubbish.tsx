import React from "react";
import { dumpedRubbish } from "@/data/DumpedRubbish"; // TODO: This should be passed in as a prop from index!
import { Button } from "antd";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import style from "@/styles/home/DumpedRubbish.module.css";

export default function DumpedRubbish() {
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
          <ReactMarkdown>{dumpedRubbish.content}</ReactMarkdown>
        </div>
        <div className={style["dumped-rubbish-report"]}>
          <h3>Report Dumped Rubbish</h3>
          <Button
            className={style["dumped-rubbish-button"]}
            onClick={() => (location.href = "https://hounslowhighways.org/")}
            size="large"
          >
            On public land
          </Button>
          <Button
            className={style["dumped-rubbish-button"]}
            onClick={() =>
              (location.href =
                "https://www.hounslow.gov.uk/forms/form/215/en/report_dumped_rubbish_on_private_land/")
            }
            size="large"
          >
            On private land
          </Button>
        </div>
        <div className={style["dumped-rubbish-pay"]}>
          <h3>Pay Penalty Notice</h3>
          <p>Pay for your fixed penalty notice for fly tipping.</p>
          <Button
            className={style["dumped-rubbish-button"]}
            onClick={() =>
              (location.href = "https://www.hounslow.gov.uk/xfp/form/291")
            }
            size="large"
          >
            Pay Here
          </Button>
        </div>
      </div>
    </div>
  );
}
