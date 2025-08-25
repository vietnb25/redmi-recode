
import Header from "./components/Header";
import Herosection from "./components/HeroSection";
import ProductInfo from "./components/ProductInfo";
import ProductFeatures from "./components/ProductFeatures";
import GameSection from "./components/GameSection";
import PromotionSection from "./components/PromotionSection";
import StoreSection from "./components/StoreSection";
import Footer from "./components/Footer";


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
