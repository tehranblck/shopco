"use client";

import { useEffect, useState } from "react";
const categories = [
  { id: 1, name: "Moda", isActive: true, link: "/shop-default" },
  { id: 2, name: "Kişi", isActive: false, link: "/shop-men" },
  { id: 3, name: "Qadın", isActive: false, link: "/shop-women" },
  { id: 5, name: "Geyim", isActive: false, link: "/shop-default" },
];

const filterColors = [
  { name: "Narıncı", colorClass: "bg_orange-3" },
  { name: "Qara", colorClass: "bg_dark" },
  { name: "Ağ", colorClass: "bg_white" },
  { name: "Qəhvəyi", colorClass: "bg_brown" },
  { name: "Açıq Bənövşəyi", colorClass: "bg_purple" },
  { name: "Açıq Yaşıl", colorClass: "bg_light-green" },
  { name: "Çəhrayı", colorClass: "bg_purple" },
  { name: "Mavi", colorClass: "bg_blue-2" },
  { name: "Tünd Mavi", colorClass: "bg_dark-blue" },
  { name: "Açıq Boz", colorClass: "bg_light-grey" },
  { name: "Bej", colorClass: "bg_beige" },
  { name: "Açıq Mavi", colorClass: "bg_light-blue" },
  { name: "Boz", colorClass: "bg_grey" },
  { name: "Açıq Çəhrayı", colorClass: "bg_light-pink" },
];

