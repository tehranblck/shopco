import Features from "../components/common/Features";
import ShopGram from "../components/common/ShopGram";
import Testimonials from "../components/common/Testimonials";
import Brands from "../components/homes/home-1/Brands";
import Categories from "../components/homes/home-1/Categories";
import Hero from "../components/homes/home-1/Hero";
import Marquee from "../components/homes/home-1/Marquee";
import Products from "../components/homes/home-1/Products";

export const metadata = {
  title: "Saytyarat Shopco Template",
  description: "Saytyarat Shopco Template",
  icons: {
    icon: "/images/favikon.png",
  },
};
export default async function Home() {
  return (
    <>

      <Hero />
      <Marquee />
      <Categories />
      <Products />
      {/* <Lookbook /> */}
      <Testimonials />
      <Brands />
      <ShopGram />
      <Features />

    </>
  );
}
