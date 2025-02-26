import Accordion from "../../../components/common/Accordion";
import React from "react";
import { faqs3 } from "../../../data/faqs";

export default function Faq3() {
  return (
    <>
      <h5 className="mb_24" id="order-returns">
        Geri qaytarma və dəyişdirmə
      </h5>
      <div className="flat-accordion style-default has-btns-arrow">
        <Accordion faqs={faqs3} />
      </div>
    </>
  );
}
