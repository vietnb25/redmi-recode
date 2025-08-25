'use client'
import { useSearchParams } from 'next/navigation';
import WelcomeGame from '../components/MiniGame/WelcomeGame';
import Header from '../components/Header';

export default function WelcomeGamePage() {
    const searchParams = useSearchParams();
    const lastName = searchParams.get('lastName') || '';
    const phone = searchParams.get('phone') || '';

    return (
        <div>
            <Header />
            <WelcomeGame lastName={lastName} phone={phone} />
        </div>
    );
}