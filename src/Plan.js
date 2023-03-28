import Nav from '../src/components/Navbar';
import Address from '../src/components/reverseGeo';

const Plan = () => {
    return(
        <>
        <Nav/>
        <div style={{padding:"10px", width:"300px"}}>     
        <Address/>
        </div>
  
        </>
    )
  };
  
  export default Plan;