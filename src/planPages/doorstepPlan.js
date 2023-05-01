import { DoorStepPlanList, RequiredProcess } from './planDaysList';
import './planPageStylesheet.css';
import Nav from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { CgSpinner } from "react-icons/cg";
import '../fadeEffect.css'
// import { useEffect } from 'react';
import { db } from '../firestore';
import { auth } from '../firebase';


// import { onAuthStateChanged } from 'firebase/auth';
import { doc, updateDoc,getDoc } from 'firebase/firestore';
// import { useRef } from 'react';

// import back from '../img/washing-her-car-outdoors.jpg'
export default function DoorstepPlan() {

  const navigate = useNavigate();

  // const [user,setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();
  const [single,setSingle] = useState({});

  // const futureDate = new Date();
  // futureDate.setDate(futureDate.getDate() + 15);
  const [showModal1, setShowModal1] = useState(false);
  const [uVehicleName, setuVehicleName] = useState("")
  const [uVehiclecolor, setVehiclecolor] = useState("")
  const [uVehicleNo, setVehicleNo] = useState("")
  const [uServicestart, setServiceStart] = useState("")
  const [uReady, setReady] = useState("")
  // const [formr,setFormR] =useState(false)
  // const myRef = useRef(null);


  function hideBook1() {
    setShowModal1(false);
    setLoading(false);
    setReady(null);
    setVehicleNo(null);
    setuVehicleName(null);
    setServiceStart(null);
    setVehiclecolor(null);
  }


  const DoorStepPlanPopUp = () => {



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

  //add data to firestore
  // const [uName,setName] = useState(null)


  const RequestAdd = (collectionName, docId, data) => {
    updateDoc(doc(db, collectionName, docId), data)
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  const fetchSingle =()=>{
    auth.onAuthStateChanged(async (Single)=>{
      if(Single){
        const docRef = doc(db, 'users',Single.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setSingle(docSnap.data());
        } else {
          console.log('No such document!');
        }
      }
      
    })
    checkUser();

  }

  const CheckFilledForm =()=>{
    auth.onAuthStateChanged(async (SingleData)=>{
      if(SingleData){
        const docRefex = doc(db, 'users',SingleData.uid);
        const docSnap = await getDoc(docRefex);
        if (docSnap.exists()) {
          setSingle(docSnap.data());
        } else {
          console.log('No such document!');
        }
      }
      
    })
    checkfilldetails();

  }

  function checkfilldetails(){
    // console.log(single.moreDetails.vehicleNo);

    if(single.moreDetails.vehicleNo){
      console.log(single.moreDetails.vehicleNo);
      fetchSingle();
     }else{
      console.log("not found Vehicle details..!")
      alert("Kindly fill details form..!")
      // navigate('/SignInSignUp');
    }
  }



  function checkUser(){
    if(single.Fullname){
      console.log(single.Fullname);
      auth.onAuthStateChanged((user => {
        if (user) {
          const data = {
            ServicePlanPicked: "DoorStep Plan",
            Booking_Time_Date: currentTime + currentDate,
          }
          RequestAdd("users", user.uid, data);
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
 

  // console.log(uName);
  const checkEmpty = () => {
    if (uVehicleName.length < 5 ) {
      alert("Please write vaild Vehicle number !");
      return;
    }
    if (uVehicleNo.length < 5) {
      alert("Please write vaild Vehicle number !");
      return;
    }
    if (uVehiclecolor.length < 3) {
      alert("Please provide Car Color !");
      return;
    }
    if (uServicestart.length < 4) {
      alert("Please provide start date !");
      return;
    }
    if (uReady.length < 4) {
      alert("Please fills all details !");
      return;
    }
    else {
      auth.onAuthStateChanged(user => {
        if (user) {
          const data = {
            
            moreDetails: {
              vehiclename: uVehicleName,
              vehiclecolor: uVehiclecolor,
              vehicleNo: uVehicleNo,
              serviceStart: uServicestart,
              readyBefore: uReady
            }
          };
          RequestAdd("users", user.uid, data);
          // setFormR(true);
          toast.success("Details saved successfully!");

        } else {
          navigate('/SignInSignUp');
        }
      });


    }

  }
  function onhandleClickbtn() {
    checkEmpty();
  }
 

  return (
    <>
      <Nav />
      <Toaster toastOptions={{ duration: 6000 }} />

      <div style={{ position: "fixed", width: "100%", zIndex: "1" }}> <div className='routes-links-design'>
        <div className='plans-routes-styles'>
          <Link to="/doorstepPlan"><h1>DoorStep Plan</h1></Link>

        </div>
        <div className='plans-routes-styles'>
          <Link to="/outletPlan" className='perfect'>Outlet Plan</Link>
        </div>
        <div className='plans-routes-styles'>
          <Link to="/hybridPlan" className='perfect'>Hybrid Plan</Link>

        </div>
      </div>

      </div>
      {showModal1 && <DoorStepPlanPopUp hideBook={hideBook1} />}


      <div className='dspc'>


        <div className='Form-container'>
          <div className='parent-back' >

            <div className='service-details-list'>
              <h1 style={{ display: "inline-block", fontSize: "2em", textDecoration: "underline", paddingBottom: "5px" }}>OUR SERVICES </h1><span style={{ color: "red" }}> 15 DAYS</span>
              {DoorStepPlanList.map((items) => {
                return (
                  <>
                    <li key={items.id}>{items.details}</li>
                  </>
                )
              })}
              <h3 style={{ color: "green" }}>Rs: 699</h3>
              <div className='rules-list'>
                <h2 style={{ color: "red", fontWeight: "bold" }}>REQUIRED PROCESS</h2>
                {RequiredProcess.map((items2) => {
                  return (
                    <li style={{ fontSize: "16px", listStyle: "circle" }} key={items2.id}> {items2.process}</li>

                  )
                })}
              </div>
            {/* <p className='service-details-listp'>First fill this required details form !</p> */}

              <button className='final-book' onClick={CheckFilledForm}>
              {loading && (
                <CgSpinner size={20} className="mt-1 animate-spin" />
              )}
              <span>Book Plan</span></button>
            </div>
          </div>

        </div>

        <div className="DSPcontainer" id='reqForm'>
          <div style={{ height: "fit-content", padding: "20px", }}>
            <div className="DSP-view_list">
              <h1 style={{
                fontSize: "1.5em", fontWeight: "bold", textAlign: "center", marginBottom: "5px", borderTopLeftRadius: "20px", backgroundColor: "white", color: "#064d47",
                borderBottomLeftRadius: "20px", padding: "5px", marginLeft: "5%"
              }}>
                Required Details Form
              </h1>


              <label
                htmlFor=""
                className="label-fullname"
              >
                Vehicle Number:
              </label>
              <input className="input-Name" placeholder='your vehicle number' value={uVehicleNo} onChange={(e) => { setVehicleNo(e.target.value); }}></input>
              <label
                htmlFor=""
                className="label-fullname"
              >
                Vehicle Name:
              </label>
              <input className="input-Name" placeholder=' vehicle name' value={uVehicleName} onChange={(e) => { setuVehicleName(e.target.value) }}></input>
              <label
                htmlFor=""
                className="label-fullname"
              >
                Vehicle Color:
              </label>
              <input className="input-Name" placeholder="example: red" value={uVehiclecolor} onChange={(e) => { setVehiclecolor(e.target.value) }}></input>
              <label
                htmlFor=""
                className="label-fullname"
              >
                Services Start-On date:
              </label>
              <input className="input-Name" style={{width:"fit-content"}}  type='date'placeholder="example: today's date" value={uServicestart} onChange={(e) => { setServiceStart(e.target.value) }}></input>
              <label
                htmlFor=""
                className="label-fullname"
              >
                Ready Before Time:
              </label>
              <select className='input-timing' value={uReady} onChange={(e)=>{setReady(e.target.value)}}>
    <option value="6 - 7 AM">6 - 7 AM</option>
    <option value="7 - 8 AM">7 - 8 AM</option>
    <option value="8 - 9 AM">8 - 9 AM</option>
    <option value="9 - 10 AM">9 - 10 AM</option>
  </select>
              {/* <input className="input-Name" placeholder='example: date' value={uReady} onChange={(e) => setReady(e.target.value)} type='time'></input> */}
              <button style={{ color: "white", fontSize: "1.2em", border: "2px solid white", width: "150px", marginTop: "20px", marginLeft: "calc(50% - 75px)", borderRadius: "5px" ,backgroundColor:"white"}}
                onClick={onhandleClickbtn}>
                {loading && (
                  <CgSpinner size={20} className="mt-1 animate-spin" />
                )}
                <span style={{color:"green",fontWeight:"bold"}}>SAVE</span></button>

              <div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )

}