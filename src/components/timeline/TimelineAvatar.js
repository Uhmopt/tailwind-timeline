import React from 'react'
import defaultAvatar from 'logo.svg'

export default function TimelineAvatar({
  src = '',
  alt = 'avatar',
  className = '',
  ...props
}) {
  return (
    <img
      className={`h-full w-full object-cover rounded-md bg-white ${className}`}
      src={src || defaultAvatar}
      alt={alt}
      {...props}
    />
  )
}
