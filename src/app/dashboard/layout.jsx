import Link from "next/link";

const DashboardLayout = ({ children }) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content flex flex-col bg-gray-100 dark:bg-black min-h-screen">

        {/* Top Navbar */}
        <div className="w-full flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Dashboard
          </h1>

          <label
            htmlFor="my-drawer-3"
            className="btn btn-sm lg:hidden"
          >
            ☰
          </label>
        </div>

        {/* Page Content */}
        <div className="p-6 w-full">
          {children}
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu bg-white dark:bg-gray-900 min-h-full w-72 p-6 space-y-2">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Menu
          </h2>

          <li>
            <Link
              href={"/dashboard"}
              className="hover:bg-yellow-400 hover:text-black rounded-lg"
            >
              Overview
            </Link>
          </li>

          <li>
            <Link
              href={"/dashboard/revenue"}
              className="hover:bg-yellow-400 hover:text-black rounded-lg"
            >
              Revenue
            </Link>
          </li>

          <li>
            <Link
              href={"/dashboard/profile"}
              className="hover:bg-yellow-400 hover:text-black rounded-lg"
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;