import { useState } from 'react';
import axios from 'axios';
import { imagdb } from './Config';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import './insertData.css'

const AdminPage = () => {
  const [data, setData] = useState({
    name: '',
    code: '',
    price: '',
    imgUrl: '',
    description: '',
  });
  const [variant, setVariant]= useState("BLOUSE");
  const [image, setImage] = useState(null);
  const { name, code, price, description } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const HandleChange = (e) => {
    e.preventDefault();
    setVariant(e.target.value);
  }
  const submitHandler = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image.");
      return;
    }

    try {
      const imgRef = ref(imagdb, `files/${v4()}`);
      const snapshot = await uploadBytes(imgRef, image);
      const url = await getDownloadURL(snapshot.ref);
      console.log('Image URL:', url);

      const updatedData = { ...data, imgUrl: url };
      setData(updatedData);
      if(variant === "BLOUSE" ){
        await axios.post('https://form-f623f-default-rtdb.firebaseio.com/form.json', updatedData);
        alert("Data submitted successfully in BLOUSE Page");
      }
      else{
        await axios.post('https://customer1-6949f-default-rtdb.firebaseio.com/form.json', updatedData);
        alert("Data submitted successfully in EMBRIODERY Page");
      }
      console.log(variant);

    } catch (error) {
      console.error("Error uploading image or submitting data", error);
      alert("Failed to submit data");
    }
  };

  return (
    <div>
      <h1 className='heading1'>ADD DETAILS OF THE PRODUCT</h1>
        <form className="formInsert" onSubmit={submitHandler}>
          <input type='text' name='name' value={name} onChange={changeHandler} placeholder="Name" /><br/>
          <input type='text' name='code' value={code} onChange={changeHandler} placeholder="Code" /><br/>
          <input type='text' name='price' value={price} onChange={changeHandler} placeholder="Price" /><br/>
          <label>Upload Image</label>
          <input type='file' name='image' onChange={(e) => setImage(e.target.files[0])} /><br/>
          <label htmlFor="variant">VARIANT : </label>
            <select name="variant" className="variant" onChange={HandleChange} value={variant}>
              <option value="BLOUSE">BLOUSE DESIGNS</option>
              <option value="EMBRIODERY">EMBRIODERY</option>
            </select>
          <input type='text' name='description' value={description} onChange={changeHandler} placeholder="Description" /><br/>
          <button type='submit'>Submit</button>
        </form>
    </div>
  );
};

export default AdminPage;
