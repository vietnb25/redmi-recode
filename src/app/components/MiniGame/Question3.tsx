'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Drawer } from 'antd';
import GameLayout from './GameLayout';
import ResultOverlay from './ResultOverlay';
import styles from '../GameSection.module.css';

interface Question3Props {
    onGameComplete?: () => void;
    lastName?: string;
    phone?: string;
}

const Question3: React.FC<Question3Props> = ({ onGameComplete, lastName, phone }) => {
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [showResultDrawer, setShowResultDrawer] = useState(false);
    const [randomBg, setRandomBg] = useState('');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if running on client-side
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setIsMobile(window.innerWidth <= 500);
            };

            // Set initial value
            handleResize();

            // Add event listener for window resize
            window.addEventListener('resize', handleResize);

            // Cleanup
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    useEffect(() => {
        // Set random background when component mounts
        const randomNum = Math.floor(Math.random() * 3) + 1;
        setRandomBg(`/MiniGame/randombg${randomNum}.png`);
    }, []);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setUploadedImage(e.target?.result as string);
                // Tự động nhảy sang drawer có border ảnh và tagline sau khi upload ảnh
                setTimeout(() => {
                    setShowResultDrawer(true);
                }, 500); // Delay nhỏ để người dùng thấy ảnh được upload
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCloseDrawer = () => {
        setShowResultDrawer(false);
    };

    const handleBackToUpload = () => {
        setShowResultDrawer(false);
        setUploadedImage(null);
    };

    const handleGetReward = () => {
        setOpen(true);
    };

    const handleCloseOverlay = () => {
        setShowResult(false);
        // Kết thúc game
        if (onGameComplete) {
            onGameComplete();
        }
    };

    const handleViewGuide = () => {
        console.log('View guide');
    };

    const [open, setOpen] = useState(false);


    const onClose = () => {
        setOpen(false);
    };

    return (
        <GameLayout>
            {/* Step Indicator */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '20px 40px 20px',
                width: '100%'
            }}>
                <Image
                    src="/MiniGame/step3.png"
                    alt="Step 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '270px', height: 'auto' }}
                />
            </div>

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
                    Hãy chụp lấy ngay một bức hình chân dung của bạn để trải nghiệm ngay camera 200MP của Redmi note 13 Pro
                </h2>

                {/* Upload Area */}
                <div style={{ marginBottom: '60px' }}>
                    <div style={{
                        width: '100%',
                        height: '260px',
                        border: '2px dashed #53498D',
                        borderRadius: '8px',
                        padding: '0 16px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                        backgroundColor: uploadedImage ? 'transparent' : '#fff',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                        onClick={() => document.getElementById('imageInput')?.click()}
                    >
                        {uploadedImage ? (
                            <img
                                src={uploadedImage}
                                alt="Uploaded"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '6px'
                                }}
                            />
                        ) : (
                            <>
                                {/* Camera Icon */}
                                <div style={{ marginBottom: '16px' }}>
                                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_1_3087" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="56" height="56">
                                            <path d="M0 7.62939e-06H56V56H0V7.62939e-06Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask0_1_3087)">
                                            <path d="M19.2832 42.0501C19.2832 43.7584 20.6681 45.1433 22.3763 45.1433H40.7942C42.5025 45.1433 43.8874 43.7584 43.8874 42.0501V4.18697C43.8874 2.47864 42.5025 1.09373 40.7942 1.09373H22.3763C20.6681 1.09373 19.2832 2.47864 19.2832 4.18697V42.0501Z" stroke="#6F64A4" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M46.752 22.7241H43.8877V16.0679H46.752C48.5901 16.0679 50.0802 17.558 50.0802 19.3959V19.3961C50.0802 21.234 48.5901 22.7241 46.752 22.7241Z" stroke="#6F64A4" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M46.752 29.3803H43.8877V22.7241H46.752C48.5901 22.7241 50.0802 24.2141 50.0802 26.0521C50.0802 27.8902 48.5901 29.3803 46.752 29.3803Z" stroke="#6F64A4" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M46.752 36.0366H43.8877V29.3803H46.752C48.5901 29.3803 50.0802 30.8703 50.0802 32.7084C50.0802 34.5464 48.5901 36.0366 46.752 36.0366Z" stroke="#6F64A4" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M46.752 42.6927H43.8877V36.0366H46.752C48.5901 36.0366 50.0802 37.5266 50.0802 39.3647C50.0802 41.2027 48.5901 42.6927 46.752 42.6927Z" stroke="#6F64A4" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M18.3096 54.9062L22.2361 50.5509C22.2361 50.5509 31.9262 49.478 35.5749 45.1434H22.3767C20.6684 45.1434 19.2836 43.7586 19.2836 42.0503V15.2207C19.2836 11.5676 17.5531 8.52152 14.0991 7.84012C13.34 7.69137 12.6357 8.2798 12.6357 9.05308V11.6883" stroke="#6F64A4" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12.6351 21.3099C12.6315 23.1071 12.3082 24.8898 11.6696 26.57C10.7891 28.8875 10.4395 32.755 10.4395 36.7398L5.9209 41.0521" stroke="#6F64A4" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M31.5951 5.57233C29.8593 5.57233 28.4521 4.16511 28.4521 2.42933V1.09375H34.7381V2.42933C34.7381 4.16511 33.331 5.57233 31.5951 5.57233Z" stroke="#6F64A4" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M34.7904 27.5136C33.2522 29.7064 30.0031 29.7064 28.4648 27.5136L28.968 23.6617C29.7382 24.078 30.6192 24.314 31.5561 24.314C32.5666 24.314 33.5083 24.036 34.3147 23.5557L34.7904 27.5136Z" stroke="#6F64A4" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M37.0093 16.8134V19.0329C36.9063 21.9056 34.5315 24.314 31.5557 24.314C28.6495 24.314 26.2076 21.9346 26.1045 19.0318V16.8457C30.1108 16.796 31.6275 14.7095 31.6275 14.7095C31.6275 14.7095 33.0483 16.6038 37.0093 16.8134Z" stroke="#6F64A4" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M43.8874 37.3448V34.0583C43.8874 30.6117 41.1029 27.6571 37.6498 27.5136H34.79C34.0636 28.5497 32.8927 29.1582 31.6233 29.1582C30.3655 29.1582 29.1908 28.5497 28.4644 27.5136H25.4908C22.0486 27.6799 19.2832 30.6145 19.2832 34.0568V37.3448H43.8874Z" stroke="#6F64A4" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M31.6274 10.5008C25.3779 10.5008 25.3779 16.8329 25.3779 16.8329C29.9291 17.046 31.6274 14.7096 31.6274 14.7096C31.6274 14.7096 33.2211 16.8329 37.7337 16.8329C37.7337 16.8329 37.7337 10.5008 31.6274 10.5008Z" stroke="#6F64A4" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M24.5654 33.6928V37.3448" stroke="#6F64A4" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M38.6631 33.6928V37.3448" stroke="#6F64A4" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                    </svg>

                                </div>

                                {/* Upload Text */}
                                <div style={{
                                    textAlign: 'center',
                                    color: '#64748B',
                                    fontFamily: 'var(--font-roboto), Roboto, sans-serif'
                                }}>
                                    <p style={{
                                        fontSize: '14px',
                                        fontWeight: 400,
                                        marginBottom: '8px',
                                        lineHeight: '1.43'
                                    }}>
                                        Chụp hình hoặc tải hình ảnh của bạn tại đây
                                    </p>
                                    <p style={{
                                        fontSize: '16px',
                                        fontWeight: 500,
                                        color: '#FF6700',
                                        margin: 0
                                    }}>
                                        Chụp ảnh
                                    </p>
                                </div>
                            </>
                        )}

                        {/* Hidden File Input */}
                        <input
                            id="imageInput"
                            type="file"
                            accept="image/*"
                            capture="user"
                            onChange={handleImageUpload}
                            style={{ display: 'none' }}
                        />
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
                    <span style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '20px',
                        height: '20px'
                    }}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.0003 18.9583C5.05866 18.9583 1.04199 14.9416 1.04199 9.99996C1.04199 5.05829 5.05866 1.04163 10.0003 1.04163C14.942 1.04163 18.9587 5.05829 18.9587 9.99996C18.9587 14.9416 14.942 18.9583 10.0003 18.9583ZM10.0003 2.29163C5.75033 2.29163 2.29199 5.74996 2.29199 9.99996C2.29199 14.25 5.75033 17.7083 10.0003 17.7083C14.2503 17.7083 17.7087 14.25 17.7087 9.99996C17.7087 5.74996 14.2503 2.29163 10.0003 2.29163Z" fill="#292D32" />
                            <path d="M10 11.4584C9.65833 11.4584 9.375 11.175 9.375 10.8334V6.66669C9.375 6.32502 9.65833 6.04169 10 6.04169C10.3417 6.04169 10.625 6.32502 10.625 6.66669V10.8334C10.625 11.175 10.3417 11.4584 10 11.4584Z" fill="#292D32" />
                            <path d="M10.0003 14.1674C9.89199 14.1674 9.78366 14.1424 9.68366 14.1007C9.58366 14.059 9.49199 14.0007 9.40866 13.9257C9.33366 13.8424 9.27533 13.759 9.23366 13.6507C9.19199 13.5507 9.16699 13.4424 9.16699 13.334C9.16699 13.2257 9.19199 13.1174 9.23366 13.0174C9.27533 12.9174 9.33366 12.8257 9.40866 12.7424C9.49199 12.6674 9.58366 12.609 9.68366 12.5674C9.88366 12.484 10.117 12.484 10.317 12.5674C10.417 12.609 10.5087 12.6674 10.592 12.7424C10.667 12.8257 10.7253 12.9174 10.767 13.0174C10.8087 13.1174 10.8337 13.2257 10.8337 13.334C10.8337 13.4424 10.8087 13.5507 10.767 13.6507C10.7253 13.759 10.667 13.8424 10.592 13.9257C10.5087 14.0007 10.417 14.059 10.317 14.1007C10.217 14.1424 10.1087 14.1674 10.0003 14.1674Z" fill="#292D32" />
                        </svg>
                    </span>
                    Xem hướng dẫn
                </a>


            </div>

            {/* Result Drawer */}
            <Drawer
                closable={false}
                onClose={handleCloseDrawer}
                open={showResultDrawer}
                width={isMobile ? '100%' : "375px"}
                styles={{
                    body: {
                        padding: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100vh',
                        maxHeight: '100vh',
                        overflow: 'hidden',
                        backgroundImage: `url(${randomBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    },
                    wrapper: {
                        height: '100vh'
                    }
                }}
            >
                {/* Top Bar with Back Button */}
                <div style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 10
                }}>
                    <button
                        onClick={handleBackToUpload}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0
                        }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6" stroke="#212B36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* Content Container */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                    padding: '20px'
                }}>
                    {/* Photo Frame */}
                    <div style={{
                        width: '320px',
                        height: '400px',
                        backgroundColor: '#ffffffe2',
                        padding: '20px',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        {/* Photo Container */}
                        <div style={{
                            width: '280px',
                            height: '300px',
                            overflow: 'hidden',
                            marginBottom: '12px',
                            position: 'relative'
                        }}>
                            {uploadedImage && (
                                <img
                                    src={uploadedImage}
                                    alt="User Photo"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            )}

                            {/* Tagline overlay on photo */}
                            <div style={{
                                position: 'absolute',
                                bottom: '-10px',
                                left: '-7px',
                                width: '190px',
                                height: '88px',
                                zIndex: 99,
                            }}>
                                <Image
                                    src="/MiniGame/Tagline.png"
                                    alt="Tagline"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                        </div>

                        {/* Congratulations Text */}
                        <div style={{
                            textAlign: 'left',
                            marginTop: '8px'
                        }}>
                            <p style={{
                                fontFamily: 'var(--font-patrick-hand), var(--font-roboto), Roboto, sans-serif',
                                fontSize: '16px',
                                fontWeight: 600,
                                color: '#212B36',
                                margin: 0,
                                lineHeight: '1.4'
                            }}>
                                Này {lastName || 'bạn'}, Hôm nay có lẽ là ngày bạn trông phong độ nhất - có lẽ là do selfie bằng Redmi Note 13 Pro đó.
                            </p>

                        </div>
                    </div>
                </div>

                {/* Bottom Action Bar */}
                <div style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    display: 'flex',
                    gap: '12px'
                }}>
                    <button
                        onClick={handleBackToUpload}
                        style={{
                            flex: 1,
                            backgroundColor: 'white',
                            color: '#64748B',
                            border: '1px solid #E2E8F0',
                            borderRadius: '12px',
                            padding: '12px 24px',
                            fontFamily: 'var(--font-roboto), Roboto, sans-serif',
                            fontSize: '16px',
                            fontWeight: 500,
                            cursor: 'pointer'
                        }}
                    >
                        Chia sẻ
                    </button>
                    <button
                        onClick={handleGetReward}
                        style={{
                            flex: 1,
                            backgroundColor: '#FF6700',
                            color: 'white',
                            border: 'none',
                            borderRadius: '12px',
                            padding: '12px 24px',
                            fontFamily: 'var(--font-roboto), Roboto, sans-serif',
                            fontSize: '16px',
                            fontWeight: 500,
                            cursor: 'pointer'
                        }}
                    >
                        Nhận quà ngay
                    </button>

                    {/* Drawer nhận quà */}
                    <Drawer
                        closable={{ 'aria-label': 'Close Button' }}
                        onClose={onClose}
                        open={open}
                        width={isMobile ? '100%' : "375px"}
                        styles={{

                            body: {
                                padding: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                // height: '100vh',
                                // maxHeight: '100vh',

                            },
                            wrapper: {
                                height: '100vh'
                            }
                        }}
                    >
                        <div className={styles.drawerWrapper}>
                            {/* Banner */}
                            <div className={styles.drawerBanner}>
                                <Image
                                    src="/GameSection/bannergame.png"
                                    alt="Game Banner"
                                    fill
                                />
                            </div>

                            {/* Content */}
                            <div style={{
                                padding: '20px',
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center'
                            }}>
                                {/* Congratulations Icon */}
                                <div style={{ marginBottom: '20px', fontSize: '28px' }}>
                                    🎉🎉
                                </div>

                                {/* Title */}
                                <h2 style={{
                                    fontFamily: 'var(--font-roboto), Roboto, sans-serif',
                                    fontSize: '18px',
                                    fontWeight: 600,
                                    color: '#212B36',
                                    marginBottom: '16px',
                                    lineHeight: '1.33'
                                }}>
                                    Chúc mừng bạn đã hoàn thành tất cả các thử thách của chúng tôi. Bạn sẽ nhận được phần thưởng trị giá:
                                </h2>

                                {/* Prize Amount */}
                                <div style={{
                                    backgroundColor: '#E6E8EC',
                                    borderRadius: '12px',
                                    padding: '10px 16px',
                                    marginBottom: '20px',
                                    border: '1px solid #E9ECEF'
                                }}>
                                    <span style={{
                                        fontFamily: 'var(--font-roboto), Roboto, sans-serif',
                                        fontSize: '24px',
                                        fontWeight: 'semi-bold',
                                        color: '#6F64A4'
                                    }}>
                                        20.000 VND
                                    </span>
                                </div>

                                {/* Instructions */}
                                <p style={{
                                    fontFamily: 'var(--font-roboto), Roboto, sans-serif',
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    color: '#64748B',
                                    lineHeight: '1.5',
                                    marginBottom: '20px'
                                }}>
                                    Bạn sẽ nhận được tiền nạp vào số điện thoại {phone || '0234672343'}
                                    <br />trong vòng 24 giờ làm việc
                                </p>

                                <button
                                    onClick={() => {
                                        setOpen(false);
                                        // Reset game hoặc redirect về home
                                        if (onGameComplete) {
                                            onGameComplete();
                                        }
                                        // Refresh lại trang
                                        window.location.reload();
                                    }}
                                    style={{
                                        width: '100%',
                                        backgroundColor: '#FFff',
                                        color: '#212B36',
                                        border: '1px solid #CBD5E1',
                                        borderRadius: '12px',
                                        padding: '14px 24px',
                                        fontFamily: 'var(--font-roboto), Roboto, sans-serif',
                                        fontSize: '16px',
                                        fontWeight: 500,
                                        cursor: 'pointer',
                                        marginTop: '120px',
                                        marginBottom: '20px',
                                    }}
                                >
                                    Trở về trang home
                                </button>

                                {/* Contact Info */}
                                <p style={{
                                    fontFamily: 'var(--font-roboto), Roboto, sans-serif',
                                    fontSize: '12px',
                                    fontWeight: 400,
                                    color: '#94A3B8',
                                    lineHeight: '1.4',
                                    marginTop: 'auto'
                                }}>
                                    Mọi thắc mắc vui lòng liên hệ{' '}
                                    <a
                                        href="https://www.facebook.com/XiaomiVietnam"
                                        style={{ color: '#3B82F6', textDecoration: 'none' }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://www.facebook.com/XiaomiVietnam
                                    </a>
                                    {' '}hoặc 19000118.
                                </p>
                            </div>


                        </div>
                    </Drawer>
                </div>
            </Drawer>

            {/* Result Overlay */}
            <ResultOverlay
                isVisible={showResult}
                isCorrect={true} // Always true for image upload
                onClose={handleCloseOverlay}
            />
        </GameLayout>
    );
};

export default Question3;