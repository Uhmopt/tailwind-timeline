import React from 'react'

export default function TimelineEvent({
  title = 'haha',
  tag = 'tiny small',
  unit = 128,
  ...props
}) {
  const time = {
    start: 10000,
    end: 20000,
  }

  const daySecond = 86400
  const fullWidth = unit * 24

  return (
    <div
      className="absolute h-16 px-2 flex flex-col justify-around rounded-lg border-2 border-red-600 cursor-pointer overflow-x-hidden bg-gray-700 hover:bg-gray-600"
      style={{
        left: (fullWidth * time.start) / daySecond,
        width: (fullWidth * (time.end - time.start)) / daySecond,
      }}
    >
      <div className="font-bold w-full overflow-hidden text-sm">{title ?? ''}</div>
      <div className="flex flex-row">
        <div className="w-full flex flex-row justify-between items-center">
          <div className="flex justify-flex-start items-center">
            <span className="text-white text-xs">⬤</span>
            <span className="text-xs px-2">{tag ?? ''}</span>
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
  )
}
