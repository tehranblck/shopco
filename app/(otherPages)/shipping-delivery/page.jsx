import React from "react";

export const metadata = {
  title: "Çatdırılma & Göndərmə || Shopco Store",
  description: "Çatdırılma & Göndərmə",
  keywords: "Çatdırılma & Göndərmə, Shopco Store",
  author: "Shopco Store",
  robots: "index, follow",
  icons: {
    icon: "/images/favikon.png",
  },
};

export default function page() {
  return (
    <>
      <>
        {/* page-title */}
        <div style={{ marginTop: "90px" }} className="tf-page-title style-2">
          <div className="container-full">
            <div className="heading text-center">Çatdırılma</div>
          </div>
        </div>
        {/* /page-title */}
        {/* main-page */}
        <section className="flat-spacing-25">
          <div className="container">
            <div className="tf-main-area-page tf-page-delivery">
              <div className="box">
                <h4>Çatdırılma</h4>
                <p>Bütün sifarişlər UPS Express ilə göndərilir.</p>
                <p>250 ABŞ dollarından yuxarı sifarişlər üçün həmişə pulsuz çatdırılma.</p>
                <p>Bütün sifarişlər UPS izləmə nömrəsi ilə göndərilir.</p>
              </div>
              <div className="box">
                <h4>Geri qaytarma</h4>
                <p>
                  Orijinal göndərilmə tarixindən 14 gün ərzində eyni vəziyyətdə
                  geri qaytarılan əşyalar tam geri ödəmə və ya mağaza krediti
                  üçün uyğun olacaqdır.
                </p>
                <p>
                  Geri ödəmələr, alış üçün istifadə olunan orijinal ödəniş formasına
                  qaytarılacaqdır.
                </p>
                <p>
                  Müştəri geri qaytarma zamanı çatdırılma xərclərinə cavabdehdir və
                  orijinal alışın çatdırılma/baxım haqları geri qaytarılmır.
                </p>
                <p>Bütün satış məhsulları son alınan məhsullardır.</p>
              </div>
              <div className="box">
                <h4>Yardım</h4>
                <p>
                  Hər hansı digər suallarınız və ya narahatlıqlarınız varsa, bizə
                  müraciət edin.
                </p>
                <p>
                  E-poçt:
                  <a href="mailto:info@saytyarat.com" className="cf-mail">
                    info@saytyarat.com
                  </a>
                </p>
                <p><a href="tel:+994507431206">Telefon: +994 50 743 12 06</a></p>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
