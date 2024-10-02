export default function LoadingSkeleton () {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-5">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="bg-gray-300 animate-pulse w-full h-64 px-5 py-3 my-5 rounded-lg">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-6 bg-gray-200 rounded mb-1"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2 mb-1"></div>
        </div>
      ))}
    </div>
  )
}

