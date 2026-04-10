export const metadata = {
  title: "Dev Dairy - Dashboard",
  description: "...",
};

const DashboardPage = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Overview 👋
        </h2>
        <p className="text-gray-500">Quick summary of your activity</p>
      </div>

      {/* Stats */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-sm text-gray-500">Total Blogs</h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">24</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-sm text-gray-500">Users</h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            120
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-sm text-gray-500">Revenue</h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            $1,200
          </p>
        </div>
      </div>

      {/* Recent Section */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Activity */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Recent Activity
          </h3>

          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li>📝 New blog published</li>
            <li>👤 New user joined</li>
            <li>💬 Comment added</li>
          </ul>
        </div>

        {/* Quick Info */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Quick Info
          </h3>

          <p className="text-gray-600 dark:text-gray-300">
            You are doing great! Keep publishing blogs and engaging users to
            grow your platform 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
