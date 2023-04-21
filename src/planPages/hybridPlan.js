import Nav from '../components/Navbar';
import {HybridPlanList} from './planDaysList';
import { Link } from 'react-router-dom';
import { toast,Toaster } from 'react-hot-toast';
import {useState} from 'react';
import { CgSpinner } from "react-icons/cg";
import '../fadeEffect'
import '../fadeEffect.css'

export default function HybridPlan(){
    const [loading,setLoading] = useState(false);
    const [showModal1,setShowModal1] = useState(false);
    function hideBook1 (){ setShowModal1(false);setLoading(false); }
  
    const HybridPlanPopUp =()=>{
        return(
            <><div className='plan-wrapper'></div>
            <div className='plan-booked-view'>
            <button onClick={hideBook1} className='btn-cancel'><i className='fas fa-times'></i></button>

             <h1>Thanks for JoinUs !</h1>
             <h3 style={{color:"black"}}>Our Staff call you within few hour.</h3>
                
            </div>
            </>
        )
    }
    function onhandleClickbtn (){
      setLoading(true);
      toast.success("Plan Booked Successfully!");
      setShowModal1(true);
    
    }
    return(
        <div className="OutletPan-main-container">
            <Nav/>
         <Toaster  toastOptions={{ duration: 6000 }}/>

         <div style={{position:'fixed',width:"100%",zIndex:"1"}}>  <div className='routes-links-design'>
           
                <div className='plans-routes-styles'>
                <Link to = "/doorstepPlan" className='perfect'>DoorStep Plan</Link>

                </div>
                <div className='plans-routes-styles'>
                <Link to = "/outletPlan"className='perfect' >Outlet Plan</Link>
                </div>
                <div className='plans-routes-styles'>
                <Link to = "/hybridPlan" ><h1>Hybrid Plan</h1></Link>

                </div>
               

            </div>
            </div>
            {showModal1 && <HybridPlanPopUp hideBook = {hideBook1 } />}

            <div className="Main-container" >

                <div className="image-view">
                    
                </div>
                <div className="Plan-details-view">

                <div className='service-details-list-2'>
                        <h1 style={{display:"inline-block", fontSize:"2em" ,textDecoration:"underline",paddingBottom:"5px",color:"white"}}>
                            OUR SERVICES </h1>
                            <span style={{fontSize:"1.2em",fontWeight:"bold",color:"red"}}>Complete Wash</span>
                        { HybridPlanList.map((items, index) => {
                            return (
                                <>
                                    <li key={index}>{items.details}</li>
                                </>
                            )
                        })}
                
                      <h2>Single Click is Required</h2>
                      <button className='final-book'  onClick={onhandleClickbtn}>
                {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Book Plan</span></button>
                  </div>
                </div>
            </div>
            {/* <section>
        <div class="container reveal fade-bottom">
          <h2>Caption</h2>
          <div class="text-container">
            <div class="text-box">
              <h3>Section Text</h3>
              <p>
              jsdjj
              </p>
            </div>
            <div class="text-box">
              <h3>Section Text</h3>
              <p>
                jdshu</p>
            </div>
            <div class="text-box">
              <h3>Section Text</h3>
              <p>
                nsasnjd
              </p>
            </div>
          </div>
        </div>
      </section> */}
        </div>
    )
}