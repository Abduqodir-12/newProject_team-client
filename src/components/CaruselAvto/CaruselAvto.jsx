import React, { useEffect, useState } from 'react';
import './CaruselAvto.css';
import { getTransports } from '../../api/transportRequistion';
import { toast } from 'react-toastify';
import { useInfoContext } from '../../context/Context';

const CaruselAvto = () => {
    const { currentUser } = useInfoContext();
    const [transports, setTransports] = useState([]);

    useEffect(() => {
        const getAllTransports = async () => {
            try {
                toast.loading("Please wait...");
                const res = await getTransports();
                toast.dismiss();
                toast.success("All Transports");
                setTransports(
                    res?.data?.transports.filter((transport) => transport.author === currentUser?._id)
                );
            } catch (error) {
                console.error(error);
                toast.error("Failed to load Transport.");
            }
        };
        if (currentUser) {
            getAllTransports();
        }
    }, [currentUser]);

    return (
        <div className='caruselAvtomobiles'>
            <h3 className='caruselAvtoHeading'>UZ avto bozor savdosi bo'yicha yonayotgan takliflar</h3>
            <ul className="caruselAvtoList">
                {transports.length > 0 ? (transports.map((transport) => (
                    <li className="caruselAvtoItem" key={transport._id}>
                        <div className="hoverBox">
                            <p className='hoverText'>Toshkent</p>
                        </div>
                        <img src={transport?.images.url} alt="avtomobile" className='caruselAvtoImg' />
                        <div className='hoverBox'>
                            <p className="hoverText">{transport?.nameTransport}</p>
                            <p className="hoverText">{transport?.price}</p>
                        </div>
                    </li>
                ))
                ) : (
                    <h3>Transport not found</h3>
                )}
            </ul>

            <button className="caruselAvtoSellBtn">+ Sotish</button>
        </div>
    );
};

export default CaruselAvto;