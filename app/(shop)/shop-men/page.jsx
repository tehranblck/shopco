import ShopDefault from "../../../components/shop/ShopDefault";
import React from "react";

export const metadata = {
  title: "Shop Men || Ecomus - Ultimate Nextjs Ecommerce Template",
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
export default function page() {
  return (
    <>
      <div style={{ marginTop: "90px" }} className="tf-page-title">
        <div className="container-full">
          <div className="heading text-center">Kişilər üçün</div>
          <p className="text-center text-2 text_black-2 mt_5">
            Ən yaxşı kişi geyimləri
          </p>
        </div>
      </div>
      <ShopDefault />
    </>
  );
}
