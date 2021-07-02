import React, { useState } from "react";
import TimelineContent from "./TimelineContent";
import TimelineRuller from "./TimelineRuller";
export default function Timeline({ title = "", data = [], ...props }) {
  const [unit, setUnit] = useState(128);
  const [smapleData, setSmapleData] = useState([
    {
      border: true,
      eventType: 3,
      time: [
        {
          start: 10000,
          end: 20000,
        },
        {
          start: 30000,
          end: 35000,
        },
        {
          start: 40000,
          end: 50000,
        },
      ],
    },
    {
      border: false,
      eventType: 4,
      time: [
        {
          start: 20000,
          end: 30000,
        },
      ],
    },
    {
      border: false,
      eventType: 2,
      time: [
        {
          start: 20000,
          end: 30000,
        },
        {
          start: 40000,
          end: 50000,
        },
      ],
    },
    {
      border: false,
      eventType: 1,
      time: [
        {
          start: 20000,
          end: 30000,
        },
      ],
    },
    {
      border: false,
      eventType: 3,
      time: [
        {
          start: 35000,
          end: 40000,
        },
      ],
    },
  ]);

  return (
    <div className="pt-5 pl-7 pr-7 bg-gray-900 text-time-puple font-poppins overflow-hidden">
      {Boolean(title?.length) && (
        <span className="text-3xl font-bold">{title ?? ""}</span>
      )}
      <div className="w-full overflow-x-auto">
        <TimelineRuller />
        {smapleData.map((item, index) => {
          return (
            <TimelineContent
              key={index}
              heading={index + 1}
              data={item}
              unit={unit}
            />
          );
        })}
      </div>
    </div>
  );
}
