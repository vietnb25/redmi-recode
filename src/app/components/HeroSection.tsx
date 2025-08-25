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

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setDisplayedSlide(currentSlide);
  }, []);

  const banner = [
    '/HeroSection/banner11.png',
    '/HeroSection/banner222.png',
    '/HeroSection/banner333.png'
  ];

  const bannerMobile = [
    {
      src: '/HeroSection/banner1mobilet.png',
      width: 500,
      height: 700,
      marginTop: 100,
    },
    {
      src: '/HeroSection/banner2mobilet.png',
      width: 1000,
      height: 700,
      marginTop: 50,
    },
    {
      src: '/HeroSection/banner3mobilet.png',
      width: 200,
      height: 200,
      marginTop: 50,
    }
  ];

  const handleDotClick = (index: number) => {
    if (currentSlide === index || isAnimating) return;

    setIsAnimating(true);
    setCurrentSlide(index);

    setTimeout(() => {
      setDisplayedSlide(index);
    }, 250);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // khi click ảnh => chuyển sang ảnh tiếp theo
  const handleImageClick = () => {
    const maxSlides = isMobile ? bannerMobile.length : banner.length;
    const nextSlide = (currentSlide + 1) % maxSlides;
    handleDotClick(nextSlide);
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

    const maxSlides = isMobile ? bannerMobile.length : banner.length;

    if (isLeftSwipe && currentSlide < maxSlides - 1) {
      handleDotClick(currentSlide + 1);
    }
    if (isRightSwipe && currentSlide > 0) {
      handleDotClick(currentSlide - 1);
    }
  };
  useEffect(() => {
    const maxSlides = isMobile ? bannerMobile.length : banner.length;

    const interval = setInterval(() => {
      setIsAnimating(true); // bắt đầu fade out

      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % maxSlides);
        setIsAnimating(false); // fade in lại
      }, 500); // bằng thời gian transition
    }, 10000);

    return () => clearInterval(interval);
  }, [isMobile, banner.length, bannerMobile.length]);


  return (
    <div
      className={styles.heroSection}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Image
        src={isMobile ? bannerMobile[currentSlide].src : banner[currentSlide]}
        alt={`Redmi Note 13 - Slide ${currentSlide + 1}`}
        width={isMobile ? bannerMobile[currentSlide].width : 713}
        height={isMobile ? bannerMobile[currentSlide].height : 100}
        className={`${styles.infoImage} ${isAnimating ? styles.hidden : ''}`}
        style={
          isMobile
            ? { marginTop: bannerMobile[currentSlide].marginTop }
            : {}
        }
      />

      {!isMobile && (
        <div className={styles.pagination}>
          {banner.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${currentSlide === index ? styles.active : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