const sizes = ["S", "M", "L", "XL"];
import Slider from "rc-slider";
import { products1 } from "../../data/products";
import Link from "next/link";
export default function ShopFilter({ setProducts, products = products1 }) {
  const [price, setPrice] = useState([10, 20]);
  const handlePrice = (value) => {
    setPrice(value);
  };
  const [selectedColors, setSelectedColors] = useState([]);
  const handleSelectColor = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors((pre) => [...pre.filter((el) => el != color)]);
    } else {
      setSelectedColors((pre) => [...pre, color]);
    }
  };
  const [selectedBrands, setSelectedBrands] = useState([]);
  const handleSelectBrand = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands((pre) => [...pre.filter((el) => el != brand)]);
    } else {
      setSelectedBrands((pre) => [...pre, brand]);
    }
  };
  const [selectedAvailabilities, setSelectedAvailabilities] = useState([]);
  const handleSelectAvailabilities = (availability) => {
    if (selectedAvailabilities.includes(availability)) {
      setSelectedAvailabilities((pre) => [
        ...pre.filter((el) => el != availability),
      ]);
    } else {
      setSelectedAvailabilities((pre) => [...pre, availability]);
    }
  };
  const [selectedSizes, setSelectedSizes] = useState([]);
  const handleSelectSizes = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes((pre) => [...pre.filter((el) => el != size)]);
    } else {
      setSelectedSizes((pre) => [...pre, size]);
    }
  };

  useEffect(() => {
    let filteredArrays = [];

    filteredArrays = [
      ...filteredArrays,
      [
        ...products.filter(
          (elm) => elm.price >= price[0] && elm.price <= price[1]
        ),
      ],
    ];
    // console.log(filteredByPrice, "filteredByPrice");
    if (selectedColors.length) {
      filteredArrays = [
        ...filteredArrays,
        [
          ...products.filter((elm) =>
            elm.colors
              ?.map((el2) => el2.name)
              .some((el3) => selectedColors.includes(el3))
          ),
        ],
      ];
    }

    // console.log(filteredByselectedColors, "filteredByselectedColors");
    if (selectedBrands.length) {
      filteredArrays = [
        ...filteredArrays,
        [...products.filter((elm) => selectedBrands.includes(elm.brand))],
      ];
    }

    // console.log(filteredByselectedBrands, "filteredByselectedBrands");
    if (selectedSizes.length) {
      filteredArrays = [
        ...filteredArrays,
        [
          ...products.filter((elm) =>
            elm.sizes?.some((elm2) => selectedSizes.includes(elm2))
          ),
        ],
      ];
    }

    // console.log(filteredByselectedSizes);
    if (selectedAvailabilities.length) {
      filteredArrays = [
        ...filteredArrays,
        [
          ...products.filter((elm) =>
            selectedAvailabilities
              .map((elm3) => elm3.isAvailable)
              .some((elm4) => elm4 == elm.isAvailable)
          ),
        ],
      ];
    }

    const commonItems = products.filter((item) =>
      filteredArrays.every((array) => array.includes(item))
    );
    setProducts(commonItems);
  }, [
    price,
    selectedColors,
    selectedBrands,
    selectedAvailabilities,
    selectedSizes,
    products,
  ]);
  const clearFilter = () => {
    setSelectedColors([]);
    setSelectedBrands([]);
    setSelectedAvailabilities([]);
    setSelectedSizes([]);
    setPrice([10, 20]);
  };
  return (
    <div className="offcanvas offcanvas-start canvas-filter" id="filterShop">
      <div className="canvas-wrapper">
        <header className="canvas-header">
          <div className="filter-icon">
            <span className="icon icon-filter" />
            <span>Filter</span>
          </div>
          <span
            className="icon-close icon-close-popup"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </header>
        <div className="canvas-body">
          <div className="widget-facet wd-categories">
            <div
              className="facet-title"
              data-bs-target="#categories"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="categories"
            >
              <span>Məhsul kateqoriyaları</span>
              <span className="icon icon-arrow-up" />
            </div>
            <div id="categories" className="collapse show">
              <ul className="list-categoris current-scrollbar mb_36">
                {categories.map((category) => (
                  <li key={category.id} className={`cate-item`}>
                    {category.link ? (
                      <Link href={category.link}>
                        <span>{category.name}</span>
                      </Link>
                    ) : (
                      <a href="#">
                        <span>{category.name}</span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            action="#"
            id="facet-filter-form"
            className="facet-filter-form"
          >

            <div className="widget-facet wrap-price">
              <div
                className="facet-title"
                data-bs-target="#price"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="price"
              >
                <span>Qiymət</span>
                <span className="icon icon-arrow-up" />
              </div>
              <div id="price" className="collapse show">
                <div className="widget-price filter-price">
                  <Slider
                    formatLabel={() => ``}
                    range
                    max={22}
                    min={5}
                    defaultValue={price}
                    onChange={(value) => handlePrice(value)}
                    id="slider"
                  />
                  <div className="box-title-price">
                    <span className="title-price">Qiymət aralığı :</span>
                    <div className="caption-price">
                      <div>
                        <span>₼</span>
                        <span className="min-price">{price[0]}</span>
                      </div>
                      <span>-</span>
                      <div>
                        <span>₼</span>
                        <span className="max-price">{price[1]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="widget-facet">


            </div>
            <div className="widget-facet">
              <div
                className="facet-title"
                data-bs-target="#color"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="color"
              >
                <span>Rəng</span>
                <span className="icon icon-arrow-up" />
              </div>
              <div id="color" className="collapse show">
                <ul className="tf-filter-group filter-color current-scrollbar mb_36">
                  {filterColors.map((elm, i) => (
                    <li
                      key={i}
                      className="list-item d-flex gap-12 align-items-center"
                      onClick={() => handleSelectColor(elm.name)}
                    >
                      <input
                        type="checkbox"
                        name="color"
                        className={`tf-check-color ${elm.colorClass}`}
                        readOnly
                        checked={selectedColors.includes(elm.name)}
                      />
                      <label className="label">
                        <span>{elm.name}</span>&nbsp;
                        <span>
                          (
                          {
                            products.filter((el) =>
                              el.colors
                                ?.map((col) => col?.name)
                                ?.includes(elm.name)
                            ).length
                          }
                          )
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="widget-facet">
              <div
                className="facet-title"
                data-bs-target="#size"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="size"
              >
                <span>Ölçü</span>
                <span className="icon icon-arrow-up" />
              </div>
              <div id="size" className="collapse show">
                <ul className="tf-filter-group current-scrollbar">
                  {sizes.map((elm, i) => (
                    <li
                      key={i}
                      onClick={() => handleSelectSizes(elm)}
                      className="list-item d-flex gap-12 align-items-center"
                    >
                      <input
                        type="radio"
                        className="tf-check tf-check-size"
                        readOnly
                        checked={selectedSizes.includes(elm)}
                      />
                      <label className="label">
                        <span>{elm}</span>&nbsp;
                        <span>
                          (
                          {
                            products.filter((el) => el.sizes?.includes(elm))
                              .length
                          }
                          )
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </form>
          <div className="mt-5"></div>
          <a
            className="tf-btn style-2 btn-fill rounded animate-hover-btn"
            onClick={clearFilter}
          >
            Filterləri təmizlə
          </a>
        </div>
      </div>
    </div>
  );
}
