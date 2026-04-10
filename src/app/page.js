import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex flex-1 w-full max-w-5xl flex-col items-center justify-center py-24 px-6 text-center">
        {/* Brand Name */}
        <p className="text-yellow-500 font-semibold mb-3 tracking-widest">
          DEV DIARY
        </p>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Documenting My Coding Journey
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mb-8 leading-relaxed">
          Welcome to Dev Diary — a personal blog where I share everything I’m
          learning as a web developer. From React and Next.js to Tailwind CSS
          and backend development, this is my journey of building real-world
          projects step by step.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <Link href="/blogs">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition duration-300">
              Read Blogs
            </button>
          </Link>

          <Link href="/about">
            <button className="border border-gray-400 dark:border-gray-600 text-gray-900 dark:text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-300">
              About Me
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
