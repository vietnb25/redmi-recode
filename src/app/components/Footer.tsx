import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    {/* Column 1: TÌM HIỂU THÊM */}
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>TÌM HIỂU THÊM</h3>
                        <ul className={styles.linkList}>
                            <li><a href="#" className={styles.link}>Xiaomi 11T Pro | 5G</a></li>
                            <li><a href="#" className={styles.link}>Xiaomi 11T | 5G</a></li>
                            <li><a href="#" className={styles.link}>Xiaomi 11T Lite 5G NE</a></li>
                        </ul>
                    </div>

                    {/* Column 2: HỖ TRỢ */}
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>HỖ TRỢ</h3>
                        <ul className={styles.linkList}>
                            <li><a href="#" className={styles.link}>Bảo hành</a></li>
                            <li><a href="#" className={styles.link}>Mua hàng</a></li>
                            <li><a href="#" className={styles.link}>Trung tâm dịch vụ</a></li>
                            <li><a href="#" className={styles.link}>Xác thực Sản Phẩm</a></li>
                            <li><a href="#" className={styles.link}>Hướng dẫn sử dụng</a></li>
                            <li><a href="#" className={styles.link}>Phí sữa chữa dịch vụ đối với điện thoại</a></li>
                            <li><a href="#" className={styles.link}>Email</a></li>
                        </ul>
                    </div>

                    {/* Column 3: GIỚI THIỆU */}
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>GIỚI THIỆU</h3>
                        <ul className={styles.linkList}>
                            <li><a href="#" className={styles.link}>Xiaomi</a></li>
                            <li><a href="#" className={styles.link}>Chính sách riêng tư</a></li>
                            <li><a href="#" className={styles.link}>Toàn vẹn & Tuân thủ</a></li>
                        </ul>
                    </div>

                    {/* Column 4: LIÊN HỆ */}
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>LIÊN HỆ</h3>
                        <ul className={styles.linkList}>
                            <li><a href="#" className={styles.link}>Email</a></li>
                            <li><a href="#" className={styles.link}>Hotline</a></li>
                        </ul>
                    </div>

                    {/* Column 5: Contact Info */}
                    <div className={styles.contactColumn}>
                        <div className={styles.phoneNumber}>1800400168</div>
                        <div className={styles.workingHours}>Thứ 2 đến thứ 6</div>
                        <button className={styles.emailButton}>
                            Email Support
                        </button>
                    </div>

                    {/* Column 6: Social Media */}
                    <div className={styles.socialColumn}>
                        <h3 className={styles.socialTitle}>THEO DÕI MI</h3>
                        <div className={styles.socialIcons}>
                            <a href="#" className={styles.socialIcon}>
                                <Image
                                    src="/Footer/fb.png"
                                    alt="Facebook"
                                    width={24}
                                    height={24}
                                />
                            </a>
                            <a href="#" className={styles.socialIcon}>
                                <Image
                                    src="/Footer/tiktok.png"
                                    alt="TikTok"
                                    width={24}
                                    height={24}
                                />
                            </a>
                            <a href="#" className={styles.socialIcon}>
                                <Image
                                    src="/Footer/insta.png"
                                    alt="Instagram"
                                    width={24}
                                    height={24}
                                />
                            </a>
                            <a href="#" className={styles.socialIcon}>
                                <Image
                                    src="/Footer/ytb.png"
                                    alt="YouTube"
                                    width={24}
                                    height={24}
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className={styles.divider}></div>

                {/* Copyright */}
                <div className={styles.copyright}>
                    Copyright © 2010 - 2022 Xiaomi. All Rights Reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;
