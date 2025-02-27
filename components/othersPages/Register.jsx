"use client";
import React from "react";
import Link from "next/link";
export default function Register() {
  return (
    <section className="flat-spacing-10">
      <div className="container">
        <div className="form-register-wrap">
          <div className="flat-title align-items-start gap-0 mb_30 px-0">
            <h5 className="mb_18">Qeydiyyat</h5>
            <p className="text_black-2">
              Ertələnmiş Satışa giriş, xüsusi yeni məhsullar, trendlər və promosyonlar üçün qeydiyyatdan keçin. Abunəliyi ləğv etmək üçün e-poçtlarımızda "abunəliyi ləğv et" seçimini tıklayın.
            </p>
          </div>
          <div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className=""
              id="register-form"
              action="#"
              method="post"
              acceptCharset="utf-8"
              data-mailchimp="true"
            >
              <div className="tf-field style-1 mb_15">
                <input
                  className="tf-field-input tf-input"
                  placeholder=" "
                  type="text"
                  id="property1"
                  name="first name"
                  required
                />
                <label
                  className="tf-field-label fw-4 text_black-2"
                  htmlFor="property1"
                >
                  Ad *
                </label>
              </div>
              <div className="tf-field style-1 mb_15">
                <input
                  className="tf-field-input tf-input"
                  placeholder=" "
                  type="text"
                  id="property2"
                  name="last name"
                  required
                />
                <label
                  className="tf-field-label fw-4 text_black-2"
                  htmlFor="property2"
                >
                  Soyad *
                </label>
              </div>
              <div className="tf-field style-1 mb_15">
                <input
                  className="tf-field-input tf-input"
                  placeholder=" "
                  type="email"
                  autoComplete="abc@xyz.com"
                  id="property3"
                  name="email"
                  required
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
                  className="tf-field-input tf-input"
                  placeholder=" "
                  type="password"
                  id="property4"
                  name="password"
                  autoComplete="current-password"
                  required
                />
                <label
                  className="tf-field-label fw-4 text_black-2"
                  htmlFor="property4"
                >
                  Şifrə *
                </label>
              </div>
              <div className="mb_20">
                <button
                  type="submit"
                  className="tf-btn w-100 radius-3 btn-fill animate-hover-btn justify-content-center"
                >
                  Qeydiyyatdan keç
                </button>
              </div>
              <div className="text-center">
                <Link href={`/login`} className="tf-btn btn-line">
                  Artıq hesabınız var? Buradan daxil olun
                  <i className="icon icon-arrow1-top-left" />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
