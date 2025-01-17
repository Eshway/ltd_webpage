import Navbar from '@/components/ui/navbar';
import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';

const prisma = new PrismaClient();

export async function generateStaticParams() {
    try {
        const blogs = await prisma.blog.findMany();
        return blogs.map(blog => ({ slug: blog.slug }));
    } catch (error) {
        console.error('Error generating static params:', error);
        return [];
    }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const blog = await prisma.blog.findUnique({
        where: { slug: params.slug },
        include: {
            author: true,
        },
    });

    if (!blog) {
        return {
            title: 'Blog Not Found',
            description: 'The requested blog post could not be found.',
        };
    }

    // Create a summary from the content
    const summary = blog.content.slice(0, 155) + '...';

    return {
        title: `${blog.title} | LTD Blog`,
        description: summary,
        keywords: blog.tags.join(', '),
        authors: [{ name: blog.author.name }],
        openGraph: {
            title: blog.title,
            description: summary,
            type: 'article',
            publishedTime: blog.createdAt.toISOString(),
            modifiedTime: blog.updatedAt.toISOString(),
            authors: [blog.author.name],
            tags: blog.tags,
        },
        twitter: {
            card: 'summary_large_image',
            title: blog.title,
            description: summary,
            creator: '@ltd_app',
        },
    };
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
    const blog = await prisma.blog.findUnique({
        where: { slug: params.slug },
        include: {
            author: true,
        },
    });

    if (!blog) {
        notFound();
    }

    return (
        <div>
            <Navbar variant="login" />
            <div className="container mx-auto py-10 pt-32 px-6 md:px-12">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white">{blog.title}</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    By <span className="font-medium">{blog.author.name}</span> on{' '}
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

                <div
                    className="mt-8 prose prose-lg dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                <div className="mt-10 flex items-center">
                    <img
                        src={blog.author.image}
                        alt={blog.author.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Written by <span className="font-medium">{blog.author.name}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

function BlogStructuredData({ blog }: { blog: any }) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": blog.title,
        "description": blog.content.slice(0, 155),
        "author": {
            "@type": "Person",
            "name": blog.author.name,
            "image": blog.author.image
        },
        "datePublished": blog.createdAt,
        "dateModified": blog.updatedAt,
        "keywords": blog.tags.join(', '),
        "articleBody": blog.content,
        "timeRequired": `PT${blog.readingTime}M`,
        "publisher": {
            "@type": "Organization",
            "name": "LTD",
            "logo": {
                "@type": "ImageObject",
                "url": "https://ltd.eshway.com/logo.png"
            }
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
