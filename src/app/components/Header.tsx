'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          <Image
            src="/xiaomilogo.png"
            alt="Xiaomi Logo"
            width={40}
            height={40}
            priority
          />
        </Link>

        <button
          className={styles.toggleButton}
          onClick={toggleMenu}
          aria-controls="navbar-nav"
          aria-expanded={isMenuOpen}
        >
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
        </button>

        <div className={`${styles.navCollapse} ${isMenuOpen ? styles.show : ''}`}>
          <ul className={styles.navList}>
            <li><a href="#product-info" className={styles.navLink}>Thông tin sản phẩm</a></li>
            <li><a href="#gaming" className={styles.navLink}>Chơi game</a></li>
            <li><a href="#program-rules" className={styles.navLink}>Thể lệ chương trình</a></li>
            <li><a href="#stores" className={styles.navLink}>Hệ thống cửa hàng</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}