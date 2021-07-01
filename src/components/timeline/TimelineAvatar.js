import React from 'react'

export default function TimelineAvatar({
  src = '',
  alt = 'avatar',
  className = '',
  ...props
}) {
  return Boolean(src?.length) ? (
    <img
      className={`h-full w-full object-cover rounded-md bg-white ${className}`}
      src={src}
      alt={alt}
      {...props}
    />
  ) : (
    <svg
      className="h-full w-full object-cover rounded-md bg-white"
      width="128"
      height="128"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28 95.6884C28.0592 90.5538 29.1283 85.4811 31.1464 80.7595C33.347 76.351 42.5543 73.2935 54.1106 69.0118C57.2323 67.8525 56.7223 59.6909 55.3469 58.1668C53.1425 55.7787 51.468 52.9512 50.4335 49.87C49.3991 46.7887 49.028 43.5235 49.3447 40.2886C49.1231 38.2356 49.336 36.159 49.9698 34.1938C50.6035 32.2286 51.6438 30.4189 53.023 28.8825C54.4021 27.346 56.0892 26.1172 57.9745 25.276C59.8598 24.4348 61.9011 24 63.9655 24C66.0298 24 68.0711 24.4348 69.9564 25.276C71.8417 26.1172 73.5288 27.346 74.9079 28.8825C76.2871 30.4189 77.3274 32.2286 77.9611 34.1938C78.5949 36.159 78.8079 38.2356 78.5862 40.2886C78.9029 43.5235 78.5317 46.7887 77.4973 49.87C76.4628 52.9512 74.7884 55.7787 72.5839 58.1668C71.1993 59.6909 70.6863 67.8525 73.8203 69.0118C85.3766 73.2904 94.5839 76.3479 96.7845 80.7595C98.8026 85.4811 99.8717 90.5538 99.9309 95.6884H28Z"
        stroke="#C7BBD0"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
