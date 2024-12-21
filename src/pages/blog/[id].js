import { useRouter } from 'next/router';

export default function BlogPost() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            <h1>Blog Post {id}</h1>
            <p>This is the content of blog post {id}.</p>
        </div>
    );
}
