import Nav from '../src/components/Navbar';
// import Address from '../src/components/reverseGeo';
// import ComSoon from './img/coming-soon.jpg';
import {DoorStep,Outlet,Hybrid } from './PlansList';

const Plan = () => {
    return(
        <>
        <Nav/>

        <div className='Plans-View'>
            <h1>Choose Your Plans</h1>
            <div className='Plans-container'>
                <div className='plans-content-view'>
                    <div className='plan-desgin'> 
                        <h2>DoorStep Plan</h2>
                        
                            {DoorStep.map((item,index)=>{
                                return(
                                <p key={index} className='li-list'>
                                   <h1>{item.price}</h1>
                                    {item.planDetails}  
                                </p>)
                            })}
                            <button className='btn-book' >BOOK PLAN</button>
                        
                    </div>
                    
                </div>
                <div className='plans-content-view'>
                <div className='plan-desgin'><h2>Outlet Plan</h2>
                            {Outlet.map((item,index)=>{
                                return(
                                <p key={index} className='li-list'>
                                   <h1>{item.price}</h1>
                                    {item.planDetails}
                                </p>)
                            })}
                            <button className='btn-book' >BOOK PLAN</button>

                            
                        </div>
                </div>
                <div className='plans-content-view'>
                <div className='plan-desgin'><h2>Hybrid Plan</h2>
                
                            {Hybrid.map((item,index)=>{
                                return(
                                <p key={index} className='li-list'>
                                   <h1>{item.price}</h1>
                                    {item.planDetails}
                                </p>)
                            })}
                            <button className='btn-book' >BOOK PLAN</button>

                            
                        </div>
                </div>
            </div>
        </div>
        </>
    )
  };
  
  export default Plan;