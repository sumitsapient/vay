import ProductCarousel from "@/components/Featured-products/carousel";
import Header from "@/components/Header/header";
import HomeBanner from "@/components/Hero-banner/hero-banner";

export default function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <ProductCarousel />
    </>
  );
}
