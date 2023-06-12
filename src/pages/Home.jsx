import React from "react";
//  Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import FlexCards from "./FlexCards";
import SliderSec from "./SliderSec";
import Kinds from "./Kinds";
import Uniform from "./Uniform";
import InstaShop from "./InstaShop";
import TeamMembers from "./TeamMembers";
import BestSeller from "./BestSeller";
const Home = () => {
  return (
    <main>
      {/*home section*/}
      <section className="home">
        <div className="contanier">
          <div className="row">
            <div className="slider">
              <>
                <Swiper className="mySwiper">
                  <SwiperSlide className="textSlider">
                    Dünya'nın Her Yerine Kargo Gönderimi! ✈️
                  </SwiperSlide>
                  <SwiperSlide className="textSlider">
                    İlk Alışverişe Özel Kargo Ücretsiz! 🛒
                  </SwiperSlide>
                  <SwiperSlide className="textSlider">
                    Havale ve EFT Ödemelerinde %5 İNDİRİM!
                  </SwiperSlide>
                  <SwiperSlide className="textSlider">
                    GALATASARAY'a Adanmış Hayatlar!
                  </SwiperSlide>
                </Swiper>
              </>
            </div>
          </div>
        </div>
      </section>
      {/* flex cards section*/}
      <FlexCards />
      {/*slider img*/}
      <SliderSec />
      {/*Kind Products*/}
      <Kinds />
      {/*all products*/}
      <Uniform />
      {/*instaShop section*/}
      <InstaShop />
      {/*All team members*/}
      <TeamMembers />
      {/*bestseller*/}
      <BestSeller />
    </main>
  );
};

export default Home;
