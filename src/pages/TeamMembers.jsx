import React from 'react'
import { Link } from "react-router-dom";
//  Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination } from "swiper";
import Muslera from "../assets/images/TeamMembers/muslera-1 (1).webp";
import Icardi from "../assets/images/TeamMembers/Icardi.webp";
import Boey from "../assets/images/TeamMembers/Sacha.webp"
import Sergio from "../assets/images/TeamMembers/sergioo-yeni.webp";
import Torreria from "../assets/images/TeamMembers/TORREIRA.webp";
import Nelson from "../assets/images/TeamMembers/nelsson-yenii.webp";
import Abdul from "../assets/images/TeamMembers/abdulkerim-bardakci-yenii.webp";
import Zaniolo from "../assets/images/TeamMembers/zaniolo.webp";
import Kerem from "../assets/images/TeamMembers/Kerem.webp";
import Dubois from "../assets/images/TeamMembers/dubois.webp"
import Rashica from "../assets/images/TeamMembers/RASHICA_3.webp"
import Mertens from "../assets/images/TeamMembers/MERTENS.webp"
import Midstjo  from "../assets/images/TeamMembers/midtsjo.webp"
import Gomis from "../assets/images/TeamMembers/gomis-2.webp"
import "swiper/css";
const TeamMembers = () => {
  return (
    <section className="teamMembers">
    <div className="contanier">
      <div className="row">
        <h2>Futbol Takimi</h2>
        <div className="teamSlider">
          <>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
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
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Link to=""></Link>
                <img src={Muslera} alt="Muslera" />
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <img src={Icardi} alt="Icardi" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <img src={Boey} alt="Sacha" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <img src={Nelson} alt="Nelson" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <img src={Abdul} alt="AbdulKerim" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <img src={Sergio} alt="Oliveria" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <img src={Torreria} alt="Torerria" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <img src={Zaniolo} alt="Nicola Zaniolo" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <img src={Kerem} alt="Kerem" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <img src={Dubois} alt="Dubois" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <img src={Rashica} alt="Dubois" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <img src={Mertens} alt="Dubois" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <img src={Midstjo} alt="Dubois" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <img src={Gomis} alt="Dubois" />
                </Link>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </div>
  </section>
  )
}

export default TeamMembers