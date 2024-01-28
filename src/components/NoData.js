import React from 'react'

const NoData = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
    <svg
      className="w-16 h-16 text-gray-500 mb-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
    <p className="text-gray-600 text-lg font-semibold mb-2">No Data Found</p>
    <p className="text-gray-400">Sorry, we couldn't find any restaurants matching your criteria.</p>
  </div>
  )
}

export default NoData
