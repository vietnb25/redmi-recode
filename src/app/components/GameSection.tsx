'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './GameSection.module.css';
import { Modal, Drawer, Select, Input } from 'antd';
import WelcomeGame from './MiniGame/WelcomeGame';

interface FormErrors {
  store?: string;
  device?: string;
  code?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  province?: string;
  district?: string;
  address?: string;
  ward?: string;
}

export default function GameSection() {
  const [showWelcomeGame, setShowWelcomeGame] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if running on client-side
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 1024);
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

  const [timeLeft, setTimeLeft] = useState({
    days: 13,
    hours: 13,
    minutes: 13,
    seconds: 13
  });

  const [open, setOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [infoFormOpen, setInfoFormOpen] = useState(false);

  // Form validation states
  const [uqcForm, setUqcForm] = useState({
    store: 'cellphones-nguyen-thai-hoc',
    device: 'redmi-note-13-pro-plus',
    code: ''
  });

  const [userForm, setUserForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    province: 'hcm',
    district: 'quan1',
    address: '',
    ward: 'phuong12'
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  // Validation functions
  const validateUqcForm = () => {
    const errors: FormErrors = {};
    if (!uqcForm.store) errors.store = 'Vui lòng chọn cửa hàng';
    if (!uqcForm.device) errors.device = 'Vui lòng chọn thiết bị';
    if (!uqcForm.code) errors.code = 'Vui lòng nhập mã code';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateUserForm = () => {
    const errors: FormErrors = {};
    if (!userForm.firstName) errors.firstName = 'Vui lòng nhập họ và tên đệm';
    if (!userForm.lastName) errors.lastName = 'Vui lòng nhập tên';
    if (!userForm.email) errors.email = 'Vui lòng nhập email';
    if (!userForm.phone) errors.phone = 'Vui lòng nhập số điện thoại';
    if (!userForm.province) errors.province = 'Vui lòng chọn tỉnh/thành phố';
    if (!userForm.district) errors.district = 'Vui lòng chọn quận/huyện';
    if (!userForm.address) errors.address = 'Vui lòng nhập địa chỉ';
    if (!userForm.ward) errors.ward = 'Vui lòng chọn phường/xã';

    // Email validation
    if (userForm.email && !/\S+@\S+\.\S+/.test(userForm.email)) {
      errors.email = 'Email không hợp lệ';
    }

    // Phone validation
    if (userForm.phone && !/^[0-9]{10,11}$/.test(userForm.phone)) {
      errors.phone = 'Số điện thoại không hợp lệ';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const showDrawer = () => {
    setOpen(true);

  };

  const onClose = () => {
    setOpen(false);
  };

  const showFormDrawer = () => {
    setOpen(false); // Đóng drawer hiện tại
    setFormOpen(true); // Mở drawer form
    setFormErrors({}); // Clear errors
  };

  const onFormClose = () => {
    setFormOpen(false);
  };

  const showInfoFormDrawer = () => {
    if (validateUqcForm()) {
      setFormOpen(false); // Đóng drawer form hiện tại
      setInfoFormOpen(true); // Mở drawer form thông tin
      setFormErrors({}); // Clear errors
    }
  };

  // const onInfoFormClose = () => {
  //   if (validateUserForm()) {
  //     setInfoFormOpen(false);
  //     // Show WelcomeGame component
  //     setShowWelcomeGame(true);
  //   }
  // };
  const onInfoFormClose = () => {
    if (validateUserForm()) {
      setInfoFormOpen(false);
      // Chuyển hướng trong 1 tab
      const params = new URLSearchParams({
        lastName: userForm.lastName,
        phone: userForm.phone
      }).toString();
      window.location.href = `/welcome-game?${params}`;
    }
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // If WelcomeGame should be shown, render it instead
  if (showWelcomeGame) {
    return <WelcomeGame lastName={userForm.lastName} phone={userForm.phone} />;
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalHDOpen, setIsModalHDOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModalHD = () => {
    if (isMobile) {
      showDrawer();
    } else {
      setIsModalHDOpen(true);
    }
  };

  const handleOkHD = () => {
    setIsModalHDOpen(false);
  };

  const handleCancelHD = () => {
    setIsModalHDOpen(false);
  };

  const handlePlayClick = () => {
    if (isMobile) {
      showDrawer();
    } else {
      showModal();
    }
  };

  const [loading, setLoading] = useState(false);

  return (
    <section id='gaming' className={styles.gameSection} style={{ scrollMarginTop: '60px' }}>
      {/* Background */}
      <div className={styles.background}>
        <Image
          src="/GameSection/Background.png"
          alt=""
          width={1170}
          height={800}
          className={styles.backgroundImage}
          priority
        />
      </div>

      {/* Content */}
      <div className={styles.leftContent}>
        {/* Minigame Badge */}
        <div className={styles.minigameBadge}>
          <span className={styles.badgeText}>Minigame</span>
        </div>

        {/* Main Title */}
        <div className={styles.titleContainer}>
          <h1 className={styles.mainTitle}>
            Khuấy đảo <span className={styles.gradientText}>Minigame</span><br />
            Săn ngay quà khủng cùng <span className={styles.gradientText}>Xiaomi</span>
          </h1>
        </div>

        {/* Countdown Timer */}
        <div className={styles.countdownSection}>
          <p className={styles.countdownLabel}>Thời gian còn lại</p>
          <div className={styles.countdownTimer}>
            <div className={styles.timeBox}>
              <span className={styles.timeNumber}>{timeLeft.days}</span>
              {/* <span className={styles.timeNumber}>13</span> */}
              <span className={styles.timeLabel}>Ngày</span>
            </div>
            <div className={styles.timeBox}>
              <span className={styles.timeNumber}>{timeLeft.hours}</span>
              {/* <span className={styles.timeNumber}>13</span> */}
              <span className={styles.timeLabel}>Giờ</span>
            </div>
            <div className={styles.timeBox}>
              <span className={styles.timeNumber}>{timeLeft.minutes}</span>
              {/* <span className={styles.timeNumber}>13</span> */}
              <span className={styles.timeLabel}>Phút</span>
            </div>
            <div className={styles.timeBox}>
              {/* <span className={styles.timeNumber}>13</span> */}
              <span className={styles.timeNumber}>{timeLeft.seconds}</span>
              <span className={styles.timeLabel}>Giây</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className={styles.buttonGroup}>
          <button className={styles.primaryButton} onClick={handlePlayClick}>
            Chơi Ngay
          </button>
          <Modal
            open={isModalOpen}
            // title={1}
            onOk={handleOk}
            onCancel={handleCancel}
            // height={200}
            width={477}
            styles={{
              body: {
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              },
              content: {
                padding: 0,   // bỏ padding tổng thể
                borderRadius: 12 // tuỳ chỉnh bo góc
              }
            }}

            footer={[

            ]}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              {/* Scrollable Content */}
              <div style={{
                flex: 1,
                overflowY: 'auto',

              }}>
                {/* Banner */}
                <div className={styles.drawerBannerDesktop}>
                  <Image
                    src="/GameSection/bannergame.png"
                    alt="Game Banner"
                    fill

                  />
                </div>

                {/* Content */}
                <div style={{
                  padding: '20px',
                  textAlign: 'center'
                }}>

                  <Image
                    src="/GameSection/error.png"
                    alt="No Support Device"
                    width={429}
                    height={236}
                  />
                  {/* <h2 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginBottom: '16px',
                    color: '#333'
                  }}>

                    Rất tiếc chúng tôi không hỗ trợ thiết bị của bạn!
                  </h2>

                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}>
                    <p style={{
                      fontSize: '16px',
                      color: '#333',
                      lineHeight: '2'

                    }}>
                      Bạn có thể trãi nghiệm sản phẩm Redmi Note 13 Series tại hệ thống của hàng báng lẻ của Xiaomi để tham gia Minigame này và nhận các phần quà khủng.
                    </p>

                  </div> */}
                  <button
                    style={{
                      // justifyItems: 'center',
                      marginTop: '50px',
                      marginBottom: '10px',
                      width: '177px',
                      height: '48px',
                      backgroundColor: '#fff',
                      color: '#212B36',
                      // border: 'none',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease',
                      border: "1px solid #CBD5E1"
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#F1F5F9';
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = '#fff';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    onClick={handleCancel}

                  >
                    Quay về trang chủ
                  </button>
                </div>
              </div>


            </div>
          </Modal>
          {/* Drawer 1: Hướng dẫn */}
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
                height: '100%'
              }
            }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              {/* Scrollable Content */}
              <div style={{
                flex: 1,
                overflowY: 'auto',
                paddingBottom: '80px' // Tạo khoảng trống cho button
              }}>
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
                  padding: '20px'
                }}>
                  <div style={{
                    marginBottom: '20px'
                  }}>
                    <p style={{
                      fontSize: '16px',
                      lineHeight: '1.5',
                      color: '#666',
                      margin: 0
                    }}>
                      Lorem ipsum dolor sit amet consectetur. Tempor nascetur ornare porta viverra massa lacus faucibus in. Netus mauris enim a varius. Nulla amet quis nunc eu ut tortor. Viverra enim quis neque ornare pulvinar faucibus. Duis tellus senectus blandit ut nisi. Etiam sociis blandit mattis non orci vehicula aliquam. Diam mollis sapien id ut a donec. Tempus id lorem sed fringilla sit ut felis cursus gravida. Ac libero hac quam id nulla laoreet dignissim. Eu sed lorem vestibulum.
                    </p>
                  </div>

                  <h2 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginBottom: '16px',
                    color: '#333'
                  }}>
                    Hướng dẫn
                  </h2>

                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}>
                    <p style={{
                      fontSize: '16px',
                      color: '#333',
                      lineHeight: '2'

                    }}>
                      Lorem ipsum dolor sit amet consectetur. <br />
                      Lorem ipsum dolor sit amet consectetur. <br />
                      Lorem ipsum dolor sit amet consectetur.
                    </p>

                  </div>
                </div>
              </div>

              {/* Fixed Bottom Button */}
              <div style={{
                position: 'sticky',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: '#fff',
                padding: '16px 20px',

              }}>
                <button
                  style={{
                    width: '100%',
                    height: '48px',
                    backgroundColor: '#FF6700',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'
                  }}
                  onClick={showFormDrawer}

                >
                  Bắt đầu
                </button>
              </div>
            </div>
          </Drawer>

          {/* Drawer 2: Nhập mã UQC */}
          <Drawer
            closable={{ 'aria-label': 'Close Button' }}
            onClose={onFormClose}
            open={formOpen}
            width={isMobile ? '100%' : "375px"}
            styles={{
              body: {
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }
            }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              {/* Scrollable Content */}
              <div style={{
                flex: 1,
                overflowY: 'auto',
                paddingBottom: '80px' // Tạo khoảng trống cho button
              }}>
                <div style={{
                  padding: '20px'
                }}>

                  <h2 className={styles.formTitle}>Nhập mã UQC cho thiết bị</h2>

                  <div className={styles.formContainer}>
                    {/* Cửa hàng */}
                    <div className={styles.inputGroup}>
                      <label className={styles.inputLabel}>Cửa hàng</label>
                      <Select
                        placeholder="CellphoneS Nguyễn Thái Học"
                        className={styles.customSelect}
                        value={uqcForm.store}
                        onChange={(value) => setUqcForm(prev => ({ ...prev, store: value }))}
                        status={formErrors.store ? 'error' : ''}
                        suffixIcon={
                          <svg width="10" height="4" viewBox="0 0 10 4" fill="none">
                            <path d="M1 0L5 4L9 0" stroke="#64748B" strokeWidth="1.5" />
                          </svg>
                        }
                        options={[
                          { value: 'cellphones-nguyen-thai-hoc', label: 'CellphoneS Nguyễn Thái Học' },
                          { value: 'cellphones-tran-dai-nghia', label: 'CellphoneS Trần Đại Nghĩa' },
                          { value: 'cellphones-le-van-sy', label: 'CellphoneS Lê Văn Sỹ' }
                        ]}
                      />
                      {formErrors.store && <span style={{ color: '#ff4d4f', fontSize: '12px' }}>{formErrors.store}</span>}
                    </div>

                    {/* Thiết bị */}
                    <div className={styles.inputGroup}>
                      <label className={styles.inputLabel}>Thiết bị</label>
                      <Select
                        placeholder="Redmi Note 13 Pro+ 5G"
                        className={styles.customSelect}
                        value={uqcForm.device}
                        onChange={(value) => setUqcForm(prev => ({ ...prev, device: value }))}
                        status={formErrors.device ? 'error' : ''}
                        suffixIcon={
                          <svg width="10" height="4" viewBox="0 0 10 4" fill="none">
                            <path d="M1 0L5 4L9 0" stroke="#64748B" strokeWidth="1.5" />
                          </svg>
                        }
                        options={[
                          { value: 'redmi-note-13-pro-plus', label: 'Redmi Note 13 Pro+ 5G' },
                          { value: 'redmi-note-13-pro', label: 'Redmi Note 13 Pro 5G' },
                          { value: 'redmi-note-13', label: 'Redmi Note 13 5G' }
                        ]}
                      />
                      {formErrors.device && <span style={{ color: '#ff4d4f', fontSize: '12px' }}>{formErrors.device}</span>}
                    </div>

                    {/* Code */}
                    <div className={styles.inputGroup}>
                      <label className={styles.inputLabel}>Code</label>
                      <Input
                        placeholder="Nhập mã code"
                        value={uqcForm.code}
                        onChange={(e) => setUqcForm(prev => ({ ...prev, code: e.target.value }))}
                        status={formErrors.code ? 'error' : ''}
                        className={styles.customInput}
                      />
                      {formErrors.code && <span style={{ color: '#ff4d4f', fontSize: '12px' }}>{formErrors.code}</span>}
                    </div>
                  </div>
                </div>
              </div>

              <div style={{
                position: 'sticky',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: '#fff',
                padding: '16px 20px',

              }}>
                <button
                  style={{
                    width: '100%',
                    height: '48px',
                    backgroundColor: '#FF6700',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'
                  }} onClick={showInfoFormDrawer}>
                  Tiếp tục
                </button>
              </div>
            </div>
          </Drawer>

          {/* Drawer 3: Thông tin nhận thưởng */}
          <Drawer
            closable={{ 'aria-label': 'Close Button' }}
            onClose={onInfoFormClose}
            open={infoFormOpen}
            width={isMobile ? '100%' : "375px"}
            styles={{
              body: {
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }
            }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              {/* Scrollable Content */}
              <div style={{
                flex: 1,
                overflowY: 'auto',
                paddingBottom: '80px' // Tạo khoảng trống cho button
              }}>
                <div style={{
                  padding: '20px'
                }}>
                  <h2 className={styles.formTitle}>Thông tin nhận thưởng</h2>

                  <div className={styles.formContainer}>
                    {/* Họ và tên đệm */}
                    <div className={styles.inputGroup}>
                      <label className={styles.inputLabel}>Họ và tên đệm</label>
                      <Input
                        placeholder="Nhập họ và tên đệm"
                        className={styles.customInput}
                        value={userForm.firstName}
                        onChange={(e) => setUserForm(prev => ({ ...prev, firstName: e.target.value }))}
                        status={formErrors.firstName ? 'error' : ''}
                      />
                      {formErrors.firstName && <span style={{ color: '#ff4d4f', fontSize: '12px' }}>{formErrors.firstName}</span>}
                    </div>

                    {/* Tên */}
                    <div className={styles.inputGroup}>
                      <label className={styles.inputLabel}>Tên</label>
                      <Input
                        placeholder="Nhập tên của bạn"
                        className={styles.customInput}
                        value={userForm.lastName}
                        onChange={(e) => setUserForm(prev => ({ ...prev, lastName: e.target.value }))}
                        status={formErrors.lastName ? 'error' : ''}
                      />
                      {formErrors.lastName && <span style={{ color: '#ff4d4f', fontSize: '12px' }}>{formErrors.lastName}</span>}
                    </div>

                    {/* Email */}
                    <div className={styles.inputGroup}>
                      <label className={styles.inputLabel}>Địa chỉ email</label>
                      <Input
                        placeholder="Nhập địa chỉ của bạn"
                        className={styles.customInput}
                        value={userForm.email}
                        onChange={(e) => setUserForm(prev => ({ ...prev, email: e.target.value }))}
                        status={formErrors.email ? 'error' : ''}
                      />
                      {formErrors.email && <span style={{ color: '#ff4d4f', fontSize: '12px' }}>{formErrors.email}</span>}
                    </div>

                    {/* Số điện thoại */}
                    <div className={styles.inputGroup}>
                      <label className={styles.inputLabel}>Số điện thoại</label>
                      <Input
                        placeholder="Nhập số điện thoại của bạn"
                        className={styles.customInput}
                        value={userForm.phone}
                        onChange={(e) => setUserForm(prev => ({ ...prev, phone: e.target.value }))}
                        status={formErrors.phone ? 'error' : ''}
                      />
                      {formErrors.phone && <span style={{ color: '#ff4d4f', fontSize: '12px' }}>{formErrors.phone}</span>}
                    </div>

                    {/* Tỉnh/Thành phố và Quận/Huyện */}
                    <div className={styles.locationRow}>
                      <div className={styles.inputGroupProvince}>
                        <label className={styles.inputLabel}>Tỉnh/Thành phố</label>
                        <Select
                          placeholder="Tp Hồ Chí Minh"
                          className={styles.customSelectHalf}
                          value={userForm.province}
                          onChange={(value) => setUserForm(prev => ({ ...prev, province: value }))}
                          status={formErrors.province ? 'error' : ''}
                          suffixIcon={
                            <svg width="10" height="4" viewBox="0 0 10 4" fill="none">
                              <path d="M1 0L5 4L9 0" stroke="#64748B" strokeWidth="1.5" />
                            </svg>
                          }
                          options={[
                            { value: 'hcm', label: 'Tp Hồ Chí Minh' },
                            { value: 'hanoi', label: 'Hà Nội' },
                            { value: 'danang', label: 'Đà Nẵng' }
                          ]}
                        />
                        {formErrors.province && <span style={{ color: '#ff4d4f', fontSize: '12px' }}>{formErrors.province}</span>}
                      </div>

                      <div className={styles.inputGroupDistrict}>
                        <label className={styles.inputLabel}>Quận/Huyện</label>
                        <Select
                          placeholder="Quận 1"
                          className={styles.customSelectHalf}
                          value={userForm.district}
                          onChange={(value) => setUserForm(prev => ({ ...prev, district: value }))}
                          status={formErrors.district ? 'error' : ''}
                          suffixIcon={
                            <svg width="10" height="4" viewBox="0 0 10 4" fill="none">
                              <path d="M1 0L5 4L9 0" stroke="#64748B" strokeWidth="1.5" />
                            </svg>
                          }
                          options={[
                            { value: 'quan1', label: 'Quận 1' },
                            { value: 'quan2', label: 'Quận 2' },
                            { value: 'quan3', label: 'Quận 3' }
                          ]}
                        />
                        {formErrors.district && <span style={{ color: '#ff4d4f', fontSize: '12px' }}>{formErrors.district}</span>}
                      </div>
                    </div>

                    {/* Phường/Xã */}
                    <div className={styles.inputGroup}>
                      <label className={styles.inputLabel}>Phường/Xã</label>
                      <Select
                        placeholder="Phường 12"
                        className={styles.customSelect}
                        value={userForm.ward}
                        onChange={(value) => setUserForm(prev => ({ ...prev, ward: value }))}
                        status={formErrors.ward ? 'error' : ''}
                        suffixIcon={
                          <svg width="10" height="4" viewBox="0 0 10 4" fill="none">
                            <path d="M1 0L5 4L9 0" stroke="#64748B" strokeWidth="1.5" />
                          </svg>
                        }
                        options={[
                          { value: 'phuong12', label: 'Phường 12' },
                          { value: 'phuong1', label: 'Phường 1' },
                          { value: 'phuong2', label: 'Phường 2' }
                        ]}
                      />
                      {formErrors.ward && <span style={{ color: '#ff4d4f', fontSize: '12px' }}>{formErrors.ward}</span>}
                    </div>

                    {/* Địa chỉ */}
                    <div className={styles.inputGroup}>
                      <label className={styles.inputLabel}>Địa chỉ</label>
                      <Input
                        placeholder="Nhập địa chỉ"
                        className={styles.customInput}
                        value={userForm.address}
                        onChange={(e) => setUserForm(prev => ({ ...prev, address: e.target.value }))}
                        status={formErrors.address ? 'error' : ''}
                      />
                      {formErrors.address && <span style={{ color: '#ff4d4f', fontSize: '12px' }}>{formErrors.address}</span>}
                    </div>


                  </div>
                </div>
              </div>

              <div className={styles.drawerButton}>
                <button className={styles.startButton} onClick={onInfoFormClose}>
                  Bắt đầu chơi
                </button>
              </div>
            </div>
          </Drawer>

          <button className={styles.secondaryButton} onClick={showModalHD}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8.18 5L7.64 19L16.36 12L8.18 5Z" fill="#6F64A4" />
            </svg>
            Xem hướng dẫn

          </button>
          {/* Modal xem hướng dẫn */}
          <Modal
            open={isModalHDOpen}
            // title={1}
            onOk={handleOkHD}
            onCancel={handleCancelHD}
            // height={200}
            width={477}
            styles={{
              body: {
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              },
              content: {
                padding: 0,   // bỏ padding tổng thể
                borderRadius: 12 // tuỳ chỉnh bo góc
              }
            }}

            footer={[

            ]}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              {/* Scrollable Content */}
              <div style={{
                flex: 1,
                overflowY: 'auto',

              }}>
                {/* Banner */}
                <div className={styles.drawerBannerDesktop}>
                  <Image
                    src="/GameSection/bannergame.png"
                    alt="Game Banner"
                    fill

                  />
                </div>

                {/* Content */}
                <div style={{
                  padding: '20px',
                  textAlign: 'center',
                  color: '#637381',
                  fontWeight: '400'

                }}>

                  <p style={{ textAlign: 'left' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis possimus debitis assumenda recusandae harum, pariatur temporibus minima praesentium deleniti nam perspiciatis molestiae iste veritatis dolores accusantium iusto doloribus qui odio!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis possimus debitis assumenda recusandae harum, pariatur temporibus minima praesentium deleniti nam perspiciatis molestiae iste veritatis dolores accusantium iusto doloribus qui odio!
                  </p>
                  <br />
                  <h3 style={{ textAlign: 'left', fontWeight: '600', color: '#212B36' }}>Hướng dẫn</h3>

                  <p style={{ textAlign: 'left' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>



                  <button
                    style={{
                      marginTop: '50px',
                      // marginBottom: '10px',
                      width: '100%',
                      height: '48px',
                      backgroundColor: '#FF6700',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease'
                    }}
                    onClick={handlePlayClick}

                  >
                    Bắt đầu
                  </button>
                </div>

              </div>


            </div>
          </Modal>
        </div>
      </div>


    </section>
  );
}
