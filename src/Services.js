import img1 from './img/woman-washing-her-car-outside1 - Copy.jpg'
import img2 from './img/car-wash-detailing-station.jpg'
import img3 from './img/hybrid.jpg'
import img4 from './img/beautiful-car-washing-service.jpg'
import img5 from './img/young-man-washing-car-carwash-station-outdoor.jpg'
import img6 from './img/close-up-car-care-process.jpg'
import img7 from './img/man-washing-his-car-garage.jpg'
import img8 from './img/chemicals.jpg'
import img9 from './img/cosmetics.jpg'
import Nav from '../src/components/Navbar';


export default function service() {
    return (
            <div style={{background:"white"}}>
                <Nav/>
                
                {/* <div className='Services_container'> */}
        <h3 className='Workh'>The work we do ,<br /> and the people we help.</h3><br />
        <p className='newsec1 '>Our expert personnel provide the best services possible by attending to every detail of interior
          and exterior dusting, washing, shampooing,
          detailing and sanitizing services of vehicles at your place.
          We wish to transform automobile owners' perceptions of taking thorough care of their vehicles
          with our exceptional car cosmetic services.</p>
      {/* </div> */}
            
            <div className='services-display' >
            <div className='ImageCol'>
                <div className='Services-content reveal fade-left' id='doorstep_content_plan' >
                    <div className='images-hold1'>
                        <img src={img1} className='img1'  alt=""/>
                    </div>
                    <div className='attached_headings'>
                    <p className='attached_content'><b className='design3' >Doorstep : </b> Get your car wash at your doorstep in one click.</p>
                    </div>
                    

                </div>
                <div className='Services-content reveal fade-left' id='Outlet_content_plan'>
                    <div className='images-hold1'>
                        <img src={img2} className='img1'  alt=""/>
                    </div>
                    <div className='attached_headings'>
                    <p className='attached_content'><b className='design3'>Outlet : </b>Book an hasslefree car wash appointment to avoid waiting time.</p>

                    </div>
                </div>
                </div>
                <div className='Services-content reveal fade-bottom' style={{display:"block", justifyItems:"center",paddingTop:"50px"}}id='Hybrid_content_plan' >
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
                <div className='Services-content reveal fade-bottom' style={{display:"block", justifyItems:"center", paddingTop:"50px"}}>
                    <div className='images-hold3'>
                        <img src={img9} className='img3'  alt=""/>
                    </div>
                    <div className='attached_headings1' style={{textAlign:"center"}}>
                        <p className='attached_content' style={{textDecoration:"underline", paddingBottom:"5px" }}>ONE STOP SOLUTION FOR ALL YOUR CAR COSMETICS.</p>
                    </div>
                </div>

            </div>
            </div>
       
    )
}