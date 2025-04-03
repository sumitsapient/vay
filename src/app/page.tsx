import Certification from "@/components/Certification/Certification";
import CtaBar from "@/components/CtaBar/CtaBar";
import FeaturedProducts from "@/components/Featured-products/FeaturedProducts";
import Header from "@/components/Header/Header";
import HomeBanner from "@/components/HeroBanner/HeroBanner";
import SocialFloating from "@/components/SocialFloating/SocialFloating";
import TrendingdProducts from "@/components/TrendingProducts/TrendingProducts";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <FeaturedProducts />
      <CtaBar />
      <TrendingdProducts />
      <Certification />
    </>
  );
}
