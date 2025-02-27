
import Faq1 from "../../../components/othersPages/faq/Faq1";
import Faq2 from "../../../components/othersPages/faq/Faq2";
import Faq3 from "../../../components/othersPages/faq/Faq3";
import React from "react";
import Link from "next/link";
export const metadata = {
  title: "Ən çox verilən suallar",
  description: "Ən çox verilən suallar",
};
export default function page() {
  return (
    <>
      <>
        {/* page-title */}
        <div style={{ marginTop: "90px" }} className="tf-page-title style-2">
          <div className="container-full">
            <div className="heading text-center">Ən çox verilən suallar</div>
          </div>
        </div>
        {/* /page-title */}
        {/* FAQ */}
        <section className="flat-spacing-11">
          <div className="container">
            <div className="tf-accordion-wrap d-flex justify-content-between">
              <div className="box">
                <div className="tf-accordion-link-list w-100 sticky-top radius-10 border-line">
                  <div className="tf-link-item">
                    <a
                      className="d-flex justify-content-between align-items-center line"
                      href="#shopping-information"
                    >
                      <h6 className="fw-5">Alış-veriş haqqında</h6>
                      <div className="icon">
                        <i className="icon-arrow1-top-left" />
                      </div>
                    </a>
                  </div>
                  <div className="tf-link-item">
                    <a
                      className="d-flex justify-content-between align-items-center line"
                      href="#payment-information"
                    >
                      <h6 className="fw-5">Ödəniş haqqında</h6>
                      <div className="icon">
                        <i className="icon-arrow1-top-left" />
                      </div>
                    </a>
                  </div>
                  <div className="tf-link-item">
                    <a
                      className="d-flex justify-content-between align-items-center line"
                      href="#order-returns"
                    >
                      <h6 className="fw-5">Sifariş qaytarılması</h6>
                      <div className="icon">
                        <i className="icon-arrow1-top-left" />
                      </div>
                    </a>
                  </div>
                  <div className="tf-link-item">
                    <Link
                      className="d-flex justify-content-between align-items-center"
                      href={`/contact-1`}
                    >
                      <h6 className="fw-5">Əlaqə</h6>
                      <div className="icon">
                        <i className="icon-arrow1-top-left" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="content">
                <Faq1 />
                <Faq2 />
                <Faq3 />
              </div>
            </div>
          </div>
        </section>
      </>

    </>
  );
}
