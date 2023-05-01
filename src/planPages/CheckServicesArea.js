import React, { useState } from 'react';


export default function CheckServicesArea(){

      const [latitude, setLatitude] = useState(null);
      const [longitude, setLongitude] = useState(null);
    
      const handleGetCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition(
          position => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          error => {
            console.error(error);
          }
        );
      };
    
      const handleCheckLocation = () => {
        if (latitude && longitude) {
          const bhopalLat = 23.2599;
          const bhopalLong = 77.4126;
          const distance = calculateDistance(latitude, longitude, bhopalLat, bhopalLong);
          if (distance > 1000) { // Replace 100 with the distance (in km) within which you consider a location to be "in Bhopal"
            alert("Sorry, you are not currently in Bhopal.");
          }
          else{
            alert("you are currently in Bhopal.");

          }
        }
      };
    
      const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // Radius of the earth in km
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
          Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c; // Distance in km
        return d;
      };
    
      const deg2rad = (deg) => {
        return deg * (Math.PI/180)
      }
    
      return (
        <div>
          <button onClick={handleGetCurrentLocation} style={{backgroundColor:"green",padding:"15px 10px",margin:"20px"}}>Get Current Location</button><br></br>
          <button onClick={handleCheckLocation} style={{backgroundColor:"green",padding:"15px 10px",margin:"20px"}}>Check Location</button>
        </div>
      );
    
   
    
}