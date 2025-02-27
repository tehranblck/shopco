"use client";
import React from "react";
import Link from "next/link";
import { navItems } from "../../data/menu";
import { usePathname } from "next/navigation";
export default function MobileMenu() {
  const pathname = usePathname();
  const isMenuActive = (menuItem) => {
    let active = false;
    if (menuItem.href?.includes("/")) {
      if (menuItem.href?.split("/")[1] == pathname.split("/")[1]) {
        active = true;
      }
    }
    if (menuItem.links) {
      menuItem.links?.forEach((elm2) => {
        if (elm2.href?.includes("/")) {
          if (elm2.href?.split("/")[1] == pathname.split("/")[1]) {
            active = true;
          }
        }
        if (elm2.links) {
          elm2.links.forEach((elm3) => {
            if (elm3.href.split("/")[1] == pathname.split("/")[1]) {
              active = true;
            }
          });
        }
      });
    }

    return active;
  };
  return (
    <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
      <span
        className="icon-close icon-close-popup"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
      <div className="mb-canvas-content">
        <div className="mb-body">
          <ul className="nav-ul-mb" id="wrapper-menu-navigation">
            {navItems.map((item, i) => (
              <li key={i} className="nav-mb-item">
                {item.links ? (
                  <>
                    <a
                      href={`#${item.id}`}
                      className={`collapsed mb-menu-link current ${isMenuActive(item) ? "activeMenu" : ""}`}
                      data-bs-toggle="collapse"
                      aria-expanded="true"
                      aria-controls={item.id}
                    >
                      <span>{item.label}</span>
                      <span className="btn-open-sub" />
                    </a>
                    <div id={item.id} className="collapse">
                      <ul className="sub-nav-menu">
                        {item.links?.map((subItem, i2) => (
                          <li key={i2}>
                            <Link
                              href={subItem.href}
                              className={`sub-nav-link ${isMenuActive(subItem) ? "activeMenu" : ""}`}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`mb-menu-link ${isMenuActive(item) ? "activeMenu" : ""}`}
                  >
                    <span>{item.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="mb-other-content">
            <div className="d-flex group-icon">
              <Link href={`/wishlist`} className="site-nav-icon">
                <i className="icon icon-heart" />
                Bəyəndiklərim
              </Link>
              <Link href={`/home-search`} className="site-nav-icon">
                <i className="icon icon-search" />
                Axtarış
              </Link>
            </div>
            <div className="mb-notice">
              <Link href={`/contact-1`} className="text-need">
                Kömək lazımdır?
              </Link>
            </div>
            <ul className="mb-info">
              <li>
                Ünvan: 1234 , lokal 567, <br />
                Bakı adresi
              </li>
              <li>
                Email: <b>info@saytyarat.com</b>
              </li>
              <li>
                Telefon: <b>+994 12 404 04 04</b>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-bottom">
          <Link href={`/login`} className="site-nav-icon">
            <i className="icon icon-account" />
            Giriş
          </Link>

        </div>
      </div>
    </div>
  );
}
