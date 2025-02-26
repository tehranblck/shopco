import Accordion from "../../../components/common/Accordion";
import React from "react";
import { faqs1 } from "../../../data/faqs";

export default function Faq1() {
  return (
    <>
      <h5 className="mb_24" id="shopping-information">
        Alış-veriş haqqında
      </h5>
      <div className="flat-accordion style-default has-btns-arrow mb_60">
        <Accordion faqs={faqs1} />
      </div>
    </>
  );
}
