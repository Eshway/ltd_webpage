import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Create authors
    const author1 = await prisma.author.create({
        data: {
            name: 'Eshu Koli',
            image: 'https://media.licdn.com/dms/image/v2/D5603AQFa8kCBjgFBeg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705043301730?e=1742428800&v=beta&t=izCZyMaUy4fpmi4bKGJCI8o5iluftm-9bzRLsf3fSgM', // Replace with actual image URL
        },
    });

    const author2 = await prisma.author.create({
        data: {
            name: 'Jane Doe',
            image: 'https://example.com/images/jane-doe.jpg', // Replace with actual image URL
        },
    });

    // Seed blogs
    await prisma.blog.createMany({
        data: [
            {
                title: '5 Ways Real-Time Project Tracking Can Boost Your Business Efficiency',
                content: `Discover how our Live Tracking Dashboard (LTD) transforms project management. From automating task assignments to providing real-time insights, LTD ensures you stay ahead of deadlines. Learn how businesses can save time, reduce errors, and improve client satisfaction with live updates.`,
                slug: 'real-time-project-tracking-business-efficiency',
                readingTime: 5,
                tags: ['real-time tracking', 'business efficiency', 'project management'],
                authorId: author1.id,
            },
            {
                title: 'Why Transparency in Project Management Matters for Client Success',
                content: `In today's competitive market, transparency is key. LTD offers unparalleled visibility into project progress, empowering clients with real-time updates. Explore how this builds trust, reduces confusion, and leads to successful outcomes for both businesses and clients.`,
                slug: 'transparency-project-management-client-success',
                readingTime: 4,
                tags: ['transparency', 'client success', 'project management tools'],
                authorId: author1.id,
            },
            {
                title: 'Top Features to Look for in a Project Management Tool in 2025',
                content: `The future of project management is here. Learn about the essential features that every business needs in a project management tool, including live tracking, AI-driven automation, and collaborative dashboards—all of which LTD delivers.`,
                slug: 'top-features-project-management-tool-2025',
                readingTime: 6,
                tags: ['project management tools', 'AI', 'future technology'],
                authorId: author2.id,
            },
            {
                title: 'How AI in Project Management Tools is Changing the Game',
                content: `Artificial Intelligence is reshaping how projects are managed. From predictive analytics to task automation, LTD leverages AI to streamline workflows and improve decision-making. Discover why AI-powered tools are the future of project management.`,
                slug: 'ai-in-project-management-tools',
                readingTime: 5,
                tags: ['AI', 'automation', 'project management tools'],
                authorId: author2.id,
            },
            {
                title: 'The Ultimate Guide to Choosing the Right Project Management Software',
                content: `Not all project management tools are created equal. Learn what sets LTD apart, from its user-friendly interface to its robust live tracking capabilities. This guide helps you understand what features to prioritize and how LTD can meet your needs.`,
                slug: 'choosing-the-right-project-management-software',
                readingTime: 7,
                tags: ['guide', 'project management software', 'LTD'],
                authorId: author1.id,
            },
        ],
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
