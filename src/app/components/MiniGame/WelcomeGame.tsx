'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './WelcomeGame.module.css';
import MiniGameQuestions from './MiniGameQuestions';
import GameLayout from './GameLayout';

interface WelcomeGameProps {
    lastName?: string;
    phone?: string;
}

const WelcomeGame: React.FC<WelcomeGameProps> = ({ lastName, phone }) => {
    const [showQuestions, setShowQuestions] = useState(false);

    const handlePlayGame = () => {
        // Chuyển sang MiniGameQuestions
        setShowQuestions(true);
    };

    const handleViewGuide = () => {
        // Logic để xem hướng dẫn
        console.log('Xem hướng dẫn');
    };

    // Nếu đã bấm "Chơi game ngay", hiển thị MiniGameQuestions
    if (showQuestions) {
        return <MiniGameQuestions lastName={lastName} phone={phone} />;
    }

    return (
        <GameLayout>
            <Image
                src="/MiniGame/welcomebannerr.png"
                alt="Welcome Banner"
                width={395}
                height={555}
                style={{ marginTop: '7px', marginLeft: '-10px' }}
            />
            <div className={styles.buttonsContainer}>
                <button
                    className={`${styles.button} ${styles.playButton}`}
                    onClick={handlePlayGame}
                >
                    Chơi game ngay
                </button>

                <a
                    className={`${styles.button} ${styles.guideButton}`}
                    onClick={handleViewGuide}
                    href="#"
                >
                    <span className={styles.infoIcon}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.0003 18.9583C5.05866 18.9583 1.04199 14.9416 1.04199 9.99996C1.04199 5.05829 5.05866 1.04163 10.0003 1.04163C14.942 1.04163 18.9587 5.05829 18.9587 9.99996C18.9587 14.9416 14.942 18.9583 10.0003 18.9583ZM10.0003 2.29163C5.75033 2.29163 2.29199 5.74996 2.29199 9.99996C2.29199 14.25 5.75033 17.7083 10.0003 17.7083C14.2503 17.7083 17.7087 14.25 17.7087 9.99996C17.7087 5.74996 14.2503 2.29163 10.0003 2.29163Z" fill="#292D32" />
                            <path d="M10 11.4584C9.65833 11.4584 9.375 11.175 9.375 10.8334V6.66669C9.375 6.32502 9.65833 6.04169 10 6.04169C10.3417 6.04169 10.625 6.32502 10.625 6.66669V10.8334C10.625 11.175 10.3417 11.4584 10 11.4584Z" fill="#292D32" />
                            <path d="M10.0003 14.1674C9.89199 14.1674 9.78366 14.1424 9.68366 14.1007C9.58366 14.059 9.49199 14.0007 9.40866 13.9257C9.33366 13.8424 9.27533 13.759 9.23366 13.6507C9.19199 13.5507 9.16699 13.4424 9.16699 13.334C9.16699 13.2257 9.19199 13.1174 9.23366 13.0174C9.27533 12.9174 9.33366 12.8257 9.40866 12.7424C9.49199 12.6674 9.58366 12.609 9.68366 12.5674C9.88366 12.484 10.117 12.484 10.317 12.5674C10.417 12.609 10.5087 12.6674 10.592 12.7424C10.667 12.8257 10.7253 12.9174 10.767 13.0174C10.8087 13.1174 10.8337 13.2257 10.8337 13.334C10.8337 13.4424 10.8087 13.5507 10.767 13.6507C10.7253 13.759 10.667 13.8424 10.592 13.9257C10.5087 14.0007 10.417 14.059 10.317 14.1007C10.217 14.1424 10.1087 14.1674 10.0003 14.1674Z" fill="#292D32" />
                        </svg>
                    </span>
                    Xem hướng dẫn
                </a>
            </div>
        </GameLayout>
    );
};

export default WelcomeGame;
