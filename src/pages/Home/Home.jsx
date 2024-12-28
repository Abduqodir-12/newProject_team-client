import React from 'react';
import logo from '../../images/Avtoelon-logo.jpg';
import './Home.css';
import HeaderMenuList from '../../components/HeaderMenuList/HeaderMenuList';
import CaruselAvto from '../../components/CaruselAvto/CaruselAvto';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='Home'>
      <div className="container">
        <div className="header">
          <img src={logo} alt="Logo" className='logo' />

          <ul className="navList">
            <li className="navItem">
              <a href="/" className="navLink">Avtomobillar</a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink">Ehtiyot qismlari va tovarlar</a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink">Maxsus texnika</a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink">Ta'mirlash va xizmatlar</a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink">Yangiliklar</a>
            </li>
          </ul>

          <div className='navBtnBox'>
            <Link to='/Sell' className="navBtn">+ Sotish</Link>
            <span className='navSpan'>Hozir sayta 6000</span>
          </div>
        </div>

        <div className="main">
          <div className='headerMenuList'>
            <HeaderMenuList />
          </div>

          <div className="caruselAvto">
            <CaruselAvto />
          </div>
          <hr />

          <div className="marka">
            <h3 className='caruselAvtoHeading'>Marka bo'yicha avtomobil tanlovi</h3>
            <ul className='markaList'>
              <li className="markaItemBox">
                <p className='markaNames'>Aito <span>14</span></p>
                <p className='markaNames'>Audi <span>29</span></p>
                <p className='markaNames'>BMW <span>123</span></p>
                <p className='markaNames'>BYD <span>847</span></p>
              </li>
              <li className="markaItemBox">
                <p className='markaNames'>Dodge <span>7</span></p>
                <p className='markaNames'>FAW <span>46</span></p>
                <p className='markaNames'>Ford <span>15</span></p>
                <p className='markaNames'>Foton <span>49</span></p>
                <p className='markaNames'>GAC <span>57</span></p>
              </li>
              <li className="markaItemBox">
                <p className='markaNames'>Haval <span>34</span></p>
                <p className='markaNames'>Hyundai <span>475</span></p>
                <p className='markaNames'>Isuzu <span>13</span></p>
                <p className='markaNames'>JAC <span>172</span></p>
                <p className='markaNames'>jetour <span>172</span></p>
              </li>
              <li className="markaItemBox">
                <p className='markaNames'>Leapmotor <span>145</span></p>
                <p className='markaNames'>MG <span>15</span></p>
                <p className='markaNames'>Mazda <span>18</span></p>
                <p className='markaNames'>Mercedes-Benz <span>238</span></p>
                <p className='markaNames'>Mitsubishi <span>15</span></p>
                <p className='markaNames'>Moskvich <span>291</span></p>
              </li>
              <li className="markaItemBox">
                <p className='markaNames'>Opel <span>38</span></p>
                <p className='markaNames'>Ravon <span>174</span></p>
                <p className='markaNames'>Renault <span>11</span></p>
                <p className='markaNames'>SWM <span>8</span></p>
                <p className='markaNames'>Shineray <span>34</span></p>
              </li>
              <li className="markaItemBox">
                <p className='markaNames'>UAZ <span>118</span></p>
                <p className='markaNames'>ZAZ <span>42</span></p>
                <p className='markaNames'>Zeekr <span>61</span></p>
                <p className='markaNames'>Wuling <span>8</span></p>
                <p className='markaNames'>Voyah <span>22</span></p>
              </li>
            </ul>

            <h3 className='caruselAvtoHeading'>Yoqilg`i turlari bo`yicha avtomobillar</h3>
            <ul className='markaList'>
              <li className="markaItem">
                <p className='markaNames'>Benzin <span>28986</span></p>
              </li>
              <li className="markaItem">
                <p className='markaNames'>Dizel <span>210</span></p>
              </li>
              <li className="markaItem">
                <p className='markaNames'>Elektr <span>1108</span></p>
              </li>
              <li className="markaItem">
                <p className='markaNames'>Gaz <span>1184</span></p>
              </li>
              <li className="markaItem">
                <p className='markaNames'>Gaz-benzin <span>15134</span></p>
              </li>
              <li className="markaItem">
                <p className='markaNames'>Gibrid <span>674</span></p>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home