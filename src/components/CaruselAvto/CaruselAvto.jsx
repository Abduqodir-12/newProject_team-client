import React from 'react';
import './CaruselAvto.css';
import Avtomobile1 from '../../images/avtomobile1.png';
import LeftBtnImg from '../../images/leftBtnImg.png';
import RightBtnImg from '../../images/rightBtnImg.png';

const caruselAvto = () => {
    return (
        <div className='caruselAvtomobiles'>
            <h3 className='caruselAvtoHeading'>UZ avto bozor savdosi bo'yicha yonayotgan takliflar</h3>

            <ul className="caruselAvtoList">
                <li className="caruselAvtoItem">
                    <img src={Avtomobile1} alt="avtomobile" className='caruselAvtoImg' />
                    <div className='hoverBox'>
                        <p className="hoverText">BYD</p>
                        <p className="hoverText">35.000$</p>
                    </div>
                </li>
                <li className="caruselAvtoItem">
                    <img src={Avtomobile1} alt="avtomobile" className='caruselAvtoImg' />
                </li>
                <li className="caruselAvtoItem">
                    <img src={Avtomobile1} alt="avtomobile" className='caruselAvtoImg' />
                </li>
                <li className="caruselAvtoItem">
                    <img src={Avtomobile1} alt="avtomobile" className='caruselAvtoImg' />
                </li>
                <li className="caruselAvtoItem">
                    <img src={Avtomobile1} alt="avtomobile" className='caruselAvtoImg' />
                </li>
                <li className="caruselAvtoItem">
                    <img src={Avtomobile1} alt="avtomobile" className='caruselAvtoImg' />
                </li>
                <li className="caruselAvtoItem">
                    <img src={Avtomobile1} alt="avtomobile" className='caruselAvtoImg' />
                </li>
                <li className="caruselAvtoItem">
                    <img src={Avtomobile1} alt="avtomobile" className='caruselAvtoImg' />
                </li>
                <li className="caruselAvtoItem">
                    <img src={Avtomobile1} alt="avtomobile" className='caruselAvtoImg' />
                </li>
                <li className="caruselAvtoItem">
                    <img src={Avtomobile1} alt="avtomobile" className='caruselAvtoImg' />
                </li>
                <li className="caruselAvtoItem">
                    <img src={Avtomobile1} alt="avtomobile" className='caruselAvtoImg' />
                </li>
                <li className="caruselAvtoItem">
                    <img src={Avtomobile1} alt="avtomobile" className='caruselAvtoImg' />
                </li>
                <li className="caruselAvtoItem">
                    <img src={Avtomobile1} alt="avtomobile" className='caruselAvtoImg' />
                </li>
                <li className="caruselAvtoItem">
                    <img src={Avtomobile1} alt="avtomobile" className='caruselAvtoImg' />
                </li>
                <li className="caruselAvtoItem">
                    <img src={Avtomobile1} alt="avtomobile" className='caruselAvtoImg' />
                </li>
                <li className="caruselAvtoItem">
                    <img src={Avtomobile1} alt="avtomobile" className='caruselAvtoImg' />
                </li>
                <li className="caruselAvtoItem">
                    <img src={Avtomobile1} alt="avtomobile" className='caruselAvtoImg' />
                </li>
                <li className="caruselAvtoItem">
                    <img src={Avtomobile1} alt="avtomobile" className='caruselAvtoImg' />
                </li>
                <li className="caruselAvtoItem">
                    <img src={Avtomobile1} alt="avtomobile" className='caruselAvtoImg' />
                </li>
                <li className="caruselAvtoItem">
                    <img src={Avtomobile1} alt="avtomobile" className='caruselAvtoImg' />
                </li>
                <li className="caruselAvtoItem">
                    <img src={Avtomobile1} alt="avtomobile" className='caruselAvtoImg' />
                </li>
                <li className="caruselAvtoItem">
                    <img src={Avtomobile1} alt="avtomobile" className='caruselAvtoImg' />
                </li>
                <li className="caruselAvtoItem">
                    <img src={Avtomobile1} alt="avtomobile" className='caruselAvtoImg' />
                </li>
                <li className="caruselAvtoItem">
                    <img src={Avtomobile1} alt="avtomobile" className='caruselAvtoImg' />
                </li>
            </ul>
            <div className="leftRightBtnBox">
                <button className='leftBtn'>
                    <img src={LeftBtnImg} alt="LeftBtnImg" width={20} />
                </button>
                <button className='rightBtn'>
                    <img src={RightBtnImg} alt="RightBtnImg" width={20} />
                </button>
            </div>

            <button className="caruselAvtoSellBtn">+ Sotish</button>
        </div>
    )
}

export default caruselAvto