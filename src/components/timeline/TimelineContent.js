import React from "react";
import TimelineAvatar from "./TimelineAvatar";
import TimelineEvent from "./TimelineEvent";

export default function TimelineContent({
  heading = "",
  unit = 128,
  data = {},
  ...props
}) {
  return (
    <div className="h-16 flex flex-row my-2 relative">
      <div className="w-28 fixed z-20 h-16 flex flex-row justify-start bg-event-content">
        <div className="h-full w-10 p-2 text-3xl font-bold bg-event-dark rounded-l-lg flex justify-center items-center">
          {heading ?? ""}
        </div>
        <div className="w-16">
          <TimelineAvatar className={""} src={""} />
        </div>
      </div>
      <div className="pl-28 fixed w-full h-16 bg-event-content">&nbsp;</div>
      <div className="pl-28 relative w-full">
        <TimelineEvent unit={unit} {...(data ?? {})} />
      </div>
    </div>
  );
}
