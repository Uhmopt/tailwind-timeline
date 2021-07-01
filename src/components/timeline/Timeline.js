import React, { useState } from 'react'
import TimelineContent from './TimelineContent'
import TimelineRuller from './TimelineRuller'

export default function Timeline({ title = '', data = [], ...props }) {
  const [unit, setUnit] = useState(128)

  return (
    <div className="p-2 bg-gray-900 text-red-500 font-poppins">
      {Boolean(title?.length) && (
        <span className="text-3xl font-bold">{title ?? ''}</span>
      )}
      <TimelineRuller unit={unit} />
      <TimelineContent heading={1} unit={unit} />
      <div></div>
    </div>
  )
}
