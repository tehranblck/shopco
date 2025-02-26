
import Wishlist from "../../../components/othersPages/Wishlist";
import React from "react";

export const metadata = {
  title: "Wishlist || Ecomus - Ultimate Nextjs Ecommerce Template",
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
export default function page() {
  return (
    <>
      <div style={{ marginTop: "90px" }} className="tf-page-title ">
        <div className="container-full">
          <div className="heading text-center">Bəyəndikləriniz</div>
        </div>
      </div>

      <Wishlist />

    </>
  );
}
