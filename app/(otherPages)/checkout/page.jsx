
import Checkout from "../../../components/othersPages/Checkout";
import React from "react";

export const metadata = {
  title: "Ödəniş icmalı || Shopco",
  description: "Ödəniş icmalı || Shopco",
  icons: {
    icon: "/images/favikon.png",
  },
};
export default function page() {
  return (
    <>
      <div style={{ marginTop: "90px" }} className="tf-page-title">
        <div className="container-full">
          <div className="heading text-center">Ödəniş icmalı</div>
        </div>
      </div>

      <Checkout />
    </>
  );
}
