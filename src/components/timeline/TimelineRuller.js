import React from "react";

export const UnitHour = ({ value = "", ...props }) => (
  <div className="mr-32">
    <span className="text-sm whitespace-nowrap">
      {String(value ?? "").toUpperCase()}
    </span>
  </div>
);

export default function TimelineRuller() {
  const dirAmPm = ["am", "pm"];
  const hrs = [];
  for (let index = 0; index < 12; index++) {
    hrs.push(index);
  }
  return (
    <div className="pl-28 flex flex-row justify-items-start items-center">
      <div className="left-6 top-14 fixed">
        <svg
          className="w-4 text-time-puple"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z" />
        </svg>
      </div>
      <div className="right-6 top-14 fixed">
        <svg
          className="w-4 text-time-puple"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" />
        </svg>
      </div>
      {dirAmPm.map((nowAmPm) =>
        hrs.map((hr, hrIndex) => (
          <UnitHour key={hrIndex} value={`${hr} ${nowAmPm}`} />
        ))
      )}
    </div>
  );
}
