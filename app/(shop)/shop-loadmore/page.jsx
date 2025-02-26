import ShopDefault from "../../../components/shop/ShopDefault";
import ShopLoadmore from "../../../components/shop/ShopLoadmore";
import React from "react";

export const metadata = {
  title: "Shop Loadmore || Ecomus - Ultimate Nextjs Ecommerce Template",
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
export default function page() {
  return (
    <>
      <div className="tf-page-title">
        <div className="container-full">
          <div className="heading text-center">New Arrival</div>
          <p className="text-center text-2 text_black-2 mt_5">
            Shop through our latest selection of Fashion
          </p>
        </div>
      </div>
      <ShopLoadmore />
    </>
  );
}
