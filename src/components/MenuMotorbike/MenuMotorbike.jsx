import React from 'react'
import './MenuMotorbike.css'

const MenuMotorbike = () => {
  return (
    <div>
      <div className="boxMotorbikes">
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
              <h5 className='markaHeading'>Turi</h5>
              <p className='markaText'>motosikl</p>
              <p className='markaText'>moped</p>
              <p className='markaText'>skuter</p>
              <p className='markaText'>kvadrosikl</p>
            </li>
            <li className="modelItem">
              <h5 className='modelHeading'>Marka</h5>
              <p className="modelText">Lochin</p>
              <p className="modelText">Lifan</p>
              <p className="modelText">Armada Motor</p>
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
    </div>
  )
}

export default MenuMotorbike