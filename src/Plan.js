import { useState } from 'react';
import Nav from '../src/components/Navbar';
import {DoorStep,Outlet,Hybrid } from './PlansList';
import './planmodal.css';
import { CgSpinner } from "react-icons/cg";
import { toast, Toaster } from "react-hot-toast";


const Plan = () => {
    const [showModal1,setShowModal1] = useState(false);
    const [showModal2,setShowModal2] = useState(false);
    const [showModal3,setShowModal3] = useState(false);
    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [loading3, setLoading3] = useState(false);


    
    function hideBook1 (){ setShowModal1(false);setLoading1(false);}
    function hideBook2 (){ setShowModal2(false);setLoading2(false);}
    function hideBook3 (){ setShowModal3(false);setLoading3(false);}
    function loadingicon1(){setLoading1(true);toast.success("Booked successfully!")}
    function loadingicon2(){setLoading2(true);}
    function loadingicon3(){setLoading3(true);}

    


    const DoorStepPlan = () => { 
        return(
            <>
        

            <div className='plan-wrapper'>
            <Toaster toastOptions={{ duration: 4000 }} />
            </div>
            <div className='plan-booked-view'>
            <button onClick={hideBook1} className='btn-cancel'><i className='fas fa-times'></i></button>

                <h2>DoorStep Wash Plan</h2>
                <h3>Plan Details</h3>
                <p>Exterior Cleaning, Glass Cleaning, Wheel Cleaning. Payable amount will be Rs.699</p>
                
                <button onClick={loadingicon1} className='btn-confirm'>
                {loading1 && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span style={{paddingLeft:"5px"}}>Confirm</span></button>

            </div>
            </>
        )
    }
    const OutletPlan =()=>{
        return(
            <><div className='plan-wrapper'></div>
            <div className='plan-booked-view'>
            <button onClick={hideBook2} className='btn-cancel'><i className='fas fa-times'></i></button>

                <h2>Outlet Wash Plan</h2>
                <h3>Plan Details</h3>
                <p>Complete Car Wash, Interior Vacuum, Dashboard & Tyre Polish. Payable amount will be Rs.699</p>
                <button onClick={loadingicon2} className='btn-confirm'>{loading2 && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span style={{paddingLeft:"5px"}}>Confirm</span></button>
            </div>
            </>
        )
    }
    const HybridPlan =()=>{
        return(
            <><div className='plan-wrapper'></div>
            <div className='plan-booked-view'>
            <button onClick={hideBook3} className='btn-cancel'><i className='fas fa-times'></i></button>

                <h2>Hybrid Wash Plan</h2>
                <h3>Plan Details</h3>
                <p>Full Car Wash, Plan Includes both ( DoorStep and Outlet). Payable amount will be Rs.1099</p>
                <button onClick={loadingicon3} className='btn-confirm'>
                    {loading3 && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span style={{paddingLeft:"5px"}}>Confirm</span></button>
            </div>
            </>
        )
    }

    return(
        <>
        <Nav/>

        <div className='Plans-View'>
            <p style={{fontSize:"2em",color:"white",textAlign:"center", margin:"10px"}}>Choose Your Plans</p>
            <div className='Plans-container'>
                <div className='plans-content-view'>
                    <div className='plan-desgin'> 
                        <h2 className='plan-h2'>DoorStep Plan</h2>
                        
                            {DoorStep.map((item,index)=>{
                                return(
                                    <>
                                    <div key={index}>
                                       <h1 >{item.price}</h1>
                                        <p className='li-list'>{item.planDetails}  </p>
                                    </div>
                                    </>)
                            })}
                            <button className='btn-book' onClick={()=>setShowModal1(true)}>BOOK PLAN</button>
                            {showModal1 && <DoorStepPlan hideBook = {hideBook1 } />}
                    </div>
                    
                </div>
                <div className='plans-content-view'>
                <div className='plan-desgin'><h2 className='plan-h2'>Outlet Plan</h2>
                            {Outlet.map((item,index)=>{
                                return(
                                    <>
                                    <div key={index}>
                                       <h1 >{item.price}</h1>
                                        <p className='li-list'>{item.planDetails}  </p>
                                    </div>
                                    </>)
                            })}
                            <button className='btn-book' onClick={()=>setShowModal2(true)}>BOOK PLAN</button>
                            {showModal2 && <OutletPlan hideBook = {hideBook2 } />}
                            
                        </div>
                </div>
                <div className='plans-content-view'>
                <div className='plan-desgin'><h2 className='plan-h2'>Hybrid Plan</h2>
                
                            {Hybrid.map((item,index)=>{
                                return(
                                    <>
                                    <div key={index}>
                                       <h1 >{item.price}</h1>
                                        <p className='li-list'>{item.planDetails}  </p>
                                    </div>
                                    </>)
                            })}
                            <button className='btn-book' onClick={()=>setShowModal3(true)}>BOOK PLAN</button>
                            {showModal3 && <HybridPlan hideBook = {hideBook3 } />}
                            
                        </div>
                </div>
            </div>
        </div>
        </>
    )
  };
  
  export default Plan;