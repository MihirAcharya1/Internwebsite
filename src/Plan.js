// import { useState } from 'react';
import Nav from '../src/components/Navbar';
import {DoorStep,Outlet,Hybrid } from './PlansList';
// import './planmodal.css';
import { Link } from 'react-router-dom';
import './fadeEffect.css'

const Plan = () => {

    return(
        <>
        <Nav/>

        <div className='Plans-View'>
            <p style={{fontSize:"2em",color:"white",textAlign:"center", margin:"10px"}}>Choose Your Plans</p>
            <div className='Plans-container'>
                <div className='plans-content-view plan-fade-down'>
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
                           <Link to = "/doorstepPlan" > <button className='btn-book' >Select Plan</button></Link>
                            {/* {showModal1 && <DoorStepPlan hideBook = {hideBook1 } />} */}
                    </div>
                    
                </div>
                <div className='plans-content-view plans-fade'>
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
                        <Link to = "/outletPlan" > <button className='btn-book' >Select Plan</button></Link>

                            {/* {showModal2 && <OutletPlan hideBook = {hideBook2 } />} */}
                            
                        </div>
                </div>
                <div className='plans-content-view plan-fade-down'>
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
                        <Link to = "/hybridPlan" > <button className='btn-book' >Select Plan</button></Link>

        
                            
                        </div>
                </div>
            </div>
        </div>
        </>
    )
  };
  
  export default Plan;