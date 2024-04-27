import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Store/activeUser";
import { Link, useNavigate } from "react-router-dom";
import GAuthsignin from "./googleAuthSignin";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userApi } from "../api/api";
import axiosApi from "../api/axios"; 
import Modal from "../Pages/loadingModal";

 
function Login() {
  const imagePath = '../src/images/sugc.png'
  const [formData, setFormData] = useState({
      name:'',
      email:'',
      password:'',
      type:'',
      googleAuth:false
    })
    const [modal,setModal] = useState(false)
    const classDarkTheme = useSelector((state)=>state.theme.theme)
    const darkMode =  useSelector((state)=>state.theme)
    const dispatch = useDispatch()
    const activeUser =  useSelector((state)=>state.activeUser.user)  
    const navigate = useNavigate()
    const emailRef = useRef()
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
    
    
    
    const handleLogin = async (e) => {
      try {
        e.preventDefault();
        console.log(formData,userApi.login,'formDatasssssssssssssss','await axiosApi.post(userApi.login,formData ) ')
        const responce = await axiosApi.post(userApi.login,formData ) 
        console.log(responce ,'responce.data.password,responce,')
      if(!responce.data.active){
             toast.error(responce.data.message)
        }
        else{
          if(!responce.data.otpVerified) responce.data.resetPaaword=false;
          dispatch(login(responce.data))
          if(responce.data.role=='admin'){
            navigate('/Admin')
          }
          else if(responce.data.role=='student'){
            navigate('/Student')
          }
          else if(responce.data.role=='user'){
            navigate('/user')
          }
          else if(responce.data.role=='trainer'){
            navigate('/Trainer')
          }
         
        }
        console.log(responce,'response')
        
      } catch (error) {
        if(!error?.responce){
          console.log('no error message')
        }
        
      }
    };

    useEffect(()=>{
      console.log(!activeUser.otpVerified &&  Object.keys(activeUser).length>0,'!activeUser.otpVerified &&  Object.keys(activeUser).length ' )
      if(!activeUser.otpVerified &&  Object.keys(activeUser).length>0 ){
        navigate('/submitOtp')
      }
      else{
        if(activeUser.role=='admin'){
          navigate('/Admin')
        }
        else if(activeUser.role=='student'){
          navigate('/Student')
        }
        else if(activeUser.role=='user'){
          navigate('/user')
        }
        else if(activeUser.role=='trainer'){
          navigate('/Trainer')
        }

      }
    },[activeUser])


    const handleForgotPassword =async ()=>{
      try {
          
        if( emailRef?.current?.value){
          setModal(true)
          const otp =await axiosApi.post(userApi.forgotPassword,{email:formData.email,name:formData.email})
          setModal(false) 
          if(otp?.data?.success)  
             {
              formData.resetPaaword =true;
             dispatch(login(formData))
             navigate('/submitOtp')}
          else toast.error(otp?.data?.message)
        }
        else{
           
          toast.error('submit a valid email')
        }
         
      } catch (error) {
        
      }

     
    }
  
    return (
      <div  className={`  ${classDarkTheme + ' ' +darkMode.inputtext  }   xl:flex lg:flex md:block sm:block  justify-center xl:w-full items-center m-3 `}>
       <ToastContainer/>
      {modal?<Modal/>:''}

       <div className="xl:flex justify-center sm:w-full sm:block md:w-full xl:w-full h-[300px] "> 
            <div style={{backgroundImage:`url('${imagePath}')`,backgroundPosition:'center' , backgroundSize:'contain',backgroundRepeat:'no-repeat' }} className={`  ${classDarkTheme  } xl:w-full  m-2 h-[100%]  `}>

            </div>

       </div>
        <div className={`  ${classDarkTheme  } border xl:w-1/4 md:w-5/6 p-8  rounded-lg shadow-md`}>
          <h2 className={`  ${classDarkTheme} text-2xl font-semibold mb-4`}>Login</h2>
          <h6 className={`  ${classDarkTheme} text-small  mb-4`}> </h6>
          
          
            <div className="mb-4">
              <label htmlFor="email" className={`  ${classDarkTheme} block `}>Email</label>
              <input
                type="email"
                id="email" ref={emailRef} 
                className={`${darkMode.inputtext} w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500`}
                placeholder="Enter your email"
                value={formData.email} name="email"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className={`  ${classDarkTheme} block `}>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className={`${darkMode.inputtext} w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500`} 
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => handleChange(e)}
                required
              />
              <div className="w-full flex justify-end "><small className="cursor-pointer text-right w-full text-blue-400" onClick={()=>{handleForgotPassword()}}>forgot password</small> </div>
            </div>
            <br />
             
            <button
              type="button" onClick={(e)=>{console.log(handleLogin(e))}}
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
            >
              Login
            </button>
             <div className=" flex container justify-end">
            <small onClick={()=>navigate('/signUp')} > Register </small>

             </div>
             <h1 className='w-full text-center '> or </h1>
            <div>
                  <GAuthsignin/>
            </div>
          
        </div>
      </div>
    );
  }

  export default Login 
  