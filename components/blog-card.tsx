import Link from 'next/link';
import { Blog } from '@prisma/client';

export const BlogCard = ({ blog }: { blog: Blog }) => {
    return (
        <div className="group bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <h2 className="text-2xl font-semibold group-hover:text-[#d86dfc] dark:group-hover:text-[#d86dfc]/70 transition-colors">
                {blog.title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {new Date(blog.createdAt).toLocaleDateString()} · {blog.readingTime} min read
            </p>
            <div className="flex gap-2 mt-4 flex-wrap">
                {blog.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="text-xs bg-[#d86dfc]/20 text-[#d86dfc] dark:bg-[#d86dfc] dark:text-black px-2 py-1 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <Link
                href={`/blogs/${blog.slug}`}
                className="inline-block mt-6 text-sm text-[#d86dfc] dark:text-[#d86dfc]/70 font-medium hover:underline"
            >
                Read More →
            </Link>
        </div>
    );
};
