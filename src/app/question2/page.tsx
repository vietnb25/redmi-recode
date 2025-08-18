// This page is no longer needed since we're using state management instead of routing
// The Question2 component is now handled by MiniGameQuestions.tsx

import { redirect } from 'next/navigation';

export default function Question2Page() {
    // Redirect to home since this route is deprecated
    redirect('/');
}