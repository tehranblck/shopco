
import AccountAddress from "../../../components/othersPages/dashboard/AccountAddress";
import DashboardNav from "../../../components/othersPages/dashboard/DashboardNav";
import React from "react";

export const metadata = {
  title: "My Accout Address || Ecomus - Ultimate Nextjs Ecommerce Template",
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
export default function page() {
  return (
    <>
      <div style={{ marginTop: "90px" }} className="tf-page-title">
        <div className="container-full">
          <div className="heading text-center">Ünvanlarım</div>
        </div>
      </div>
      <section className="flat-spacing-11">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <DashboardNav />
            </div>
            <div className="col-lg-9">
              <AccountAddress />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
