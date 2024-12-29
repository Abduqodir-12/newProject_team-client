import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./CarPost.css";
import axios from "axios";
import Footer from "../Footer/Footer";
import { toast } from "react-toastify";
import { deleteTransport } from "../../api/transportRequistion";


const CarPost = () => {
  const [transport, setTransport] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams(); // URLdan transport id olish
  const ServerUrl = process.env.REACT_APP_SERVER_URL;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTransport = async () => {
      try {
        const response = await axios.get(`${ServerUrl}/api/transport/${id}`);

        setTransport(response.data.transport); // Transportni olish
        setIsLoading(false); // Loading holatini to'xtatish
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

  const handleDelete = async (id) => {
    const confirmDel = window.confirm("Rostanham ochirmohchimisz?");
    if (confirmDel) {
      try {
        toast.loading('Please wait...');
        await deleteTransport(id);
        // const filterTransport = transport.filter((item) => item._id !== id);
        // setTransport(filterTransport);
        toast.dismiss();
        toast.success('Deleted!');
        navigate('/');
      } catch (error) {
        toast.dismiss();
        toast.error('Error deleting transport');
        console.log(error);
      }
    }
  };

  return (
    <div>
      <Link to="/">Back</Link>
      <div className="car-post-container">
        <div className="main-content">
          <div className="main-info">
            <h1 className="text-center">{transport.nameTransport}</h1>
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
                className="car-image d-block"
              />
            </div>
          </div>
        </div>
        <button className="btnDel" onClick={() => handleDelete(transport._id)}>Delete</button>
      </div>
      <div className="container">
        <Footer />
      </div>
    </div>

  );
};

export default CarPost;