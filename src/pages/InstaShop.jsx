import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import GirlInsta from "../assets/images/InstaShop/girlInsta.jpg";
import "swiper/css";
import { Link } from "react-router-dom";
const InstaShop = () => {
  return (
    <section className="instaShop">
      <div className="contanier">
        <div className="row">
          <div className="title">
            <div className="instaLogo">
              <img
                src="https://cdn.gsstore.org/images/frontend/insta-logo.svg"
                alt=""
              />
              <h1>InstaShop</h1>
            </div>
            <p>#gsstore</p>
          </div>
          <div className="slider">
            <>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                breakpoints={{
                  "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  "@0.75": {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  "@1.00": {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  "@1.50": {
                    slidesPerView: 4,
                    spaceBetween: 50,
                  },
                }}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Link to="">
                    <img src={GirlInsta} alt="Girl" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to="">
                    <img src={GirlInsta} alt="Girl" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to="">
                    <img src={GirlInsta} alt="Girl" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to="">
                    <img src={GirlInsta} alt="Girl" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to="">
                    <img src={GirlInsta} alt="Girl" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to="">
                    <img src={GirlInsta} alt="Girl" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to="">
                    <img src={GirlInsta} alt="Girl" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to="">
                    <img src={GirlInsta} alt="Girl" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to="">
                    <img src={GirlInsta} alt="Girl" />
                  </Link>
                </SwiperSlide>
              </Swiper>
            </>
          </div>
          <div className="instaBtn">
            <button className="btn">Daha Fazla</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstaShop;
