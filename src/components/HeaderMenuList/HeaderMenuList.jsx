import React, { useState } from 'react'
import './HeaderMenuList.css';
import MenuMotorbike from '../MenuMotorbike/MenuMotorbike';
import MenuWaterTransport from '../MenuWaterTransports/MenuWaterTransport';

const HeaderMenuList = () => {
    const [openAvtomobile, setOpenAvtomobile] = useState(false);
    const [openMototexnika, setOpenMototexnika] = useState(false);
    const [openWaterTransport, setOpenWaterTransport] = useState(false);

    return (
        <div className='headerMenuList'>
            <div className="modalBox">
                <p onClick={
                    () => openAvtomobile ?
                        setOpenAvtomobile(false) :
                        (setOpenMototexnika(false), setOpenAvtomobile(true), setOpenWaterTransport(false))
                }
                    className={
                        openAvtomobile ? "avtomobileModalBtnActive" : "avtomobileModalBtn"
                    }>Yengil avtomobillar</p>

                <p onClick={
                    () => openMototexnika ?
                        setOpenMototexnika(false) :
                        (setOpenMototexnika(true), setOpenAvtomobile(false), setOpenWaterTransport(false))
                }
                    className={
                        openMototexnika ? "avtomobileModalBtnActive" : "avtomobileModalBtn"
                    }>Mototexnika</p>

                <p onClick={
                    () => openWaterTransport ?
                        setOpenWaterTransport(false) :
                        (setOpenMototexnika(false), setOpenAvtomobile(false), setOpenWaterTransport(true))
                }
                    className={
                        openWaterTransport ? "avtomobileModalBtnActive" : "avtomobileModalBtn"
                    }>Suv transporti</p>
            </div>


            <div className={openAvtomobile ? "MenuAvtomobils" : "AvtoMenuNone"}>
                <ul className="MenuAvtomobileList menuMotoList">
                    <div className="linkBox">
                        <li className="cityItem">
                            <h5 className='cityHeading'>Viloyat</h5>
                            <p className='cityText'>Toshkent</p>
                            <p className='cityText'>Buxoro</p>
                            <p className='cityText'>Samarqand</p>
                            <p className='cityText'>Navoiy</p>
                        </li>
                        <li className="markaItem">
                            <h5 className='markaHeading'>Marka</h5>
                            <p className='markaText'>Chevralet</p>
                            <p className='markaText'>Daewoo</p>
                            <p className='markaText'>VAZ(Lada)</p>
                            <p className='markaText'>BYD</p>
                        </li>
                        <li className="modelItem">
                            <h5 className='modelHeading'>Model</h5>
                            <p className="modelText">Gentra</p>
                            <p className="modelText">Malibu</p>
                            <p className="modelText">Spark</p>
                        </li>
                        <li className="pozitsiyaItem">
                            <h5 className="pozitsiyaHeading">Pozitsiya</h5>
                            <p className="pozitsiyaText">3 pozitsiya</p>
                            <p className="pozitsiyaText">2 pozitsiya</p>
                            <p className="pozitsiyaText">1 pozitsiya</p>
                        </li>
                        <div className="labelBox">
                            <div class="checkbox-container">
                                <input type="checkbox" id="rent-option" />
                                <label for="rent-option">Kami bor</label>
                            </div>
                            <div class="checkbox-container">
                                <input type="checkbox" id="rent-option" />
                                <label for="rent-option">Avtosalon</label>
                            </div>
                            <div class="checkbox-container">
                                <input type="checkbox" id="rent-option" />
                                <label for="rent-option">Arenda s vikopom</label>
                            </div>
                        </div>
                    </div>
                    <div className="formBox">
                        <div className="form">
                            <p>Narxi</p>
                            <form action="#">
                                <input type="text" placeholder='dan' className='formInput' />
                                <input type="text" placeholder='Gacha' className='formInput' />
                            </form>
                        </div>
                        <div className="form">
                            <p>Yili</p>
                            <form action="#">
                                <input type="text" placeholder='dan' className='formInput' />
                                <input type="text" placeholder='Gacha' className='formInput' />
                            </form>
                        </div>
                    </div>
                </ul>
                <div className="bottomBtnBox">
                    <button className="bottomBtn">E'lonni ko'rsatish</button>
                </div>
            </div>

            <div className={openMototexnika ? "MenuMotorbikes" : "MenuMotorbikesNone"}>
                <MenuMotorbike />
            </div>

            <div className={openWaterTransport ? "MenuWaterTransports" : "MenuWaterTransportsNone"}>
                <MenuWaterTransport />
            </div>
        </div>
    )
}

export default HeaderMenuList