import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillSkin } from "react-icons/ai";
import { BiRuler } from "react-icons/bi";
import { SlPencil } from "react-icons/sl";
import { GiConfirmed } from "react-icons/gi";
import HomeUniformImg from "../assets/images/Uniforms/icsaha.webp";
import DeplesmanImg from "../assets/images/Uniforms/deplesman.webp";
import GoalKepper from "../assets/images/Uniforms/goalkeper.webp";
const Uniform = () => {
  return (
    <section className="uniforms">
        <div className="contanier">
          <div className="row">
            <div className="designUniform">
              <div className="uniformSteps">
                <div className="uniformTitle">
                  <span className="text">
                    4 Yıldızlı Galatasaray formanı Tasarla
                  </span>
                  <span className="title">
                    Giymek Istedigin{" "}
                    <span className="otherTitle">forma modelini sec.</span>
                  </span>
                </div>
                <div className="uniformIcon">
                  <Link to="/uniform">
                    <AiFillSkin className="icon uniform" />
                    Forma
                  </Link>
                  <Link to="/size">
                    <BiRuler className="icon" />
                    Beden
                  </Link>
                  <Link to="/name">
                    <SlPencil className="icon" />
                    Isim
                  </Link>
                  <Link to="/onay">
                    <GiConfirmed className="icon" />
                    Onay
                  </Link>
                </div>
              </div>
              <div className="uniform">
                <div className="homeUniform">
                  <Link>
                    <img src={HomeUniformImg} alt="Home" />
                    İç Saha
                  </Link>
                </div>
                <div className="homeUniform">
                  <Link>
                    <img src={DeplesmanImg} alt="Deplesman" />
                    Deplasman
                  </Link>
                </div>
                <div className="homeUniform">
                  <Link>
                    <img src={GoalKepper} alt="GoalKepper" />
                    Kaleci
                  </Link>
                </div>
              </div>
              <div className="uniformButton">
                <button className="after">Önceki</button>
                <button className="before">Sonraki</button>
              </div>
            </div>
            <div className="gala">
              <div className="steps">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <div className="galaTitle">
                <h2 className="title">Gala Ürün Bulma Sihirbazı</h2>
              </div>
              <div className="galaBtns">
                <button className="galaBtn">Giyim Ürünleri</button>
                <button className="galaBtn">Ev Ve Ofis Ürünleri</button>
                <button className="galaBtn">Aksesuar Ürünleri</button>
                <button className="galaBtn">Hediye Kutuları</button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Uniform