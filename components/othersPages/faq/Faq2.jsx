import Accordion from "../../../components/common/Accordion";
import React from "react";
import { faqs2 } from "../../../data/faqs";

export default function Faq2() {
  return (
    <>
      <h5 className="mb_24" id="payment-information">
        Ödəniş məlumatları
      </h5>
      <div className="flat-accordion style-default has-btns-arrow mb_60">
        <Accordion faqs={faqs2} />
      </div>
    </>
  );
}
