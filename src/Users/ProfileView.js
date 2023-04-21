import { useState } from "react";
import axios from 'axios';
import '../Users/profilecss.css'


export default function ProfileView(PopProfile){
  const [pincode, setPincode] = useState('');

    const [city,setCity] =useState("");
    const [state,setState] =useState("");
    const [userState, setUserState] = useState({
        fullname: "",
        houseno:"",
        colony:"",
        area:""

      })


      const handleChange = (e)=>{
        const value = e.target.value;
        setUserState({
         userState,
         [e.target.name]: value
        });
     }
     const handlePincodeSubmit = (event) => {
      event.preventDefault();
      axios.get(`https://api.postalpincode.in/pincode/${pincode}`)
        .then(response => {
          const data = response.data[0].PostOffice[0];
          setCity(data.Block);
          setState(data.State);
        })
        .catch(error => {
          console.log(error);
        });
    };

    const handlePincodeChange = (event) => {
      setPincode(event.target.value);
    
    };
     function handlebtnSave(){
      
     }
    
    return(
        <div >
        <button onClick={PopProfile} className='btn-cancel'><i className='fas fa-times'></i></button>

      <form className="UserDetailsForm">
            <label style={{fontSize:"1.2em",fontWeight:"bold"}}>Enter Your Full Name</label>
            <input type="text"   className="inputAddressStyles" value={userState.fullname} onChange={handleChange}  placeholder="FullName"></input>
            <label style={{display:"block",fontSize:"1.2em",fontWeight:"bold"}}>Address</label>
            <input type="text"  className="inputAddressStyles" value={userState.houseno} placeholder="HouseNumber"  onChange={handleChange}></input>
            <input type="text"  className="inputAddressStyles" value={userState.colony} placeholder="Colony" onChange={handleChange}></input>
            <input type="text"  className="inputAddressStyles" value={userState.area} placeholder="Area" onChange={handleChange}></input>
            <input type="number" className="pincodecss"  value={userState.pincode} placeholder="Pincode" onChange={handlePincodeChange}></input>
            <button onClick={handlePincodeSubmit} className="save-btn">CHECK</button>
            <input type="text" className="inputAddressStyles"  value={state} placeholder="State" readOnly></input>
            <input type="text" className="inputAddressStyles"  value={city} placeholder="City" readOnly ></input>
            <button className="btn-collect" onClick={handlebtnSave}>SAVE</button>
           

          </form>
           

        </div>
    )
}