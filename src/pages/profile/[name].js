import {useRouter} from 'next/router';

export default function Profile() {
    const router = useRouter();
    const {name} = router.query;

    return (
        <div style={{fontFamily: 'Arial, sans-serif', padding: '20px'}}>
            <h1>Welcome to {name}'s Profile</h1>
            <p>This is a dynamically generated profile page.</p>
        </div>
    );
}
