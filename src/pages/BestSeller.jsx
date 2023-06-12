import React from 'react'
import BestProduct from "../assets/images/bestseller/shirt.webp";
import { Link } from "react-router-dom";
//  Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination } from "swiper";
import "swiper/css";

const BestSeller = () => {
  return (

    <section className="bestSeller">
    <div className="contanier">
      <div className="row">
        <h2>Çok Satanlara Göz At</h2>
        <div className="productsBtn">
          <Link to="/men">Erkek</Link>
          <Link to="/women">Kadin</Link>
          <Link to="/baby">Çocuk</Link>
        </div>
        <div className="bestProducts">
       
          <>
  <Swiper
    slidesPerView={1}
    spaceBetween={10}
    pagination={{
      clickable: true,
    }}
    breakpoints={{
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }}
    modules={[Pagination]}
    className="mySwiper"
  >
    <SwiperSlide>
    <div className="bestProduct">
            <div className="bestProductImg">
              <img src={BestProduct} alt="Shirt" />
            </div>
            <div className="bestProductSize">
              <span>XS</span>
              <span>S</span>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
            </div>
            <div className="bestProductTitle">
              <p>Galatasaray Erkek Şort E221286</p>
            </div>
            <div className="bestProductPrice">
              <span className="lastPrice">₺399.99</span>
              <span className="newPrice">₺279.99</span>
            </div>
            <div className="addToCartbtn">
              <button className="btn">Sepete ekle</button>
            </div>
          </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="bestProduct">
            <div className="bestProductImg">
              <img src={BestProduct} alt="Shirt" />
            </div>
            <div className="bestProductSize">
              <span>XS</span>
              <span>S</span>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
            </div>
            <div className="bestProductTitle">
              <p>Galatasaray Erkek Şort E221286</p>
            </div>
            <div className="bestProductPrice">
              <span className="lastPrice">₺399.99</span>
              <span className="newPrice">₺279.99</span>
            </div>
            <div className="addToCartbtn">
              <button className="btn">Sepete ekle</button>
            </div>
          </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="bestProduct">
            <div className="bestProductImg">
              <img src={BestProduct} alt="Shirt" />
            </div>
            <div className="bestProductSize">
              <span>XS</span>
              <span>S</span>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
            </div>
            <div className="bestProductTitle">
              <p>Galatasaray Erkek Şort E221286</p>
            </div>
            <div className="bestProductPrice">
              <span className="lastPrice">₺399.99</span>
              <span className="newPrice">₺279.99</span>
            </div>
            <div className="addToCartbtn">
              <button className="btn">Sepete ekle</button>
            </div>
          </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="bestProduct">
            <div className="bestProductImg">
              <img src={BestProduct} alt="Shirt" />
            </div>
            <div className="bestProductSize">
              <span>XS</span>
              <span>S</span>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
            </div>
            <div className="bestProductTitle">
              <p>Galatasaray Erkek Şort E221286</p>
            </div>
            <div className="bestProductPrice">
              <span className="lastPrice">₺399.99</span>
              <span className="newPrice">₺279.99</span>
            </div>
            <div className="addToCartbtn">
              <button className="btn">Sepete ekle</button>
            </div>
          </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="bestProduct">
            <div className="bestProductImg">
              <img src={BestProduct} alt="Shirt" />
            </div>
            <div className="bestProductSize">
              <span>XS</span>
              <span>S</span>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
            </div>
            <div className="bestProductTitle">
              <p>Galatasaray Erkek Şort E221286</p>
            </div>
            <div className="bestProductPrice">
              <span className="lastPrice">₺399.99</span>
              <span className="newPrice">₺279.99</span>
            </div>
            <div className="addToCartbtn">
              <button className="btn">Sepete ekle</button>
            </div>
          </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="bestProduct">
            <div className="bestProductImg">
              <img src={BestProduct} alt="Shirt" />
            </div>
            <div className="bestProductSize">
              <span>XS</span>
              <span>S</span>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
            </div>
            <div className="bestProductTitle">
              <p>Galatasaray Erkek Şort E221286</p>
            </div>
            <div className="bestProductPrice">
              <span className="lastPrice">₺399.99</span>
              <span className="newPrice">₺279.99</span>
            </div>
            <div className="addToCartbtn">
              <button className="btn">Sepete ekle</button>
            </div>
          </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="bestProduct">
            <div className="bestProductImg">
              <img src={BestProduct} alt="Shirt" />
            </div>
            <div className="bestProductSize">
              <span>XS</span>
              <span>S</span>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
            </div>
            <div className="bestProductTitle">
              <p>Galatasaray Erkek Şort E221286</p>
            </div>
            <div className="bestProductPrice">
              <span className="lastPrice">₺399.99</span>
              <span className="newPrice">₺279.99</span>
            </div>
            <div className="addToCartbtn">
              <button className="btn">Sepete ekle</button>
            </div>
          </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="bestProduct">
            <div className="bestProductImg">
              <img src={BestProduct} alt="Shirt" />
            </div>
            <div className="bestProductSize">
              <span>XS</span>
              <span>S</span>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
            </div>
            <div className="bestProductTitle">
              <p>Galatasaray Erkek Şort E221286</p>
            </div>
            <div className="bestProductPrice">
              <span className="lastPrice">₺399.99</span>
              <span className="newPrice">₺279.99</span>
            </div>
            <div className="addToCartbtn">
              <button className="btn">Sepete ekle</button>
            </div>
          </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="bestProduct">
            <div className="bestProductImg">
              <img src={BestProduct} alt="Shirt" />
            </div>
            <div className="bestProductSize">
              <span>XS</span>
              <span>S</span>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
            </div>
            <div className="bestProductTitle">
              <p>Galatasaray Erkek Şort E221286</p>
            </div>
            <div className="bestProductPrice">
              <span className="lastPrice">₺399.99</span>
              <span className="newPrice">₺279.99</span>
            </div>
            <div className="addToCartbtn">
              <button className="btn">Sepete ekle</button>
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

export default BestSeller