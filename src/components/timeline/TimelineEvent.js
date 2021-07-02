import React from "react";

export default function TimelineEvent({
  title = "haha-Timeline",
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
      className="flex flex-row absolute h-16 flex-shrink-0 flex-grow-0"
      style={
        Number(eventType) === 1
          ? {
              left: (fullWidth * start) / daySecond,
              flexBasis: (fullWidth * (end - start)) / daySecond,
            }
          : eventType === 2
          ? {
              left: (fullWidth * start) / daySecond - 64,
              flexBasis: (fullWidth * (end - start)) / daySecond,
            }
          : eventType === 3
          ? {
              left: (fullWidth * start) / daySecond,
            }
          : {
              left: (fullWidth * start) / daySecond,
            }
      }
    >
      {Boolean(eventType === 2) && (
        <div className="w-16 bg-gradient-to-r from-transparent via-event-dark to-event-dark border-0">
          &nbsp;
        </div>
      )}
      <div
        className={`px-2 w-full flex flex-col justify-around bg-event-dark cursor-pointer overflow-x-hidden z-10 ${
          eventType === 2 // both grad
            ? "rounded-none border-0"
            : eventType === 3 // right grad
            ? "rounded-l-lg"
            : "rounded-lg border-2"
        } ${Boolean(border) ? "border-red-600" : "border-transparent"}`}
      >
        <div
          className={`font-bold w-full overflow-hidden text-sm  ${
            Boolean(!border) ? "text-white" : ""
          }  `}
        >
          {title ?? ""}
        </div>
        <div className="flex flex-row">
          <div className="w-full flex flex-row justify-between items-center">
            <div className="flex justify-flex-start items-center">
              <span
                className={`${
                  Boolean(!border) && Number(eventType) !== 3
                    ? "text-event-no-active"
                    : "text-white"
                } text-xs`}
              >
                ⬤
              </span>
              <span className="text-xs px-2">{tag ?? ""}</span>
            </div>
            {eventType !== 4 ? (
              <div
                className={`${
                  Boolean(!border) && Number(eventType) !== 3
                    ? "text-event-no-active"
                    : "text-white"
                } text-xs`}
              >
                asdflkajsdfl
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        {eventType !== 4 ? (
          <div className="flex flex-row">
            <div className="w-full flex flex-row justify-between items-center">
              <div className="flex justify-flex-start items-center">
                <span className="text-xs">Live</span>
                <span
                  className={`${
                    Boolean(!border) && Number(eventType) !== 3
                      ? "text-event-no-active"
                      : "text-white"
                  } text-xs px-2`}
                >
                  ahfaklsdfjalksdfj
                </span>
              </div>
              <div
                className={`${
                  Boolean(!border) && Number(eventType) !== 3
                    ? "text-event-no-active"
                    : "text-white"
                } text-xs`}
              >
                asdflkajsdfl
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {Boolean(eventType < 4 && eventType >= 2) && (
        <div className="w-16 bg-gradient-to-l from-transparent via-event-dark to-event-dark border-r-0">
          &nbsp;
        </div>
      )}
      {Boolean(eventType === 4) && (
        <div className="flex flex-row justify-start items-center">
          <div className="h-2/3 rounded-r-full w-6 -m-3 z-0 bg-time-puple">
            &nbsp;
          </div>
        </div>
      )}
    </div>
  );
}
