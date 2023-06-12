import React from 'react'
import RuckShirt from "../assets/images/AllProducts/ruck.webp";
import Polo from "../assets/images/AllProducts/Polo.webp";
import Sweetshirt from "../assets/images/AllProducts/SWEETSHIRT.webp";
import WhiteShirt from "../assets/images/AllProducts/whiteShirt.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination } from "swiper";
import "swiper/css";
import { Link } from 'react-router-dom';


const AllProduct = () => {
  return (
    <section className="products">
    <div className="contanier">
      <div className="row">
        <h2 className="title">Ayın 11'ini Keşfet</h2>
        <div className="sweetProduct">
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
                <div className="sweetProduct">
                  <div className="productImg">
                    <img src={Sweetshirt} alt="Sweet" />
                  </div>
                  <div className="productDetail">
                    <p>Galatasaray Erkek Sweatshirt E222202</p>
                    <div className="priceDetails">
                      <span className="newPrice">₺799.99</span>
                    </div>
                    <Link className="btn">Ürünü İncele</Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="sweetProduct">
                  <div className="productImg">
                    <img src={RuckShirt} alt="Sweet" />
                  </div>
                  <div className="productDetail">
                    <p>Galatasaray Erkek Sweatshirt E222202</p>
                    <div className="priceDetails">
                      <span className="newPrice">₺538.99</span>
                    </div>
                    <Link className="btn">Ürünü İncele</Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="sweetProduct">
                  <div className="productImg">
                    <img src={Polo} alt="Sweet" />
                  </div>
                  <div className="productDetail">
                    <p>Galatasaray Erkek Sweatshirt E222202</p>
                    <div className="priceDetails">
                      <span className="lastPrice">₺869.99</span>
                      <span className="newPrice">₺608.99</span>
                    </div>
                    <Link className="btn">Ürünü İncele</Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="sweetProduct">
                  <div className="productImg">
                    <img src={Sweetshirt} alt="Sweet" />
                  </div>
                  <div className="productDetail">
                    <p>Galatasaray Erkek Sweatshirt E222202</p>
                    <div className="priceDetails">
                      <span className="lastPrice">₺869.99</span>
                      <span className="newPrice">₺608.99</span>
                    </div>
                    <Link className="btn">Ürünü İncele</Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="sweetProduct">
                  <div className="productImg">
                    <img src={WhiteShirt} alt="Sweet" />
                  </div>
                  <div className="productDetail">
                    <p>Galatasaray Erkek Sweatshirt E222202</p>
                    <div className="priceDetails">
                      <span className="lastPrice">₺869.99</span>
                      <span className="newPrice">₺608.99</span>
                    </div>
                    <Link className="btn">Ürünü İncele</Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="sweetProduct">
                  <div className="productImg">
                    <img src={RuckShirt} alt="Sweet" />
                  </div>
                  <div className="productDetail">
                    <p>Galatasaray Erkek Sweatshirt E222202</p>
                    <div className="priceDetails">
                      <span className="lastPrice">₺869.99</span>
                      <span className="newPrice">₺608.99</span>
                    </div>
                    <Link className="btn">Ürünü İncele</Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="sweetProduct">
                  <div className="productImg">
                    <img src={WhiteShirt} alt="Sweet" />
                  </div>
                  <div className="productDetail">
                    <p>Galatasaray Erkek Sweatshirt E222202</p>
                    <div className="priceDetails">
                      <span className="lastPrice">₺869.99</span>
                      <span className="newPrice">₺608.99</span>
                    </div>
                    <Link className="btn">Ürünü İncele</Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="sweetProduct">
                  <div className="productImg">
                    <img src={WhiteShirt} alt="Sweet" />
                  </div>
                  <div className="productDetail">
                    <p>Galatasaray Erkek Sweatshirt E222202</p>
                    <div className="priceDetails">
                      <span className="newPrice">₺608.99</span>
                    </div>
                    <Link className="btn">Ürünü İncele</Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="sweetProduct">
                  <div className="productImg">
                    <img src={Sweetshirt} alt="Sweet" />
                  </div>
                  <div className="productDetail">
                    <p>Galatasaray Erkek Sweatshirt E222202</p>
                    <div className="priceDetails">
                      <span className="newPrice">₺1000.99</span>
                    </div>
                    <Link className="btn">Ürünü İncele</Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AllProduct