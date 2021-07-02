import React from 'react'
import TimelineBefore from './TimelineBefore'
import TimelineIndicator from './TimelineIndicator'
import TimelineNext from './TimelineNext'

export const UnitHour = ({ value = '', unit = 128, ...props }) => (
  <div
    className="flex flex-shrink-0 flex-grow-0"
    style={{ width: unit, flexBasis: unit }}
  >
    <span className="text-lg font-bold whitespace-nowrap">
      {String(value ?? '').toUpperCase()}
    </span>
  </div>
)

export default function TimelineRuller({
  unit = 128,
  count = 0,
  onNext = () => {},
  onBefore = () => {},
  ...props
}) {
  const dirAmPm = ['am', 'pm']
  const hrs = []
  for (let index = 0; index < 12; index++) {
    hrs.push(index)
  }
  return (
    <div className="ml-28 h-full relative flex flex-row flex-shrink-0 flex-grow-0">
      {dirAmPm.map((nowAmPm) =>
        hrs.map((hr, hrIndex) => (
          <UnitHour key={hrIndex} unit={unit} value={`${hr} ${nowAmPm}`} />
        )),
      )}
      <TimelineIndicator unit={unit} count={count} />
      <TimelineBefore onClick={onBefore} />
      <TimelineNext onClick={onNext} />
    </div>
  )
}
