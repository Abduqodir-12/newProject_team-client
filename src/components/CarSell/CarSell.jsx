import React, { useState } from 'react';
import './CarSell.css';
import { toast } from 'react-toastify';
import { addTransport } from '../../api/transportRequistion';
import { useInfoContext } from '../../context/Context';
import { Link, useNavigate } from 'react-router-dom';

function CarSell() {
  const { transports, setTransports, currentUser } = useInfoContext(); 
  const [image, setImage] = useState(null);
    const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // Faylni FormData'ga qo'shish
    if (image) {
      formData.append("images", image);  
    }

    // Foydalanuvchi ma'lumotlarini qo'shish
    if (currentUser && currentUser._id) {  
      formData.append("author_id", currentUser._id);
    }

    try {
      toast.loading("Please wait...");
      const res = await addTransport(formData);  
      console.log(res);

      toast.dismiss();
      toast.success(res?.data?.message);
      // console.log(res.data);
      
      setTransports([...transports, res?.data?.transport]);  
      e.target.reset();  // Formni tozalash
      setImage(null);  // Image state'ni tozalash
      navigate('/')
    } catch (error) {
      toast.dismiss();
      toast.error(error?.message || "Failed to add transport.");
      console.error(error);
    }
  };

  const handleImageChange = (e) => {
    // Faylni state'ga qo'shish
    setImage(e.target.files[0]);  
  };

  return (
    <div className="form-container">
      <Link to='/'>Back</Link>
      <form onSubmit={handleCreate}>
        <h2>Bo'limda e'lon berish</h2>

        {/* Title */}
        <div className="section">
          <label>Title</label>
          <input
            type="text"
            name="nameTransport"
            placeholder="Enter your Transport name.."
            required
          />
        </div>

        {/* Year */}
        <div className="section">
          <label>Year</label>
          <input
            type="number"
            name="year"
            placeholder="Masalan, 1998 yoki 2007"
            required
          />
        </div>

        {/* Price */}
        <div className="section">
          <label>Price</label>
          <input
            type="number"
            name="price"
            placeholder="so'm yoki $"
            required
          />
        </div>

        {/* Color */}
        <div className="section">
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder="Masalan, Red"
            required
          />
        </div>

        {/* Image */}
        <div className="section">
          <label>Image</label>
          <input
            type="file"
            name="images"
            onChange={handleImageChange}
            required
          />
        </div>

        {/* Submit Buttons */}
        <div className="section buttons">
          <button type="submit">Elon berish</button>
        </div>
      </form>
    </div>
  );
}

export default CarSell;