import Link from "next/link";

const blogs = [
{
id: 1,
title: "Getting Started with React",
author: "Saharier Omi",
date: "2026-04-01",
category: "Frontend",
content: "React is a powerful JavaScript library for building user interfaces. In this blog, we explore the basics of components, props, and state."
},
{
id: 2,
title: "Understanding Next.js Routing",
author: "Saharier Omi",
date: "2026-04-03",
category: "Next.js",
content: "Next.js provides file-based routing which makes navigation easier. Learn how to create pages and dynamic routes in this guide."
},
{
id: 3,
title: "Introduction to Express.js",
author: "Saharier Omi",
date: "2026-04-05",
category: "Backend",
content: "Express.js is a minimal and flexible Node.js framework. This blog covers basic server setup and routing."
},
{
id: 4,
title: "Why Tailwind CSS is Awesome",
author: "Saharier Omi",
date: "2026-04-07",
category: "CSS",
content: "Tailwind CSS allows you to build modern UI quickly using utility-first classes. Discover its benefits and usage."
}
];
const BlogsPage = () => {
    return (
      <div className="max-w-6xl mx-auto p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {blog.title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              By {blog.author} • {blog.date} • {blog.category}
            </p>
            <p className="text-gray-700 dark:text-gray-300">{blog.content}</p>
            <Link href={`/blogs/${blog.id}`} className="mt-4 btn btn-warning">
              Read More
            </Link>
          </div>
        ))}
      </div>
    );
};

export default BlogsPage;