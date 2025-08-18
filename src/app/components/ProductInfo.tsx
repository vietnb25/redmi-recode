'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ProductInfo.module.css';


export default function ProductInfo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      handleResize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <section className={styles.section} id="product-info" style={{ scrollMarginTop: '100px' }}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <Image
            src={isMobile ? "/ProductInfo/titlemobile.png" : "/ProductInfo/redmi-title.png"}
            alt="Redmi Note 13"
            width={isMobile ? 350 : 500}
            height={isMobile ? 15 : 100}
            quality={100}
            priority
            className={styles.titleImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <div className={styles.row}>
            {/* Top Row - 2 Features */}
            <div className={styles.topRow}>
              <div className={styles.col6}>
                <div className={styles.featureCard}>
                  <Image
                    src={isMobile ? "/ProductInfo/1mobile.png" : "/ProductInfo/1.png"}
                    alt="AMOLED Display"
                    width={isMobile ? 343 : 800}
                    height={isMobile ? 257 : 800}
                    quality={100}
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.image}
                    style={{
                      imageRendering: 'crisp-edges',
                      filter: 'contrast(1.1) saturate(1.1)',
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)'
                    }}
                  />
                </div>
              </div>

              <div className={styles.col6}>
                <div className={styles.featureCard}>
                  <Image
                    src={isMobile ? "/ProductInfo/2mobile.png" : "/ProductInfo/2.png"}
                    alt="200MP Camera"
                    width={isMobile ? 343 : 800}
                    height={isMobile ? 257 : 800}
                    quality={100}
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.image}
                    style={{
                      imageRendering: 'crisp-edges',
                      filter: 'contrast(1.1) saturate(1.1)',
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Bottom Row - 3 Features */}
            <div className={styles.bottomRow}>
              <div className={styles.col4}>
                <div className={styles.featureCard}>
                  <Image
                    src={isMobile ? "/ProductInfo/3mobile.png" : "/ProductInfo/3.png"}
                    alt="Design Feature"
                    width={isMobile ? 343 : 600}
                    height={isMobile ? 172 : 600}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={styles.image}
                    style={{
                      imageRendering: 'crisp-edges',
                      filter: 'contrast(1.1) saturate(1.1)',
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)'
                    }}
                  />
                </div>
              </div>

              <div className={styles.col4}>
                <div className={styles.featureCard}>
                  <Image
                    src={isMobile ? "/ProductInfo/4mobile.png" : "/ProductInfo/4.png"}
                    alt="Waterproof Feature"
                    width={isMobile ? 343 : 600}
                    height={isMobile ? 172 : 600}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={styles.image}
                    style={{
                      imageRendering: 'crisp-edges',
                      filter: 'contrast(1.1) saturate(1.1)',
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)'
                    }}
                  />
                </div>
              </div>

              <div className={styles.col4}>
                <div className={styles.featureCard}>
                  <Image
                    src={isMobile ? "/ProductInfo/5mobile.png" : "/ProductInfo/5.png"}
                    alt="Fast Charging"
                    width={isMobile ? 343 : 600}
                    height={isMobile ? 172 : 600}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={styles.image}
                    style={{
                      imageRendering: 'crisp-edges',
                      filter: 'contrast(1.1) saturate(1.1)',
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}