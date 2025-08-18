'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './WelcomeGame.module.css';
import WelcomeGame from './WelcomeGame';

const LayoutGame = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handlePlayGame = () => {
        // Logic để bắt đầu game
        console.log('Chơi game ngay');
    };

    const handleViewGuide = () => {
        // Logic để xem hướng dẫn
        console.log('Xem hướng dẫn');
    };

    if (!isMobile) {
        return (
            <div className={styles.desktopWarning}>
                <div className={styles.warningContent}>
                    <h2>📱 Vui lòng sử dụng điện thoại</h2>
                    <p>Game này được thiết kế dành riêng cho thiết bị di động. Hãy truy cập bằng điện thoại để có trải nghiệm tốt nhất!</p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            {/* Background tràn toàn màn hình */}
            <div className={styles.background}>
                <Image
                    src="/MiniGame/bg.png"
                    alt="Welcome Background"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
            </div>


            <div className={styles.banner}>

                <div className={styles.border}>
                    <WelcomeGame />
                </div>



                {/* Container cho 2 buttons */}

            </div>
        </div>
    );
};

export default LayoutGame;
