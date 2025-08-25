'use client';

import { useState, useEffect, ReactNode } from 'react';
import Image from 'next/image';
import styles from './WelcomeGame.module.css';
import { Button, Modal } from 'antd';
interface GameLayoutProps {
    children: ReactNode;
    backgroundImage?: string;
}

const GameLayout = ({ children, backgroundImage = "/MiniGame/bg.png" }: GameLayoutProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (!isMobile) {
        return (
            <div className={styles.desktopWarning}>
                <div className={styles.warningContent}>
                    <h2>📱 Vui lòng sử dụng điện thoại</h2>
                    <p>Game này được thiết kế dành riêng cho thiết bị di động. Hãy truy cập bằng điện thoại để có trải nghiệm tốt nhất!</p>
                </div>
                <Button type="primary" onClick={showModal}>
                    Open Modal
                </Button>
                <Modal
                    title="Basic Modal"
                    closable={{ 'aria-label': 'Custom Close Button' }}
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>

        );
    }

    return (
        <div className={styles.container}>
            {/* Background tràn toàn màn hình */}
            <div className={styles.background}>
                <Image
                    src={backgroundImage}
                    alt="Game Background"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
            </div>

            {/* Banner container */}
            <div className={styles.banner}>
                <div className={styles.border}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default GameLayout;