import React from 'react'
import Babybg from "../assets/images/Baby/COCUK-kis-2.webp"
import ProductBaby from "../assets/images/Baby/product.webp"
import { Link } from 'react-router-dom'
import {HiOutlineHeart} from "react-icons/hi"
const Baby = () => {
  return (
    <main>
      <section className="baby">
        <div className="contanier">
          <div className="row">
            <div className="menSection">
              <div className="menNavigate">
                <Link to="/">AnaSayfa /</Link>
                <Link to="/men">ÇOCUK</Link>
              </div>
              <div className="menImg">
                <img src={Babybg} alt="MenImg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="manCategory">
        <div className="contanier">
          <div className="row">
            <div className="category">
              <h4>Erkek</h4>
              <ul className="categoryList">
                <li className="categoryItem">
                  <Link>Sweatshirt</Link>
                </li>
                <li className="categoryItem">
                  <Link>Mont</Link>
                </li>
                <li className="categoryItem">
                  <Link>Ceket</Link>
                </li>
                <li className="categoryItem">
                  <Link>Tişört</Link>
                </li>
                <li className="categoryItem">
                  <Link>Polo Yaka Tişört</Link>
                </li>
                <li className="categoryItem">
                  <Link>Eşofman Altı</Link>
                </li>
                <li className="categoryItem">
                  <Link>Eşofman</Link>
                </li>
                <li className="categoryItem">
                  <Link>Yağmurluk</Link>
                </li>
                <li className="categoryItem">
                  <Link>Şort</Link>
                </li>
                <li className="categoryItem">
                  <Link>Mayo</Link>
                </li>
                <li className="categoryItem">
                  <Link>Çorap</Link>
                </li>
              </ul>
            </div>
            <div className="products">
              <div className="productDetails">
                <div className="productDetail">
                  <div className="productImg">
                    <Link><img src={ProductBaby} alt="" /></Link>
                    <HiOutlineHeart className="heart" />
                  </div>
                  <div className="productTitle">
                    <span>Sweetshirt</span>
                    <Link to="/product-detail">
                      Galatasaray Erkek Sweatshirt E222202
                    </Link>
                  </div>
                  <div className="productSale">
                    <span className="sale">%30 Indirim</span>
                  </div>
                  <div className="productPrice">
                    <span className="oldPrice">₺869,99</span>
                    <span className="newPrice">₺608,99</span>
                  </div>
                  <div className="kazanc">
                    <span>Kazancınız: ₺348.00</span>
                  </div>
                </div>
              </div>
              <div className="productDetails">
                <div className="productDetail">
                  <div className="productImg">
                  <Link><img src={ProductBaby} alt="" /></Link>
                    <HiOutlineHeart className="heart" />
                  </div>
                  <div className="productTitle">
                    <span>Sweatshirt</span>
                    <Link to="/product-detail">
                      Galatasaray Erkek Sweatshirt E222202
                    </Link>
                  </div>
                  <div className="productSale">
                    <span className="sale">%30 Indirim</span>
                  </div>
                  <div className="productPrice">
                    <span className="oldPrice">₺869,99</span>
                    <span className="newPrice">₺521,99</span>
                  </div>
                  <div className="kazanc">
                    <span>Kazancınız: ₺348.00</span>
                  </div>
                </div>
              </div>
              <div className="productDetails">
                <div className="productDetail">
                  <div className="productImg">
                  <Link><img src={ProductBaby} alt="" /></Link>
                    
                    <HiOutlineHeart className="heart" />
                  </div>
                  <div className="productTitle">
                    <span>Sweatshirt</span>
                    <Link to="/product-detail">
                      Galatasaray Erkek Sweatshirt E222202
                    </Link>
                  </div>
                  <div className="productSale">
                    <span className="sale">%30 Indirim</span>
                  </div>
                  <div className="productPrice">
                    <span className="oldPrice">₺869,99</span>
                    <span className="newPrice">₺521,99</span>
                  </div>
                  <div className="kazanc">
                    <span>Kazancınız: ₺348.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Baby