import React, {
  useState,
  useEffect,
  createRef,
  useRef,
  useImperativeHandle,
} from "react";
import { ReportDataType } from "@/data/ReportDumped";
import { Button } from "antd";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

type ReportDataProps = {
  reportData: Array<ReportDataType>
}

export default React.forwardRef<HTMLDivElement, ReportDataProps>(
  function ReportDumped(props, ref) {

    const reportData = useRef([])

    return (
      <div className="report-dumped-container">
        <div>
          <Button style={{ marginTop: '20px', marginBottom: '10px' }} className="report-dumped-button" onClick={() => location.href = "https://hounslowhighways.org/"}>REPORT DUMPED RUBBISH ON PUBLIC LAND</Button>
          <p>Our partners at Hounslow Highways are responsible for picking up dumped rubbish on streets.</p>
        </div>
        <div className="report-dumped-text">
          {props.reportData.map((item) => {
            return (
              <>
                <div className="report-dumped-text-container">
                  <p className="report-dumped-title">{item.title}</p>
                  <ReactMarkdown>
                    {item.content}
                  </ReactMarkdown>
                </div>
              </>
            )
          })}
          <div style={{ marginTop: '20px', paddingBottom: '20px' }}>
            <Button className="report-dumped-button" onClick={() => location.href = "https://www.hounslow.gov.uk/forms/form/215/en/report_dumped_rubbish_on_private_land/"}>REPORT DUMPED RUBBISH ON PRIVATE LAND</Button>
            <Button className="report-dumped-button" onClick={() => location.href = "https://www.hounslow.gov.uk/xfp/form/291"}>PAY FOR YOUR FIXED PENALTY NOTICE FOR FLY TIPPING ON PRIVATE LAND</Button>
          </div>
        </div>
      </div>
    )
  }
)

