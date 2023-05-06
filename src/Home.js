import ReverseGeo from './components/reverseGeo';
import Footer from './Footer';
import { useRef } from 'react';
import Nav from '../src/components/Navbar';
import img1 from './img/woman-washing-her-car-outside1 - Copy.jpg';
import img2 from './img/car-wash-detailing-station.jpg';
import img3 from './img/hybrid.jpg';
import img4 from './img/beautiful-car-washing-service.jpg';
import img5 from './img/young-man-washing-car-carwash-station-outdoor.jpg';
import img6 from './img/close-up-car-care-process.jpg';
import img7 from './img/man-washing-his-car-garage.jpg';
import img8 from './img/chemicals.jpg';
import img9 from './img/cosmetics.jpg';
import './fadeEffect.css'


export default function HomeApp() {
  const myRef = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);
  const apiKey = process.env.REACT_APP_API_KEY;
//   const apiKey2 = process.env.REACT_APP_API_KEY;
  

  return (<>
    <div className='My_app'>
      <Nav />
      <div className='Slogans'>
           <div className='Head-Geo'> <h1 className='h1-styleing'>We are proffesional auto wash and detailing, people- friendly digital experiences.</h1>
       <ReverseGeo  apis={apiKey} className='reveal2'/></div>
       

        <p className='sec1-para'>GOWASHE is the leader in on-demand washing and detailing services. GOWASHE , your car wash app, is the most convenient and cost-effective way to wash your car. Instead of having to drive to a car wash and then wait in line, you can simply download the app, schedule a time, and the mobile car wash will come to you.</p>
        </div>

      {/* <div className='webV4' style={{ width: "100%", height: "200px" }}></div> */}
      <div className='Articles1 reveal fade-bottom'>
        <p className='articles_p ' >With <b style={{ color: "rgb(80, 234, 80)" }}>GO</b><b style={{ color: "rgb(0, 128, 255)" }}>WASH</b><b style={{ color: "red" }}>E</b>
          , you can
          schedule a wash now
          and get a professional to your door in minutes. Rest assured your washer has been thoroughly
          vetted, background checked, insured, and backed by our quality control assurance team. What
          makes <b style={{ color: "rgb(80, 234, 80)" }}>GO</b><b style={{ color: "rgb(0, 128, 255)" }}>WASH</b><b style={{ color: "red" }}>E</b> really stand out above the rest is our custom pricing based on your comfort - <a href='#doorstep_content' className="design2"> Doorstep washing</a> , <a href='#Outlet_content' className="design2">Outlet washing</a> , <a href='#Hybrid_content' className="design2">Hybrid plans</a>. With a wide variety of professionals serving different areas, we proudly stand by our motto, "Car Wash in Minutes!"


        </p>
        <p className="articles_p" style={{ marginTop: "20px" }}>Trusted by thousands of monthly users, we make it easier than ever to get your car washed at home or at work,so you can spend your time doing what matters.The best mobile car wash app, <b style={{ color: "rgb(80, 234, 80)" }}>GO</b><b style={{ color: "rgb(0, 128, 255)" }}>WASH</b><b style={{ color: "red" }}>E</b> true auto wash detailing app.
        </p>

      </div >
      <div style={{ textAlign: "center" }}>
        <p className='design' style={{ fontSize: "2em", marginTop: "90px", marginBottom: "30px", fontWeight: "400" }}>Our Approach</p>
      </div>
      <div className='service_section'>
        <div className='articles_p ' id='doorstep_content' style={{ paddingTop: "80px" ,paddingBottom:"80px"}}>
          <p   onClick={() => myRef.current.scrollIntoView()} className='reveal fade-bottom'><b style={{ display: "inline-block", color: "#979797", textDecoration: "none" ,fontWeight:"600"}} className="design2">Doorstep Car Wash</b> - Book your car wash from the comfort of your home and get our washing
          professional at your doorstep within minutes. We also provide monthly and hassle free
          subscriptions for your car wash.We provide complete car wash and detailing service for all
          models of high-end vehicles including sedans, MUVs, 5-seater SUVs, and 7-seater SUVs.</p> <br /><br />
          <p   onClick={() => myRef2.current.scrollIntoView()} className='reveal fade-bottom'   id='Outlet_content' ><b style={{ display: "inline-block", color: "#979797", textDecoration: "none",fontWeight:"600" , paddingTop:"90px" }} className="design2 ">Outlet Car Wash -</b> Get our outlet car wash appointment booked from our website and
          -	app or mobile
          to avoid queue waiting time and save your precious time for your family and friends.</p><br /><br />
          <p  onClick={() => myRef3.current.scrollIntoView()} className='reveal fade-bottom'  href='#Hybrid_content_plan'  id='Hybrid_content'><b style={{ display: "inline-block", color: "#979797", textDecoration: "none", paddingTop:"90px" ,fontWeight:"600"}} className="design2">Hybrid Car Wash -</b> With our hybrid car wash plan you get a monthly doorstep
          car wash along
          with outlet car wash as a perk at the most competitive market price without queue waiting
          time.</p><br /><br />
        </div>
      </div>
     
      <div style={{background:"white"}}>
              
                
               
        <h3 className='Workh reveal fade-bottom'>The work we do ,<br /> and the people we help.</h3><br />
        <p className='newsec1 reveal fade-bottom'>Our expert personnel provide the best services possible by attending to every detail of interior
          and exterior dusting, washing, shampooing,
          detailing and sanitizing services of vehicles at your place.
          We wish to transform automobile owners' perceptions of taking thorough care of their vehicles
          with our exceptional car cosmetic services.</p>
      
            
            <div className='services-display' >
            <div className='ImageCol'>
                <div className='Services-content reveal fade-left' id='doorstep_content_plan'  ref={myRef} style={{paddingTop:"90px"}}>
                    <div className='images-hold1'>
                        <img src={img1} className='img1'  alt=""/>
                    </div>
                    <div className='attached_headings'>
                    <p className='attached_content'><b className='design3' >Doorstep : </b> Get your car wash at your doorstep in one click.</p>
                    </div>
                    

                </div>
                <div className='Services-content reveal fade-left ' id='Outlet_content_plan' ref={myRef2} style={{paddingTop:"90px"}}>
                    <div className='images-hold1'>
                        <img src={img2} className='img1'  alt=""/>
                    </div>
                    <div className='attached_headings'>
                    <p className='attached_content'><b className='design3'>Outlet : </b>Book an hasslefree car wash appointment to avoid waiting time.</p>

                    </div>
                </div>
                </div>
                <div className='Services-content reveal fade-bottom' style={{display:"block", justifyItems:"center",paddingTop:"90px"}}id='Hybrid_content_plan' ref={myRef3} >
                    <div className='images-hold3' >
                        <img src={img3} className='img3'  alt=""/>
                    </div>
                    <div className='attached_headings1' style={{textAlign:"center"}}>
                    <p className='attached_content'> <b className='design3' style={{fontWeight:"bold"}}>Hybrid : </b>  Get monthly car wash at your doorstep with
									outlet car wash as an addon.</p>
                    </div>
                </div>
                <div className='ImageCol'>
                <div className='Services-content reveal fade-right'>
                    <div className='images-hold1'>
                        <img src={img4} className='img1'  alt=""/>
                    </div>
                    <div className='attached_headings'>
                    <p className='attached_content'><b className='design3' style={{fontWeight:"bold"}}>Detailing:</b>We use the best quality material for your car
									wash and detailing.</p>
                    </div>
                </div>

                <div className='Services-content reveal fade-right'>
                    <div className='images-hold1'>
                        <img src={img5} className='img1'  alt=""/>
                    </div>
                    <div className='attached_headings'>
                        <p className='attached_content'>Adopting cutting edge technology for your
									vehicle wellness.</p>
                    </div>
                </div>
                </div>


                <div className='Services-content reveal fade-bottom' style={{display:"block", justifyItems:"center",paddingTop:"50px"}}>
                    <div className='images-hold3'>
                        <img src={img6} className='img3' alt="" />
                    </div>
                    <div className='attached_headings1' style={{textAlign:"center"}}>
                        <p className='attached_content'>Usage of microfiber for washing to protect your
									car from swirl marks.</p>
                    </div>
                </div>
                <div className='ImageCol'>
                <div className='Services-content reveal fade-left'>
                    <div className='images-hold1'>
                        <img src={img7} className='img1'  alt=""/>
                    </div>
                    <div className='attached_headings'>
                        <p className='attached_content'>Treated water used for washing to avoid hard
									water marks and retain vehicle life.</p>
                    </div>
                </div>
                <div className='Services-content reveal fade-left'>
                    <div className='images-hold1'>
                        <img src={img8} className='img1'  alt=""/>
                    </div>
                    <div className='attached_headings'>
                    <p className='attached_content'>Using mild APC chemicals to keep your
									upholstery fresh and unharmed.</p>
                    </div>  
                </div>
                </div>
                <div className='Services-content reveal fade-bottom' style={{display:"block", justifyItems:"center", paddingTop:"50px",paddingBottom:'50px'}}>
                    <div className='images-hold3'>
                        <img src={img9} className='img3'  alt=""/>
                    </div>
                    <div className='attached_headings1' style={{textAlign:"center"}}>
                        <p className='attached_content' style={{textDecoration:"underline", paddingBottom:"5px" }}>ONE STOP SOLUTION FOR ALL YOUR CAR COSMETICS.</p>
                    </div>
                </div>

            </div>
            </div>
            <hr></hr>
            <Footer/>
    </div>

  </>

  );


}