

export const productsPages = [
  {
    heading: "Shop layouts",
    links: [
      { href: "/shop-default", text: "Default" },
      { href: "/shop-left-sidebar", text: "Left sidebar" },
      { href: "/shop-right-sidebar", text: "Right sidebar" },
      { href: "/shop-fullwidth", text: "Fullwidth" },
      { href: "/shop-collection-sub", text: "Sub collection" },
      { href: "/shop-collection-list", text: "Collections list" },
    ],
  },
  {
    heading: "Features",
    links: [
      { href: "/shop-link", text: "Pagination links" },
      { href: "/shop-loadmore", text: "Pagination loadmore" },
      {
        href: "/shop-infinite-scrolling",
        text: "Pagination infinite scrolling",
      },
      { href: "/shop-filter-sidebar", text: "Filter sidebar" },
      { href: "/shop-filter-hidden", text: "Filter hidden" },
    ],
  },
  {
    heading: "Product styles",
    links: [
      // { href: "/product-style-list", text: "Product style list" },s
      { href: "/product-style-01", text: "Product style 01" },
      { href: "/product-style-02", text: "Product style 02" },
      { href: "/product-style-03", text: "Product style 03" },
      { href: "/product-style-04", text: "Product style 04" },
      { href: "/product-style-05", text: "Product style 05" },
      { href: "/product-style-06", text: "Product style 06" },
      { href: "/product-style-07", text: "Product style 07" },
    ],
  },
];

export const productDetailPages = [
  {
    heading: "Product layouts",
    links: [
      { href: "/product-detail/1", text: "Product default" },
      { href: "/product-grid-1/2", text: "Product grid 1" },
      { href: "/product-grid-2/3", text: "Product grid 2" },
      { href: "/product-stacked/4", text: "Product stacked" },
      { href: "/product-right-thumbnails/5", text: "Product right thumbnails" },
      {
        href: "/product-bottom-thumbnails/6",
        text: "Product bottom thumbnails",
      },
      { href: "/product-drawer-sidebar/7", text: "Product drawer sidebar" },
      {
        href: "/product-description-accordion/8",
        text: "Product description accordion",
      },
      {
        href: "/product-description-list/10",
        text: "Product description list",
      },
      {
        href: "/product-description-vertical/11",
        text: "Product description vertical",
      },
    ],
  },
  {
    heading: "Product details",
    links: [
      { href: "/product-inner-zoom/12", text: "Product inner zoom" },
      { href: "/product-zoom-magnifier/13", text: "Product zoom magnifier" },
      { href: "/product-no-zoom/14", text: "Product no zoom" },
      {
        href: "/product-photoswipe-popup/15",
        text: "Product photoswipe popup",
      },
      {
        href: "/product-zoom-popup/16",
        text: "Product external zoom and photoswipe popup",
      },
      { href: "/product-video/17", text: "Product video" },
      { href: "/product-3d/18", text: "Product 3D, AR models" },
      {
        href: "/product-options-customizer/19",
        text: "Product options & customizer",
      },
      { href: "/product-advanced-types/20", text: "Advanced product types" },
      {
        href: "/product-giftcard/21",
        text: "Recipient information form for gift card products",
      },
    ],
  },
  {
    heading: "Product swatches",
    links: [
      { href: "/product-color-swatch/22", text: "Product color swatch" },
      { href: "/product-rectangle/23", text: "Product rectangle" },
      { href: "/product-rectangle-color/24", text: "Product rectangle color" },
      { href: "/product-swatch-image/25", text: "Product swatch image" },
      {
        href: "/product-swatch-image-rounded/26",
        text: "Product swatch image rounded",
      },
      { href: "/product-swatch-dropdown/27", text: "Product swatch dropdown" },
      {
        href: "/product-swatch-dropdown-color/29",
        text: "Product swatch dropdown color",
      },
    ],
  },
  {
    heading: "Product features",
    links: [
      {
        href: "/product-frequently-bought-together/30",
        text: "Frequently bought together",
      },
      {
        href: "/product-frequently-bought-together-2/31",
        text: "Frequently bought together 2",
      },
      { href: "/product-upsell-features/32", text: "Product upsell features" },
      { href: "/product-pre-orders/33", text: "Product pre-orders" },
      { href: "/product-notification/34", text: "Back in stock notification" },
      { href: "/product-pickup/35", text: "Product pickup" },
      { href: "/product-images-grouped/36", text: "Variant images grouped" },
      { href: "/product-complimentary/37", text: "Complimentary products" },
      {
        href: "/product-quick-order-list/38",
        text: "Quick order list",
        extra: (
          <div className="demo-label">
            <span className="demo-new">New</span>
          </div>
        ),
      },
      {
        href: "/product-detail-volume-discount/38",
        text: "Volume Discount",
        extra: (
          <div className="demo-label">
            <span className="demo-new">New</span>
          </div>
        ),
      },
      {
        href: "/product-detail-volume-discount-grid/38",
        text: "Volume Discount Grid",
        extra: (
          <div className="demo-label">
            <span className="demo-new">New</span>
          </div>
        ),
      },
      {
        href: "/product-detail-buyx-gety/38",
        text: "Buy X Get Y",
        extra: (
          <div className="demo-label">
            <span className="demo-new">New</span>
          </div>
        ),
      },
    ],
  },
];

