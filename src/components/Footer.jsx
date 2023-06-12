import React from 'react'
import { Link } from 'react-router-dom'
import {ImFacebook} from "react-icons/im"
import{ CiTwitter} from "react-icons/ci"
import {AiOutlineInstagram,AiOutlineYoutube} from "react-icons/ai"
import {FaPinterestP,FaTiktok} from "react-icons/fa"


const Footer = () => {


  return (
    <footer className='footer'>
          <div className="uiGradient"></div>
      <div className="contanier">
        <div className="row">
          <div className="footerList">
            <div className="footerContent">
              <div className="leftContent">
                  <li className="title">
                    <Link to="/">GSStore – Galatasaray SK</Link>
                  </li>
                 <ul className="navList">
                   <div className="left">
                   <li className="navItem">
                    <Link>Hakkımızda</Link>
                  </li>
                  <li className="navItem">
                  <Link>İletişim</Link>
                  </li>
                  <li className="navItem">
                    <Link>Sık Sorulan Sorular</Link>
                  </li>
                  <li className="navItem">
                    <Link>Teslimat ve İade</Link>
                  </li>
                  <li className="navItem">
                    <Link>Kişisel Verilerin Korunması</Link>
                  </li>
                  <li className="navItem">
                    <Link>Kullanım Koşulları</Link>
                  </li>
                  <li className="navItem">
                    <Link>Mağazalarımız</Link>
                  </li>
                   </div>
                  <div className="right">
                  <li className="navItem">
                    <Link>Blog</Link>
                  </li>
                  <li className="navItem">
                    <Link>Bilgi Toplumu Hizmetleri</Link>
                  </li>
                  <li className="navItem">
                    <Link>Futbol Takımı</Link>
                  </li>
                  <li className="navItem">
                    <Link>Site Haritası</Link>
                  </li>
                  <li className="navItem">
                    <Link>Kampanya Koşulları</Link>
                  </li>
                  <li className="navItem">
                    <Link>Gizlilik ve Güvenlik</Link>
                  </li>
                  <li className="navItem">
                    <Link>Kariyer</Link>
                  </li>
                  </div>
                 </ul>
              </div>
              <div className="rightContent">
                <li className="title">
                  <Link>Online Alışveriş</Link>
                </li>
                <ul className="navList">
                    <div className="left">
                      <li className="navItem">
                        <Link>Nike Football</Link>
                      </li>
                      <li className="navItem">
                        <Link>Erkek</Link>
                      </li>
                      <li className="navItem">
                        <Link>Kadin</Link>
                      </li>
                      <li className="navItem">
                        <Link>Çocuk</Link>
                      </li>
                      <li className="navItem">
                        <Link>Bebek</Link>
                      </li>
                    </div>
                    <div className="right">
                      <li className="navItem">
                        <Link>Hediye&Aksesuar</Link>
                      </li>
                      <li className="navItem">
                        <Link>Koleksiyon</Link>
                      </li>
                      <li className="navItem">
                        <Link>Kampanya</Link>
                      </li>
                      <li className="navItem">
                        <Link>İndirim</Link>
                      </li>
                    </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="contact">
            <div className="socialMedia">
              <Link to="https://www.facebook.com/" target='blank'>
              <ImFacebook className='icon'/>
              </Link>
              <Link to="https://twitter.com/" target='blank'>
                <CiTwitter className='icon'/>
              </Link>
              <Link to="https://www.instagram.com/" target='blank'>
                <AiOutlineInstagram className='icon'/>
                </Link>
              <Link to="https://www.youtube.com/" target='blank'>
                <AiOutlineYoutube className='icon'/>
                </Link>
              <Link to="https://www.pinterest.com/" target='blank'>
                <FaPinterestP className='icon'/>
                </Link>
              <Link to="https://www.tiktok.com/" target='blank'>
                <FaTiktok className='icon' />
                </Link>
            </div>
            <div className="phoneContact">
              <Link to="tel:444 1905" className='number'>444 1905</Link>
              <p>Müşteri Hizmetleri Çalışma Saatleri</p>
              <p>Haftanın Her Günü: 09.00-18.00</p>
            </div>
     
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer