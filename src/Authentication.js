import Nav from './components/Navbar';
import {BsFillShieldLockFill, BsTelephoneFill} from 'react-icons/bs';
import OtpInput from "otp-input-react";
import PhoneInput from 'react-phone-input-2';
import { useState } from 'react';
import 'react-phone-input-2/lib/style.css'
import { auth } from "./firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import {CgSpinner} from 'react-icons/cg'
// import Nav from './components/Navbar';
// import {Login} from './components/Login'


export default function Authentication(){
    const [otp,setOtp]= useState("");
    const [ph,setPh]= useState("");
    const [loading, setLoading] = useState(false);
    const [showOTP,setShowOTP]=useState(false);
    const [user,setUser]=useState(null);

    function onCaptchVerify() {
        if (!window.recaptchaVerifier) {
          window.recaptchaVerifier = new RecaptchaVerifier(
            "recaptcha-container",
            {
              size: "invisible",
              callback: (_response) => {
                onSignup();
              },
              "expired-callback": () => {},
            },
            auth
          );
        }
      }
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
            setLoading(false);
          });
      }

      function onOTPVerify() {
        setLoading(true);
        window.confirmationResult
          .confirm(otp)
          .then(async (res) => {
            console.log(res);
            setUser(res.user);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            toast.error(err);
            setLoading(false);
          });
      }


   
    return(
        <div className="Auth-view">
            <Nav/>
            <Toaster toastOptions={{ duration: 2000 }} />
            <div className="Auth-container">
            <div id="recaptcha-container"></div>
            {user ? (
          <h2 className="text-center" style={{color:"white"}}>
            👍Login Success
          </h2>
        ) : (
            <div className='Sign-in-up'>
                <h2 style={{color:"white", padding:"5px 20px", marginTop:"40px", textAlign:"center",lineHeight:'1.2'}}>Welcome to <br/><b style={{ color: "rgb(80, 234, 80)" , fontSize:"1.5em"}}>GO</b><b style={{ color: "rgb(0, 128, 255)",fontSize:"1.5em" }}>WASH</b><b style={{ color: "red" ,fontSize:"1.5em"}}>E</b><b style={{ color: "gray" ,fontSize:"1.5em"}}>xpert</b></h2>
               
               {
                showOTP ? (
                <>
                <div className='iconshield'>
                <BsFillShieldLockFill size={30}/>
            </div>
            <label
            htmlFor='otp'
            className='numInput'
            >Enter Your OTP</label>
            <OtpInput OTPLength={6} value={otp}  onChange={setOtp} otpType="number" disabled={false} autoFocus style={{marginTop:"20px",marginBottom:"20px"}}></OtpInput>
            <button  onClick={onOTPVerify} style={{color:"white", backgroundColor:"#02a598" , border:" 1px solid #02a598" ,padding:"7px", marginTop:"30px",cursor:"pointer",marginBottom:"10px",borderRadius:"10px",fontSize:"1.2em",width:"100%"}}>
            {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}<span>Verify OTP</span>
                  </button>
            </> 
            ):( 
            <>  <div className='iconshield'>
                    <BsTelephoneFill size={30}/>
                </div>
                <label
                htmlFor=''
                className='numInput'
                >Verify Your Number</label>
            <PhoneInput country={'in'} value ={ph} onChange={setPh} className='Phone-in' />
                <button   onClick={onSignup} style={{color:"white", backgroundColor:"#02a598" , border:" 1px solid #02a598" ,padding:"7px", marginTop:"30px",cursor:"pointer",marginBottom:"10px",borderRadius:"10px",fontSize:"1.2em",width:"100%"}}>
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
        </div>
    )
}