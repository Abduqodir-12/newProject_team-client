import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import "./CarPost.css";
import axios from "axios";

const CarPost = () => {
  const [transport, setTransport] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams(); 

  useEffect(() => {
    const fetchTransport = async () => {
      try {
        const response = await axios.get(`/api/transport/${id}`);
        setTransport(response.data.transport); 
        setIsLoading(false); 
      } catch (error) {
        console.error("Transportni olishda xatolik:", error);
        setIsLoading(false);
      }
    };

    fetchTransport();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!transport) {
    return <div>Transport topilmadi.</div>;
  }

  return (
    <div className="car-post-container">
      <div className="main-content">
        <div className="main-info">
          <h1>{transport.nameTransport}</h1>
          <h2 className="price">{transport.price}</h2>
        </div>
        <div className="container-cars">
          <div className="details">
            <h2>Car Details</h2>
            <ul>
              <li>Yili: <span>{transport.year}</span></li>
              <li>Rangi: <span>{transport.color}</span></li>
            </ul>
          </div>

          <div className="image-container">
            <img
              src={transport.images.url}
              alt={transport.nameTransport}
              className="car-image"
            />
          </div>
        </div>
      </div>

      <div className="related-ads">
        <h2>Shunga O'xshash</h2>
      </div>
    </div>
  );
};

export default CarPost;