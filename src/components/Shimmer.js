const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array(8)
        .fill("")
        .map((_, i) => (
          <div
            key={i}
            className="rounded-xl border border-gray-200 p-4 space-y-4 animate-pulse"
          >
            {/* Image */}
            <div className="h-40 w-full bg-gray-300 rounded-lg"></div>

            {/* Title */}
            <div className="h-4 w-3/4 bg-gray-300 rounded"></div>

            {/* Cuisine line */}
            <div className="h-3 w-full bg-gray-200 rounded"></div>
            <div className="h-3 w-5/6 bg-gray-200 rounded"></div>

            {/* Rating + time */}
            <div className="flex justify-between">
              <div className="h-3 w-1/4 bg-gray-300 rounded"></div>
              <div className="h-3 w-1/5 bg-gray-300 rounded"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
