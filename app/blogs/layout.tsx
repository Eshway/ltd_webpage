//layout for blogs page
import Navbar from '@/components/ui/navbar';

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="pt-4">
            <Navbar />
            <div className="container mx-auto py-10 pt-32">
                {children}
            </div>
        </div>
    );
}
