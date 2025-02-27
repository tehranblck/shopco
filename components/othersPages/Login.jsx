"use client";
import React from "react";
import Link from "next/link";
export default function Login() {
  return (
    <section className="flat-spacing-10">
      <div className="container">
        <div className="tf-grid-layout lg-col-2 tf-login-wrap">
          <div className="tf-login-form">
            <div id="recover">
              <h5 className="mb_24">Şifrənizi sıfırlayın</h5>
              <p className="mb_30">
                Şifrənizi sıfırlamaq üçün sizə e-poçt göndərəcəyik
              </p>
              <div>
                <form onSubmit={(e) => e.preventDefault()} className="">
                  <div className="tf-field style-1 mb_15">
                    <input
                      className="tf-field-input tf-input"
                      placeholder=""
                      required
                      type="email"
                      autoComplete="abc@xyz.com"
                      id="property3"
                      name="email"
                    />
                    <label
                      className="tf-field-label fw-4 text_black-2"
                      htmlFor="property3"
                    >
                      E-poçt ünvanı *
                    </label>
                  </div>
                  <div className="mb_20">
                    <a href="#login" className="tf-btn btn-line">
                      Ləğv et
                    </a>
                  </div>
                  <div className="">
                    <button
                      type="submit"
                      className="tf-btn w-100 radius-3 btn-fill animate-hover-btn justify-content-center"
                    >
                      Şifrəni sıfırlayın
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div id="login">
              <h5 className="mb_36">Daxil ol</h5>
              <div>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="tf-field style-1 mb_15">
                    <input
                      required
                      className="tf-field-input tf-input"
                      placeholder=""
                      type="email"
                      autoComplete="abc@xyz.com"
                      id="property3"
                      name="email"
                    />
                    <label
                      className="tf-field-label fw-4 text_black-2"
                      htmlFor="property3"
                    >
                      E-poçt ünvanı *
                    </label>
                  </div>
                  <div className="tf-field style-1 mb_30">
                    <input
                      required
                      className="tf-field-input tf-input"
                      placeholder=""
                      type="password"
                      id="property4"
                      name="password"
                      autoComplete="current-password"
                    />
                    <label
                      className="tf-field-label fw-4 text_black-2"
                      htmlFor="property4"
                    >
                      Şifrə *
                    </label>
                  </div>
                  <div className="mb_20">
                    <a href="#recover" className="tf-btn btn-line">
                      Şifrənizi unutmusunuz?
                    </a>
                  </div>
                  <div className="">
                    <button
                      type="submit"
                      className="tf-btn w-100 radius-3 btn-fill animate-hover-btn justify-content-center"
                    >
                      Daxil ol
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="tf-login-content">
            <h5 className="mb_36">Mən yeniyəm</h5>
            <p className="mb_20">
              Ertələnmiş Satışa giriş, xüsusi yeni məhsullar, trendlər və promosyonlar üçün qeydiyyatdan keçin. Abunəliyi ləğv etmək üçün e-poçtlarımızda "abunəliyi ləğv et" seçimini tıklayın.
            </p>
            <Link href={`/register`} className="tf-btn btn-line">
              Qeydiyyat
              <i className="icon icon-arrow1-top-left" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
