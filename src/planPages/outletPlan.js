import Nav from '../components/Navbar';
import { OutletPlanList} from './planDaysList';
import { Link } from 'react-router-dom';
import { toast,Toaster } from 'react-hot-toast';
import {useState} from 'react';
import { CgSpinner } from "react-icons/cg";
import './planmodal.css'
import '../fadeEffect.css'
 


const OutletPlan=()=>{
    const [loading2,setLoading2] = useState(false);
    const [showModal2,setShowModal2] = useState(false);
    function hideBook1 (){ setShowModal2(false);setLoading2(false); }
  
    const OutletPlanPopUp =()=>{
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
    setLoading2(true);
    toast.success("Plan Booked Successfully!");
    setShowModal2(true);
  
  }
    return(
        <div className="OutletPan-main-container">
            <Nav/>
            <div style={{position:'fixed',width:"100%",zIndex:"1"}}><div className='routes-links-design'>
            
            <div className='plans-routes-styles'>
            <Link to = "/doorstepPlan" className='perfect'>DoorStep Plan</Link>

            </div>
            <div className='plans-routes-styles'>
            <Link to = "/outletPlan" ><h1>Outlet Plan</h1></Link>
            </div>
            
            <div className='plans-routes-styles'>
            <Link to = "/hybridPlan"className='perfect' >Hybrid Plan</Link>

            </div>

        </div></div>
         <Toaster  toastOptions={{ duration: 6000 }}/>

         {showModal2 && <OutletPlanPopUp hideBook = {hideBook1 } />}

            <div className="Main-container">

            
                <div className="Plan-details-view">

                <div className='service-details-list-2'>
                        <h1 style={{display:"inline-block", fontSize:"2em" ,textDecoration:"underline",paddingBottom:"5px"}}>OUR SERVICES </h1><span style={{color:"red",marginLeft:"20px"}}>3 WASH</span>
                  { OutletPlanList.map((items) => {
                            return (
                                <>
                                    <li key={items.id}>{items.details}</li>
                                </>
                            )
                        })}
                        <h3  style={{color:"green"}}>Rs: 699</h3>

                          <h2>Single Click is Required</h2>
                      <button className='final-book'  onClick={onhandleClickbtn}>
                {loading2 && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Book Plan</span></button>

                      
                  </div>
                </div>
            </div>
        </div>
    )
}
export default OutletPlan;