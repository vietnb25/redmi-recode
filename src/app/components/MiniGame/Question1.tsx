'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import GameLayout from './GameLayout';
import ResultOverlay from './ResultOverlay';
import styles from './WelcomeGame.module.css';

interface Question1Props {
    onCorrectAnswer?: () => void;
}

const Question1: React.FC<Question1Props> = ({ onCorrectAnswer }) => {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [showResult, setShowResult] = useState(false);

    // Đáp án đúng là B (120Hz AMOLED)
    const correctAnswer = 'B';

    const handleAnswerSelect = (answer: string) => {
        setSelectedAnswer(answer);
        console.log('Selected answer:', answer);
    };

    const handleContinue = () => {
        if (selectedAnswer) {
            setShowResult(true);
        }
    };

    const handleCloseOverlay = () => {
        setShowResult(false);
        // Nếu đáp án đúng, chuyển sang Question2
        if (selectedAnswer === correctAnswer && onCorrectAnswer) {
            onCorrectAnswer();
        } else {
            console.log('Wrong answer, try again');
        }
    };

    const handleViewGuide = () => {
        console.log('View guide');
    };

    return (
        <GameLayout>
            {/* Step Indicator */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20px',
                marginBottom: '20px',
                marginLeft: '40px',
            }}>
                <Image
                    src="/MiniGame/step1.png"
                    alt="Step 1"
                    width={230}
                    height={51}
                />
            </div>

            {/* Challenge Title */}


            {/* Question Content */}
            <div style={{ padding: '0 28px' }}>
                <h2 style={{
                    fontFamily: 'var(--font-roboto), Roboto, sans-serif',
                    fontSize: '18px',
                    fontWeight: 500,
                    color: '#212B36',
                    marginBottom: '16px',
                    lineHeight: '1.33',
                    textAlign: 'left'
                }}>
                    Màn hình của điện thoại Redmi Note 13/Redmi Note 13 Pro/Redmi Note 13 Pro+ có tần số quét là bao nhiêu?
                </h2>

                {/* Answer Options */}
                <div style={{ marginBottom: '60px' }}>
                    {/* Option A */}
                    <div
                        onClick={() => handleAnswerSelect('A')}
                        style={{
                            width: '319px',
                            height: '137px',
                            border: selectedAnswer === 'A' ? '1.5px solid #53498D' : '1px solid transparent',
                            borderRadius: '8px',
                            marginBottom: '12px',
                            cursor: 'pointer',
                            backgroundColor: '#fff',
                            position: 'relative',
                            boxShadow: selectedAnswer === 'A' ? '0px 0px 5px 0px rgba(111, 100, 164, 0.6)' : 'none',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Image Section */}
                        <div style={{
                            width: '319px',
                            height: '103px',
                            backgroundColor: '#D9D9D9',
                            position: 'relative'
                        }}>
                            <Image
                                src="/MiniGame/question1.png"
                                alt="Phone Question 1"
                                fill
                                style={{ objectFit: 'contain' }}
                            />

                            {/* Checkmark */}
                            {selectedAnswer === 'A' && (
                                <div style={{
                                    position: 'absolute',
                                    right: '10px',
                                    top: '10px',
                                    width: '18px',
                                    height: '18px'
                                }}>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="17" height="17" rx="8.5" fill="white" stroke="white" />
                                        <path d="M5.40039 9.45001L7.80039 11.7L12.6004 7.20001" stroke="#53498D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            )}
                        </div>

                        {/* Answer Text Section */}
                        <div style={{
                            width: '319px',
                            height: '34px',
                            backgroundColor: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '0 12px',
                            position: 'relative'
                        }}>
                            <span style={{
                                fontFamily: 'var(--font-roboto), Roboto, sans-serif',
                                fontSize: '14px',
                                fontWeight: 400,
                                lineHeight: '1.43em',
                                color: '#212B36'
                            }}>
                                A. 60Hz
                            </span>
                        </div>
                    </div>

                    {/* Option B */}
                    <div
                        onClick={() => handleAnswerSelect('B')}
                        style={{
                            width: '319px',
                            height: '137px',
                            border: selectedAnswer === 'B' ? '1.5px solid #53498D' : '1px solid transparent',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            backgroundColor: '#070708',
                            position: 'relative',
                            boxShadow: selectedAnswer === 'B' ? '0px 0px 5px 0px rgba(111, 100, 164, 0.6)' : 'none',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Image Section */}
                        <div style={{
                            width: '319px',
                            height: '103px',
                            backgroundColor: '#D9D9D9',
                            position: 'relative'
                        }}>
                            <Image
                                src="/MiniGame/question1.png"
                                alt="Phone Question 1"
                                fill
                                style={{ objectFit: 'contain' }}
                            />

                            {/* Checkmark */}
                            {selectedAnswer === 'B' && (
                                <div style={{
                                    position: 'absolute',
                                    right: '10px',
                                    top: '10px',
                                    width: '18px',
                                    height: '18px'
                                }}>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="17" height="17" rx="8.5" fill="white" stroke="white" />
                                        <path d="M5.40039 9.45001L7.80039 11.7L12.6004 7.20001" stroke="#53498D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            )}
                        </div>

                        {/* Answer Text Section */}
                        <div style={{
                            width: '319px',
                            height: '34px',
                            backgroundColor: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '0 12px',
                            position: 'relative'
                        }}>
                            <span style={{
                                fontFamily: 'var(--font-roboto), Roboto, sans-serif',
                                fontSize: '14px',
                                fontWeight: 400,
                                lineHeight: '1.43em',
                                color: '#212B36'
                            }}>
                                B. 120Hz AMOLED
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Actions - Fixed Position */}
            <div style={{
                position: 'fixed',
                bottom: '20px',
                left: '0',
                right: '0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 28px',
                backgroundColor: 'transparent',
                zIndex: 10
            }}>
                <a
                    onClick={handleViewGuide}
                    href="#"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: '#212B36',
                        textDecoration: 'none',
                        fontFamily: 'var(--font-roboto), Roboto, sans-serif',
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '1.43em'
                    }}
                >
                    <span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.0003 18.9583C5.05866 18.9583 1.04199 14.9416 1.04199 9.99996C1.04199 5.05829 5.05866 1.04163 10.0003 1.04163C14.942 1.04163 18.9587 5.05829 18.9587 9.99996C18.9587 14.9416 14.942 18.9583 10.0003 18.9583ZM10.0003 2.29163C5.75033 2.29163 2.29199 5.74996 2.29199 9.99996C2.29199 14.25 5.75033 17.7083 10.0003 17.7083C14.2503 17.7083 17.7087 14.25 17.7087 9.99996C17.7087 5.74996 14.2503 2.29163 10.0003 2.29163Z" fill="#292D32" />
                            <path d="M10 11.4584C9.65833 11.4584 9.375 11.175 9.375 10.8334V6.66669C9.375 6.32502 9.65833 6.04169 10 6.04169C10.3417 6.04169 10.625 6.32502 10.625 6.66669V10.8334C10.625 11.175 10.3417 11.4584 10 11.4584Z" fill="#292D32" />
                            <path d="M10.0003 14.1674C9.89199 14.1674 9.78366 14.1424 9.68366 14.1007C9.58366 14.059 9.49199 14.0007 9.40866 13.9257C9.33366 13.8424 9.27533 13.759 9.23366 13.6507C9.19199 13.5507 9.16699 13.4424 9.16699 13.334C9.16699 13.2257 9.19199 13.1174 9.23366 13.0174C9.27533 12.9174 9.33366 12.8257 9.40866 12.7424C9.49199 12.6674 9.58366 12.609 9.68366 12.5674C9.88366 12.484 10.117 12.484 10.317 12.5674C10.417 12.609 10.5087 12.6674 10.592 12.7424C10.667 12.8257 10.7253 12.9174 10.767 13.0174C10.8087 13.1174 10.8337 13.2257 10.8337 13.334C10.8337 13.4424 10.8087 13.5507 10.767 13.6507C10.7253 13.759 10.667 13.8424 10.592 13.9257C10.5087 14.0007 10.417 14.059 10.317 14.1007C10.217 14.1424 10.1087 14.1674 10.0003 14.1674Z" fill="#292D32" />
                        </svg>
                    </span>
                    Xem hướng dẫn
                </a>

                <button
                    onClick={handleContinue}
                    disabled={!selectedAnswer}
                    style={{
                        backgroundColor: selectedAnswer ? '#FF6700' : '#cccccc',
                        color: 'white',
                        border: 'none',
                        borderRadius: '12px',
                        padding: '12px 24px',
                        fontFamily: 'var(--font-roboto), Roboto, sans-serif',
                        fontSize: '16px',
                        fontWeight: 500,
                        lineHeight: '1.5em',
                        cursor: selectedAnswer ? 'pointer' : 'not-allowed',
                        opacity: selectedAnswer ? 1 : 0.6
                    }}
                >
                    Tiếp tục
                </button>
            </div>

            {/* Result Overlay */}
            <ResultOverlay
                isVisible={showResult}
                isCorrect={selectedAnswer === correctAnswer}
                onClose={handleCloseOverlay}
            />
        </GameLayout>
    );
};

export default Question1;
