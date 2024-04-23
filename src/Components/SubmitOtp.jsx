import { useDispatch, useSelector } from "react-redux"
import { IoCloseCircle } from "react-icons/io5";
import { login, logout } from "../Store/activeUser";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import axiosApi from "../api/axios";
import { userApi } from "../api/api";
import { ToastContainer, toast } from "react-toastify";
import { act } from "react-dom/test-utils";
import Modal from "../Pages/loadingModal";
const SubmitOtp = () => {
    const darkTheme = useSelector((state) => state.theme)
    const activeUser = useSelector((state) => state.activeUser.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const otp1 = useRef()
    const otp2 = useRef()
    const otp3 = useRef()
    const otp4 = useRef()
    const [otp,setOtp]  = useState(['','','',''])  
    const [modal,setModal] = useState(false)

    const handleOtp =()=>{
        setOtp([
            otp[0]=otp1.current.value,
            otp[1]=otp2.current.value,
            otp[2]=otp3.current.value,
            otp[3]=otp4.current.value
        ])
        console.log(otp,'otp after update',otp.join(''))
    }
    
    const valdateOtp = async ()=>{
        const userData = {
            email:activeUser.email,
            otp:otp.join(""),
            resetPaaword:true
        }
        setModal(true)
       const result = await  axiosApi.post(userApi.validateOtp,userData)
       setModal(false)
       if(result.data.otpVerified && result.data.resetPaaword ){
            dispatch(login(result.data.email))
            navigate('/submitOtptoresetPassword')
       }
       else if(result.data.otpVerified && !result.data.resetPaaword ){
         dispatch(login(result.data.email))
         gotoHome(result.data.role)
       }
       else{
        toast.error(result.data.message)
        
       }
            
       console.log(result,'validated otp result ')
    }

     const gotoHome=(user)=>{
        {
            if(user =='Admin')  navigate('/Admin') 
            else if(user =='Trainer') navigate('/Trainer')
            else if(user =='Student') navigate('/Student') 
            else if(user =='user') navigate('/user') 
        }
     }



    useEffect(() => {
        if(activeUser?.otpVerified) gotoHome(activeUser.role)
    }, [activeUser])
    return (

        <div className={`${darkTheme.inputtext}  inset-0 flex items-center  w-full justify-center  bg-opacity-35 z-50`}>
       <ToastContainer/>
       {modal?<Modal/>:''}
            <div className={`  rounded-lg border shadow-white shadow-md   p-2 lg:flex-nowrap md:flex-nowrap flex flex-col justify-center align-middle ${darkTheme.theme} `}>
                <div className="sm:w-full  flex justify-between  bottom-0  h-[50px]">
                    <h5 className={'${darkTheme.inputtext} m-1   text-blue-500 text-20xl'}> Enter the one time password sent to your email  </h5>
                    <button className="top-0 end-0 h-[100%] text-orange-300" onClick={() => { dispatch(logout()) }} > <IoMdClose style={{ fontSize: '3rem' }} />  </button>
                </div>
                
                <div className="flex  w-full align-middle justify-center flex-wrap ">
                    <input ref={otp1} className={`${darkTheme.inputtext} text-center shadow-inner shadow-gray-400 rounded-xl  w-[50px] md:w-[60px] lg:w-[70px] ms-2 me-2 border text-2xl border-gray-300 h-[50px] md:h-[60px] lg:h-[70px]`} type="text" inputMode="numeric"
                     maxLength={1} onChange={(e) => {
                        if (e.target.value.length === 1) {
                            handleOtp()
                            otp2.current.value=''
                            otp2.current.focus();
                        }
                    }} name="" id="" />
                    
                    <input ref={otp2}
                        className={`${darkTheme.inputtext}   text-center rounded-xl w-[50px] shadow-inner shadow-gray-400  md:w-[60px] lg:w-[70px] ms-2 me-2 border text-2xl border-gray-300 h-[50px] md:h-[60px] lg:h-[70px]`} type="text"  maxLength={1} onChange={(e) => {
                        if (e.target.value.length === 1) {
                            handleOtp()
                            otp3.current.value=''
                            otp3.current.focus();
                        }
                    }}  name="" id="" />
                    <input ref={otp3} className={`${darkTheme.inputtext} text-center shadow-inner shadow-gray-400 rounded-xl  w-[50px] md:w-[60px] lg:w-[70px] ms-2 me-2 border text-2xl border-gray-300 h-[50px] md:h-[60px] lg:h-[70px]`} type="text"  maxLength={1} onChange={(e) => {
                        if (e.target.value.length === 1) {
                            handleOtp()
                            otp4.current.value=''
                            otp4.current.focus();
                        }
                    }}  name="" id="" />
                    <input ref={otp4} className={`${darkTheme.inputtext} text-center shadow-inner shadow-gray-400 rounded-xl  w-[50px] md:w-[60px] lg:w-[70px] ms-2 me-2 border text-2xl border-gray-300 h-[50px] md:h-[60px] lg:h-[70px]`} type="text"  maxLength={1} onChange={(e) => {
                        if (e.target.value.length === 1) {
                            handleOtp()
                            otp1.current.focus();
                        }
                    }}  name="" id="" />
                </div>
                    <br />
                <div className={`${darkTheme.inputtext} flex rounded-xl bg-transparent justify-end `}> 
                    <button onClick={()=>valdateOtp()} className={`m-1 w-2/6  ${darkTheme.theme} m-4 text-center align-center justify-center bg-opacity-35-300 border h-10 rounded-md  text-blue-500 font-semibold `}> VALIDATE  </button> 
                    
                </div>
            </div>
                    
        </div>
    )
}

export default SubmitOtp