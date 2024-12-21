import Link from 'next/link';

export default function Home() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            <h1 style={{ color: '#0070f3' }}>Welcome to My Next.js Project</h1>
            <p>This project is deployed on Vercel.</p>
            <nav style={{ marginBottom: '20px' }}>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '10px' }}>
                        <Link href="/about">
                            <span style={{ cursor: 'pointer' }}>About Page</span>
                        </Link>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <Link href="/blog">
                            <span style={{ cursor: 'pointer' }}>Blog</span>
                        </Link>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <Link href="/profile/john-doe">
                            <span style={{ cursor: 'pointer' }}>Dynamic Profile</span>
                        </Link>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <Link href="/api/hello">
                            <span style={{ cursor: 'pointer' }}>API Test</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
