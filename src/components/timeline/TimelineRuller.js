import React from 'react'

export const UnitHour = ({ value = '', ...props }) => (
  <div className="mr-32">
    <span className="text-sm whitespace-nowrap">
      {String(value ?? '').toUpperCase()}
    </span>
  </div>
)

export default function TimelineRuller() {
  const dirAmPm = ['am', 'pm']
  const hrs = []
  for (let index = 0; index < 12; index++) {
    hrs.push(index)
  }
  return (
    <div className="flex flex-row justify-items-start items-center">
      {dirAmPm.map((nowAmPm) =>
        hrs.map((hr, hrIndex) => (
          <UnitHour key={hrIndex} value={`${hr} ${nowAmPm}`} />
        )),
      )}
    </div>
  )
}
