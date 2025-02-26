"use client";
import Image from "next/image";
import { testimonials } from "../../data/testimonials";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <section
      className="flat-spacing-5 pt_0 flat-testimonial"
      style={{ maxWidth: "100vw", overflow: "hidden" }}
    >
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title">Müştəri təcrübələri</span>
          <p className="sub-title">Müştərilərimizin bizim haqqımızda dedikləri</p>
        </div>
        <div className="wrap-carousel">
          <Swiper
            dir="ltr"
            className="swiper tf-sw-testimonial"
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".snbp3",
              nextEl: ".snbn3",
            }}
            pagination={{ clickable: true, el: ".spb3" }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <div
                  className="testimonial-item style-column wow fadeInUp"
                  data-wow-delay={testimonial.delay}
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    padding: "20px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "#fff",
                  }}
                >
                  <div className="rating mb-3">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="icon-start" />
                    ))}
                  </div>
                  <div className="heading mb-3">{testimonial.heading}</div>
                  <div className="text mb-3" style={{ fontStyle: "italic" }}>
                    "{testimonial.text}"
                  </div>
                  <div className="author mb-4">
                    <div className="name" style={{ fontWeight: "bold" }}>
                      {testimonial.name}
                    </div>
                    <div className="metas" style={{ color: "#888" }}>
                      {testimonial.metas}
                    </div>
                  </div>
                  <div className="client-image mb-3 text-center">
                    <div
                      className="image"
                      style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        margin: "0 auto",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <a href={`#`}>
                        <Image
                          className="lazyload"
                          data-src={testimonial.imageSrc}
                          src={testimonial.imageSrc}
                          width={70}
                          height={70}
                          alt="Müştəri şəkli"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-testimonial lg snbp3">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-testimonial lg snbn3">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots style-2 sw-pagination-testimonial justify-content-center spb3" />
        </div>
      </div>
    </section>
  );
}
