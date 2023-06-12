import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsFillGiftFill } from "react-icons/bs";
import { FaTruckMoving } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import { BsMinecartLoaded } from "react-icons/bs";
import { MainContext } from "../utils/MainContext";
import MenImg from "../assets/images/header/listimg.webp";
import WomanImg from "../assets/images/header/kadin-4.webp";
import Baby from "../assets/images/header/cocuk-2.webp";
import Nike from "../assets/images/header/nike.webp";
import { WiDirectionRight } from "react-icons/wi";
const Header = () => {
  const { cart, removeProduct, cartCount } = useContext(MainContext);

  const [isOpen, setIsOpen] = useState(false);

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let sumPrice = cart.map((product) => {
      return product.price * product.quantity;
    });

    let sum = Number(sumPrice.reduce((acc, curr) => acc + curr, 0).toFixed(2));
    setTotalPrice(sum);
  }, [cart]);

  return (
    <header className="header">
      <div className="contanier">
        <div className="row">
          <div className="logo">
            <Link to="/">
              <img
                src="https://cdn.gsstore.org/images/frontend/logo-header.svg"
                alt="Galatasaray Shop Logo"
              />
            </Link>
          </div>

          <nav className="navBar">
            <div className="sortAble">
              <div className="gift">
                <Link to="/">
                  <BsFillGiftFill fill="orange" />
                </Link>
                <span>Gift Card</span>
              </div>
              <div className="order">
                <Link to="/">
                  <FaTruckMoving fill="#A90534" />
                </Link>
                <span>Siparis Takib</span>
              </div>
              <div className="favorty">
                <Link to="/">
                  <AiOutlineHeart fill="red" />
                </Link>
                <span>Favorilerim</span>
              </div>
              <div className="validate">
                <div className="validateLogin">
                  <AiOutlineUser />
                  <Link to="/register">Giris Yap</Link>
                </div>
                <div className="miniCart">
                  <div
                    className="cart"
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                  >
                    <BsMinecartLoaded fill="white" />
                    <span>Sepetim ({cartCount})</span>
                  </div>
                  <div
                    className={
                      isOpen ? "miniCartOverlay active" : "miniCartOverlay"
                    }
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                  ></div>
                  <ul className={isOpen ? "cartList active" : "cartList"}>
                    {cart.length === 0 ? (
                      <p
                        style={{
                          width: "100%",
                          height: "100px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "black",
                        }}
                      >
                        Sepetiniz Henüz Boş!
                      </p>
                    ) : null}
                    <div className="cartTitle">
                      <h2>Sepetim</h2>
                      <span>{cartCount} Ürün</span>
                    </div>
                    <li className="cartItem" >
                      {cart?.map((item)  => (
                      
                        <div className="addToCart" key={item?.id}>
                          <div className="cartSection">
                            <div className="productImg">
                              <img
                                src={`http://localhost:5000/${item?.productImage}`}
                                alt={item.name}
                                key={item.id}
                              />
                            </div>
                            <div className="icon">
                              <AiOutlineClose
                                fill="black"
                                onClick={() => {
                                  removeProduct(item?.id);
                                }}
                                key={item.id}
                              />
                            </div>
                            <div className="itemInfo">
                              <span className="productName">{item.name}</span>
                              <div className="itemPrice">
                                <span className="lastPrice">
                                  ₺{item.lastPrice}
                                  
                                </span>
                                <span className="itemPrice">₺{item.price} </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="cartFooter">
                        <span>Toplam:{totalPrice}</span>

                        {cart.length === 0 ? null : (
                          <Link className="btn" to="/cart">
                            {" "}
                            Alışverişe Başla
                          </Link>
                        )}
                      </div>
                    </li>
                    <div className="addTocart">
                      <div className="cartImage"></div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <ul className="navList">
              <li className="navItem">
                <NavLink to="/men">NIKE</NavLink>
                <div className="sub nikeSub">
                  <div className="subRow">
                    <div className="subImg">
                      <img src={Nike} alt="MenImg" />
                    </div>
                    <div className="subList">
                      <ul className="dropList">
                        <li className="dropItem">
                          <p>Yeni Gelenler</p>
                        </li>
                        <li className="dropItem">
                          <p>Öne Çıkanlar</p>
                        </li>
                        <li className="dropItemSale">
                          <p>Indirim</p>
                        </li>
                      </ul>
                      <ul className="droppList">
                        <li className="droppItem">
                          <Link to="/men">SweatShirt</Link>
                        </li>
                        <li className="droppItem">
                          <Link to="/men">Ceket</Link>
                        </li>
                        <li className="droppItem">
                          <Link to="/men">Tişört</Link>
                        </li>
                        <li className="droppItem">
                          <Link to="/men">Polo Yaka Tişört</Link>
                        </li>
                        <li className="droppItem">
                          <Link to="/men">Eşofman Altı</Link>
                        </li>
                        <li className="droppItem">
                          <Link to="/men">Eşofman</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="navItem">
                <NavLink to="/men">ERKEK</NavLink>
                <div className="sub">
                  <div className="subRow">
                    <div className="subImg">
                      <img src={MenImg} alt="MenImg" />
                    </div>
                    <div className="subList">
                      <ul className="dropList">
                        <li className="dropItem">
                          <p>Yeni Gelenler</p>
                        </li>
                        <li className="dropItem">
                          <p>Öne Çıkanlar</p>
                        </li>
                        <li className="dropItemSale">
                          <p>Indirim</p>
                        </li>
                      </ul>
                      <ul className="droppList">
                        <li className="droppItem">
                          <Link to="/men">SweatShirt</Link>
                        </li>
                        <li className="droppItem">
                          <Link to="/men">Ceket</Link>
                        </li>
                        <li className="droppItem">
                          <Link to="/men">Tişört</Link>
                        </li>
                        <li className="droppItem">
                          <Link to="/men">Polo Yaka Tişört</Link>
                        </li>
                        <li className="droppItem">
                          <Link to="/men">Eşofman Altı</Link>
                        </li>
                        <li className="droppItem">
                          <Link to="/men">Eşofman</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="navItem">
                <NavLink to="/women">KADIN</NavLink>
                <div className="sub subWoman">
                  <div className="subRow">
                    <div className="subImg">
                      <img src={WomanImg} alt="MenImg" />
                    </div>
                    <div className="subList">
                      <ul className="dropList">
                        <li className="dropItem">
                          <p>Yeni Gelenler</p>
                        </li>
                        <li className="dropItem">
                          <p>Öne Çıkanlar</p>
                        </li>
                        <li className="dropItemSale">
                          <p>Indirim</p>
                        </li>
                      </ul>
                      <ul className="droppList">
                        <li className="droppItem">
                          <Link to="/men">SweatShirt</Link>
                        </li>
                        <li className="droppItem">
                          <Link to="/men">Ceket</Link>
                        </li>
                        <li className="droppItem">
                          <Link to="/men">Tişört</Link>
                        </li>
                        <li className="droppItem">
                          <Link to="/men">Polo Yaka Tişört</Link>
                        </li>
                        <li className="droppItem">
                          <Link to="/men">Eşofman Altı</Link>
                        </li>
                        <li className="droppItem">
                          <Link to="/men">Eşofman</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="navItem">
                <NavLink to="/baby">ÇOCUK</NavLink>
                <div className="sub subBaby">
                  <div className="subRow">
                    <div className="subImg">
                      <img src={Baby} alt="MenImg" />
                    </div>
                    <div className="subList">
                      <ul className="dropList">
                        <li className="dropItem">
                          <p>Yeni Gelenler</p>
                        </li>
                        <li className="dropItem">
                          <p>Öne Çıkanlar</p>
                        </li>
                        <li className="dropItemSale">
                          <p>Indirim</p>
                        </li>
                      </ul>
                      <ul className="droppList">
                        <li className="droppItem">
                          <Link to="/men">SweatShirt</Link>
                        </li>
                        <li className="droppItem">
                          <Link to="/men">Ceket</Link>
                        </li>
                        <li className="droppItem">
                          <Link to="/men">Tişört</Link>
                        </li>
                        <li className="droppItem">
                          <Link to="/men">Polo Yaka Tişört</Link>
                        </li>
                        <li className="droppItem">
                          <Link to="/men">Eşofman Altı</Link>
                        </li>
                        <li className="droppItem">
                          <Link to="/men">Eşofman</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="navItem">
                <NavLink>BEBEK</NavLink>
              </li>
              <li className="navItem">
                <NavLink>HEDIIYE&AKSESSUAR</NavLink>
              </li>
              <li className="navItem">
                <NavLink>KOLLEKSIYON</NavLink>
              </li>
              <li className="navItem">
                <NavLink>KAMPANYA</NavLink>
              </li>
              <li className="navItem">
                <NavLink className="sale">INDIRIM</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/nike" className="insta">
                  INSTASHOP
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="burger">
            <div
              className={isOpen ? "burgerOverlay active" : "burgerOverlay"}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            ></div>
            <span>
              {cartCount}
              <BsMinecartLoaded />
            </span>
            <nav className="burgerMenu">
              <div
                className="burger-menu-icon "
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <div className="burger-menu-icon-line"></div>
                <div className="burger-menu-icon-line"></div>
                <div className="burger-menu-icon-line"></div>
              </div>
              <div
                className={isOpen ? "mainMenu active" : "mainMenu"}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <div className="burgerForm">
                  <AiOutlineUser className="user" />
                  HESABIM
                
                </div>
                <ul className="burgerMenuItem">
                  <li>
                    <Link>Nike</Link>
                    <WiDirectionRight />
                  </li>
                  <li>
                    <Link>Erkek</Link>
                    <WiDirectionRight />
                  </li>
                  <li>
                    <Link>Kadin</Link>
                    <WiDirectionRight />
                  </li>
                  <li>
                    <Link>ÇOCUK</Link>
                    <WiDirectionRight />
                  </li>
                  <li>
                    <Link>Bebek</Link>
                    <WiDirectionRight />
                  </li>
                  <li>
                    <Link>HEDİYE&AKSESUAR</Link>
                    <WiDirectionRight />
                  </li>
                  <li>
                    <Link>KOLEKSİYON</Link>
                    <WiDirectionRight />
                  </li>
                  <li>
                    <Link>KAMPANYA</Link>
                    <WiDirectionRight />
                  </li>
                  <li>
                    <Link>İNDİRİM</Link>
                    <WiDirectionRight />
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
