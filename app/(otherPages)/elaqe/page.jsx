
import ContactForm2 from "../../../components/othersPages/contact/ContactForm2";
import Map2 from "../../../components/othersPages/contact/Map2";
import React from "react";

export const metadata = {
  title: "Bizimlə əlaqə saxlayın",
  description: "Bizimlə əlaqə saxlayın",
  icons: {
    icon: "/images/favikon.png",
  },
};
export default function page() {
  return (
    <>
      <div style={{ marginTop: "90px" }} className="tf-page-title style-2">
        <div className="container-full">
          <div className="heading text-center">Əlaqə</div>
        </div>
      </div>
      <Map2 />
      <ContactForm2 />
    </>
  );
}
