"use client"
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import React from "react";
import { Safari } from "../ui/safari";
import { Button } from "../ui/button";
import Link from "next/link";

// const features = [
//     {
//         title: "AI-Powered Project Setup",
//         description: "Automatically set up your project structure, workflows, and dependencies using advanced AI algorithms that understand your project requirements.",
//         url: "https://ltd.eshway.com"
//     },
//     {
//         title: "Smart Task Management",
//         description: "Our AI analyzes your project patterns and automatically prioritizes, assigns, and schedules tasks for optimal team productivity.",
//         url: "https://ltd.eshway.com"
//     },
//     {
//         title: "Intelligent Resource Allocation",
//         description: "Let AI optimize your resource allocation by predicting project needs and matching them with team member availability and expertise.",
//         url: "https://ltd.eshway.com"
//     }
// ];

const features = [
    {
        title: "Seamless Project Creation",
        description: "With a single click, enter your project details like title and description, and let our AI automatically set up your project’s structure, workflows, and tasks tailored to your needs.",
        url: "https://ltd.eshway.com",
        learnMoreUrl: "#investors",
        seeDemoUrl: "#demo-section"
    },
    {
        title: "AI-Driven Task Setup",
        description: "Our AI intelligently creates tasks, assigns them to the right team members, and sets deadlines, all based on the unique requirements of your project, saving you time and effort.",
        url: "https://ltd.eshway.com",
        learnMoreUrl: "#investors",
        seeDemoUrl: "#demo-section"
    },
    {
        title: "Flexible Task Views",
        description: "Easily switch between different views (List, Board, Timeline, Dashboard, and more) to visualize and track your project’s tasks, ensuring a streamlined workflow and complete project transparency.",
        url: "https://ltd.eshway.com",
        learnMoreUrl: "#investors",
        seeDemoUrl: "#demo-section"
    }
];

export function SafariSection() {
    const containerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const springConfig = { stiffness: 300, damping: 40, bounce: 0 };

    // Transform the mockup position based on scroll progress
    const mockupX = useSpring(
        useTransform(
            scrollYProgress,
            [0, 0.25, 0.35, 0.5, 0.65, 0.75, 1],
            // ["0%", "0%", "60%", "60%", "0%", "0%", "0%"]
            [0, 0, 400, 450, 0, 0, 0]
        ),
        springConfig
    );

    const images = [
        "/createProjects1.png",
        "/createProjects2.png",
        "/createProjects3.png"
    ];
    const video = [
        "/1.webm",
        "/2.webm",
        "/3.webm"
    ]

    // Control the active feature based on scroll position
    const [activeIndex, setActiveIndex] = React.useState(0);

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            if (latest < 0.35) setActiveIndex(0);
            else if (latest < 0.65) setActiveIndex(1);
            else setActiveIndex(2);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <div
            ref={containerRef}
            className="relative min-h-[300vh] w-full bg-gradient-to-b from-background to-background/95"
        >
            {/* Sticky container for content */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <div className="max-w-7xl mx-auto h-full px-8 relative flex items-center">
                    {/* Safari mockup */}
                    <motion.div
                        style={{
                            x: mockupX,
                        }}
                        className="absolute w-full top-1/4 md:top-auto sm:w-1/2 md:w-2/5 lg:w-[65%] -translate-y-1/2"
                    >
                        <Safari
                            // // width={1203}
                            // height={753}
                            className="w-full h-auto"
                            url={features[activeIndex].url}
                            // imageSrc={images[activeIndex]}
                            videoSrc={video[activeIndex]}
                        // videoSrc="/1.webm"
                        />
                    </motion.div>

                    {/* Features content */}
                    {features.map((feature, index) => {
                        const isEven = index % 2 === 0;

                        // Calculate the scroll ranges for each feature
                        const startShow = index * 0.3;
                        const fullShow = startShow + 0.1;
                        const startHide = startShow + 0.2;
                        const fullHide = startShow + 0.3;

                        return (
                            <motion.div
                                key={index}
                                style={{
                                    opacity: useTransform(
                                        scrollYProgress,
                                        [startShow, fullShow, startHide, fullHide],
                                        [0, 1, 1, 0]
                                    ),
                                    x: useTransform(
                                        scrollYProgress,
                                        [startShow, fullShow, startHide, fullHide],
                                        [isEven ? -50 : 50, 0, 0, isEven ? 50 : -50]
                                    )
                                }}
                                className={`absolute top-1/2 md:top-auto bg-background/50 md:bg-transparent w-full sm:w-3/5 md:w-2/5 lg:w-1/4 -translate-y-1/2 ${isEven ? 'sm:right-8 md:right-12' : 'sm:left-8 md:left-12'}`}
                            >
                                <div className="space-y-6">
                                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                                        {feature.title}
                                    </h2>
                                    <p className="text-xl text-gray-600 dark:text-gray-300">
                                        {feature.description}
                                    </p>
                                    <div className="flex gap-4">
                                        <Link href={feature.learnMoreUrl}>
                                            <Button
                                                variant="default"
                                                className="px-6 py-3 rounded-lg bg-[#d86dfc] hover:bg-[#d86dfc]/90 text-white font-medium hover:opacity-90 transition-opacity"
                                            >
                                                Learn More
                                            </Button>
                                        </Link>
                                        <Link href={feature.seeDemoUrl}>
                                            <Button
                                                variant="outline"
                                                className="px-6 py-3 bg-white rounded-lg border border-gray-200 dark:border-[#d86dfc] dark:text-[#d86dfc] hover:text-[#d86dfc] font-medium hover:bg-gray-50 dark:hover:bg-[#d86dfc] dark:hover:text-white transition-colors"
                                            >
                                                See Demo
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}