"use client";
import { useContextElement } from "../../context/Context";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Quantity from "../shopDetails/Quantity";
import React, { useState, useEffect } from "react";

export default function QuickView() {
  const {
    quickViewItem,
    addProductToCart,
    isAddedToCartProducts,
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
  } = useContextElement();

  const [currentColor, setCurrentColor] = useState(null);
  const [currentSize, setCurrentSize] = useState(null);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    // Initialize Bootstrap modal
    if (typeof window !== 'undefined') {
      const initModal = async () => {
        const bootstrap = await import('bootstrap');
        const modalElement = document.getElementById('quick_view');
        if (modalElement) {
          const modalInstance = new bootstrap.Modal(modalElement, {
            keyboard: false,
            backdrop: true
          });
          setModal(modalInstance);
        }
      };
      initModal();
    }
  }, []);

  useEffect(() => {
    if (quickViewItem && modal) {
      // Validate data structure
      if (!quickViewItem.id || !quickViewItem.title || !quickViewItem.price) {
        console.error('Missing required product data:', quickViewItem);
        return;
      }

      console.log('QuickView Item Data:', quickViewItem);

      // Set initial color and size with validation
      if (Array.isArray(quickViewItem.colors) && quickViewItem.colors.length > 0) {
        setCurrentColor(quickViewItem.colors[0]);
      }

      if (Array.isArray(quickViewItem.stocks) && quickViewItem.stocks.length > 0) {
        setCurrentSize({ value: quickViewItem.stocks[0].size.name });
      }

      try {
        modal.show();
      } catch (error) {
        console.error('Modal show error:', error);
      }
    }
  }, [quickViewItem, modal]);

  // Early return if no data
  if (!quickViewItem) {
    return null;
  }

  // Ensure arrays exist
  const productImages = Array.isArray(quickViewItem.allImages) ? quickViewItem.allImages : [];
  const productColors = Array.isArray(quickViewItem.colors) ? quickViewItem.colors : [];
  const productStocks = Array.isArray(quickViewItem.stocks) ? quickViewItem.stocks : [];

  const availableSizes = [...new Set(productStocks.map(stock => stock.size?.name).filter(Boolean))];

  const openModalSizeChoice = () => {
    if (typeof window !== 'undefined') {
      import('bootstrap').then((bootstrap) => {
        const sizeModal = new bootstrap.Modal(document.getElementById("find_size"), {
          keyboard: false,
        });

        sizeModal.show();

        document.getElementById("find_size").addEventListener("hidden.bs.modal", () => {
          sizeModal.hide();
        });

        const backdrops = document.querySelectorAll(".modal-backdrop");
        if (backdrops.length > 1) {
          const lastBackdrop = backdrops[backdrops.length - 1];
          lastBackdrop.style.zIndex = "1057";
        }
      });
    }
  };

  return (
    <div className="modal fade" id="quick_view" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="header">
            <span
              className="icon-close icon-close-popup"
              data-bs-dismiss="modal"
            />
          </div>
          <div className="wrap">
            <div className="tf-product-media-wrap">
              <Swiper
                dir="ltr"
                modules={[Navigation]}
                navigation={{
                  prevEl: ".snbqvp",
                  nextEl: ".snbqvn",
                }}
                className="swiper tf-single-slide"
              >
                {productImages.map((image, index) => (
                  <SwiperSlide className="swiper-slide" key={index}>
                    <div className="item">
                      <Image
                        alt={`${quickViewItem.title} - ${image.color.name}`}
                        src={image.src}
                        width={720}
                        height={1045}
                        style={{ width: "100%", height: "auto", objectFit: "contain" }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
                <div className="swiper-button-next button-style-arrow single-slide-prev snbqvp" />
                <div className="swiper-button-prev button-style-arrow single-slide-next snbqvn" />
              </Swiper>
            </div>
            <div className="tf-product-info-wrap position-relative">
              <div className="tf-product-info-list">
                <div className="tf-product-info-title">
                  <h5>
                    <Link
                      className="link"
                      href={`/product-detail/${quickViewItem.id}`}
                    >
                      {quickViewItem.title}
                    </Link>
                  </h5>
                </div>
                <div className="tf-product-info-badges">
                  <div className="badges text-uppercase">Best seller</div>
                  <div className="product-status-content">
                    <i className="icon-lightning" />
                    <p className="fw-6">
                      Selling fast! 48 people have this in their carts.
                    </p>
                  </div>
                </div>
                <div className="tf-product-info-price">
                  <div className="price">${quickViewItem.price.toFixed(2)}</div>
                </div>
                <div className="tf-product-description">
                  <p>{quickViewItem.description}</p>
                </div>
                <div className="tf-product-info-variant-picker">
                  <div className="variant-picker-item">
                    <div className="variant-picker-label">
                      Color:
                      <span className="fw-6 variant-picker-label-value">
                        {currentColor?.name}
                      </span>
                    </div>
                    <form className="variant-picker-values">
                      {productColors.map((color, index) => {
                        const colorId = `color-${color.code}-${index}`;
                        return (
                          <React.Fragment key={colorId}>
                            <input
                              type="radio"
                              name="color1"
                              id={colorId}
                              readOnly
                              checked={currentColor?.code === color.code}
                            />
                            <label
                              htmlFor={colorId}
                              onClick={() => setCurrentColor(color)}
                              className="hover-tooltip radius-60"
                              data-value={color.name}
                            >
                              <span
                                className="btn-checkbox"
                                style={{ backgroundColor: color.code }}
                              />
                              <span className="tooltip">{color.name}</span>
                            </label>
                          </React.Fragment>
                        );
                      })}
                    </form>
                  </div>
                  <div className="variant-picker-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="variant-picker-label">
                        Size:
                        <span className="fw-6 variant-picker-label-value">
                          {currentSize?.value}
                        </span>
                      </div>
                      <div
                        className="find-size btn-choose-size fw-6"
                        onClick={() => openModalSizeChoice()}
                      >
                        Find your size
                      </div>
                    </div>
                    <form className="variant-picker-values">
                      {availableSizes.map((size, index) => {
                        const sizeId = `size-${size}-${index}`;
                        return (
                          <React.Fragment key={sizeId}>
                            <input
                              type="radio"
                              name="size1"
                              id={sizeId}
                              readOnly
                              checked={currentSize?.value === size}
                            />
                            <label
                              htmlFor={sizeId}
                              onClick={() => setCurrentSize({ value: size })}
                              className="style-text"
                              data-value={size}
                            >
                              <p>{size}</p>
                            </label>
                          </React.Fragment>
                        );
                      })}
                    </form>
                  </div>
                </div>
                <div className="tf-product-info-quantity">
                  <div className="quantity-title fw-6">Quantity</div>
                  <Quantity />
                </div>
                <div className="tf-product-info-buy-button">
                  <form onSubmit={(e) => e.preventDefault()} className="">
                    <a
                      href="#"
                      className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn"
                      onClick={() => addProductToCart(quickViewItem.id)}
                    >
                      <span>
                        {isAddedToCartProducts(quickViewItem.id)
                          ? "Already Added - "
                          : "Add to cart - "}
                      </span>
                      <span className="tf-qty-price">
                        ${quickViewItem.price.toFixed(2)}
                      </span>
                    </a>
                    <a
                      onClick={() => addToWishlist(quickViewItem.id)}
                      className="tf-product-btn-wishlist hover-tooltip box-icon bg_white wishlist btn-icon-action"
                    >
                      <span
                        className={`icon icon-heart ${isAddedtoWishlist(quickViewItem.id) ? "added" : ""}`}
                      />
                      <span className="tooltip">
                        {isAddedtoWishlist(quickViewItem.id)
                          ? "Already Wishlisted"
                          : "Add to Wishlist"}
                      </span>
                      <span className="icon icon-delete" />
                    </a>
                    <a
                      href="#compare"
                      data-bs-toggle="offcanvas"
                      aria-controls="offcanvasLeft"
                      onClick={() => addToCompareItem(quickViewItem.id)}
                      className="tf-product-btn-wishlist hover-tooltip box-icon bg_white compare btn-icon-action"
                    >
                      <span
                        className={`icon icon-compare ${isAddedtoCompareItem(quickViewItem.id) ? "added" : ""}`}
                      />
                      <span className="tooltip">
                        {isAddedtoCompareItem(quickViewItem.id)
                          ? "Already Compared"
                          : "Add to Compare"}
                      </span>
                      <span className="icon icon-check" />
                    </a>
                    <div className="w-100">
                      <a href="#" className="btns-full">
                        Buy with
                        <Image
                          alt="image"
                          src="/images/payments/paypal.png"
                          width={64}
                          height={18}
                        />
                      </a>
                      <a href="#" className="payment-more-option">
                        More payment options
                      </a>
                    </div>
                  </form>
                </div>
                <div>
                  <Link
                    href={`/product-detail/${quickViewItem.id}`}
                    className="tf-btn fw-6 btn-line"
                  >
                    View full details
                    <i className="icon icon-arrow1-top-left" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
