import React from 'react';
import logo from '../../images/Avtoelon-logo.jpg';
import './Home.css';
import HeaderMenuList from '../../components/HeaderMenuList/HeaderMenuList';

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
        </div>

        <div className="footer"></div>
      </div>
    </div>
  )
}

export default Home