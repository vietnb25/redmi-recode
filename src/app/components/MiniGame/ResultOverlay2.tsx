'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

interface ResultOverlayProps {
    isVisible: boolean;
    isCorrect: boolean;
    onClose: () => void;
}

const ResultOverlay2: React.FC<ResultOverlayProps> = ({ isVisible, isCorrect, onClose }) => {
    const [mounted, setMounted] = useState(false);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isVisible) {
            // Disable scrolling
            document.body.style.overflow = 'hidden';

            // Trigger animation after mount
            setTimeout(() => setAnimate(true), 50);

            // Auto close after 3 seconds
            const timer = setTimeout(() => {
                setAnimate(false);
                // Wait for fade out animation before closing
                setTimeout(() => onClose(), 300);
            }, 3000);

            return () => {
                clearTimeout(timer);
            };
        } else {
            // Re-enable scrolling
            document.body.style.overflow = 'unset';
            setAnimate(false);
        }
    }, [isVisible, onClose]);

    if (!mounted || !isVisible) return null;

    const overlayContent = (
        <>
            {/* Background overlay */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                zIndex: 99998,
                opacity: animate ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out'
            }} />

            {/* Content container */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 99999,
                transform: animate ? 'translateY(0) scale(1)' : 'translateY(-50px) scale(0.8)',
                opacity: animate ? 1 : 0,
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}>
                {/* Image with bounce animation */}
                <div style={{
                    transform: animate ? 'scale(1) rotate(0deg)' : 'scale(0.3) rotate(-10deg)',
                    transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                    marginBottom: '30px'
                }}>
                    <div style={{
                        position: 'relative',
                        filter: animate ? 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))' : 'none',
                        transition: 'filter 0.4s ease',
                        animation: animate ? (isCorrect ? 'correctPulse 2s infinite' : 'incorrectShake 0.5s ease-in-out') : 'none'
                    }}>
                        <Image
                            src={isCorrect ? "/MiniGame/true2.png" : "/MiniGame/false.png"}
                            alt={isCorrect ? "Correct" : "Incorrect"}
                            width={120}
                            height={192}
                            style={{
                                display: 'block'
                            }}
                        />

                        {/* Glow effect */}
                        {isCorrect && (
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '150px',
                                height: '220px',
                                background: 'radial-gradient(circle, rgba(76,175,80,0.3) 0%, transparent 70%)',
                                borderRadius: '50%',
                                animation: animate ? 'glow 2s ease-in-out infinite alternate' : 'none',
                                zIndex: -1
                            }} />
                        )}
                    </div>
                </div>



                {/* Description with slide animation */}
                <div style={{
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-roboto), Roboto, sans-serif',
                    fontSize: '18px',
                    fontWeight: 500,
                    textAlign: 'center',
                    maxWidth: '300px',
                    lineHeight: '1.4',
                    transform: animate ? 'translateY(0)' : 'translateY(30px)',
                    opacity: animate ? 1 : 0,
                    transition: 'all 0.5s ease-out 0.4s',
                    marginTop: '-30px'
                }}>
                    {isCorrect
                        ? <>Lựa chọn hoàn hảo!<br />Bạn đang có sở thích cùng <br /><span style={{ color: "#FF6700", fontWeight: 700 }}>40%</span> người dùng khác đấy.</>
                        : <>Suýt đúng rồi.<br />Thử lại lần sau nhé!</>
                    }
                </div>

            </div>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes correctPulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }

                @keyframes incorrectShake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px) rotate(-2deg); }
                    75% { transform: translateX(5px) rotate(2deg); }
                }

                @keyframes glow {
                    from { 
                        opacity: 0.3;
                        transform: translate(-50%, -50%) scale(0.8);
                    }
                    to { 
                        opacity: 0.6;
                        transform: translate(-50%, -50%) scale(1.1);
                    }
                }

                @keyframes sparkle {
                    0%, 100% { opacity: 0; transform: scale(0); }
                    50% { opacity: 1; transform: scale(1); }
                }

                /* Confetti particles for correct answer */
                ${isCorrect ? `
                    @keyframes confetti {
                        0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
                        100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
                    }
                ` : ''}
            `}</style>

            {/* Confetti particles for correct answer */}
            {isCorrect && animate && (
                <>
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            style={{
                                position: 'fixed',
                                left: `${Math.random() * 100}%`,
                                top: '-10px',
                                width: '8px',
                                height: '8px',
                                backgroundColor: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'][Math.floor(Math.random() * 5)],
                                borderRadius: '50%',
                                zIndex: 99999,
                                animation: `confetti ${2 + Math.random() * 2}s linear infinite`,
                                animationDelay: `${Math.random() * 2}s`
                            }}
                        />
                    ))}
                </>
            )}
        </>
    );

    // Use portal to render overlay at document body level
    return createPortal(overlayContent, document.body);
};

export default ResultOverlay2;