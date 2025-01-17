import { MetadataRoute } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const blogs = await prisma.blog.findMany({
        select: {
            slug: true,
            updatedAt: true,
        },
    });

    const blogEntries = blogs.map((blog) => ({
        url: `https://ltd.eshway.com/blogs/${blog.slug}`,
        lastModified: blog.updatedAt,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: 'https://ltd.eshway.com',
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1,
        },
        {
            url: 'https://ltd.eshway.com/blogs',
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.9,
        },
        ...blogEntries,
    ];
} 