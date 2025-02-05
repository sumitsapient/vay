import CtaBar from "@/components/CtaBar/CtaBar";
import FeaturedProducts from "@/components/Featured-products/FeaturedProducts";
import Header from "@/components/Header/Header";
import HomeBanner from "@/components/HeroBanner/HeroBanner";

export default function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <FeaturedProducts />
      <CtaBar />
    </>
  );
}
