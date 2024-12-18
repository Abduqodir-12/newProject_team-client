import React from 'react'
import './MenuWaterTransport.css'

const MenuWaterTransport = () => {
    return (
        <div>
            <div className="boxMotorbikes">
                <ul className="MenuAvtomobileList menuMotoList">
                    <div className="linkBox">
                        <li className="searchItem">
                            <input type="text" placeholder='Nima qidiryapsiz ?' className='searchInput'/>
                            <p className='searchText'>Bu yerda istagan ma'lumotni yozish mumkin. O'z e'loni qidirilgan holda telefon raqami yoziladi.</p>
                        </li>
                        <li className="cityItem">
                            <h5 className='cityHeading'>Viloyat</h5>
                            <p className='cityText'>Toshkent</p>
                            <p className='cityText'>Buxoro</p>
                            <p className='cityText'>Samarqand</p>
                            <p className='cityText'>Navoiy</p>
                        </li>
                        <li className="markaItem">
                            <h5 className='markaHeading'>Turi</h5>
                            <p className='markaText'>motosikl</p>
                            <p className='markaText'>moped</p>
                            <p className='markaText'>skuter</p>
                            <p className='markaText'>kvadrosikl</p>
                        </li>
                        <div className="labelBox">
                            <div class="checkbox-container">
                                <input type="checkbox" id="rent-option" />
                                <label for="rent-option">Kami bor</label>
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
                    </div>
                </ul>

                <div className="bottomBtnBox">
                    <button className="bottomBtn">E'lonni ko'rsatish</button>
                </div>
            </div>
        </div>
    )
}

export default MenuWaterTransport