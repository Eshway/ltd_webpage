import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const dynamic = 'force-dynamic';

// Types for API requests
interface CreateBlogRequest {
    title: string;
    content: string;
    slug: string;
    authorId: string;
    readingTime: number;
    tags: string[];
}

// Handle GET requests
export async function GET(req: NextRequest) {
    try {
        const blogs = await prisma.blog.findMany({
            include: {
                author: {
                    select: {
                        name: true,
                        image: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        return NextResponse.json(blogs, { status: 200 });
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return NextResponse.json(
            { error: 'Failed to fetch blogs' },
            { status: 500 }
        );
    }
}

// Handle POST requests
export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const body: CreateBlogRequest = await req.json();
        const { title, content, slug, authorId, readingTime, tags } = body;

        // Basic validation
        if (!title || !content || !slug || !authorId) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Check if slug is unique
        const existingBlog = await prisma.blog.findUnique({
            where: { slug }
        });

        if (existingBlog) {
            return NextResponse.json(
                { error: 'Slug must be unique' },
                { status: 400 }
            );
        }

        // Verify author exists
        const author = await prisma.author.findUnique({
            where: { id: authorId }
        });

        if (!author) {
            return NextResponse.json(
                { error: 'Author not found' },
                { status: 404 }
            );
        }

        // Create new blog
        const newBlog = await prisma.blog.create({
            data: {
                title,
                content,
                slug,
                authorId,
                readingTime: readingTime || Math.ceil(content.split(' ').length / 200), // Fallback reading time calculation
                tags: tags || [],
            },
            include: {
                author: {
                    select: {
                        name: true,
                        image: true
                    }
                }
            }
        });

        return NextResponse.json(newBlog, { status: 201 });
    } catch (error) {
        console.error('Error creating blog:', error);
        return NextResponse.json(
            { error: 'Failed to create blog' },
            { status: 500 }
        );
    }
}

// Handle DELETE requests
export async function DELETE(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json(
                { error: 'Blog ID is required' },
                { status: 400 }
            );
        }

        await prisma.blog.delete({
            where: { id }
        });

        return NextResponse.json(
            { message: 'Blog deleted successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error deleting blog:', error);
        return NextResponse.json(
            { error: 'Failed to delete blog' },
            { status: 500 }
        );
    }
}