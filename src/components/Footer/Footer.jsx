import React from 'react';
import Youtube from '../../images/Youtube.png';
import Telegram from '../../images/Telegram.png';
import Facebook from '../../images/Facebook.png';
import Instogram from '../../images/Instogram.png';
import './Footer.css'
import Logo from '../../images/Avtoelon-logo.jpg'

const Footer = () => {
    return (
        <div className='footer'>
            <ul className="footerList">
                <li className="footerItem">
                    <img src={Logo} alt="avtoelon.uz" className="logo" />
                </li>
                <li className="footerItem">
                    <a href="#" className="footerLink">Kompaniya haqida</a>
                    <a href="#" className="footerLink">Reklama beruvchilarga bag'ishlangan</a>
                    <a href="#" className="footerLink">Saytning mobil versiyasi</a>
                    <a href="#" className="footerLink">O'zbekiston avto yangiliklari</a>
                    <a href="#" className="footerLink">Qozog'iston avto yangiliklari</a>
                </li>
                <li className="footerItem">
                    <a href="#" className="footerLink">Avtoelon.uz adminiga yozing</a>
                    <a href="#" className="footerLink">Shaxsiy kabinet</a>
                    <a href="#" className="footerLink">Sotish</a>
                    <a href="#" className="footerLink">E'lonni joylashtirish qoidalari</a>
                </li>
                <li className="footerItem">
                    <p className="footerText">Ijtimoiy tarmoqlarimizga obuna bo‘ling</p>
                    <div className="socialNetworks">
                        <img src={Youtube} alt="Youtube" className='socialLink' />
                        <img src={Telegram} alt="Telegram" className='socialLink' />
                        <img src={Facebook} alt="Facebook" className='socialLink' />
                        <img src={Instogram} alt="Instogram" className='socialLink' />
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Footer