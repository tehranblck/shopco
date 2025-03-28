import ProductStyle1 from "../../../components/shop/ProductStyle1";
import React from "react";

export const metadata = {
  title: "Product Style 1 || Ecomus - Ultimate Nextjs Ecommerce Template",
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
export default function page() {
  return (
    <>
      <div className="tf-page-title">
        <div className="container-full">
          <div className="heading text-center">Yeni Gələnlər</div>
          <p className="text-center text-2 text_black-2 mt_5">
            Mağazamızda olan yeni gələnlər
          </p>
        </div>
      </div>
      <ProductStyle1 />
    </>
  );
}
