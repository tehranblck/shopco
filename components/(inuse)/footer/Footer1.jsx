"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

import { aboutLinks, footerLinks, paymentImages } from "../../../data/footerLinks";
export default function Footer1({ bgColor = "" }) {
  useEffect(() => {
    const headings = document.querySelectorAll(".footer-heading-moblie");

    const toggleOpen = (event) => {
      const parent = event.target.closest(".footer-col-block");

      parent.classList.toggle("open");
    };

    headings.forEach((heading) => {
      heading.addEventListener("click", toggleOpen);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      headings.forEach((heading) => {
        heading.removeEventListener("click", toggleOpen);
      });
    };
  }, []); // Empty dependency array means this will run only once on mount

  const formRef = useRef();
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sendEmail = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const email = e.target.email.value;

    try {
      const response = await axios.post(
        "https://express-brevomail.vercel.app/api/contacts",
        {
          email,
        }
      );

      if ([200, 201].includes(response.status)) {
        e.target.reset(); // Reset the form
        setSuccess(true); // Set success state
        handleShowMessage();
      } else {
        setSuccess(false); // Handle unexpected responses
        handleShowMessage();
      }
    } catch (error) {
      console.error("Error:", error.response?.data || "An error occurred");
      setSuccess(false); // Set error state
      handleShowMessage();
      e.target.reset(); // Reset the form
    }
  };

  return (
    <footer id="footer" className={`footer md-pb-70 ${bgColor}`}>
      <div className="footer-wrap">
        <div className="footer-body">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-12">
                <div className="footer-infor">
                  <div className="footer-logo">
                    <Link href={`/`}>
                      <Image
                        alt="image"
                        src="/images/logo.png"
                        width="136"
                        height="21"
                      />
                    </Link>
                  </div>
                  <ul>
                    <li>
                      <p>
                        Adress: Bakı şəhəri, Nərimanov rayonu, 1234 <br />
                        Bakı, AZ 1000
                      </p>
                    </li>
                    <li>
                      <p>
                        Email: <a href="mailto:info@saytyarat.com">info@saytyarat.com</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        Əlaqə: <a href="tel:+994507431206">+994 50 743 12 06</a>
                      </p>
                    </li>
                  </ul>
                  <Link href={`/contact-1`} className="tf-btn btn-line">
                    Məlumat al
                    <i className="icon icon-arrow1-top-left" />
                  </Link>
                  <ul className="tf-social-icon d-flex gap-10">
                    <li>
                      <a
                        href="#"
                        className="box-icon w_34 round social-facebook social-line"
                      >
                        <i className="icon fs-14 icon-fb" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="box-icon w_34 round social-twiter social-line"
                      >
                        <i className="icon fs-12 icon-Icon-x" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/saytyarat_com/"
                        className="box-icon w_34 round social-instagram social-line"
                      >
                        <i className="icon fs-14 icon-instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="box-icon w_34 round social-tiktok social-line"
                      >
                        <i className="icon fs-14 icon-tiktok" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="box-icon w_34 round social-pinterest social-line"
                      >
                        <i className="icon fs-14 icon-pinterest-1" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-12 footer-col-block">
                <div className="footer-heading footer-heading-desktop">
                  <h6> Kömək</h6>
                </div>
                <div className="footer-heading footer-heading-moblie">
                  <h6> Kömək</h6>
                </div>

                <ul className="footer-menu-list tf-collapse-content">
                  {footerLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className="footer-menu_item">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-xl-3 col-md-6 col-12 footer-col-block">
                <div className="footer-heading footer-heading-desktop">
                  <h6>Biz kimik</h6>
                </div>
                <div className="footer-heading footer-heading-moblie">
                  <h6>Biz kimik</h6>
                </div>
                <ul className="footer-menu-list tf-collapse-content">
                  {aboutLinks.slice(0, 4).map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className="footer-menu_item">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-xl-3 col-md-6 col-12">
                <div className="footer-newsletter footer-col-block">
                  <div className="footer-heading footer-heading-desktop">
                    <h6>Email üzərindən bildiriş al</h6>
                  </div>
                  <div className="footer-heading footer-heading-moblie">
                    <h6>Email üzərindən bildiriş al</h6>
                  </div>
                  <div className="tf-collapse-content">
                    <div className="footer-menu_item">
                      Yeniliklərlə bağlı  Email üzərindən bildiriş almaq üçün məlumatlarınızı daxil edin.
                    </div>
                    <div
                      className={`tfSubscribeMsg ${showMessage ? "active" : ""
                        }`}
                    >
                      {success ? (
                        <p style={{ color: "rgb(52, 168, 83)" }}>
                          Məlumatlarınız uğurla qəbul edildi.
                        </p>
                      ) : (
                        <p style={{ color: "red" }}>Something went wrong</p>
                      )}
                    </div>
                    <form
                      ref={formRef}
                      onSubmit={sendEmail}
                      className="form-newsletter subscribe-form"
                      action="#"
                      method="post"
                      acceptCharset="utf-8"
                      data-mailchimp="true"
                    >
                      <div className="subscribe-content">
                        <fieldset className="email">
                          <input
                            required
                            type="email"
                            name="email"
                            className="subscribe-email"
                            placeholder="Email daxil edin..."
                            tabIndex={0}
                            aria-required="true"
                            autoComplete="abc@xyz.com"
                          />
                        </fieldset>
                        <div className="button-submit">
                          <button
                            className="subscribe-button tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn"
                            type="submit"
                          >
                            Abunə ol
                            <i className="icon icon-arrow1-top-left" />
                          </button>
                        </div>
                      </div>
                      <div className="subscribe-msg" />
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="footer-bottom-wrap d-flex gap-20 flex-wrap justify-content-between align-items-center">
                  <div className="footer-menu_item">
                    Designed by <a style={{ color: 'blue' }} className="" href="https://saytyarat.com">Saytyarat </a>
                    © {new Date().getFullYear()}Shopco Store. Bütün hüquqlar qorunub.
                  </div>
                  <div className="tf-payment">
                    {paymentImages.map((image, index) => (
                      <Image
                        key={index}
                        src={image.src}
                        width={image.width}
                        height={image.height}
                        alt={image.alt}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
