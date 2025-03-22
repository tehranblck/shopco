"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Quantity from "../../../components/shopDetails/Quantity";
import ProductTabs from './components/ProductTabs';
import { useContextElement } from "../../../context/Context";
import './styles.css';

export default async function ProductDetail() {
    const { slug } = await params;
    const productId = parseInt(id);

    const { items: products = [] } = useSelector((state) => state.products) || {};
    const {
        addProductToCart,
        isAddedToCartProducts,
        addToWishlist,
        isAddedtoWishlist,
        addToCompareItem,
        isAddedtoCompareItem,
    } = useContextElement();

    const [product, setProduct] = useState(null);
    const [currentColor, setCurrentColor] = useState(null);
    const [currentSize, setCurrentSize] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (Array.isArray(products)) {
            const foundProduct = products.find(p => p.title === slug);
            if (foundProduct) {
                setProduct(foundProduct);
                // Set initial color and size with validation
                if (Array.isArray(foundProduct.colors) && foundProduct.colors.length > 0) {
                    setCurrentColor(foundProduct.colors[0]);
                }
                if (Array.isArray(foundProduct.stocks) && foundProduct.stocks.length > 0) {
                    setCurrentSize({ value: foundProduct.stocks[0].size.name });
                }
            }
        }
        setIsLoading(false);
    }, [productId, products]);

    // Loading state
    if (isLoading) {
        return (
            <div className="loading-container d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    // Product not found state
    if (!product) {
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2>Məhsul tapılmadı</h2>
                        <p>Axtardığınız məhsul mövcud deyil və ya silinib.</p>
                        <Link href="/shop" className="tf-btn btn-fill mt-4">
                            Mağazaya qayıt
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // Ensure arrays exist
    const productImages = Array.isArray(product.allImages) ? product.allImages : [];
    const productColors = Array.isArray(product.colors) ? product.colors : [];
    const productStocks = Array.isArray(product.stocks) ? product.stocks : [];
    const availableSizes = [...new Set(productStocks.map(stock => stock.size?.name).filter(Boolean))];

    const openModalSizeChoice = () => {
        if (typeof window !== 'undefined') {
            import('bootstrap').then((bootstrap) => {
                const sizeModal = new bootstrap.Modal(document.getElementById("find_size"), {
                    keyboard: false,
                });
                sizeModal.show();
            });
        }
    };

    return (
        <div className="product-detail-page py-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-6">
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
                                                alt={`${product.title} - ${image.color.name}`}
                                                src={image.src}
                                                width={720}
                                                height={1045}
                                                style={{ width: "100%", height: "auto", objectFit: "contain" }}
                                                priority={index === 0}
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                                <div className="swiper-button-next button-style-arrow single-slide-prev snbqvp" />
                                <div className="swiper-button-prev button-style-arrow single-slide-next snbqvn" />
                            </Swiper>

                            {/* Thumbnail Navigation */}
                            <div className="product-thumbnails mt-4">
                                <div className="row g-2">
                                    {productImages.map((image, index) => (
                                        <div className="col-3" key={index}>
                                            <div
                                                className={`thumbnail-item ${currentColor?.code === image.color.code ? 'active' : ''}`}
                                                onClick={() => setCurrentColor(image.color)}
                                            >
                                                <Image
                                                    alt={`${product.title} - ${image.color.name}`}
                                                    src={image.src}
                                                    width={150}
                                                    height={200}
                                                    style={{ width: "100%", height: "auto", objectFit: "cover" }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tf-product-info-wrap">
                            <nav aria-label="breadcrumb" className="mb-3">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <Link href="/shop">Shop</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        {product.title}
                                    </li>
                                </ol>
                            </nav>

                            <div className="tf-product-info-title">
                                <h1 className="product-title h2 mb-3">{product.title}</h1>
                            </div>

                            <div className="tf-product-info-badges mb-3">
                                <div className="badges text-uppercase">Best seller</div>
                                <div className="product-status-content">
                                    <i className="icon-lightning" />
                                    <p className="fw-6">
                                        Selling fast! 48 people have this in their carts.
                                    </p>
                                </div>
                            </div>

                            <div className="tf-product-info-price mb-4">
                                <div className="price h3">${product.price.toFixed(2)}</div>
                            </div>

                            <div className="tf-product-description mb-4">
                                <p>{product.description}</p>
                            </div>

                            <div className="tf-product-info-variant-picker mb-4">
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
                                            onClick={openModalSizeChoice}
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

                            <div className="tf-product-info-quantity mb-4">
                                <div className="quantity-title fw-6 mb-2">Quantity</div>
                                <Quantity />
                            </div>

                            <div className="tf-product-info-buy-button">
                                <form onSubmit={(e) => e.preventDefault()} className="mb-4">
                                    <button
                                        className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn mb-3"
                                        onClick={() => addProductToCart(product.id)}
                                    >
                                        <span>
                                            {isAddedToCartProducts(product.id)
                                                ? "Already Added - "
                                                : "Add to cart - "}
                                        </span>
                                        <span className="tf-qty-price">
                                            ${product.price.toFixed(2)}
                                        </span>
                                    </button>

                                    <div className="d-flex gap-2 mb-3">
                                        <button
                                            onClick={() => addToWishlist(product.id)}
                                            className="tf-product-btn-wishlist hover-tooltip box-icon bg_white wishlist btn-icon-action"
                                        >
                                            <span
                                                className={`icon icon-heart ${isAddedtoWishlist(product.id) ? "added" : ""}`}
                                            />
                                            <span className="tooltip">
                                                {isAddedtoWishlist(product.id)
                                                    ? "Already Wishlisted"
                                                    : "Add to Wishlist"}
                                            </span>
                                        </button>

                                        <button
                                            onClick={() => addToCompareItem(product.id)}
                                            className="tf-product-btn-wishlist hover-tooltip box-icon bg_white compare btn-icon-action"
                                        >
                                            <span
                                                className={`icon icon-compare ${isAddedtoCompareItem(product.id) ? "added" : ""}`}
                                            />
                                            <span className="tooltip">
                                                {isAddedtoCompareItem(product.id)
                                                    ? "Already Compared"
                                                    : "Add to Compare"}
                                            </span>
                                        </button>
                                    </div>

                                    <div className="w-100">
                                        <button className="btns-full mb-2">
                                            Buy with
                                            <Image
                                                alt="PayPal"
                                                src="/images/payments/paypal.png"
                                                width={64}
                                                height={18}
                                            />
                                        </button>
                                        <button className="payment-more-option">
                                            More payment options
                                        </button>
                                    </div>
                                </form>

                                <div className="product-meta">
                                    <div className="meta-item">
                                        <span className="label">SKU:</span>
                                        <span className="value">{product.sku || `PRD-${product.id}`}</span>
                                    </div>
                                    <div className="meta-item">
                                        <span className="label">Category:</span>
                                        <span className="value">{product.category || 'Fashion'}</span>
                                    </div>
                                    <div className="meta-item">
                                        <span className="label">Tags:</span>
                                        <span className="value">Clothing, Fashion, Trending</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Tabs */}
                <ProductTabs product={product} />
            </div>
        </div>
    );
} 