import React from "react";
import Image from "next/image";
export default function About() {
  return (
    <>
      <section className="flat-spacing-23 flat-image-text-section">
        <div className="container">
          <div className="tf-grid-layout md-col-2 tf-img-with-text style-4">
            <div className="tf-image-wrap">
              <Image
                className="lazyload w-100"
                data-src="/images/collections/collection-69.jpg"
                alt="collection-img"
                src="/images/collections/collection-69.jpg"
                width={600}
                height={499}
              />
            </div>
            <div className="tf-content-wrap px-0 d-flex justify-content-center w-100">
              <div>
                <div className="heading">Təsis edilib - 1995</div>
                <div className="text">
                  Shopco, 1995-ci ildə zamansız stilə olan sevgisi ilə tanınan moda həvəskarı <br className="d-xl-block d-none" />Ayşən xanım tərəfindən təsis edilib.
                  Jane həmişə mövsümdən mövsümə istifadə <br className="d-xl-block d-none" />
                  oluna bilən klassik parçalara maraq göstərib və yalnız klassik qadın geyimlərinə
                  <br className="d-xl-block d-none" />  yönələn bir mağaza üçün bazarda boşluq olduğunu hiss edirdi.
                  <br className="d-xl-block d-none" /> İlk mağazasını Azərbaycanının kiçik bir şəhərində açdı və qısa müddət ərzində
                  <br className="d-xl-block d-none" /> yerli müştərilərin sevimlisinə çevrildi.



                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flat-spacing-15">
        <div className="container">
          <div className="tf-grid-layout md-col-2 tf-img-with-text style-4">
            <div className="tf-content-wrap px-0 d-flex justify-content-center w-100">
              <div>
                <div className="heading">Bizim Missiyamız</div>
                <div className="text">
                  Bizim missiyamız insanları davamlı modanın gücü ilə irəliləməyə <br className="d-xl-block d-none" />
                  təşviq etməkdir. Hər kəsin yaxşı görünməsini və özünü yaxşı hiss etməsini <br className="d-xl-block d-none" />
                  istəyirik, eyni zamanda ətraf mühitə kömək etmək üçün öz rolumuzu <br className="d-xl-block d-none" />
                  oynamaq arzusundayıq. Biz inanırıq ki, moda həm şık, həm sərfəli, <br className="d-xl-block d-none" />
                  həm də hər kəs üçün əlçatan olmalıdır. Bədən müsbətliyi və inklüzivlik, <br className="d-xl-block d-none" /> markamızın əsas dəyərləridir.
                </div>
              </div>
            </div>
            <div className="grid-img-group">
              <div className="tf-image-wrap box-img item-1">
                <div className="img-style">
                  <Image
                    className="lazyload"
                    src="/images/collections/collection-71.jpg"
                    data-=""
                    alt="img-slider"
                    width={337}
                    height={388}
                  />
                </div>
              </div>
              <div className="tf-image-wrap box-img item-2">
                <div className="img-style">
                  <Image
                    className="lazyload"
                    src="/images/collections/collection-70.jpg"
                    data-=""
                    alt="img-slider"
                    width={400}
                    height={438}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
