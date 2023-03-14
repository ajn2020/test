import React from "react";
import * as dumpedRubbish from "@/data/DumpedRubbish";
import { Button } from "antd";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";


export default function DumpedRubbish() {
  return (
    <div  className="dumped-rubbish-container">
      <div className="dumped-rubbish-image"><img src="./dumped_rubbish.png"/></div>
      <div className="dumped-rubbish-inline">
        <h2>{dumpedRubbish.title}</h2>
        <ReactMarkdown>{dumpedRubbish.subtitle}</ReactMarkdown>
        <br/>
        <div className="dumped-rubbish-text-container">
          <h3>{dumpedRubbish.reportInfoTitle}</h3>
          <ReactMarkdown className="dumped-rubbish-text">{dumpedRubbish.reportInfo}</ReactMarkdown>
          <br/>
          <h3>{dumpedRubbish.reportTitle}</h3>
          <div>
            <ReactMarkdown className="dumped-rubbish-text">
              {dumpedRubbish.reportPublic}
            </ReactMarkdown>
            <Button 
              className="dumped-rubbish-button" 
              onClick={() => location.href = "https://hounslowhighways.org/"}>
                FORM
            </Button>
          </div>
          <div>
            <ReactMarkdown className="dumped-rubbish-text">
              {dumpedRubbish.reportPrivate}
            </ReactMarkdown>
            <Button 
              className="dumped-rubbish-button" 
              onClick={() => 
              location.href = "https://www.hounslow.gov.uk/forms/form/215/en/report_dumped_rubbish_on_private_land/"}>
                FORM
            </Button>
          </div>
          <br/>
          <h3>{dumpedRubbish.payTitle}</h3>
          <ReactMarkdown>{dumpedRubbish.pay}</ReactMarkdown>
          <Button 
            className="dumped-rubbish-button" 
            onClick={() => location.href = "https://www.hounslow.gov.uk/xfp/form/291"}>
            FORM
          </Button>    
        </div>
      </div>
    </div>
  );
}

