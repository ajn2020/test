import React from "react";
import { dumpedRubbish } from "@/data/DumpedRubbish";
import { Button } from "antd";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function DumpedRubbish() {
  return (
    <div className="dumped-rubbish-container">
      <div className="dumped-rubbish-image-div">
        <img
          className="dumped-rubbish-image"
          src="./dumped_rubbish.png"
          alt=""
        />
      </div>
      <div>
        <div className="dumped-rubbish-text">
          <ReactMarkdown>{dumpedRubbish.content}</ReactMarkdown>
        </div>
        <div className="dumped-rubbish-report">
          <h3>Report Dumped Rubbish</h3>
          <Button
            className="dumped-rubbish-button"
            onClick={() => (location.href = "https://hounslowhighways.org/")}
            size="large"
          >
            On public land
          </Button>
          <Button
            className="dumped-rubbish-button"
            onClick={() =>
              (location.href =
                "https://www.hounslow.gov.uk/forms/form/215/en/report_dumped_rubbish_on_private_land/")
            }
            size="large"
          >
            On private land
          </Button>
        </div>
        <div className="dumped-rubbish-pay">
          <h3>Pay Penalty Notice</h3>
          <p>Pay for your fixed penalty notice for fly tipping.</p>
          <Button
            className="dumped-rubbish-button"
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
