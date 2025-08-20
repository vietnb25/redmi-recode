'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

interface ResultOverlayProps {
    isVisible: boolean;
    isCorrect: boolean;
    onClose: () => void;
}

const ResultOverlay: React.FC<ResultOverlayProps> = ({ isVisible, isCorrect, onClose }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isVisible) {
            // Disable scrolling
            document.body.style.overflow = 'hidden';

            // Auto close after 3 seconds
            const timer = setTimeout(() => {
                onClose();
            }, 3000);

            return () => {
                clearTimeout(timer);
            };
        } else {
            // Re-enable scrolling
            document.body.style.overflow = 'unset';
        }
    }, [isVisible, onClose]);

    if (!mounted || !isVisible) return null;

    const overlayContent = (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 99999
        }}>
            <Image
                src={isCorrect ? "/MiniGame/True.png" : "/MiniGame/false.png"}
                alt={isCorrect ? "Correct" : "Incorrect"}
                width={120}
                height={192}
                style={{ marginBottom: '20px' }}
            />
            <div style={{
                color: 'white',
                fontFamily: 'var(--font-roboto), Roboto, sans-serif',
                fontSize: '24px',
                fontWeight: 600,
                textAlign: 'center',
                marginBottom: '10px'
            }}>
                {isCorrect ? "Chính xác!" : "Oops!"}
            </div>
            <div style={{
                color: 'white',
                fontFamily: 'var(--font-roboto), Roboto, sans-serif',
                fontSize: '16px',
                fontWeight: 400,
                textAlign: 'center'
            }}>
                {isCorrect ? "Câu trả lời đúng. Tiếp tục nào!" : "Câu trả lời chưa chính xác. Thử lại!"}
            </div>
        </div>
    );

    // Use portal to render overlay at document body level
    return createPortal(overlayContent, document.body);
};

export default ResultOverlay;