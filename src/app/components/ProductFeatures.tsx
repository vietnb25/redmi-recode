'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ProductFeatures.module.css';

export default function ProductFeatures(){
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if running on client-side
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
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
  
  return (
    <section className={styles.productFeatures} style={{
       
        scrollMarginTop: '60px'
      }}>
      <div className={styles.background}>
        <Image 
          src="/ProductFeatures/Background3.png" 
          alt="" 
          fill 
          className={styles.backgroundImage}
          priority
        />
      </div>
      
      <div className={styles.container}>
        {/* Title 1 */}
        <div className={styles.titleContainer}>
          <Image
            src={isMobile ? "/ProductFeatures/title1mobile.png" : "/ProductFeatures/title1.png"}
            alt="Redmi Note 13"
            width={isMobile ? 284 : 500}
            height={isMobile ? 25 : 100}
            quality={100}
            priority
            className={isMobile ? styles.titleImage1Mobile : styles.titleImage}
          />
        </div>
      
      {/* Row 3 */}
      <div className={styles.row}>
        <div className={`${styles.card} ${styles.mediumCardTall}`} >
          <Image 
            src={isMobile ? "/ProductFeatures/1mobile.png" : "/ProductFeatures/feature1.png"} 
            alt="" 
            fill={false}
            width={isMobile ? 343 : 800}
            height={isMobile ? 257 : 600}
            className={styles.cardImage} 
          />
        </div>
        <div className={`${styles.card} ${styles.mediumCardTall}`}>
          <Image 
            src={isMobile ? "/ProductFeatures/2mobile.png" : "/ProductFeatures/feature2.png"} 
            alt="" 
            fill={false}
            width={isMobile ? 343 : 800}
            height={isMobile ? 257 : 600}
            className={styles.cardImage} 
          />
        </div>
        <div className={styles.smallCardContainer}>
          <div className={`${styles.card} ${styles.smallCard}`}>
            <Image 
              src={isMobile ? "/ProductFeatures/3mobile.png" : "/ProductFeatures/feature3.png"} 
              alt="" 
              fill={false}
              width={isMobile ? 343 : 600}
              height={isMobile ? 172 : 450}
              className={styles.cardImage} 
            />
          </div>
          <div className={`${styles.card} ${styles.smallCard}`}>
            <Image 
              src={isMobile ? "/ProductFeatures/4mobile.png" : "/ProductFeatures/feature4.png"} 
              alt="" 
              fill={false}
              width={isMobile ? 343 : 600}
              height={isMobile ? 172 : 450}
              className={styles.cardImage} 
            />
          </div>
        </div>
      </div>
  {/* Title 2 */}
        <div className={styles.titleContainer}>
          <Image
            src={isMobile ? "/ProductFeatures/title2mobile.png" : "/ProductFeatures/title2.png"}
            alt="Redmi Note 13"
            width={isMobile ? 191 : 340}
            height={isMobile ? 25 : 100}
            quality={100}
            priority
            className={isMobile ? styles.titleImage2Mobile : styles.titleImage}
          />
        </div>
      
      {/* Row 4 */}
      <div className={styles.row}>
        <div className={`${styles.card} ${styles.mediumCardTall}`}>
          <Image 
            src={isMobile ? "/ProductFeatures/5mobile.png" : "/ProductFeatures/feature5.png"} 
            alt="" 
            fill={false}
            width={isMobile ? 343 : 800}
            height={isMobile ? 257 : 600}
            className={styles.cardImage} 
          />
        </div>
        <div className={`${styles.card} ${styles.mediumCardTall}`}>
          <Image 
            src={isMobile ? "/ProductFeatures/6mobile.png" : "/ProductFeatures/feature6.png"} 
            alt="" 
            fill={false}
            width={isMobile ? 343 : 800}
            height={isMobile ? 257 : 600}
            className={styles.cardImage} 
          />
        </div>
        <div className={styles.smallCardContainer}>
          <div className={`${styles.card} ${styles.smallCard}`}>
            <Image 
              src={isMobile ? "/ProductFeatures/7mobile.png" : "/ProductFeatures/feature7.png"} 
              alt="" 
              fill={false}
              width={isMobile ? 343 : 600}
              height={isMobile ? 172 : 450}
              className={styles.cardImage} 
            />
          </div>
          <div className={`${styles.card} ${styles.smallCard}`}>
            <Image 
              src={isMobile ? "/ProductFeatures/8mobile.png" : "/ProductFeatures/feature8.png"} 
              alt="" 
              fill={false}
              width={isMobile ? 343 : 600}
              height={isMobile ? 172 : 450}
              className={styles.cardImage} 
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

