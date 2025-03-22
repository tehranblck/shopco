"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from 'react-redux';
import Quantity from "../shopDetails/Quantity";
import { useContextElement } from "../../context/Context";

export default function QuickAdd() {
  const {
    quickAddItem,
    addProductToCart,
    isAddedToCartProducts,
  } = useContextElement();

  const { items: products } = useSelector((state) => state.products);
  const [item, setItem] = useState(null);
  const [currentColor, setCurrentColor] = useState(null);
  const [currentSize, setCurrentSize] = useState(null);

  useEffect(() => {
    const product = products.find((el) => el.id === quickAddItem);
    if (product) {
      console.log('QuickAdd - Found product:', product);
      setItem(product);
      // Set initial color and size from product data
      if (Array.isArray(product.colors) && product.colors.length > 0) {
        setCurrentColor(product.colors[0]);
      }
      if (Array.isArray(product.stocks) && product.stocks.length > 0) {
        setCurrentSize({ value: product.stocks[0].size.name });
      }
    }
  }, [quickAddItem, products]);

  if (!item) {
    console.log('QuickAdd - No item found');
    return null;
  }

  // Ensure arrays exist
  const productColors = Array.isArray(item.colors) ? item.colors : [];
  const productStocks = Array.isArray(item.stocks) ? item.stocks : [];
  const availableSizes = [...new Set(productStocks.map(stock => stock.size?.name).filter(Boolean))];

  return (
    <div className="modal fade modalDemo" id="quick_add">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="header">
            <span
              className="icon-close icon-close-popup"
              data-bs-dismiss="modal"
            />
          </div>
          <div className="wrap">
            <div className="tf-product-info-item">
              <div className="image">
                <Image
                  alt={item.title}
                  style={{ objectFit: "contain" }}
                  src={item.image || item.images?.[0]?.image}
                  width={720}
                  height={1005}
                />
              </div>
              <div className="content">
                <Link href={`/product-detail/${item.id}`}>{item.title}</Link>
                <div className="tf-product-info-price">
                  <div className="price">${parseFloat(item.price).toFixed(2)}</div>
                </div>
              </div>
            </div>
            <div className="tf-product-info-variant-picker mb_15">
              {productColors.length > 0 && (
                <div className="variant-picker-item">
                  <div className="variant-picker-label">
                    Rəng:
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
              )}
              {availableSizes.length > 0 && (
                <div className="variant-picker-item">
                  <div className="variant-picker-label">
                    Ölçü:{" "}
                    <span className="fw-6 variant-picker-label-value">
                      {" "}
                      {currentSize?.value}
                    </span>
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
              )}
            </div>
            <div className="tf-product-info-quantity mb_15">
              <div className="quantity-title fw-6">Miqdar</div>
              <Quantity />
            </div>
            <div className="tf-product-info-buy-button">
              <form onSubmit={(e) => e.preventDefault()} className="">
                <a
                  className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn"
                  onClick={() => addProductToCart(item.id)}
                >
                  <span>
                    {isAddedToCartProducts(item.id)
                      ? "Artıq əlavə edildi - "
                      : "Səbətə əlavə et - "}
                  </span>
                  <span className="tf-qty-price">${parseFloat(item.price).toFixed(2)}</span>
                </a>

                <div className="w-100">
                  <a href="#" className="btns-full">
                    Alışveriş et
                    <Image
                      alt="image"
                      src="/images/payments/paypal.png"
                      width={64}
                      height={18}
                    />
                  </a>
                  <a href="#" className="payment-more-option">
                    Digər ödəmə seçimləri
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
