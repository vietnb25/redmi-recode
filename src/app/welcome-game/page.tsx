'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import WelcomeGame from '../components/MiniGame/WelcomeGame';
import Header from '../components/Header';

function WelcomeGameContent() {
    const searchParams = useSearchParams();
    const lastName = searchParams.get('lastName') || '';
    const phone = searchParams.get('phone') || '';

    return <WelcomeGame lastName={lastName} phone={phone} />;
}

export default function WelcomeGamePage() {
    return (
        <div>
            <Header />
            <Suspense fallback={<p>Loading...</p>}>
                <WelcomeGameContent />
            </Suspense>
        </div>
    );
}
