import axios from 'axios';
import { Link } from 'react-router-dom';
import PhoneInput from "react-phone-input-2";
import React, { useState, useEffect } from 'react';
import LocationIcon from '../img/LI.png';


const Geocode = (props) => {

  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [ph, setPh] = useState("");
  


  useEffect(() => {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        position => {
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        error => {
          console.error(error);
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
      return () => navigator.geolocation.clearWatch(watchId);
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);


  // function which convert lat long to address ;
  const handleButtonClick1 = async () => {
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${props.apis}`
      );
      setInputValue(response.data.results[0].formatted);
      console.log(inputValue);
      setSuggestions([]);
    } catch (error) {
      console.log(error);
      console.log(inputValue);

    }
  };



  const handleChange = async (event) => {
    const value = event.target.value;
    setInputValue(value);
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${value}&key=${props.apis}&limit=5`
      );
      const results = response.data.results;
      const addresses = results.map((result) => result.formatted);
      setSuggestions(addresses);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSelect = (address1) => {
    setInputValue(address1);
    setSuggestions([]);
  };

  return (

    <>
      <div className='Form_wrap'>
        <div className="form-container">
          <div className="fheadings" style={{ width: "100%" }}>
            <p style={{ fontSize: "1.5em", color: "#ffff", lineHeight: "2" ,fontWeight:"bold"}}>Book Services Now</p>
            <p style={{ fontSize: ".9em", color: "#ffff" }}>Get Best experience here.</p>
          </div>
          <div style={{display:"flex",marginBottom:"15px"}}>
          <input type="text" value={inputValue} onChange={handleChange} className='edLocation' placeholder='Enter Your Location' />
          <button className='locBtn' onClick={handleButtonClick1}><img src={LocationIcon}  alt=''></img></button></div>
          <ul className='SuggestList-container'>
            {suggestions.map((address1, index) => (
              <li key={index} onClick={() => handleSelect(address1)} className="SuggestList">
                {address1}
              </li>
            ))}
          </ul>
          <div>
          <PhoneInput country={"in"} value={ph} onChange={setPh} className='PhoneNo_input' />

          </div>

          <button className="btn-gotoplans" >  <Link to="/Plan">Check Price</Link></button>

        </div>
      </div>


    </>
  );
};

export default Geocode;
