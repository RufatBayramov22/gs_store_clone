import React from "react";
import { HiOutlineHeart } from "react-icons/hi";
const Card = ({ data }) => {
  return (
    <div className="products">
      <div className="productDetails">
        <div className="productDetail">
          <div className="productImg">
            <div>
              <img
                src={`http://localhost:5000/${data?.productImage}`}
                alt={data.name}
              />
            </div>
            <HiOutlineHeart className="heart" />
          </div>
          <div className="productTitle">
            <span>Sweetshirt</span>
            <p>{data.name}</p>
          </div>
          <div className="productSale">
            <span className="sale">{data.details}</span>
          </div>
          <div className="productPrice">
            <span className="oldPrice">{data.lastPrice}</span>
            <span className="newPrice">{data.price}</span>
          </div>
          <div className="kazanc"> 
            <span>Kazancınız: ₺348.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
