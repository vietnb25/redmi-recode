'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';

export default function Herosection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayedSlide, setDisplayedSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Ensure both slides are synchronized at start
  useEffect(() => {
    setDisplayedSlide(currentSlide);
  }, []);

  const leftImages = [
    '/HeroSection/tap1left.png',
    '/HeroSection/tap1left2.png',
    '/HeroSection/tap1left3.png'
  ];

  const leftImagesMobile = [
    {
      src: '/HeroSection/leftmb1.png',
      width: 500,
      height: 700,
      marginTop: -80,
    },
    {
      src: '/HeroSection/leftmb2.png',
      width: 800,
      height: 1000,
      marginTop: -50,
    },
    {
      src: '/HeroSection/leftmb3.png',
      width: 200,
      height: 200
    }
  ];

  const handleDotClick = (index: number) => {
    if (currentSlide === index || isAnimating) return;

    setIsAnimating(true);
    setCurrentSlide(index);

    // After the fade-out animation, update the displayed image and fade it in
    setTimeout(() => {
      setDisplayedSlide(index);
    }, 250);

    // Reset the animation state after the complete transition
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // Swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMobile) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isMobile || !touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    const maxSlides = isMobile ? leftImagesMobile.length : leftImages.length;

    if (isLeftSwipe && currentSlide < maxSlides - 1) {
      handleDotClick(currentSlide + 1);
    }
    if (isRightSwipe && currentSlide > 0) {
      handleDotClick(currentSlide - 1);
    }
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Left product image */}
        <div
          className={styles.leftImageContainer}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >

          <Image
            src={isMobile ? leftImagesMobile[displayedSlide].src : leftImages[displayedSlide]}
            alt={`Redmi Note 13 - Slide ${displayedSlide + 1}`}
            width={isMobile ? leftImagesMobile[displayedSlide].width : 713}
            height={isMobile ? leftImagesMobile[displayedSlide].height : 100}
            className={`${styles.productImage} ${isAnimating ? styles.animating : ''}`}
            style={isMobile ? { marginTop: leftImagesMobile[displayedSlide].marginTop } : {}}
          />
        </div>

        {/* Right content container chung cho ảnh và disclaimer */}
        <div className={styles.rightContentContainer}>
          <Image
            src={isMobile ? "/HeroSection/tap1rightmobile.png" : "/HeroSection/tap1right.png"}
            alt="Redmi Note 13 Info"
            width={isMobile ? 375 : 456}
            height={isMobile ? 300 : 161}
            className={styles.infoImage}
          />

          {/* Disclaimer text - only show on desktop */}
          {/* {!isMobile && (
            <p className={styles.disclaimer}>
              Hình ảnh chỉ mang tính chất minh họa.<br />
              Vui lòng liên hệ nhân viên tư vấn khi mua hàng.<br />
              Tính năng có thể khác nhau tùy theo mỗi dòng máy.
            </p>
          )} */}
          <p className={styles.disclaimer}>
            Hình ảnh chỉ mang tính chất minh họa.<br />
            Vui lòng liên hệ nhân viên tư vấn khi mua hàng.<br />
            Tính năng có thể khác nhau tùy theo mỗi dòng máy.
          </p>
        </div>

        {/* Pagination dots - only show on desktop */}
        {!isMobile && (
          <div className={styles.pagination}>
            {leftImages.map((_, index) => (
              <div
                key={index}
                className={`${styles.dot} ${currentSlide === index ? styles.active : ''}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}