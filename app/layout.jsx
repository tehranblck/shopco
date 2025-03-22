"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import "../public/scss/main.scss";
import "photoswipe/dist/photoswipe.css";
import "rc-slider/assets/index.css";

// Components
import Context from "../context/Context";
import ScrollTop from "../components/common/ScrollTop";
import Topbar1 from "../components/(inuse)/header/Topbar1";
import Footer1 from "../components/(inuse)/footer/Footer1";
import Header1 from "../components/(inuse)/header/Header1";
import ShopCart from "../components/modals/ShopCart";
import Login from "../components/modals/Login";
import Register from "../components/modals/Register";
import ResetPass from "../components/modals/ResetPass";
import SearchModal from "../components/modals/SearchModal";
import QuickAdd from "../components/modals/QuickAdd";
import QuickView from "../components/modals/QuickView";
import MobileMenu from "../components/modals/MobileMenu";
import { Providers } from "../store/provider";
export default function RootLayout({ children }) {
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if
      });
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 100) {
        header.classList.add("header-bg");
      } else {
        header.classList.remove("header-bg");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    setScrollDirection("up");
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 250) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down
          setScrollDirection("down");
        } else {
          // Scrolling up
          setScrollDirection("up");
        }
      } else {
        // Below 250px
        setScrollDirection("down");
      }

      lastScrollY.current = currentScrollY;
    };

    const lastScrollY = { current: window.scrollY };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);
  useEffect(() => {
    // Close any open modal
    const bootstrap = require("bootstrap"); // dynamically import bootstrap
    const modalElements = document.querySelectorAll(".modal.show");
    modalElements.forEach((modal) => {
      const modalInstance = bootstrap.Modal.getInstance(modal);
      if (modalInstance) {
        modalInstance.hide();
      }
    });

    // Close any open offcanvas
    const offcanvasElements = document.querySelectorAll(".offcanvas.show");
    offcanvasElements.forEach((offcanvas) => {
      const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
      if (offcanvasInstance) {
        offcanvasInstance.hide();
      }
    });
  }, [pathname]); // Runs every time the route changes

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      if (scrollDirection == "up") {
        header.style.top = "0px";
      } else {
        header.style.top = "-185px";
      }
    }
  }, [scrollDirection]);
  useEffect(() => {
    const WOW = require("../utlis/wow");
    const wow = new WOW.default({
      mobile: false,
      live: false,
    });
    wow.init();
  }, [pathname]);

  useEffect(() => {
    const initializeDirection = () => {
      const direction = localStorage.getItem("direction");

      if (direction) {
        const parsedDirection = JSON.parse(direction);
        document.documentElement.dir = parsedDirection.dir;
        document.body.classList.add(parsedDirection.dir);
      } else {
        document.documentElement.dir = "ltr";
      }

      const preloader = document.getElementById("preloader");
      if (preloader) {
        preloader.classList.add("disabled");
      }
    };

    initializeDirection();
  }, []); // Only runs once on component mount

  return (
    <html lang="en">
      <body className="preload-wrapper">
        <div className="preload preload-container" id="preloader">
          <div className="preload-logo">
            <div className="spinner"></div>
          </div>
        </div>{" "}
        <Context>
          <Providers>
            <div style={{ top: "0px" }} id="wrapper">
              {pathname === "/" && <Topbar1 />}
              <Header1 />
              {children}
              <Footer1 />
            </div>
            <ShopCart />
            <Login />
            <Register />
            <ResetPass />
            <SearchModal />
            <QuickAdd />
            <MobileMenu />
            <QuickView />
            { /*  <HomesModal /> */}

            {/* <ProductSidebar />
          <Compare />
       
          <AskQuestion />
          <BlogSidebar />
          <ColorCompare />
          <DeliveryReturn />
          <FindSize />
         
    
       
     
          <ToolbarBottom />
          <ToolbarShop />}
          {/* <NewsletterModal />
          <ShareModal />{" "}*/}
          </Providers>
        </Context>
        <ScrollTop />
      </body>
    </html>
  );
}
