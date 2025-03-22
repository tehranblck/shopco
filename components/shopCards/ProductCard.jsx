"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useContextElement } from "../../context/Context";
import CountdownComponent from "../common/Countdown";
import { generateSlug } from "../../utils/helpers";

export const ProductCard = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(product.image);
  const { setQuickViewItem, setQuickAddItem } = useContextElement();
  const {
    addToWishlist,
    isAddedtoWishlist,
  } = useContextElement();

  useEffect(() => {
    setCurrentImage(product.image);
  }, [product]);

  const productSlug = generateSlug(product.title, product.id);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    if (!product) {
      console.error('Product data is missing');
      return;
    }
    console.log('Setting QuickAdd Item:', product.id);
    setQuickAddItem(product.id);

    // Initialize Bootstrap modal
    if (typeof window !== 'undefined') {
      import('bootstrap').then((bootstrap) => {
        const modalElement = document.getElementById('quick_add');
        if (modalElement) {
          const modal = new bootstrap.Modal(modalElement);
          modal.show();
        }
      });
    }
  };

  return (
    <div className="card-product fl-item" key={product.id}>
      <div className="card-product-wrapper">
        <Link href={`/product-detail/${productSlug}`} className="product-img">
          <Image
            className="lazyload img-product"
            src={currentImage}
            alt={product.title}
            width={720}
            height={1005}
            style={{ width: "100%", height: "auto" }}
          />
          <Image
            className="lazyload img-hover"
            src={product.allImages?.[1]?.src || currentImage}
            alt={product.title}
            width={720}
            height={1005}
            style={{ width: "100%", height: "auto" }}
          />
        </Link>
        {product.soldOut ? (
          <div className="sold-out">
            <span>Sold out</span>
          </div>
        ) : (
          <>
            <div className="list-product-btn">
              <a
                href="#"
                onClick={handleQuickAdd}
                className="box-icon bg_white quick-add tf-btn-loading"
              >
                <span className="icon icon-bag" />
                <span className="tooltip">Quick Add</span>
              </a>
              <a
                onClick={() => addToWishlist(product.id)}
                className="box-icon bg_white wishlist btn-icon-action"
              >
                <span
                  className={`icon icon-heart ${isAddedtoWishlist(product.id) ? "added" : ""}`}
                />
                <span className="tooltip">
                  {isAddedtoWishlist(product.id)
                    ? "Already Wishlisted"
                    : "Add to Wishlist"}
                </span>
                <span className="icon icon-delete" />
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (!product) {
                    console.error('Product data is missing');
                    return;
                  }
                  const productData = {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    description: product.description,
                    colors: product.colors || [],
                    allImages: product.allImages || [],
                    stocks: product.stocks || []
                  };
                  console.log('Setting QuickView Item:', productData);
                  setQuickViewItem(productData);
                }}
                className="box-icon bg_white quickview tf-btn-loading"
              >
                <span className="icon icon-view" />
                <span className="tooltip">Quick View</span>
              </a>
            </div>
            {product.countdown && (
              <div className="countdown-box">
                <div className="js-countdown">
                  <CountdownComponent />
                </div>
              </div>
            )}
            {product.sizes && (
              <div className="size-list">
                {product.sizes.map((size) => (
                  <span key={size}>{size}</span>
                ))}
              </div>
            )}
          </>
        )}
      </div>
      <div className="card-product-info">
        <Link href={`/product-detail/${productSlug}`} className="title link">
          {product.title}
        </Link>
        <span className="price">${product.price?.toFixed(2)}</span>
        {product.colors && (
          <ul className="list-color-product">
            {product.allImages?.map((image, i) => (
              <li
                className={`list-color-item color-swatch ${currentImage === image.src ? "active" : ""}`}
                key={i}
                onMouseOver={() => setCurrentImage(image.src)}
              >
                <span className="tooltip">{image.color.name}</span>
                <span
                  className="swatch-value"
                  style={{ backgroundColor: image.color.code }}
                />
                <Image
                  className="lazyload"
                  src={image.src}
                  alt={`${product.title} - ${image.color.name}`}
                  width={720}
                  height={1005}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div >
  );
};
