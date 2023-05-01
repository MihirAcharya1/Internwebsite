import Nav from '../components/Navbar';
import { HybridPlanList } from './planDaysList';
import { Link, useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { CgSpinner } from "react-icons/cg";
import '../fadeEffect'
import '../fadeEffect.css'
import { doc, updateDoc ,getDoc} from 'firebase/firestore';
import { db } from '../firestore';
import { auth } from '../firebase';
import { useEffect } from 'react';



export default function HybridPlan() {
  
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();
  const navigate = useNavigate();
  const [singleu,setSingle] =useState({});

  const [loading, setLoading] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  function hideBook1() { setShowModal1(false); setLoading(false); navigate('/') }

  const RequestAdd = (collectionName, docId, data) => {
    updateDoc(doc(db, collectionName, docId), data)
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  useEffect(()=>{
    auth.onAuthStateChanged(async (Singleu)=>{
      if(Singleu){
        const docRef = doc(db, 'users',Singleu.uid);
        const docSnapd = await getDoc(docRef);
        if (docSnapd.exists()) {
          setSingle(docSnapd.data());
        } else {
          console.log('No such document!');
        }
      }
      else{
        alert("Sign In First..!");
        navigate('/SignInSignUp');
      }})
  })
  
  

  function checkUser(){
    console.log(singleu.Fullname);

    if(singleu.Fullname){
      console.log(singleu.Fullname);
      auth.onAuthStateChanged((userji => {
        if (userji) {
          const datas = {
            ServicePlanPicked: "Hybrid Plan",
            Booking_Time_Date: currentTime + currentDate
          }
          RequestAdd("users", userji.uid, datas);
        } else {
          navigate('/SignInSignUp');
        }
      }))
      setLoading(true);
      toast.success("Plan Booked Successfully!");
      setShowModal1(true);

    }else{
      console.log("not found Name!")
      alert("Complete Your Profile..!")
      navigate('/SignInSignUp');
    }
  }

  const HybridPlanPopUp = () => {
    return (
      <><div className='plan-wrapper'></div>
        <div className='plan-booked-view'>
          <button onClick={hideBook1} className='btn-cancel'><i className='fas fa-times'></i></button>

          <h1>Thanks for JoinUs !</h1>
          <h3 style={{ color: "black" }}>Our Staff call you within few hour.</h3>

        </div>
      </>
    )
  }

  return (
    <div className="OutletPan-main-container">
      <Nav />
      <Toaster toastOptions={{ duration: 6000 }} />

      <div style={{ position: 'fixed', width: "100%", zIndex: "1" }}>  <div className='routes-links-design'>

        <div className='plans-routes-styles'>
          <Link to="/doorstepPlan" className='perfect'>DoorStep Plan</Link>

        </div>
        <div className='plans-routes-styles'>
          <Link to="/outletPlan" className='perfect' >Outlet Plan</Link>
        </div>
        <div className='plans-routes-styles'>
          <Link to="/hybridPlan" ><h1>Hybrid Plan</h1></Link>

        </div>


      </div>
      </div>
      {showModal1 && <HybridPlanPopUp hideBook={hideBook1} />}

      <div className="Main-container" >

        <div className="image-view">

        </div>

        <div className="Plan-details-view">

          <div className='service-details-list-2'>
            <h1 style={{ display: "inline-block", fontSize: "2em", textDecoration: "underline", paddingBottom: "5px", color: "white" }}>
              OUR SERVICES </h1>
            <span style={{ fontSize: "1.2em", fontWeight: "bold", color: "red" }}>Complete Wash</span>
            {HybridPlanList.map((items, index) => {
              return (
                <>
                  <li key={index}>{items.details}</li>
                </>
              )
            })}

            <h3 style={{ color: "green" }}>Rs: 1099</h3>
            <h2>Single Click is Required</h2>
            <button className='final-book' onClick={checkUser}>
              {loading && (
                <CgSpinner size={20} className="mt-1 animate-spin" />
              )}
              <span>Book Plan</span></button>
          </div>
        </div>
      </div>

    </div>
  )
}