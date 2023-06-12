import React from 'react'
import { Link } from 'react-router-dom'
import Man from "../assets/images/kindsProduct/erkek_dortlualan.webp";
import Woman from "../assets/images/kindsProduct/kadin_dortlualan.webp";
import Child from "../assets/images/kindsProduct/cocuk_dortlualan.webp";
import Baby from "../assets/images/kindsProduct/bebek_dortlualan.webp";
import Together from "../assets/images/kindsProduct/birliktee.webp";
import Iskender from "../assets/images/kindsProduct/iskenderunn-web.webp";
import Penalty from "../assets/images/penaltyShot/penaltı-oyunu-desktop (1).jpg";
const Kinds = () => {
  return (
    <section className="kindProduct">
    <div className="contanier">
      <div className="row">
        <div className="kinds">
          <Link to="/men">
            <img src={Man} alt="Erkek" />
          </Link>
          <Link to="/women">
            <img src={Woman} alt="Kadin" />
          </Link>
          <Link to="/men">
            <img src={Child} alt="Cocuk" />
          </Link>
          <Link to="/men">
            <img src={Baby} alt="Bebek" />
          </Link>
        </div>
        <div className="campSandalya">
          <div className="together">
            <img src={Together} alt="Birlikde" />
            <h2>Birlikte 1905 Forma</h2>
            <p>Özel Tasarım Forma ile Destek Ol!</p>
            <button>İNCELE</button>
          </div>
          <div className="together">
            <img src={Iskender} alt="Birlikde" />
            <h2>İskenderunspor Forma</h2>
            <p>Özel Tasarım Forma ile Destek Ol!</p>
            <button>İNCELE</button>
          </div>
        </div>
        <div className="penalty">
          <Link to="https://games.gsstore.org/" target="blank">
            <img src={Penalty} alt="Penaltyshoot" />
          </Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Kinds