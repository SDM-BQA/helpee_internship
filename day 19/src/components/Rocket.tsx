const Rocket = ({ rocket }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden m-4">
      <div className="p-6">
        {/* Rocket Name */}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4 border-b-2 border-indigo-500 pb-2">
          {rocket.name}
          {rocket.active ? (
            <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
              Active
            </span>
          ) : (
            <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800">
              Inactive
            </span>
          )}
        </h2>

        {/* Rocket Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700 text-lg mb-6">
          <p>
            <strong className="font-semibold text-gray-900">Company:</strong> {rocket.company}
          </p>
          <p>
            <strong className="font-semibold text-gray-900">First Flight:</strong> {rocket.first_flight}
          </p>
          <p>
            <strong className="font-semibold text-gray-900">Country:</strong> {rocket.country}
          </p>
          <p>
            <strong className="font-semibold text-gray-900">Cost per Launch:</strong> ${rocket.cost_per_launch.toLocaleString()}
          </p>
          <p>
            <strong className="font-semibold text-gray-900">Success Rate:</strong> {rocket.success_rate_pct}%
          </p>
          <p>
            <strong className="font-semibold text-gray-900">Height:</strong> {rocket.height.meters} m
          </p>
          <p>
            <strong className="font-semibold text-gray-900">Diameter:</strong> {rocket.diameter.meters} m
          </p>
        </div>

        {/* Rocket Description */}
        <div className="mb-6">
          <p className="text-gray-800 leading-relaxed">
            <strong className="font-semibold text-gray-900">Description:</strong> {rocket.description}
          </p>
        </div>

        {/* Wikipedia link */}
        <div className="text-center mt-6">
          <a
            href={`${rocket.wikipedia}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 shadow-md"
          >
            Learn more on Wikipedia
            <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Rocket;