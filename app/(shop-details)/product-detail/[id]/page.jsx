import Products from "../../../../components/shopDetails/Products";
import RecentProducts from "../../../../components/shopDetails/RecentProducts";
import ShopDetailsTab from "../../../../components/shopDetails/ShopDetailsTab";
import React from "react";
import Link from "next/link";
import DetailsOuterZoom from "../../../../components/shopDetails/DetailsOuterZoom";
export const metadata = {
  title: "Shop Details || Ecomus - Ultimate Nextjs Ecommerce Template",
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
import { allProducts } from "../../../../data/products";
import ProductSinglePrevNext from "../../../../components/common/ProductSinglePrevNext";
export default async function page({ params }) {
  const { id } = await params
  const product =
    allProducts.filter((elm) => elm.id == id)[0] || allProducts[0];
  return (
    <>
      <div style={{ marginTop: "90px" }} className="tf-breadcrumb">
        <div className="container">
          <div className="tf-breadcrumb-wrap d-flex justify-content-between flex-wrap align-items-center">
            <div className="tf-breadcrumb-list">
              <Link href={`/`} className="text">
                Ana səhifə
              </Link>
              <i className="icon icon-arrow-right" />

              <span className="text">
                {product.title ? product.title : "Cotton jersey top"}
              </span>
            </div>
            <ProductSinglePrevNext currentId={product.id} />
          </div>
        </div>
      </div>
      <DetailsOuterZoom product={product} />
      <ShopDetailsTab />
      <Products />
      <RecentProducts />
    </>
  );
}
