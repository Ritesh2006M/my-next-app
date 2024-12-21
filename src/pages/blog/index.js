import Link from 'next/link';

export default function Blog() {
    const posts = [
        { id: 1, title: 'Post 1', description: 'This is the first post.' },
        { id: 2, title: 'Post 2', description: 'This is the second post.' },
        { id: 3, title: 'Post 3', description: 'This is the third post.' },
    ];

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            <h1>Blog Posts</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {posts.map((post) => (
                    <li key={post.id} style={{ marginBottom: '10px' }}>
                        <Link href={`/blog/${post.id}`}>
                            <div style={{ cursor: 'pointer' }}>
                                <h3>{post.title}</h3>
                                <p>{post.description}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
