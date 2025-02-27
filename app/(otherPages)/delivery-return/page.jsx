
import React from "react";

export default function page() {
  return (
    <>
      <>
        {/* page-title */}
        <div style={{ marginTop: "90px" }} className="tf-page-title style-2">
          <div className="container-full">
            <div className="heading text-center">Çatdırılma və qaytarılma</div>
          </div>
        </div>
        {/* /page-title */}
        {/* main-page */}
        <section className="flat-spacing-25">
          <div className="container">
            <div className="tf-main-area-page tf-page-delivery">
              <div className="box">
                <h4>Çatdırılma</h4>
                <ul className="tag-list">
                  <li>Bütün sifarişler UPS Express ilə çatdırılır.</li>
                  <li>Ümumiyyətlə 250 AZN-dən yuxarı sifarişlər üçün pulsuz çatdırılma.</li>
                  <li>Bütün sifarişlər UPS tracking nömrəsi ilə çatdırılır.</li>
                </ul>
              </div>
              <div className="box">
                <h4>Qaytarılma</h4>
                <ul className="tag-list">
                  <li>
                    Sifarişinizin göndərilməsi 14 gündən sonra qaytarılır.
                    tək şəkildə qaytarılır.
                  </li>
                  <li>
                    Qaytarılma məbləği ödənişinizin orijinal formasından geri qaytarılır.
                  </li>
                  <li>
                    Müştəri qaytarılma üçün çatdırılma xərcləri ödənir.
                  </li>
                  <li>Satılan məhsullar final alış-satış məbləğidir.</li>
                </ul>
              </div>
              <div className="box">
                <h4>Help</h4>
                <p>
                  Əgər sizin ilə əla bağlı soru qoymaq istəyirsinizsə, bizə bir şəkildə qoşulun.
                </p>
                <p className="text_black-2">Email: contact@domain.com</p>
                <p className="text_black-2">Phone: +1 (23) 456 789</p>
              </div>
            </div>
          </div>
        </section>
      </>

    </>
  );
}
