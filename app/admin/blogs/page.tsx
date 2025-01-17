'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading editor...</p>,
});

const modules = {
    toolbar: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['blockquote', 'code-block'],
        ['link', 'image'],
        ['clean']
    ],
};

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'blockquote', 'code-block',
    'link', 'image'
];

export default function AdminBlogs() {
    const [blogs, setBlogs] = useState<any[]>([]);
    const [form, setForm] = useState({
        title: '',
        content: '',
        slug: '',
        readingTime: 0,
        tags: '',
        authorId: '',
    });
    const [editingBlog, setEditingBlog] = useState<any>(null);
    const [authors, setAuthors] = useState<any[]>([]);
    const [loading, setLoading] = useState(false); // To show loading states
    const [message, setMessage] = useState<string>(''); // For success/failure messages
    const router = useRouter();

    // Fetch blogs and authors
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/blogs');
                const data = await response.json();
                if (response.ok) {
                    setBlogs(data);
                } else {
                    console.error('Failed to fetch blogs:', data.error);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        async function fetchAuthors() {
            try {
                const response = await fetch('/api/authors');
                const data = await response.json();
                if (response.ok) {
                    setAuthors(data);
                } else {
                    console.error('Failed to fetch authors:', data.error);
                }
            } catch (error) {
                console.error('Error fetching authors:', error);
            }
        }

        fetchData();
        fetchAuthors();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | any>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true); // Start loading
        const url = editingBlog ? `/api/blogs/${editingBlog.id}` : '/api/blogs';
        const method = editingBlog ? 'PATCH' : 'POST';
        const body = JSON.stringify({
            ...form,
            tags: form.tags.split(',').map((tag) => tag.trim()),
        });

        try {
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body,
            });

            if (response.ok) {
                setMessage(editingBlog ? 'Blog updated successfully!' : 'Blog created successfully!');
                setForm({ title: '', content: '', slug: '', readingTime: 0, tags: '', authorId: '' }); // Clear the form
                setEditingBlog(null); // Reset editing blog state
                const data = await response.json();
                setBlogs((prev) => [data, ...prev]); // Add the new/updated blog to the list instantly
                router.push(`/blogs/${data.slug}`); // Redirect to the newly created blog
            } else {
                const data = await response.json();
                setMessage(`Error: ${data.error}`);
            }
        } catch (error) {
            setMessage('Error submitting form.');
        } finally {
            setLoading(false); // End loading
        }
    };

    const deleteBlog = async (id: string) => {
        if (confirm('Are you sure you want to delete this blog?')) {
            setLoading(true);
            try {
                const response = await fetch(`/api/blogs?id=${id}`, { method: 'DELETE' });

                if (response.ok) {
                    setBlogs(blogs.filter((blog) => blog.id !== id)); // Remove the blog from the list instantly
                    setMessage('Blog deleted successfully!');
                } else {
                    const data = await response.json();
                    setMessage(`Error: ${data.error}`);
                }
            } catch (error) {
                setMessage('Error deleting blog.');
            } finally {
                setLoading(false);
            }
        }
    };

    const startEditing = (blog: any) => {
        setEditingBlog(blog);
        setForm({
            title: blog.title,
            content: blog.content,
            slug: blog.slug,
            readingTime: blog.readingTime,
            tags: blog.tags.join(', '),
            authorId: blog.authorId,
        });
    };

    const resetForm = () => {
        setEditingBlog(null);
        setForm({ title: '', content: '', slug: '', readingTime: 0, tags: '', authorId: '' });
        setMessage('');
    };

    return (
        <div className="container mx-auto py-10 px-6">
            <h1 className="text-4xl font-bold mb-6">Manage Blogs</h1>

            {/* Message Display */}
            {message && (
                <div className="bg-green-100 text-green-800 p-4 rounded-md mb-4">
                    {message}
                </div>
            )}

            {/* Form for creating or editing a blog */}
            <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Content</label>
                    <ReactQuill
                        value={form.content}
                        onChange={(value) => setForm({ ...form, content: value })}
                        modules={modules}
                        formats={formats}
                        className="mt-1 block w-full h-[300px] mb-12"
                    />
                    {/* <textarea
                        name="content"
                        value={form.content}
                        onChange={handleInputChange}
                        rows={4}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        required
                    /> */}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Slug</label>
                    <input
                        type="text"
                        name="slug"
                        value={form.slug}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Tags (comma separated)</label>
                    <input
                        type="text"
                        name="tags"
                        value={form.tags}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Author</label>
                    <select
                        name="authorId"
                        value={form.authorId}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        required
                    >
                        <option value="">Select Author</option>
                        {authors.map((author) => (
                            <option key={author.id} value={author.id}>
                                {author.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md"
                    disabled={loading} // Disable the button when loading
                >
                    {loading ? 'Saving...' : editingBlog ? 'Update Blog' : 'Create Blog'}
                </button>
            </form>

            {/* List of blogs */}
            <div className="mt-8">
                <h2 className="text-2xl font-semibold">Blog List</h2>
                <ul className="mt-4">
                    {blogs.map((blog) => (
                        <li key={blog.id} className="mb-4 flex justify-between items-center">
                            <div>
                                <h3 className="text-xl font-bold">{blog.title}</h3>
                                <p className="text-sm text-gray-600">{blog.author.name}</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={() => startEditing(blog)}
                                    className="text-blue-600"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteBlog(blog.id)}
                                    className="text-red-600"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
