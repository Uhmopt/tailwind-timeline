import React, { useState } from 'react'
import { demoData } from './demoData'
import TimelineContent from './TimelineContent'
import TimelineRuller from './TimelineRuller'
export default function Timeline({ title = '', data = [], ...props }) {
  const [unit, setUnit] = useState(128)

  return (
    <div className="pt-5 px-7 bg-gray-900 text-time-puple font-poppins overflow-hidden whitespace-nowrap">
      {Boolean(title?.length) && (
        <span className="text-3xl font-bold">{title ?? ''}</span>
      )}
      <div className="w-full overflow-x-auto h-full">
        <TimelineRuller unit={unit} count={demoData.length} />
        {demoData.map((item, index) => {
          return (
            <TimelineContent
              key={index}
              heading={index + 1}
              data={item}
              unit={unit}
            />
          )
        })}
      </div>
    </div>
  )
}
