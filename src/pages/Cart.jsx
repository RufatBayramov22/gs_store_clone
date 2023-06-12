import React, { useContext, useState, useEffect } from "react";

import { Link,  } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { GoTriangleLeft } from "react-icons/go";

import { MainContext } from "../utils/MainContext";
const Cart = () => {
  const { cart, removeProduct, setCart } = useContext(MainContext);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let sumPrice = cart.map((product) => {
      return product.price * product.quantity;
    });

    let sum = Number(sumPrice.reduce((acc, curr) => acc + curr, 0).toFixed(2));
    setTotalPrice(sum);
  }, [cart]);

  const increment = (product) => {
    const exitingProduct = cart.find((item) => item.id === product.id);
    if (exitingProduct) {
      const updateCart = cart.map((data) => {
        if (data.id === exitingProduct.id) {
          return {
            ...data,
            quantity: exitingProduct.quantity + 1,
          };
        } else {
          return data;
        }
      });
      setCart(updateCart);
    }
  };
  const decrement = (product) => {
    const exitingProduct = cart.find((item) => item.id === product.id);
    if (exitingProduct) {
      const updateCart = cart.map((data) => {
        if (data.id === exitingProduct.id && data.quantity > 1) {
          return {
            ...data,
            quantity: exitingProduct.quantity - 1,
          };
        } else {
          return data;
        }
      });
      setCart(updateCart);
    }
  };

  return (
    <section className="myCart">
      <div className="contanier">
        <div className="row">
          <div className="info">
            <div className="freeKargo">
              <h5>Ücretsiz Kargo</h5>
              <p>
                700 TL ve üzeri yurtiçi alışverişlerinizde geçerli ücretsiz
                kargo
              </p>
            </div>
            <div className="taksit">
              <h5>Tüm Ürünlerde Taksit İmkanı</h5>
              <p>
                Tüm alışverişlerinizde anlaşmalı bankaların kredi kartlarına
                vade farksız 6 taksit avantajı!
              </p>
            </div>
            <div className="iade">
              <h5>Ücretsiz İade</h5>
              <p>30 gün boyunca dilediğiniz zaman iade etme fırsatı</p>
            </div>
          </div>
          <div className="cartSection">
            <div className="cart">
            
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
              {cart.map((item) => (
                <div className="cartInfo" key={item.id}>
                  <div className="cartImages">
                    <div className="cartImage">
                      <img
                        src={`http://localhost:5000/${item.productImage}`}
                        alt={item.name}
                        key={item.id}
                      />
                    </div>
                    <div className="cartText">
                      <p>Galatasaray sweetshirt</p>
                      <span>Siyah</span>
                    </div>
                  </div>
                  <div className="quantity">
                    <span
                      className="quantityMinus"
                      onClick={() => {
                        decrement(item);
                      }}
                    >
                      -
                    </span>
                    <span className="quantityInput">{item.quantity}</span>
                    <span
                      className="quantityPlus"
                      onClick={() => {
                        increment(item);
                      }}
                    >
                      +
                    </span>
                  </div>
                  <div className="cartPrice">
                    <span className="price">₺489,99</span>
                  </div>
                  <div className="icon" onClick={()=>{
                    removeProduct(item?.id)
                  }}>
                    <AiOutlineClose className="close" />
                    
                  </div>
                </div>
              ))}
              <div className="final">
                <div className="text">
                  <Link to="/men">
                    <GoTriangleLeft className="icon" />
                    Alışverişe Devam Et
                  </Link>
                </div>
                <div className="checkOut">
                <span className="total">Toplam:₺{totalPrice}</span>
                </div>
              
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