export const pages = [
  {
    href: "/about-us",
    text: "About us",
    className: "menu-link-text link text_black-2",
    links: null,
  },
  {
    href: "#",
    text: "Brands",
    className: "menu-link-text link text_black-2",
    links: [
      {
        href: "/brands",
        text: "Brands",
        className: "menu-link-text link text_black-2 position-relative",
        label: "New",
      },
      {
        href: "/brands-v2",
        text: "Brand V2",
        className: "menu-link-text link text_black-2",
      },
    ],
  },
  {
    href: "#",
    text: "Contact",
    className: "menu-link-text link text_black-2",
    links: [
      {
        href: "/contact-1",
        text: "Contact 1",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/contact-2",
        text: "Contact 2",
        className: "menu-link-text link text_black-2",
      },
    ],
  },
  {
    href: "#",
    text: "FAQ",
    className: "menu-link-text link text_black-2",
    links: [
      {
        href: "/faq-1",
        text: "FAQ 01",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/faq-2",
        text: "FAQ 02",
        className: "menu-link-text link text_black-2",
      },
    ],
  },
  {
    href: "#",
    text: "Store",
    className: "menu-link-text link text_black-2",
    links: [
      {
        href: "/our-store",
        text: "Our store",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/store-locations",
        text: "Store locator",
        className: "menu-link-text link text_black-2",
      },
    ],
  },
  {
    href: "/timeline",
    text: "Timeline",
    className: "menu-link-text link text_black-2 position-relative",
    label: "New",
  },
  {
    href: "/view-cart",
    text: "View cart",
    className: "menu-link-text link text_black-2 position-relative",
  },
  {
    href: "/checkout",
    text: "Check out",
    className: "menu-link-text link text_black-2 position-relative",
  },
  {
    href: "#",
    text: "Payment",
    className: "menu-link-text link text_black-2",
    links: [
      {
        href: "/payment-confirmation",
        text: "Payment Confirmation",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/payment-failure",
        text: "Payment Failure",
        className: "menu-link-text link text_black-2",
      },
    ],
  },
  {
    href: "#",
    text: "My account",
    className: "menu-link-text link text_black-2",
    links: [
      {
        href: "/my-account",
        text: "My account",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/my-account-orders",
        text: "My order",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/my-account-orders-details",
        text: "My order details",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/my-account-address",
        text: "My address",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/my-account-edit",
        text: "My account details",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/my-account-wishlist",
        text: "My wishlist",
        className: "menu-link-text link text_black-2",
      },
    ],
  },
  {
    href: "/invoice",
    text: "Invoice",
    className: "menu-link-text link text_black-2 position-relative",
  },
  {
    href: "/page-not-found",
    text: "404",
    className: "menu-link-text link text_black-2 position-relative",
  },
];

export const blogLinks = [
  { href: "/blog-grid", text: "Grid layout" },
  { href: "/blog-sidebar-left", text: "Left sidebar" },
  { href: "/blog-sidebar-right", text: "Right sidebar" },
  { href: "/blog-list", text: "Blog list" },
  { href: "/blog-detail/1", text: "Single Post" },
];

export const navItems = [
  {
    id: "dropdown-menu-one",
    label: "Ana səhifə",
    href: "/",
    links: null,
  },
  {
    id: "haqqimizda",
    label: "Haqqımızda",
    href: "/haqqimizda",
    links: null,
  },
  {
    id: "dropdown-menu-two",
    label: "Mağazamız",
    href: "/magaza-umumi",
    links: [
      {
        id: "sub-shop-two",
        label: "Qadın geyimləri",
        href: "/shop-women",
        links: null,
      },
      {
        id: "sub-shop-two",
        label: "Kişi geyimləri",
        href: "/shop-men",
        links: null,
      }
    ],
  },
  {
    id: "dropdown-menu-three",
    label: "Kateqoriyalar",
    href: "/kategoriyalar",
    links: [
      {
        id: "ayaqqabi",
        label: "Ayaqqabılar",
        href: "/ayaqqabi",
        links: null,
      },
      {
        id: "canta",
        label: "Çanta",
        href: "/canta",
        links: null,
      },


    ],
  },



  {
    id: "faq",
    label: "Çox verilən suallar",
    href: "/faq",
    links: null,
  },
  {
    id: "contact",
    label: "Əlaqə",
    href: "/elaqe",
    links: null,
  },
];
