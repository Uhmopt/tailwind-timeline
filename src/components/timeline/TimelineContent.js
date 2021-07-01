import React from 'react'
import TimelineEvent from './TimelineEvent'

export default function TimelineContent({
  heading = '',
  unit = 128,
  ...props
}) {
  return (
    <div className="h-16 flex flex-row my-2">
      <div >
        <div className="h-full p-2 text-2xl font-bold bg-gray-700 rounded-l-lg flex justify-center items-center">
          {heading ?? ''}
        </div>
      </div>
      <div className="relative w-full bg-gray-800">
        <TimelineEvent unit={unit} {...props} />
      </div>
    </div>
  )
}
