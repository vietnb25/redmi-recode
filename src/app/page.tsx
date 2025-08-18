import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Herosection from "./components/HeroSection";
import ProductInfo from "./components/ProductInfo";
import ProductFeatures from "./components/ProductFeatures";
import GameSection from "./components/GameSection";
import PromotionSection from "./components/PromotionSection";
import StoreSection from "./components/StoreSection";
import Footer from "./components/Footer";
import WelcomeGame from "./components/MiniGame/WelcomeGame";

export default function Home() {
  return (
    <div>
      <Header />
      <Herosection />
      <ProductInfo />
      <ProductFeatures />
      <GameSection />
      <PromotionSection />
      <StoreSection />
      <Footer />
      {/* <WelcomeGame /> */}
    </div>
  );
}
