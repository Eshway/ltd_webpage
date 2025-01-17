'use client'

import { useEffect, useState } from 'react';
import Navbar from '@/components/ui/navbar';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, SearchIcon } from "lucide-react";
import { Blog } from '@prisma/client';
import { BlogCard } from '@/components/blog-card';
const Blogs = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('newest');
    const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const res = await fetch('/api/blogs');
                if (!res.ok) throw new Error('Failed to fetch blogs');
                const data = await res.json();
                setBlogs(data);
                setFilteredBlogs(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    useEffect(() => {
        const filtered = blogs.filter((blog: Blog) =>
            blog.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const sorted = [...filtered].sort((a, b) => {
            switch (sortBy) {
                case 'newest':
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                case 'oldest':
                    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
                case 'title':
                    return a.title.localeCompare(b.title);
                default:
                    return 0;
            }
        });

        setFilteredBlogs(sorted);
    }, [searchTerm, sortBy, blogs]);

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <div className="container mx-auto py-20 text-center">
                    <h2 className="text-2xl font-semibold text-red-600 mb-4">Error Loading Blogs</h2>
                    <p className="text-gray-600">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <div className="container mx-auto px-4 pt-32">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                        <h1 className="text-4xl font-bold text-black dark:text-white">
                            Our Latest Blog Posts
                        </h1>
                        <div className="flex gap-4 w-full md:w-auto">
                            <div className="relative flex-1 md:flex-none">
                                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <Input
                                    type="text"
                                    placeholder="Search blogs..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10 w-full md:w-64"
                                />
                            </div>
                            <Select value={sortBy} onValueChange={setSortBy}>
                                <SelectTrigger className="w-40">
                                    <SelectValue placeholder="Sort by" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="newest">Newest First</SelectItem>
                                    <SelectItem value="oldest">Oldest First</SelectItem>
                                    <SelectItem value="title">Title</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {isLoading ? (
                        <div className="flex justify-center items-center h-64">
                            <Loader2 className="h-8 w-8 animate-spin text-gray-600" />
                        </div>
                    ) : filteredBlogs.length === 0 ? (
                        <div className="text-center py-12">
                            <h3 className="text-xl font-semibold text-gray-600">No blogs found</h3>
                            <p className="text-gray-500 mt-2">Try adjusting your search criteria</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredBlogs.map((blog: Blog) => (
                                <BlogCard key={blog.id} blog={blog} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blogs;