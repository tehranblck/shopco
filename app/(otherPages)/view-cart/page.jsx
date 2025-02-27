import Testimonials from "../../../components/common/Testimonials";
import Cart from "../../../components/othersPages/Cart";
import RecentProducts from "../../../components/shopDetails/RecentProducts";
import React from "react";

export const metadata = {
  title: "Səbət // Saytyarat // Shopco",
  description: "Səbət // Saytyarat // Shopco",
  icons: {
    icon: "/images/favikon.png",
  },
};
export default function page() {
  return (
    <>
      <div style={{ marginTop: "90px" }} className="tf-page-title">
        <div className="container-full">
          <div className="heading text-center">Səbət</div>
        </div>
      </div>

      <Cart />
      <Testimonials />
      <RecentProducts />
    </>
  );
}
