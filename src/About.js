import Navbar from "./components/Navbar";
// import CheckServicesArea from "./planPages/CheckServicesArea";
import fb from './img/facebook__1_-removebg-preview.png'
import insta from './img/instagram__2_-removebg-preview.png'
import twitt from './img/twitter-removebg-preview.png'
import tele from './img/telephone-removebg-preview.png'
import mail from './img/mail-removebg-preview.png'
import whats from './img/whatsapp-removebg-preview.png'
import cal from './img/calendar-removebg-preview.png'
import YT from './img/YT-preview.png'
import hr from './img/clock-removebg-preview.png'


export default function About() {

    return (
        <>
            <Navbar />
            <div className="about-content">

                <p className="about-h1">We are proffesional auto wash and detailing, people- friendly digital experiences.</p>
                <p className='details-about'>GOWASHE is the leader in on-demand washing and detailing services. GOWASHE , your car wash app, is the most convenient and cost-effective way to wash your car. Instead of having to drive to a car wash and then wait in line, you can simply download the app, schedule a time, and the mobile car wash will come to you.</p>
                <div className="about-footer">
                    <div className="footer-icons">
                        <a href="https://www.facebook.com/people/gowashe/100090991316145/?mibextid=ZbWKwL" target={'_blank'} rel="noreferrer" className="a-bout"> <img className="icon-links-about" alt="" src={fb}></img></a>
                        <a href="https://www.instagram.com/gowashe/?igshid=YmMyMTA2M2Y%3D&__coig_restricted=1" target={'_blank'} rel="noreferrer" className="a-bout"> <img className="icon-links-about" alt="" src={insta}></img></a>
                        <a href="https://twitter.com/gowashe" target={'_blank'} className="a-bout" rel="noreferrer"> <img className="icon-links-about" alt="" src={twitt}></img></a>
                        <a href="https://wa.me/message/5364BRMWCYCKD1" target={'_blank'} className="a-bout" rel="noreferrer"> <img className="icon-links-about" alt="" src={whats}></img></a>
                        <a href="https://www.youtube.com/@GOWASHE" target={'_blank'} className="a-bout" rel="noreferrer"> <img className="icon-links-about" alt="" src={YT}></img></a>
                    </div>
                    <hr style={{width:"80%",marginLeft:"10%"}}></hr>
                    <div style={{width:"90",marginLeft:"5%",marginRight:"5%",color:"white",fontWeight:"bold",padding:"5px",textAlign:"center"
                            ,marginTop:"10px",marginBottom:"10px"}}>
                    BDA Rd, Deep Nagar, Awadhpuri, Bhopal, Madhya Pradesh 462022
                    </div>
                    <hr style={{width:"40%",marginLeft:"30%",marginRight:"30%"}}>
                    </hr>
                    <div className="contact-links">
                        <div className="contact-links-div">
                            <img className="icon-links-about-c" alt="" src={mail}></img> <a href="mailto:gowashexpert@gmail.com" className="a-about"> Email / gowashexpert@gmail.com</a>
                        </div>
                        <div className="contact-links-div">
                            <img className="icon-links-about-c" alt="" src={tele}></img>Contact no. / +91-9826661566
                        </div>
                        <div className="contact-links-div">
                            <img className="icon-links-about-c" alt="" src={cal}></img> Working Days / Monday - Sunday
                        </div>
                        <div className="contact-links-div">
                            <img className="icon-links-about-c" alt="" src={hr}></img> Working Hrs. / 08:30 AM - 09:00 PM
                        </div>








                       


                    </div>
                    <hr></hr>
                        <div id='copyrights'>
                            <p style={{ color: "white", textAlign: 'center', padding: "15px", fontSize: "14px" }}> Copyrights &copy; 2023. All rights reserved. Privacy Policy </p>
                        </div>
                </div>
            </div>
        </>
    )


}