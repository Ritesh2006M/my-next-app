export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 flex flex-col items-center justify-center">
            <div className="max-w-3xl p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
                    About Us
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Welcome to our blog! This platform is created as a test project to demonstrate how to seamlessly deploy a Next.js application using <span className="font-semibold text-blue-600">Vercel</span>. It's also a showcase of the latest and most exciting developments in technology.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Here are some of the topics we’re exploring:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-4 mb-6">
                    <li>
                        <span className="font-semibold">Artificial Intelligence</span>: Transforming industries with automation and machine learning.
                    </li>
                    <li>
                        <span className="font-semibold">Web3 and Blockchain</span>: Decentralizing the internet and introducing revolutionary transparency.
                    </li>
                    <li>
                        <span className="font-semibold">Quantum Computing</span>: Unlocking possibilities with computing power beyond classical systems.
                    </li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Our mission is to keep you informed and excited about the technological advancements shaping the future.
                </p>
            </div>
        </div>
    );
}
