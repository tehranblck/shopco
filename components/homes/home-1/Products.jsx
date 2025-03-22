"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ProductCard } from "../../shopCards/ProductCard";
import { fetchProducts } from '../../../store/slices/productSlice';

export default function Products() {
  const dispatch = useDispatch();
  const { items: products, status, error, loaded } = useSelector((state) => state.products);
  const loading = status === 'loading';

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (loading && !products.length) {
    return (
      <div className="container text-center py-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container text-center py-5">
        <div className="alert alert-danger" role="alert">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <section className="flat-spacing-5 pt_0 flat-seller">
      <div className="container">
        <div className="flat-title">
          <span className="title wow fadeInUp" data-wow-delay="0s">
            Ən çox satılanlar
          </span>
          <p className="sub-title wow fadeInUp" data-wow-delay="0s">
            Ən Yeni Stilərlə Alış-Veriş Edin: Ən son gələn məhsullarla dəbə uyğun geyinin
          </p>
        </div>
        <div
          className="grid-layout wow fadeInUp"
          data-wow-delay="0s"
          data-grid="grid-4"
        >
          {products?.map((product) => {
            // Get all images including main image
            const allImages = [
              product.main_image,
              ...product.images.filter(img => !img.is_main)
            ];

            return (
              <ProductCard
                key={product.id}
                product={{
                  id: product.id,
                  title: product.title,
                  description: product.description,
                  price: parseFloat(product.price),
                  image: product.main_image.image,
                  allImages: allImages.map(img => ({
                    src: img.image,
                    color: img.color,
                    is_main: img.is_main
                  })),
                  colors: product.colors,
                  sizes: [...new Set(product.stocks.map(stock => stock.size.name))],
                  stocks: product.stocks
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
