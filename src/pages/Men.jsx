import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ErkekImg from "../assets/images/Erkek/erkek-kis-2.webp";

// axios
import axios from "axios";
// Components
import Card from "../components/Card";
const Men = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      await axios.get("http://localhost:5000/api/products").then((res) => {
        setProducts(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <section className="men">
        <div className="contanier">
          <div className="row">
            <div className="menSection">
              <div className="menNavigate">
                <Link to="/">AnaSayfa /</Link>
                <Link to="/men">ERKEK</Link>
              </div>
              <div className="menImg">
                <img src={ErkekImg} alt="MenImg" />
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
              {products.map((item) => {
                return (
                  <Link to={`/single-product/${item.id}`} key={item.id}>
                    <Card data={item} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Men;
