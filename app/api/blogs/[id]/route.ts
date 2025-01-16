import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const body = await req.json();
        const { title, content, tags, readingTime } = body;

        if (!id) {
            return NextResponse.json(
                { error: 'Blog ID is required' },
                { status: 400 }
            );
        }

        const updatedBlog = await prisma.blog.update({
            where: { id },
            data: {
                ...(title && { title }),
                ...(content && { content }),
                ...(tags && { tags }),
                ...(readingTime && { readingTime }),
                updatedAt: new Date(),
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

        return NextResponse.json(updatedBlog, { status: 200 });
    } catch (error) {
        console.error('Error updating blog:', error);
        return NextResponse.json(
            { error: 'Failed to update blog' },
            { status: 500 }
        );
    }
}
