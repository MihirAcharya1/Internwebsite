import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import Nav from './components/Navbar';
import OtpInput from "otp-input-react";
import { useState ,useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "./firebase";
import { RecaptchaVerifier, getAuth, signInWithPhoneNumber,onAuthStateChanged,signOut,fetchSignInMethodsForEmail, SignInMethod } from "firebase/auth";
import { doc, setDoc ,addDoc ,collection,getDocs} from "firebase/firestore"; 
import { toast, Toaster } from "react-hot-toast";
import {db} from './firestore';
import axios from 'axios';
import './Users/profilecss.css'




const SignInSignUp = () => {



  // const [mobile ,setMobile] = useEffect("");
  const [UserUID,setUserUID] = useState("");
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const [showModal,setShowModal]=useState(false);
   const UserCollectionRef = collection(db,"users");
  

function PopProfile(){ setShowModal(false);}

     
  //  console.log("mesage")
  
const [checkUser ,setCheckUser] =useState(null);
// function UserIndentity(){
//   const Mauth = getAuth();
//   const newuser = Mauth.currentUser;
//   if(newuser){
//    console.log("a jhamru");
//    console.log(newuser.uid);
//   }else{
//     console.log("fuck")
//   }
// }
useEffect(() => {
  // Check if a user is already signed in
  const unsubscribe = auth.onAuthStateChanged(user => {
    if (user) {
      setUser(user);
      console.log(user.uid);
      setUserUID(user.uid);
      console.log("message"+UserUID);
    }
  });
  return unsubscribe;
}, []);

 
  


//add data to firestore
const [uName,setName] = useState("")
// const [uMobileNumber,setMobileNumber] = useState("")
const [uAddress,setAddress] = useState("")
const [uRefnumber,setRefnumber] = useState("")
const [uServicePick,setServicePick] = useState("")
const [uVehiclecolor,setVehiclecolor] = useState("")
const [uVehicleNo,setVehicleNo] = useState("")
const [uServicestart,setServiceStart] = useState("")
const [uReady,setReady] = useState("")

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
        console.log("User SignOut Successfully!")
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //complete from function
  const HandleCompleteProfile=()=>{
    return(<>
      <div  className='plan-wrapper'>
            <Toaster toastOptions={{ duration: 6000 }}  />
      </div>
       <div className='plan-booked-view2' style={{marginTop:"30px"}}>
      <button onClick={PopProfile} className='btn-cancel'><i className='fas fa-times'></i></button>

           <h1>Complete Profile</h1>
           <Profile/>

       </div>

       </>
    )
  }

//create database of user in firestore

const addDataWithCustomId = (collectionName, docId, data) => {
  setDoc(doc(db, collectionName, docId), data)
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
};


const CreateUsers = async()=> {
  await addDoc(UserCollectionRef,
    {
      fullname:uName,
      phonenumber:ph,
      address:uAddress,
      refnumber:uRefnumber,
      servicePick:uServicePick,
      vehiclecolor:uVehiclecolor,
      vehicleNo:uVehicleNo,
      serviceStart:uServicestart,
      readybefore:uReady
      
    })
}
const handleAddData = () => {
  const data = { 
    phonenumber:ph,
     };
     const customId = UserUID+"@"
  addDataWithCustomId("users", customId, data);
};



  function Profile(){
    const [pincode, setPincode] = useState('');

    const [city,setCity] =useState("");
    const [state,setState] =useState("");
    const [userState, setUserState] = useState({
        fullname: "",
        houseno:"",
        colony:"",
        area:""

      }) 
      
      function handlebtnSave(){
      
      }
      const handlePincodeChange = (event) => {
        setPincode(event.target.value);
      
      };
       
    const handleChange = (e)=>{
      const value = e.target.value;
      setUserState({
       userState,
       [e.target.name]: value
      });
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
    return(
      <div>

    <form className="UserDetailsForm">
          <label style={{fontSize:"1.2em",fontWeight:"bold"}}>Enter Your Full Name</label>
          <input type="text"   className="inputAddressStyles" value={userState.fullname} onChange={handleChange}  placeholder="FullName"></input>
          <label style={{display:"block",fontSize:"1.2em",fontWeight:"bold"}}>Address</label>
          <input type="text"  className="inputAddressStyles" value={userState.houseno} placeholder="HouseNumber"  onChange={handleChange}></input>
          <input type="text"  className="inputAddressStyles" value={userState.colony} placeholder="Colony" onChange={handleChange}></input>
          <input type="text"  className="inputAddressStyles" value={userState.area} placeholder="Area" onChange={handleChange}></input>
          <input type="number" className="pincodecss"  value={userState.pincode} placeholder="Pincode" onChange={handlePincodeChange}></input>
          <button onClick={handlePincodeSubmit} className="save-btn">CHECK</button>
          <input type="text" className="inputAddressStyles"  value={state} placeholder="State" readOnly></input>
          <input type="text" className="inputAddressStyles"  value={city} placeholder="City" readOnly ></input>
          <button className="btn-collect" onClick={handlebtnSave}>SAVE</button>
         

        </form>
         

      </div>
  )
  }


  
const getDataFilled =()=>{

  // setShowModal(true);

  return(
    
      <div className="logout-view" style={{width:"100%" ,height:"100%",backgroundColor:"white"}}>
    
        
        <div className="logout-container" style={{width:"300px",height:"fit-content",padding:"10px"}}>
          
          <button
                  onClick={()=>setShowModal(true)}
                  className=" bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                >
                  <span>Complete Profile First</span>
                  </button>
                  {showModal && <HandleCompleteProfile PopProfile={PopProfile} />}
                  <br/>
                  <button
                  onClick={handleSignOut}
                  className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Logout</span>
                  </button>
                  {/* {user.map((user)=>{
                    return <div>Name:{user.Contact_No} </div>
                  })} */}
        </div>
      </div>
  
  )
}

  return ( <> <Nav />
    <section className=" flex items-center justify-center h-screen ">
          

      <div>
        <Toaster toastOptions={{ duration: 3000 }} />
        <div id="recaptcha-container" ></div>
        {user ? ( 
           getDataFilled() 
        ) : (

          <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
            <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
              Welcome to <br /> <b style={{ color: "rgb(80, 234, 80)" }}>GO</b><b style={{ color: "rgb(0, 128, 255)" }}>WASH</b><b style={{ color: "red" }}>E</b><span style={{color:"gray"}}>xpert</span>
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
                <PhoneInput country={"in"} value={ph} onChange={setPh} />
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