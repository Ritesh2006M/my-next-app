import Link from 'next/link';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-gray-100 flex flex-col justify-center items-center">
            <div className="max-w-3xl text-center p-8 bg-white rounded-lg shadow-2xl">
                <h1 className="text-5xl font-extrabold text-blue-700 mb-6">
                    Welcome to My Next.js Project
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Explore our platform to learn more about the latest technologies and trends in the industry. This project is deployed seamlessly using{' '}
                    <span className="font-semibold text-blue-600">Vercel</span>.
                </p>
                <nav>
                    <ul className="flex flex-col sm:flex-row sm:justify-center gap-6">
                        <li>
                            <Link href="/about">
                                <span className="block px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-200">
                                    About Us
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <span className="block px-8 py-4 text-lg font-medium text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition duration-200">
                                    Visit Blog
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
