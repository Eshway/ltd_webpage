import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Handle GET requests to fetch authors
export async function GET(req: NextRequest) {
    try {
        const authors = await prisma.author.findMany();
        return NextResponse.json(authors, { status: 200 });
    } catch (error) {
        console.error('Error fetching authors:', error);
        return NextResponse.json(
            { error: 'Failed to fetch authors' },
            { status: 500 }
        );
    }
}
