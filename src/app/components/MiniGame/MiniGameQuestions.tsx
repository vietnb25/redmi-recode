'use client';

import React, { useState } from 'react';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';

interface MiniGameQuestionsProps {
    lastName?: string;
    phone?: string;
}

const MiniGameQuestions: React.FC<MiniGameQuestionsProps> = ({ lastName, phone }) => {
    const [currentQuestion, setCurrentQuestion] = useState<'question1' | 'question2' | 'question3'>('question1');

    const handleMoveToQuestion2 = () => {
        setCurrentQuestion('question2');
    };

    const handleMoveToQuestion3 = () => {
        setCurrentQuestion('question3');
    };

    const handleFinishGame = () => {
        console.log('Game finished!');
        // Có thể reset về question1 hoặc quay về GameSection
        setCurrentQuestion('question1');
    };

    if (currentQuestion === 'question1') {
        return <Question1 onCorrectAnswer={handleMoveToQuestion2} />;
    }

    if (currentQuestion === 'question2') {
        return <Question2 onCorrectAnswer={handleMoveToQuestion3} />;
    }

    if (currentQuestion === 'question3') {
        return <Question3 onGameComplete={handleFinishGame} lastName={lastName} phone={phone} />;
    }

    return null;
};

export default MiniGameQuestions;