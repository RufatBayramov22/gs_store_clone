import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainContext } from "../utils/MainContext";
import axios from "axios";

const SingleProduct = ({ data }) => {
  const { addToCart, } = useContext(MainContext);

  const [singleProduct, setSingleProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        await axios
          .get(`http://localhost:5000/api/products/${id}`)
          .then((res) => {
            setSingleProduct(res.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getSingleProduct();
  });

  return (
    <main>
      <section className="singleProduct">
        <div className="contanier">
          <div className="row">
            <div className="singleProduct">
              <div className="singleProductDetails">
                <div className="singleProductImg">
                  <img
                    src={`http://localhost:5000/${singleProduct?.productImage}`}
                    alt={singleProduct?.name}
                    key={singleProduct?.name}
                  />
                </div>
                <div className="singleProductDetail">
                  <div className="singleTitle">
                    <p>{singleProduct?.name}</p>
                  </div>
                  <div className="singlePrice">
                    <span className="oldPrice">₺{singleProduct?.lastPrice}</span>
                    <span className="newPrice">
                      ₺{singleProduct?.price}
                    </span>
                  </div>

                  <div className="rating">
                    <input
                      value="star-1"
                      name="star-radio"
                      id="star-1"
                      type="radio"
                    />
                    <label htmlFor="star-1">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                          pathLength="360"
                        ></path>
                      </svg>
                    </label>
                    <input
                      value="star-1"
                      name="star-radio"
                      id="star-2"
                      type="radio"
                    />
                    <label htmlFor="star-2">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                          pathLength="360"
                        ></path>
                      </svg>
                    </label>
                    <input
                      value="star-1"
                      name="star-radio"
                      id="star-3"
                      type="radio"
                    />
                    <label htmlFor="star-3">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                          pathLength="360"
                        ></path>
                      </svg>
                    </label>
                    <input
                      value="star-1"
                      name="star-radio"
                      id="star-4"
                      type="radio"
                    />
                    <label htmlFor="star-4">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                          pathLength="360"
                        ></path>
                      </svg>
                    </label>
                    <input
                      value="star-1"
                      name="star-radio"
                      id="star-5"
                      type="radio"
                    />
                    <label htmlFor="star-5">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                          pathLength="360"
                        ></path>
                      </svg>
                    </label>
                  </div>

                  <div className="kazanc">
                    <span>Kazancınız: ₺210.00</span>
                  </div>
                  <div className="productSize">
                    <span>XS</span>
                    <span>S</span>
                    <span>M</span>
                    <span>L</span>
                    <span>XL</span>
                    <span>XXL</span>
                  </div>
                  <div className="productBtn">
                    <select name="number" id="numbers" className="select" >
                      <option>Adet:1</option>
                      <option>Adet:2</option>
                      <option>Adet:3</option>
                      <option>Adet:4</option>
                      <option>Adet:5</option>
                      <option>Adet:6</option>
                      <option>Adet:7</option>
                      <option>Adet:8</option>
                      <option>Adet:9</option>
                      <option>Adet:10</option>
                      <option>Adet:11</option>
                    </select>
                    <button
                    key={data?.id}
                      type="submit"
                      onClick={() => {
                        addToCart(singleProduct);
                      }}
                    >
                      SEPETE EKLE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SingleProduct;
