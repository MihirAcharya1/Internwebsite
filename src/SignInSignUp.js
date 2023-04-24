import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import Nav from './components/Navbar';
import OtpInput from "otp-input-react";
import { useState, useEffect, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "./firebase";
import { RecaptchaVerifier, getAuth, signInWithPhoneNumber, onAuthStateChanged, signOut, fetchSignInMethodsForEmail, SignInMethod } from "firebase/auth";
import { doc, setDoc, addDoc, collection, getDocs, getDoc, updateDoc } from "firebase/firestore";
import { toast, Toaster } from "react-hot-toast";
import { db } from './firestore';
import axios from 'axios';
import './Users/profilecss.css'
import { useNavigate } from "react-router-dom";
import './planPages/planPageStylesheet.css'





const SignInSignUp = () => {


  const userNumber = useRef();
  const navigate = useNavigate();
  const [UserUID, setUserUID] = useState("");
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  // const UserCollectionRef = collection(db, "users");


  function PopProfile() { setShowModal(false); }



  useEffect(() => {
    // Check if a user is already signed in
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      }
    });
    return unsubscribe;
  }, []);


  // get current user db
const [userData,setUserData] = useState({});
  function CurrentUserDb(e){

    auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
        e.preventDefault();
        db.collection("users")
        .doc(user.uid)
        .get()
        .then((sp)=>{
          if(sp){
            setUserData(sp.data());
          }
        });
          console.log(userData);
      }
    });

   
  }



  //add data to firestore
  // const [uName,setName] = useState("")
  // // const [uMobileNumber,setMobileNumber] = useState("")
  // const [uAddress,setAddress] = useState("")
  // const [uRefnumber,setRefnumber] = useState("")
  // const [uServicePick,setServicePick] = useState("")
  // const [uVehiclecolor,setVehiclecolor] = useState("")
  // const [uVehicleNo,setVehicleNo] = useState("")
  // const [uServicestart,setServiceStart] = useState("")
  // const [uReady,setReady] = useState("")

  //create user in firestore




  // useEffect(()=>{
  //   const getUsers  = async () => {
  //     const data = await getDocs(UserCollectionRef);
  //     // console.log(data);
  //     setUser(data.docs.map((doc)=> ({...doc.data(),id:doc.id})))

  //   }
  //   getUsers();
  //   // ShareNo();
  // },[]
  // );

  // const ShareNo =()=>{
  //   setMobile(user.Contact_No);

  // }


  // captcha Verify
  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {
            toast.dismiss("Verify mobile no. again!");
          },
        },
        auth
      );
    }
  }


  //SignIn/up function 

  function onSignup() {
    setLoading(true);
    onCaptchVerify();
    //add usernumber to local storage

    console.log(ph);
    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        // alert("Error:"+error);
        setLoading(false);
      });
  }




  //Otp verfy function
  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);

        setLoading(false);
        handleAddData();
        toast.success("Login successfully!");

        localStorage.setItem("phonenumber",ph);
        
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  //Sign out function
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setShowOTP(false);
        setUserUID(null);
        setDocumentData(null);
        localStorage.setItem("phonenumber","Sign In");

        console.log("User SignOut Successfully!")
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //fetch current user data







  //complete from function
  const HandleCompleteProfile = () => {
    return (<>
      <div className='plan-wrapper'>
        <Toaster toastOptions={{ duration: 6000 }} />
      </div>
      <div className='plan-booked-view2' style={{ marginTop: "30px" }}>
        <button onClick={PopProfile} className='btn-cancel'><i className='fas fa-times'></i></button>

        <h1>Complete Profile</h1>
        <Profile />

      </div>

    </>
    )
  }

  //create database of user in firestore

  const addDataWithCustomId = (collectionName, docId, data) => {
    updateDoc(doc(db, collectionName, docId), data)
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };


  // const CreateUsers = async()=> {
  //   await addDoc(UserCollectionRef,
  //     {
  //       fullname:uName,
  //       phonenumber:ph,
  //       address:uAddress,
  //       refnumber:uRefnumber,
  //       servicePick:uServicePick,
  //       vehiclecolor:uVehiclecolor,
  //       vehicleNo:uVehicleNo,
  //       serviceStart:uServicestart,
  //       readybefore:uReady

  //     })
  // }
  const handleAddData = () => {
    const data = {
      phonenumber: ph,
    };
    auth.onAuthStateChanged((Cuser) => {
      if (Cuser) {
        addDataWithCustomId("users", Cuser.uid, data);
      }
    })
  };

  const [showModal1,setShowModal1] = useState(false);
  function hideBook1 (){setShowModal1(false);setLoading(false);navigate('/Plan') }


  const SavedPopUp =()=>{
    return(
        <><div className='plan-wrapper'></div>
        <div className='plan-booked-view'>

         <h1>Your Data Saved !</h1>
         <h3 style={{color:"black"}}>Lets see Plans & Prices...</h3>
        <button onClick={hideBook1} className='btn-cancel2'>OK</button>
            
        </div>
        </>
    )
}


  function Profile() {
    const [pincode, setPincode] = useState('');
    const [city, setCity] = useState("");
    const [fullname, setfullname] = useState("");
    const [houseno, sethouseno] = useState("");
    const [colony, setcolony] = useState("");
    const [area, setarea] = useState("");
    const [state, setState] = useState("");

    const addDataWithCustomId2 = (collectionName, docId, data) => {
      updateDoc(doc(db, collectionName, docId), data)
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    };

    const handlebtnSave = () => {


      // if(!pincode || !city || !fullname || !houseno || !colony || !area || !state){
      //   // return;
      // alert("Fields can't be empty !");

      // }else{

        auth.onAuthStateChanged((user)=>{
          if(user){
            const data = { 
              Fullname:fullname,
              Houseno:houseno,
              Colony:colony,
              Area:area,
              City:city,
              State:state
                };
                addDataWithCustomId2("users",user.uid,data);
                console.log("successfully set new updates");
                toast.success("Save Perfectly!");
                setShowModal(false);
                setShowModal1(true);
                
          }
        });

      
     
    // }
  }




    const handlePincodeSubmit = (event) => {
      event.preventDefault();
      axios.get(`https://api.postalpincode.in/pincode/${pincode}`)
        .then(response => {
          const data = response.data[0].PostOffice[0];
          setCity(data.Block);
          setState(data.State);
        })
        .catch(error => {
          console.log(error);
        });
    };
    return (
      <div>

        <div className="UserDetailsForm">
          <label style={{ fontSize: "1.2em", fontWeight: "bold" }}>Enter Your Full Name</label>
          <input type="text" className="inputAddressStyles" value={fullname} onChange={(e) => { setfullname(e.target.value) }} placeholder="FullName"></input>
          <label style={{ display: "block", fontSize: "1.2em", fontWeight: "bold" }}>Address</label>
          <input type="text" className="inputAddressStyles" value={houseno} placeholder="HouseNumber" onChange={(e) => { sethouseno(e.target.value) }}></input>
          <input type="text" className="inputAddressStyles" value={colony} placeholder="Colony" onChange={(e) => { setcolony(e.target.value) }}></input>
          <input type="text" className="inputAddressStyles" value={area} placeholder="Area" onChange={(e) => { setarea(e.target.value) }}></input>
          <input type="number" className="pincodecss" value={pincode} placeholder="Pincode" onChange={(e) => { setPincode(e.target.value) }}></input>
          <button onClick={handlePincodeSubmit} className="save-btn">CHECK</button>
          <input type="text" className="inputAddressStyles" value={state} placeholder="State" onChange={(e) => { setState(e.target.value) }}></input>
          <input type="text" className="inputAddressStyles" value={city} placeholder="City" onChange={(e) => { setCity(e.target.value) }} ></input>
          <button className="btn-collect" onClick={handlebtnSave}>SAVE</button>
          

        </div>

      </div>
    )
  }


  const [documentData, setDocumentData] = useState(null);
  const FetchData = () =>{
     auth.onAuthStateChanged(async (Cuser) => {
      if (Cuser){

        const documentRef = doc(db, 'users', Cuser.uid);
        const docSnap = await getDoc(documentRef);
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          // setDocumentData(docSnap.data())
        } else {
          console.log("No such document!");
        }


      }
    });
  }

  

  const getDataFilled = () => {

// FetchData();
    

    return (

      <div className="logout-view" style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
         <Toaster toastOptions={{ duration: 3000 }} />
         {showModal1 && <SavedPopUp hideBook1 = {hideBook1 } />}

        <div className="logout-container" style={{ width: "300px", height: "fit-content", padding: "10px" }}>

          <button
            onClick={() => setShowModal(true)}
            className=" bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
          >
            <span>Complete Profile First</span>
          </button>
          {showModal && <HandleCompleteProfile  />}
          <br />
          <button
            onClick={handleSignOut}
            className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
          >
            {loading && (
              <CgSpinner size={20} className="mt-1 animate-spin" />
            )}
            <span>Logout</span>
          </button>
          <div>
            {/* {documentData.phonenumber} */}
          </div>

        </div>
      </div>

    )
  }

  return (<> <Nav />
    <section className=" flex items-center justify-center h-screen ">


      <div>
        <Toaster toastOptions={{ duration: 3000 }} />
        <div id="recaptcha-container" ></div>
        {user ? (
          getDataFilled()
        ) : (

          <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
            <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
              Welcome to <br /> <b style={{ color: "rgb(80, 234, 80)" }}>GO</b><b style={{ color: "rgb(0, 128, 255)" }}>WASH</b><b style={{ color: "red" }}>E</b><span style={{ color: "gray" }}>xpert</span>
            </h1>
            {showOTP ? (
              <>
                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                  <BsFillShieldLockFill size={30} />
                </div>
                <label
                  htmlFor="otp"
                  className="font-bold text-xl text-white text-center"
                >
                  Enter your OTP
                </label>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="opt-container "
                ></OtpInput>
                <button
                  onClick={onOTPVerify}
                  className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Verify OTP</span>
                </button>
              </>
            ) : (
              <>
                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                  <BsTelephoneFill size={30} />
                </div>

                <label
                  htmlFor=""
                  className="font-bold text-xl text-white text-center"
                >
                  Verify your phone number
                </label>
                <PhoneInput country={"in"} value={ph} onChange={setPh}      ref={userNumber}  />
                <button
                  onClick={onSignup}
                  className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Send code via SMS</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section></>
  );
};

export default SignInSignUp;