import Link from "next/link";

export const metadata = {
  title: "Dev Dairy - Users",
  description: "all users info",
};

const UsersPage = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json()
    return (
      <div>
        <div className="max-w-6xl mx-auto p-6 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300 flex flex-col"
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {user.name}
              </h2>
              <p className="text-sm text-gray-500 mb-2">@{user.username}</p>

              <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">
                📧 {user.email}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                🌐 {user.website}
              </p>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {user.address.city}
              </p>

              <Link href={`/users/${user.id}`}>
                <button className="btn btn-warning btn-block">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
};

export default UsersPage;