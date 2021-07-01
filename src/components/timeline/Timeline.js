import React, { useState, useRef } from "react";
import { demoData } from "./demoData";
import TimelineContent from "./TimelineContent";
import TimelineRuller from "./TimelineRuller";

export default function Timeline({ title = "", data = [], ...props }) {
  const [unit, setUnit] = useState(128);
  const refScroller = useRef();

  const changeScrollHeight = (e) => {
    if (e === "next") {
      refScroller.current.scrollLeft =
        refScroller.current.scrollLeft + refScroller.current.scrollWidth / 8;
    } else {
      refScroller.current.scrollLeft =
        refScroller.current.scrollLeft - refScroller.current.scrollWidth / 8;
    }
  };
  return (
    <div className="pt-5 px-7 bg-gray-900 text-time-puple font-poppins overflow-hidden whitespace-nowrap">
      {Boolean(title?.length) && (
        <span className="text-3xl font-bold">{title ?? ""}</span>
      )}
      <div
        ref={refScroller}
        className="w-full pt-8 overflow-x-auto h-full overflow-y-hidden"
        style={{ scrollBehavior: "smooth" }}
      >
        <TimelineRuller
          unit={unit}
          count={demoData.length}
          onNext={() => changeScrollHeight("next")}
          onBefore={() => changeScrollHeight("before")}
        />
        {(data ?? []).map((item, index) => {
          return (
            <TimelineContent
              key={index}
              heading={index + 1}
              data={item?.Priority2Creator?.contents?.items ?? []}
              unit={unit}
            />
          );
        })}
      </div>
    </div>
  );
}
