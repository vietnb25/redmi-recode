'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ProductFeatures.module.css';

export default function ProductFeatures() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 1024);
      };

      handleResize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <section className={styles.productFeatures} style={{

      scrollMarginBottom: '-100px'
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
            width={isMobile ? 284 : 441}
            height={isMobile ? 25 : 56}
            quality={100}
            priority
            className={isMobile ? styles.titleImage1Mobile : styles.titleImage}
          />
        </div>

        {/* Row 3 */}
        <div className={styles.row}>
          <div className={`${styles.card} ${styles.mediumCardTall}`} >
            <Image
              src={isMobile ? "/ProductFeatures/1mobile.jpg" : "/ProductFeatures/1.png"}
              alt=""
              fill={false}
              width={isMobile ? 343 : 800}
              height={isMobile ? 257 : 600}
              className={styles.cardImage}
            />
          </div>
          <div className={`${styles.card} ${styles.mediumCardTall}`}>
            <Image
              src={isMobile ? "/ProductFeatures/2mobile.jpg" : "/ProductFeatures/2.png"}
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
                src={isMobile ? "/ProductFeatures/3mobile.jpg" : "/ProductFeatures/3.png"}
                alt=""
                fill={false}
                width={isMobile ? 343 : 600}
                height={isMobile ? 172 : 450}
                className={styles.cardImage}
              />
            </div>
            <div className={`${styles.card} ${styles.smallCard}`}>
              <Image
                src={isMobile ? "/ProductFeatures/4mobile.jpg" : "/ProductFeatures/4.png"}
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
            width={isMobile ? 191 : 303}
            height={isMobile ? 25 : 39}
            quality={100}
            priority
            className={isMobile ? styles.titleImage2Mobile : styles.titleImage}
          />
        </div>

        {/* Row 4 */}
        <div className={styles.row}>
          <div className={`${styles.card} ${styles.mediumCardTall}`}>
            <Image
              src={isMobile ? "/ProductFeatures/5mobile.jpg" : "/ProductFeatures/5.png"}
              alt=""
              fill={false}
              width={isMobile ? 343 : 800}
              height={isMobile ? 257 : 600}
              className={styles.cardImage}
            />
          </div>
          <div className={`${styles.card} ${styles.mediumCardTall}`}>
            <Image
              src={isMobile ? "/ProductFeatures/6mobile.jpg" : "/ProductFeatures/6.png"}
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
                src={isMobile ? "/ProductFeatures/7mobile.jpg" : "/ProductFeatures/7.png"}
                alt=""
                fill={false}
                width={isMobile ? 343 : 600}
                height={isMobile ? 172 : 450}
                className={styles.cardImage}
              />
            </div>
            <div className={`${styles.card} ${styles.smallCard}`}>
              <Image
                src={isMobile ? "/ProductFeatures/8mobile.jpg" : "/ProductFeatures/8.png"}
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

