import About from "../../../components/othersPages/about/About";
import Features from "../../../components/othersPages/about/Features";
import FlatTitle from "../../../components/othersPages/about/FlatTitle";
import Hero from "../../../components/othersPages/about/Hero";
import TestimonialsAbout from "./TestimonialsAbout";
import React from "react";

export const metadata = {
  title: "Biz kimik? || Shopco",
  description: "Shopco",
};
export default function page() {
  return (
    <>
      <Hero />
      <FlatTitle />
      <div className="container">
        <div className="line"></div>
      </div>
      <About />
      <Features />
      <TestimonialsAbout />
      <div className="container">
        <div className="line"></div>
      </div>
    </>
  );
}
