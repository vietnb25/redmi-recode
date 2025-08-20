import React from 'react';
import Image from 'next/image';
import styles from './StoreSection.module.css';

const StoreSection = () => {
    return (
        <div className={styles.container} id="stores" style={{ scrollMarginTop: "64px" }}>
            {/* Hệ thống cửa hàng bán lẻ */}
            <div className={styles.retailSection}>
                <h2 className={styles.title}>
                    Hệ thống <span className={styles.highlight}>cửa hàng bán lẻ</span>
                </h2>

                <div className={styles.storeGrid}>
                    <div className={styles.storeCard}>
                        <div className={styles.cardBackground}></div>
                        <Image
                            src="/StoreSection/thegioididong.png"
                            alt="Thế Giới Di Động"
                            width={175}
                            height={91}
                            className={styles.storeImage}
                        />
                    </div>

                    <div className={styles.storeCard}>
                        <div className={styles.cardBackground}></div>
                        <Image
                            src="/StoreSection/fpt.png"
                            alt="FPT Shop"
                            width={175}
                            height={91}
                            className={styles.storeImage}
                        />
                    </div>

                    <div className={styles.storeCard}>
                        <div className={styles.cardBackground}></div>
                        <Image
                            src="/StoreSection/xiaomi.png"
                            alt="Mi Store"
                            width={175}
                            height={91}
                            className={styles.storeImage}
                        />
                    </div>

                    <div className={styles.storeCard}>
                        <div className={styles.cardBackground}></div>
                        <Image
                            src="/StoreSection/viettel.png"
                            alt="Viettel Store"
                            width={175}
                            height={91}
                            className={styles.storeImage}
                        />
                    </div>

                    <div className={styles.storeCard}>
                        <div className={styles.cardBackground}></div>
                        <Image
                            src="/StoreSection/hoangha.png"
                            alt="Hoàng Hà Mobile"
                            width={175}
                            height={91}
                            className={styles.storeImage}
                        />
                    </div>

                    <div className={styles.storeCard}>
                        <div className={styles.cardBackground}></div>
                        <Image
                            src="/StoreSection/cellphones.png"
                            alt="CellphoneS"
                            width={175}
                            height={91}
                            className={styles.storeImage}
                        />
                    </div>
                </div>
            </div>

            {/* Thương mại điện tử */}
            <div className={styles.ecommerceSection}>
                <h2 className={styles.title}>
                    Thương <span className={styles.highlight}>mại điện tử</span>
                </h2>

                <div className={styles.ecommerceGrid}>
                    <div className={styles.ecommerceCard}>
                        <Image
                            src="/StoreSection/shopee.png"
                            alt="Shopee"
                            width={176}
                            height={86}
                            className={styles.ecommerceImage}
                        />
                    </div>

                    <div className={styles.ecommerceCard}>
                        <Image
                            src="/StoreSection/lazada.png"
                            alt="Lazada"
                            width={178}
                            height={86}
                            className={styles.ecommerceImage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreSection;
