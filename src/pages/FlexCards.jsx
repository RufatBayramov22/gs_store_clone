import React from 'react'
import IcsahaImg from "../assets/images/aboutcard/icsaha.jpg";
import KampImg from "../assets/images/aboutcard/Kamp&Antrenman icon.gif";
import CollectionImg from "../assets/images/aboutcard/22-23 Kış Koleksiyonu icon.gif";
import FutbolTeamImg from "../assets/images/aboutcard/takim.jpg";
import SensizOlmazImg from "../assets/images/aboutcard/sensizOlmaz.jpg";
import Shareimg from "../assets/images/aboutcard/paylaskazan.jpg";
import GiftCardImg from "../assets/images/aboutcard/giftcard (1).jpg";
import BlogImg from "../assets/images/aboutcard/blog.jpg";
import HomeImg from "../assets/images/aboutcard/ev.gif";
import BasicImg from "../assets/images/aboutcard/basic.gif";
import MatchDayimg from "../assets/images/aboutcard/matchDay.gif";
import Basketbol from "../assets/images/aboutcard/basketbol.gif";
import { Link } from 'react-router-dom';
const FlexCards = () => {
  return (
    <section className="flexCards">
        <div className="contanier">
          <div className="row">
            <div className="about">
              <div className="aboutCards">
                <Link to="/">
                  <img src={IcsahaImg} alt="IcSaha" />
                  İç Saha Forma
                </Link>
              </div>
              <div className="aboutCards">
                <Link to="/">
                  <img src={KampImg} alt="Kamp" />
                  Kamp&Antrenman
                </Link>
              </div>
              <div className="aboutCards ">
                <Link to="/">
                  <img src={CollectionImg} alt="Collection" />
                  22/23 Kış Koleksiyonu
                </Link>
              </div>
              <div className="aboutCards ">
                <Link to="/">
                  <img src={FutbolTeamImg} alt="FutbolTeam" />
                  Futbol Takimi
                </Link>
              </div>
              <div className="aboutCards ">
                <Link to="/">
                  <img src={SensizOlmazImg} alt="SensizOlmaz" />
                  Sensiz Olmaz
                </Link>
              </div>
              <div className="aboutCards ">
                <Link to="/">
                  <img src={Shareimg} alt="PaylasKazan" />
                  Paylaş Kazan
                </Link>
              </div>
              <div className="aboutCards ">
                <Link to="/">
                  <img src={GiftCardImg} alt="GiftCard" />
                  Gift Card
                </Link>
              </div>
              <div className="aboutCards ">
                <Link to="/">
                  <img src={BlogImg} alt="Blog" />
                  Blog
                </Link>
              </div>
              <div className="aboutCards ">
                <Link to="/">
                  <img src={HomeImg} alt="HomeImg" />
                  Ev & Yaşam
                </Link>
              </div>
              <div className="aboutCards ">
                <Link to="/">
                  <img src={BasicImg} alt="Basic" />
                  Basic
                </Link>
              </div>
              <div className="aboutCards ">
                <Link to="/">
                  <img src={MatchDayimg} alt="MatchDay" />
                  Match Day Tshirt
                </Link>
              </div>
              <div className="aboutCards ">
                <Link to="/">
                  <img src={Basketbol} alt="Basketbol"  className='basketbol'/>
                  Basketbol
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default FlexCards