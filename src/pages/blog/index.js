import Link from 'next/link';

export default function Blog() {
    const posts = [
        {
            id: 1,
            title: 'The Rise of Artificial Intelligence',
            description: 'Explore how AI is transforming industries, from healthcare to automation.',
            image: '/assets/ai-technology.png', // Corrected path for blog/assets
        },
        {
            id: 2,
            title: 'The Future of Web3',
            description: 'Learn about decentralized internet, blockchain, and its potential impact.',
            image: '/assets/web3-blockchain.png', // Corrected path for blog/assets
        },
        {
            id: 3,
            title: 'Quantum Computing Revolution',
            description: 'Discover the breakthroughs in quantum computing and its applications.',
            image: '/assets/quantum-computing.png', // Corrected path for blog/assets
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Latest Blogs on New Technologies</h1>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105"
                        >
                            <img
                                src={post.image} // Path to blog/assets folder
                                alt={post.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                                <p className="text-gray-600 mb-4">{post.description}</p>
                                <Link href={`/blog/${post.id}`}>
                                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                        Read More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
