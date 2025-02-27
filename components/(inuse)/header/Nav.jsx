"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Nav({ isArrow = true, textColor = "", Linkfs = "" }) {
  const pathname = usePathname();
  const isMenuActive = (menuItem) => {
    let active = false;
    if (menuItem.href?.includes("/")) {
      if (menuItem.href?.split("/")[1] == pathname.split("/")[1]) {
        active = true;
      }
    }
    if (menuItem.length) {
      active = menuItem.some(
        (elm) => elm.href?.split("/")[1] == pathname.split("/")[1]
      );
    }
    if (menuItem.length) {
      menuItem.forEach((item) => {
        item.links?.forEach((elm2) => {
          if (elm2.href?.includes("/")) {
            if (elm2.href?.split("/")[1] == pathname.split("/")[1]) {
              active = true;
            }
          }
          if (elm2.length) {
            elm2.forEach((item2) => {
              item2?.links?.forEach((elm3) => {
                if (elm3.href.split("/")[1] == pathname.split("/")[1]) {
                  active = true;
                }
              });
            });
          }
        });
        if (item.href?.includes("/")) {
          if (item.href?.split("/")[1] == pathname.split("/")[1]) {
            active = true;
          }
        }
      });
    }

    return active;
  };
  return (
    <>
      {" "}
      <li className="menu-item">
        <Link
          href="/"
          className={`item-link ${Linkfs} ${textColor}`}
        >
          Ana səhifə
        </Link>

      </li>
      <li className="menu-item">
        <Link
          href="/haqqimizda"
          className={`item-link ${Linkfs} ${textColor} 
           `}
        >
          Haqqımızda
        </Link>

      </li>
      <li className="menu-item">
        <Link
          href="/magaza-umumi"
          className={`item-link ${Linkfs} ${textColor}`}
        >
          Mağazamız
        </Link>

      </li>
      <li className="menu-item position-relative">
        <Link
          href="#"
          className={`item-link ${Linkfs} ${textColor}`}
        >
          Kateqoriyalar
        </Link>

      </li>
      <li className="menu-item position-relative">
        <Link
          href="/faq-2"
          className={`item-link ${Linkfs} ${textColor}`}
        >
          FAQ
        </Link>

      </li>
      <li className="menu-item position-relative">
        <Link
          href="/elaqe"
          className={`item-link ${Linkfs} ${textColor}`}
        >
          Əlaqə
        </Link>

      </li>
    </>
  );
}
