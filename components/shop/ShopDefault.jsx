"use client";
import { layouts } from "../../data/shop";
import ProductGrid from "./ProductGrid";
import { useState } from "react";
import Pagination from "../common/Pagination";
import ShopFilter from "./ShopFilter";
import Sorting from "./Sorting";

export default function ShopDefault() {
  const [gridItems, setGridItems] = useState(4);
  const [products, setProducts] = useState([]);
  const [finalSorted, setFinalSorted] = useState([]);
  return (
    <>
      <section className="flat-spacing-2">
        <div className="container">
          <div className="tf-shop-control grid-2 align-items-center">
            <div className="tf-control-filter">
              <a
                href="#filterShop"
                data-bs-toggle="offcanvas"
                aria-controls="offcanvasLeft"
                className="tf-btn-filter"
              >
                <span className="icon icon-filter" />
                <span className="text">Filter</span>
              </a>
            </div>

            <div className="tf-control-sorting d-flex justify-content-end">
              <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
                <Sorting setFinalSorted={setFinalSorted} products={products} />
              </div>
            </div>
          </div>
          <div className="wrapper-control-shop">
            <div className="meta-filter-shop" />
            <ProductGrid allproducts={finalSorted} gridItems={gridItems} />
            {/* pagination */}
            {finalSorted.length ? (
              <ul className="tf-pagination-wrap tf-pagination-list tf-pagination-btn">
                <Pagination />
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
      <ShopFilter setProducts={setProducts} />
    </>
  );
}
