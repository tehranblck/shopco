import { socialLinksWithBorder } from "../../../data/socials";
import React from "react";

export default function Map2() {
  return (
    <section className="flat-spacing-9">
      <div className="container">
        <div className="tf-grid-layout gap-0 lg-col-2">
          <div className="w-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194473.52377495368!2d49.69014889396694!3d40.39447550898927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2zQmFrxLE!5e0!3m2!1saz!2saz!4v1740739068946!5m2!1saz!2saz"
              width="100%"
              height={894}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="tf-content-left has-mt">
            <div className="sticky-top">
              <h5 className="mb_20">Mağazamıza Ziyarət Edin</h5>
              <div className="mb_20">
                <p className="mb_15">
                  <strong>Ünvan</strong>
                </p>
                <p>66 Mott St, Nyu-York, Nyu-York, Poçt Kodu: 10006, AS</p>
              </div>
              <div className="mb_20">
                <p className="mb_15">
                  <strong>Telefon</strong>
                </p>
                <p>(623) 934-2400</p>
              </div>
              <div className="mb_20">
                <p className="mb_15">
                  <strong>Email</strong>
                </p>
                <p>EComposer@example.com</p>
              </div>
              <div className="mb_36">
                <p className="mb_15">
                  <strong>İş Saatları</strong>
                </p>
                <p className="mb_15">Mağazamız alış-veriş üçün yenidən açılıb,</p>
                <p>hər gün 11:00-dan 19:00-a qədər dəyişdirmə və satış mövcuddur</p>
              </div>
              <div>
                <ul className="tf-social-icon d-flex gap-20 style-default">
                  {socialLinksWithBorder.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className={`box-icon link round ${link.className} ${link.borderClass}`}
                      >
                        <i
                          className={`icon ${link.iconSize} ${link.iconClass}`}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
