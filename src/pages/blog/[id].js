import {useRouter} from 'next/router';
import {FaBrain, FaCube, FaAtom} from 'react-icons/fa'; // Use FaCube instead of FaBlockchain

const blogPosts = [
    {
        id: 1,
        title: 'The Rise of Artificial Intelligence',
        image: '/assets/ai-technology.png', // Image path
        content: `Artificial intelligence (AI) is not just a buzzword; it's a transformative force across industries. 
        From healthcare, where AI helps diagnose diseases with unprecedented accuracy, to automation in factories that enhances productivity,
        AI is becoming an integral part of our lives. AI-powered assistants like Siri and Alexa have revolutionized the way we interact with technology. 
        Moreover, breakthroughs in machine learning and deep learning continue to push the boundaries of what AI can achieve.`,
        keyPoints: [
            {
                icon: <FaBrain className="text-blue-500"/>,
                text: 'AI assists in diagnosing diseases and predicting treatment outcomes.',
            },
            {
                icon: <FaBrain className="text-blue-500"/>,
                text: 'Automates repetitive tasks, increasing efficiency in industries.',
            },
            {
                icon: <FaBrain className="text-blue-500"/>,
                text: 'Revolutionizes interactions with technology through AI assistants.',
            },
        ],
    },
    {
        id: 2,
        title: 'The Future of Web3',
        image: '/assets/web3-blockchain.png', // Image path
        content: `Web3 represents the next phase of the internet—a decentralized world powered by blockchain technology. 
        Unlike Web2, where large corporations control user data, Web3 enables users to take ownership of their data. 
        It offers transparency, security, and anonymity. With smart contracts, Web3 applications are trustless, eliminating the need for intermediaries. 
        Blockchain underpins the infrastructure of Web3, providing a foundation for decentralized finance (DeFi), NFTs, and more.`,
        keyPoints: [
            {icon: <FaCube className="text-green-500"/>, text: 'Empowers users with data ownership and privacy.'},
            {icon: <FaCube className="text-green-500"/>, text: 'Eliminates intermediaries using smart contracts.'},
            {icon: <FaCube className="text-green-500"/>, text: 'Enables innovations like DeFi and NFTs.'},
        ],

    },
    {
        id: 3,
        title: 'Quantum Computing Revolution',
        image: '/assets/quantum-computing.png', // Image path
        content: `Quantum computing is no longer a concept confined to theoretical physics. 
        With qubits that leverage quantum superposition and entanglement, quantum computers can solve problems beyond the reach of classical systems. 
        These include simulations of molecular structures for drug discovery, optimization problems in logistics, and advances in cryptography. 
        As companies like Google, IBM, and others make strides in quantum research, the technology is poised to reshape industries.`,
        keyPoints: [
            {
                icon: <FaAtom className="text-purple-500"/>,
                text: 'Revolutionizes industries with immense computational power.'
            },
            {
                icon: <FaAtom className="text-purple-500"/>,
                text: 'Accelerates drug discovery with molecular simulations.'
            },
            {icon: <FaAtom className="text-purple-500"/>, text: 'Enhances security through advances in cryptography.'},
        ],
    },
];

export default function BlogPost() {
    const router = useRouter();
    const {id} = router.query;

    const post = blogPosts.find((p) => p.id === parseInt(id));

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center text-xl text-gray-700">
                Post not found
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover rounded-md mb-6"
                />
                <h1 className="text-4xl font-bold mb-6 text-blue-700">{post.title}</h1>
                <p className="text-lg text-gray-700 leading-relaxed">{post.content}</p>
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Key Highlights</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {post.keyPoints.map((point, index) => (
                            <div
                                key={index}
                                className="flex items-start bg-gray-50 rounded-lg shadow p-4"
                            >
                                <div className="mr-4 text-3xl">{point.icon}</div>
                                <p className="text-gray-700">{point.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
