import Logoweb from './img/webLogo.png';
import PlaceIcon1 from './img/pin.png';
import Insta from './img/Insi.png';
import GmailIcon from './img/send-mail.png';
import PhoneIcon from './img/phone-call.png';
import { db } from './firestore';
import { addDoc,collection ,setDoc,doc} from 'firebase/firestore';
import { useState } from 'react';

export default function FooterContent() {

const [email,setEmail] = useState("");

const addDataWithCustomId = (collectionName, docId, data) => {
    setDoc(doc(db, collectionName, docId), data)
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };
  
  const handleAddData = () => {
    try{
        if(email!=null){
            const data = { 
            UsersEmailIds:email,
           };
        addDataWithCustomId("JoinUsUsers", email, data);
    }
    } catch(err){
        console.log(err);
    }
   
    
  };


    return (
        <div className='Footer-container'>
            <div className="Footer-content">
                <div className="foot-img-view">
                    <div className='foot-logoC'>
                        <img src={Logoweb} alt="" className='footer-web-logo' ></img><p className='expert'>XPERT</p>
                    </div>
                    <p style={{ color: "white", fontSize: "1.4em" , marginTop:'20px' }}> We provide a convenient, consistent and exceptional <span style={{color:"red"}}>Car</span> wash experience.</p>
                </div>

                <div className="foot-links-content">
                    <div className="Email-in-join_us-btn">
                        <input  placeholder={'Your Email Id'} className='input-mail' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                        <button className="joinus-foot-btn" style={{cursor:"pointer"}} onClick={handleAddData}>JOIN US</button>
                    </div>
                    <div className="links-container-footer">
                        
                        <div className="links-content1" >
                            <h3>CONTACT LINKS</h3>
                            
                                 <p className='design2' id='numStyle' ><img src={PhoneIcon} alt=''  className='IconsLink'/>+91-9826661566</p><br/>
                                <a href='https://www.instagram.com/gowashe/?igshid=YmMyMTA2M2Y%3D&__coig_restricted=1' target={'_blank'} rel="noreferrer" className='design2'>   <img src={Insta} alt=''  className='IconsLink'></img>   Instagram</a><br/>
                                <a href='mailto:gowashexpert@gmail.com' className='design2' style={{marginBottom:'15px',display:"inline-block"}}><img src={GmailIcon} alt=''  className='IconsLink1' ></img> gowashexpert@gmail.com</a> 
                            
                        </div>
                        <div className="links-content2" >
                            <h3>SERVICES - LOCATIONS</h3>
                            <p>
                            {/* <button onclick="window.open('https://www.google.com/maps/search/?api=1&query=latitude,longitude', '_blank');">Open Map</button> */}
{/* https://www.google.com/maps/place/Gowashe+(Car+%26+Bike+Wash)/@23.2218067,77.4945859,20.73z/data=!4m6!3m5!1s0x397c41aa0a0194c9:0xcc205b5bbd25bdc4!8m2!3d23.2219318!4d77.4945467!16s%2Fg%2F11ssbyyzp6 */}
                                <a href='https://www.google.com/maps/place/Gowashe+(Car+%26+Bike+Wash)/@23.2218067,77.4945859,20.73z/data=!4m6!3m5!1s0x397c41aa0a0194c9:0xcc205b5bbd25bdc4!8m2!3d23.2219318!4d77.4945467!16s%2Fg%2F11ssbyyzp6' target={'_blank'} rel="noreferrer" className='design2'><img src={PlaceIcon1}    className='IconsLink' alt=''/>Bhopal</a><br/>
                                <a href='?' className='design2'><img src={PlaceIcon1}   className='IconsLink' alt=''/>Indore</a>
                            </p> 
                        </div>
                    {/* https://www.google.com/maps/search/?api=1&query=23.221932322478207, 77.49454545927352 */}


                    </div>
                    <hr></hr>
                    <div id='copyrights'>
                        <p style={{color:"white", textAlign:'center', padding:"15px"}}> Copyrights &copy; 2023. All rights reserved. Privacy Policy </p>                        
                   </div>

                </div>
               

            </div>
        </div>
    )
}