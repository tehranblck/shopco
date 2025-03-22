"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ProductCard } from "../shopCards/ProductCard";
import { fetchProducts } from '../../store/slices/productSlice';
import { layouts } from "../../data/shop";
import ProductGrid from "./ProductGrid";
import { useState } from "react";
import Pagination from "../common/Pagination";
import ShopFilter from "./ShopFilter";
import Sorting from "./Sorting";

export default function ShopDefault() {
  const dispatch = useDispatch();
  const { items: products, status, error } = useSelector((state) => state.products);
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
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="products-shop">
            <div className="row">
              {products?.map((product) => {
                // Get all images including main image
                const allImages = [
                  product.main_image,
                  ...product.images.filter(img => !img.is_main)
                ];

                return (
                  <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
                    <ProductCard
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
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
