
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

 import Navbar from './Navbar';

export default function Geo(){
  return(
    <div><Navbar/>
    </div>
  )
}

// const Location = () => {
//   const [lat, setLat] = useState(null);
//   const [lng, setLng] = useState(null);
//   const [inputValue, setInputValue] = useState(null);
//   const [suggestions, setSuggestions] = useState([]);

//   useEffect(() => {
//     if (navigator.geolocation) {
//       const watchId = navigator.geolocation.watchPosition(
//         position => {
//           setLat(position.coords.latitude);
//           setLng(position.coords.longitude);
//         },
//         error => {
//           console.error(error);
//         },
//         { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
//       );
//       return () => navigator.geolocation.clearWatch(watchId);
//     } else {
//       console.error('Geolocation is not supported by this browser.');
//     }
//   }, []);

//   const handleChange = async (event) => {
//     const value = event.target.value;
//     setInputValue(value);
//     try {
//       const response = await axios.get(
//         `https://api.opencagedata.com/geocode/v1/json?q=${value}&key=fe79cd45a8884fe38483b89cc613a8af&limit=5`
//       );
//       const results = response.data.results;
//       const addresses = results.map((result) => result.formatted);
//       setSuggestions(addresses);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleSelect = (address1) => {
//     setInputValue(address1);
//     setSuggestions([]);
//   };

//   return (
//     <div>
//      <Navbar/>
//         <p style={{color:"white", fontSize:"1.5em" , padding:"10px"}}>
//           Your current location is: ({lat}, {lng})
//         </p>
//       <div style={{width:"300px"}}>
//        <input type='text' value={inputValue} placeholder='null' className='edLocation' onChange={handleChange}/>
//        <ul className='SuggestList-container'>
//         {suggestions.map((address1, index) => (
//           <li key={index} onClick={() => handleSelect(address1)} className="SuggestList">
//             {address1}
//           </li> 
//         ))}
//       </ul>
//       </div>
//     </div>
//   );
// };

// export default Location;