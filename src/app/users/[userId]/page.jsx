
const UsersDetailPage = async({params}) => {
    const {userId} = await params
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await res.json()
    return (
      <div className="w-[60%] mx-auto h-screen flex justify-center items-center">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden w-full">
          {/* Header Banner */}
          <div className="h-16 bg-linear-to-r from-gray-800 to-gray-900 relative">
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 border-2 border-white dark:border-gray-800 flex items-center justify-center text-blue-600 dark:text-blue-300 font-medium text-sm">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </div>
          </div>

          {/* Name & Username */}
          <div className="pt-8 pb-3 px-6 text-center border-b border-gray-100 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {user.name}
            </h2>
            <p className="text-xs text-gray-400">@{user.username}</p>
          </div>

          {/* Details Grid */}
          <div className="px-6 py-4 grid grid-cols-2 gap-x-6 gap-y-4 border-b border-gray-100 dark:border-gray-700 text-sm">
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Email</p>
              <p className="text-blue-500 truncate">{user.email}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Phone</p>
              <p className="text-gray-700 dark:text-gray-300">{user.phone}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Website</p>
              <p className="text-blue-500">{user.website}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Address</p>
              <p className="text-gray-700 dark:text-gray-300 leading-snug">
                {user.address.street}, {user.address.suite}
                <br />
                {user.address.city} — {user.address.zipcode}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                {user.address.geo.lat}, {user.address.geo.lng}
              </p>
            </div>
          </div>

          {/* Company */}
          <div className="px-6 py-4 text-sm">
            <p className="text-xs text-gray-400 mb-1">Company</p>
            <p className="font-medium text-gray-800 dark:text-gray-200">
              {user.company.name}
            </p>
            {user.company.catchPhrase && (
              <p className="italic text-gray-500 text-xs mt-0.5">
                {user.company.catchPhrase}
              </p>
            )}
            <p className="text-xs text-gray-400 mt-0.5">{user.company.bs}</p>
          </div>
        </div>
      </div>
    );
};

export default UsersDetailPage;