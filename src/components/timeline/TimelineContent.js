import React from "react";
import TimelineEvent from "./TimelineEvent";

export default function TimelineContent({
  heading = "",
  unit = 128,
  ...props
}) {
  return (
    <div className="h-16 flex flex-row my-2">
      <div>
        <div className="h-full p-2 text-3xl font-bold bg-event-dark rounded-l-lg flex justify-center items-center w-10">
          {heading ?? ""}
        </div>
      </div>
      <div className="relative w-full bg-event-content">
        <TimelineEvent
          unit={unit}
          {...props.data}
          eventType={props.data.eventType}
        />
      </div>
    </div>
  );
}
