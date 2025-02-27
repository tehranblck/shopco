"use client";
import React, { useState, useEffect } from "react";
import { useContextElement } from "../../context/Context";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setIsLoggedIn, isLoggedIn } = useContextElement();

  useEffect(() => {
    // Bootstrap'i dinamik olarak import et
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Admin kontrol
    if (email === "admin" && password === "admin") {
      // Başarılı giriş
      alert("Giriş uğurlu oldu!");
      setIsLoggedIn(true);
      console.log(isLoggedIn);
      // Login durumunu localStorage'a kaydet
      localStorage.setItem("isLoggedIn", "true");
      // Modal'ı kapat
      if (typeof window !== "undefined") {
        const modal = document.getElementById("login");
        const closeButton = modal.querySelector("[data-bs-dismiss='modal']");
        closeButton?.click();
      }
    } else {
      // Hatalı giriş
      setError("Email və ya şifrə yanlışdır!");
    }
    setLoading(false);
  };

  return (
    <div
      className="modal modalCentered fade form-sign-in modal-part-content"
      id="login"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="header">
            <div className="demo-title">Hesaba daxil ol</div>
            <span
              className="icon-close icon-close-popup"
              data-bs-dismiss="modal"
            />
          </div>
          <div className="tf-login-form">
            <form onSubmit={handleSubmit} className="" acceptCharset="utf-8">
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              <div className="tf-field style-1">
                <input
                  className="tf-field-input tf-input"
                  placeholder=" "
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label className="tf-field-label">
                  Email *
                </label>
              </div>
              <div className="tf-field style-1">
                <input
                  className="tf-field-input tf-input"
                  placeholder=" "
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label className="tf-field-label">
                  Şifrə *
                </label>
              </div>
              <div>
                <a
                  href="#forgotPassword"
                  data-bs-toggle="modal"
                  className="btn-link link"
                >
                  Şifrəni unutmusunuz?
                </a>
              </div>
              <div className="bottom">
                <div className="w-100">
                  <button
                    type="submit"
                    className="tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center"
                    disabled={loading}
                  >
                    <span>{loading ? "Giriş edilir..." : "Hesaba daxil ol"}</span>
                  </button>
                </div>
                <div className="w-100">
                  <a
                    href="#register"
                    data-bs-toggle="modal"
                    className="btn-link fw-6 w-100 link"
                  >
                    Yeni müştəri? Hesab yarat
                    <i className="icon icon-arrow1-top-left" />
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
