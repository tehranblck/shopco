
import Login from "../../../components/othersPages/Login";
import React from "react";

export const metadata = {
  title: "Login || Ecomus - Ultimate Nextjs Ecommerce Template",
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
export default function page() {
  return (
    <>
      <div style={{ marginTop: "90px" }} className="tf-page-title style-2">
        <div className="container-full">
          <div className="heading text-center"> Giriş</div>
        </div>
      </div>

      <Login />
    </>
  );
}
