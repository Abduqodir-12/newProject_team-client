import React from 'react';
import logo from '../../images/Avtoelon-logo.jpg';
import './Home.css';
import HeaderMenuList from '../../components/HeaderMenuList/HeaderMenuList';
import CaruselAvto from '../../components/CaruselAvto/CaruselAvto';

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
            <button className="navBtn">+ Sotish</button>
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
              <li className="markaItem">
                <p className='markaNames'>Aito <span>14</span></p>
              </li>
              <li className="markaItem">
                <p className='markaNames'>Dodge <span>7</span></p>
              </li>
              <li className="markaItem">
                <p className='markaNames'>Haval <span>34</span></p>
              </li>
              <li className="markaItem">
                <p className='markaNames'>Leapmotor <span>145</span></p>
              </li>
              <li className="markaItem">
                <p className='markaNames'>Opel <span>38</span></p>
              </li>
              <li className="markaItem">
                <p className='markaNames'>UAZ <span>118</span></p>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer"></div>
      </div>
    </div>
  )
}

export default Home