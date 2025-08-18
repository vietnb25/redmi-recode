'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './PromotionSection.module.css';
export default function PromotionSection() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section id='program-rules' style={{ scrollMarginTop: '60px' }} className={styles.container}>
            <div className={styles.titleSection}>
                <h1 className={styles.mainTitle}>Chi tiết chương trình</h1>
                <h1 className={styles.subTitle}>
                    {isMobile ? (
                        <>
                            Trải nghiệm<br />
                            Redmi Note <span style={{ color: "#E3141B", fontWeight: "600" }}>13</span> Series
                        </>
                    ) : (
                        <>Trải Nghiệm Redmi Note <span style={{ color: "#E3141B", fontWeight: "600" }}>13</span> Series</>
                    )}
                </h1>
            </div>
            <div className={styles.border}>
                <Image
                    src={isMobile ? "/PromotionSection/bordermobile.png" : "/PromotionSection/border.png"}
                    alt="Promotion Image"
                    layout="fill"
                    objectFit="cover"
                />
                <div className={styles.contentFrame}>
                    <div className={styles.introSection}>
                        <p className={styles.introText}>
                            Chào đón siêu phẩm Redmi Note 13 Series, Xiaomi mang đến cho Quý khách chương trình
                        </p>
                        <h2 className={styles.programTitle} style={{ fontSize: '16px' }}>
                            TRẢI NGHIỆM REDMI NOTE 13 SERIES - SĂN NGAY QUÀ KHỦNG.
                        </h2>
                        <p className={styles.callToAction}>
                            Xem ngay chi tiết thể lệ chương trình cùng tham gia ngay thôi nào!!
                        </p>
                    </div>

                    <div className={styles.timeSection}>
                        <h3 className={styles.sectionTitle}>1. Thời gian diễn ra chương trình</h3>
                        <div className={styles.timeFrame}>
                            <p className={styles.timeText}>Từ ngày <span style={{ color: "#3B3276", fontWeight: "600" }}>3/1/2024 đến hết ngày 29/2/2024</span></p>
                        </div>
                    </div>

                    <div className={styles.participationSection}>
                        <h3 className={styles.sectionTitle}>2. Cách thức tham gia</h3>
                        <div className={styles.participationFrame}>
                            <p className={styles.participationText}>
                                Trong thời gian diễn ra chương trình, khi khách hàng đến trải nghiệm sản phẩm Redmi Note 13 Series tại hệ thống cửa hàng TGDĐ, khách hàng sẽ có cơ hội nhận được ngay <span style={{ color: "#3B3276", fontWeight: "600" }}>thẻ cào điện thoại 20k, 50k, 100k</span> <em style={{ color: "#3B3276", fontWeight: "600", }}>(gửi ngay vào tài khoản)</em>.
                                <br /><br />
                                Mọi thắc mắc vui lòng liên hệ <span className={styles.linkText}>https://www.facebook.com/XiaomiVietnam</span> hoặc <span className={styles.phoneText}>1800400410</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}