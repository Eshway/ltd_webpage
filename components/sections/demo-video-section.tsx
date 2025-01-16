import { HeroVideoDialog } from "../ui/hero-video";


export function HeroVideoDialogDemo() {
    return (
        // <div className="relative p-4 md:p-48">
        <section id="demo-section" className="relative p-4 md:p-48 py-2 md:py-2 overflow-hidden">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">See LTD in Action</h2>
                <HeroVideoDialog
                    className="dark:hidden block"
                    animationStyle="top-in-bottom-out"
                    videoSrc="https://www.youtube.com/embed/QrvbPccez4s"
                    thumbnailSrc="/createProjects3.png"
                    thumbnailAlt="Hero Video"
                />
                <HeroVideoDialog
                    className="hidden dark:block"
                    animationStyle="top-in-bottom-out"
                    videoSrc="https://www.youtube.com/embed/QrvbPccez4s"
                    thumbnailSrc="/createProjects3.png"
                    thumbnailAlt="Hero Video"
                />
            </div>
        </section>
    );
}
