import {DoorStepPlanList,RequiredProcess} from './planDaysList';
import './planPageStylesheet.css';
import Nav from '../components/Navbar';
import { Link } from 'react-router-dom';
import { toast,Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { CgSpinner } from "react-icons/cg";
import '../fadeEffect.css'

// import back from '../img/washing-her-car-outdoors.jpg'
export default function DoorstepPlan() {

  const [loading,setLoading] = useState(false);
  const [showModal1,setShowModal1] = useState(false);
  function hideBook1 (){ setShowModal1(false);setLoading(false); }
  const DoorStepPlanPopUp =()=>{
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

    return (
        <>
            <Nav />
         <Toaster  toastOptions={{ duration: 6000 }}/>

         <div style={{position:"fixed",width:"100%" ,zIndex:"1"}}> <div className='routes-links-design'>
            <div className='plans-routes-styles'>
                <Link to = "/doorstepPlan"><h1>DoorStep Plan</h1></Link>

                </div>
                <div className='plans-routes-styles'>
                <Link to = "/outletPlan" className='perfect'>Outlet Plan</Link>
                </div>
                <div className='plans-routes-styles'>
                <Link to = "/hybridPlan" className='perfect'>Hybrid Plan</Link>

                </div>
                </div>

            </div>
         {showModal1 && <DoorStepPlanPopUp hideBook = {hideBook1 } />}


        <div className='dspc'>

         
                <div className='Form-container'>
                  <div className='parent-back' >
                
                    <div className='service-details-list'>
                        <h1 style={{display:"inline-block", fontSize:"2em" ,textDecoration:"underline",paddingBottom:"5px"}}>OUR SERVICES </h1><span style={{color:"red"}}> 15 DAYS</span>
                  {DoorStepPlanList.map((items, index) => {
                            return (
                                <>
                                    <li key={index}>{items.details}</li>
                                </>
                            )
                        })}
                          <div className='rules-list'>
                    <h2 style={{color:"red",fontWeight:"bold"}}>REQUIRED PROCESS</h2>
                        {RequiredProcess.map((items2,index2)=>{
                          return(
                            <li style={{fontSize:"16px",listStyle:"circle"}} key={index2}> {items2.process}</li>

                          )
                        })}
                  </div>
                       </div>
                  </div>
                
                </div>
                
                <div className="DSPcontainer">
                <div style={{height:"fit-content",padding:"20px",}}>
                    <div className="DSP-view_list">
                       <h1 style={{fontSize:"1.5em",fontWeight:"bold" ,textAlign:"center",marginBottom:"5px",borderTopLeftRadius:"20px" ,backgroundColor:"white",color:"#064d47",borderBottomLeftRadius:"20px",padding:"5px"}}>
                        Required Details Form
                       </h1>
                       
                       <label
                  htmlFor=""
                  className="label-fullname"
                >
                  Enter Your Full Name: 
                </label>
                <input  className="input-Name"></input>
                <label
                  htmlFor=""
                  className="label-fullname"
                >
                  Vehicle Number: 
                </label>
                <input  className="input-Name"></input>
                <label
                  htmlFor=""
                  className="label-fullname"
                >
                  Reg Number: 
                </label>
                <input  className="input-Name"></input>
                <label
                  htmlFor=""
                  className="label-fullname"
                >
                  Vehicle Color: 
                </label>
                <input  className="input-Name"></input>
                <label
                  htmlFor=""
                  className="label-fullname"
                >
                Services Start-On date: 
                </label>
                <input  className="input-Name"></input>
                <label
                  htmlFor=""
                  className="label-fullname"
                >
                  Ready Before: 
                </label>
                <input  className="input-Name"></input>
                <button style={{color:"white",fontSize:"1.2em",border:"2px solid white",width:"150px",marginTop:"20px",marginLeft:"calc(50% - 75px)",borderRadius:"5px"}}
                onClick={onhandleClickbtn}>
                {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>SAVE & BOOK</span></button>
                
                <div>
                    </div>
                    </div>
                </div>

                </div>
            </div>
        
        </>
    )

}