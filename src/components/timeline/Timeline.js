import React, { useState } from "react";
import TimelineContent from "./TimelineContent";
import TimelineRuller from "./TimelineRuller";

export default function Timeline({ title = "", data = [], ...props }) {
  const [unit, setUnit] = useState(128);
  const [defaultProps, setDefaultProps] = useState([
    {
      border: true,
      eventType: 1,
      start: 10000,
      end: 20000,
    },
    {
      border: false,
      eventType: 2,
      start: 20000,
      end: 30000,
    },
    {
      border: false,
      eventType: 3,
      start: 40000,
      end: 50000,
    },
    {
      border: false,
      eventType: 1,
      start: 20000,
      end: 30000,
    },
    {
      border: false,
      eventType: 3,
      start: 10000,
      end: 20000,
    },
  ]);

  return (
    <div className="p-2 bg-gray-900 text-time-puple font-poppins">
      {Boolean(title?.length) && (
        <span className="text-3xl font-bold">{title ?? ""}</span>
      )}
      {defaultProps.map((item, index) => {
        return <TimelineContent heading={index + 1} data={item} />;
      })}
      <div></div>
    </div>
  );
}
