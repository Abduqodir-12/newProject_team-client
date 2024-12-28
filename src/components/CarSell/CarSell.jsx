import React, { useState, useRef } from 'react';
import './CarSell.css';
import { toast } from 'react-toastify';
import { addTransport } from '../../api/transportRequistion';
import { useInfoContext } from '../../context/Context';
import { Link } from 'react-router-dom';

function App() {
  const { transports, setTransports, currentUser } = useInfoContext(); 
  const [image, setImage] = useState(null);
  const titleRef = useRef();

  const handleCreate = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    if (image) {
      formData.append("images", image);  
    }

    if (currentUser && currentUser._id) {  
      formData.append("author_id", currentUser._id);
    }

    try {
      toast.loading("Please wait...");
      const res = await addTransport(formData);  
      console.log(res);

      toast.dismiss();
      toast.success(res?.data?.message);
      setTransports([...transports, res?.data?.newTransport]);  
      e.target.reset();
      setImage(null);  
    } catch (error) {
      toast.dismiss();
      toast.error(error?.message || "Failed to add transport.");
      console.error(error);
    }
  };

  const handleImageChange = (e) => {
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

export default App;