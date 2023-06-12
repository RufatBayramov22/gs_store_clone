import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/css";
import CollectionDay from "../assets/images/sliderImg/kiss.webp";
import Sensiz from "../assets/images/sliderImg/sensizolmaz.jpg";
import Champions from "../assets/images/sliderImg/sampiyon-slider-webb.webp"
import Champion23 from "../assets/images/sliderImg/sampiyonn-webb.webp"
import { Link } from 'react-router-dom';
 const SliderSec = () => {
  return (
    <section className="sliderImg">
    <div className="contanier">
      <div className="row">
        <div className="sliderBanner">
          <>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Link>
                  <img src={Champion23} alt="MothersDay" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link>
                  <img src={CollectionDay} alt="Collection" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link>
                <img src={Champions} alt="" />
                </Link>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
        <div className="sensizOlmaz">
          <img src={Sensiz} alt="Sensiz" />
        </div>
      </div>
    </div>
  </section>
  )
}
export default SliderSec