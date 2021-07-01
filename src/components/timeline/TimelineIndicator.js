import React from 'react'
import { daySecond } from './TimelineEvent'

export default function TimelineIndicator({ unit = 128, count = 0, ...props }) {
  const fullWidth = unit * 24
  const now = new Date()
  const currentTime =
    now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds()

  return (
    <div
      className="absolute border-r-4 border-time-puple overflow-hidden z-20 pointer-events-none"
      style={{
        width: (fullWidth * currentTime) / daySecond,
        // h-16 my-2 : 64 + 16 : 80
        height: count * 80 - 10,
      }}
    >
      <div className="h-full w-full mix-blend-hard-light bg-gray-900 opacity-5 pointer-events-none">
        &nbsp;
      </div>
    </div>
  )
}
