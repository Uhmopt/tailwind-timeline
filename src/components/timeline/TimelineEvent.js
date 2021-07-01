import React from "react";

export default function TimelineEvent({
  title = "haha",
  tag = "tiny small",
  unit = 128,
  // time = {
  start = 10000,
  end = 20000,
  // },
  eventType = 2,
  border = false,
  ...props
}) {
  const daySecond = 86400;
  const fullWidth = unit * 24;

  return (
    <div
      className={`absolute h-16 px-2 flex flex-col justify-around rounded-lg border-2 ${
        Boolean(border) ? "border-red-600" : "border-transparent"
      } ${
        eventType == 2 &&
        "bg-gradient-to-r from-transparent via-event-dark to-transparent border-transparent space-x-2"
      } ${
        eventType == 3 &&
        "bg-gradient-to-r from-transparent via-event-dark to-event-dark border-r-0"
      } cursor-pointer overflow-x-hidden bg-event-dark  hover:bg-gray-600 bg-gradient-to-l`}
      style={
        Number(eventType) === 1
          ? {
              left: (fullWidth * start) / daySecond,
              width: (fullWidth * (end - start)) / daySecond,
            }
          : {
              left: (fullWidth * start) / daySecond,
            }
      }
    >
      <div className="font-bold w-full overflow-hidden text-sm">
        {title ?? ""}
      </div>
      <div className="flex flex-row">
        <div className="w-full flex flex-row justify-between items-center">
          <div className="flex justify-flex-start items-center">
            <span className="text-white text-xs">⬤</span>
            <span className="text-xs px-2">{tag ?? ""}</span>
          </div>
          <div className="text-white text-xs">asdflkajsdfl</div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-full flex flex-row justify-between items-center">
          <div className="flex justify-flex-start items-center">
            <span className="text-xs">Live</span>
            <span className="text-white text-xs px-2">ahfaklsdfjalksdfj</span>
          </div>
          <div className="text-white text-xs">asdflkajsdfl</div>
        </div>
      </div>
    </div>
  );
}
