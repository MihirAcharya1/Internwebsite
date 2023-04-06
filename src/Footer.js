import Logoweb from './img/webLogo.png';
import PlaceIcon1 from './img/pin.png';
import Insta from './img/Insi.png';
import GmailIcon from './img/send-mail.png';
import PhoneIcon from './img/phone-call.png';
export default function FooterContent() {
    return (
        <div className='Footer-container'>
            {/*  style={{ width: "100%", backgroundColor: "white", margin: "0", paddingTop: '100px', paddingBottom: "20px" }} */}
            <div className="Footer-content">
                <div className="foot-img-view">
                    <div className='foot-logoC'>
                        <img src={Logoweb} alt="" className='footer-web-logo' ></img><p className='expert'>XPERT</p>
                    </div>
                    <p style={{ color: "white", fontSize: "1.4em" , marginTop:'20px' }}> We provide a convenient, consistent and exceptional <span style={{color:"red"}}>Car</span> wash experience.</p>
                </div>

                <div className="foot-links-content">
                    <div className="Email-in-join_us-btn">
                        <input type={Text} placeholder={'Your Email Id'} className='input-mail'></input>
                        <button className="joinus-foot-btn" style={{cursor:"pointer"}}>JOIN US</button>
                    </div>
                    <div className="links-container-footer">
                        
                        <div className="links-content" >
                            <h3>CONTACT LINKS</h3>
                            <p > 
                                 <p className='design2' id='numStyle' ><img src={PhoneIcon} alt=''  className='IconsLink'/>+91-8602326282</p><br/>
                                <a href='https://www.instagram.com/autobotcenter/?igshid=YmMyMTA2M2Y%3D' target={'_blank'} rel="noreferrer" className='design2'>   <img src={Insta} alt=''  className='IconsLink'></img>   Instagram</a><br/>
                                <a href='mailto:gowashexpert@gmail.com' className='design2' style={{marginBottom:'15px' }}><img src={GmailIcon} alt=''  className='IconsLink1' ></img> gowashexpert@gmail.com</a> 
                            </p>
                        </div>
                        <div className="links-content" >
                            <h3>SERVICES - LOCATIONS</h3>
                            <p>
                                <a href='?' className='design2'><img src={PlaceIcon1}    className='IconsLink' alt=''/>Bhopal</a><br/>
                                <a href='?' className='design2'><img src={PlaceIcon1}   className='IconsLink' alt=''/>Indore</a>
                            </p> 
                        </div>
                    


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