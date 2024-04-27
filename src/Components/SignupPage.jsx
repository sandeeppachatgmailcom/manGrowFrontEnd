import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import GAuth from './GoogleAuthetication';
import { BsEyeFill } from "react-icons/bs";
import { BiSolidHide } from "react-icons/bi";
import axiosApi from '../api/axios';
import { userApi } from '../api/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from '../Pages/loadingModal';




const SignupPage = () => {
  const [view,setView] = useState('password')
  const [retypeView,setRetypeView] = useState('password')
  const [margin,setmargin] = useState('flex flex-row  appearance-none rounded-none relative   border placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 border-indigo-500 focus:z-10 sm:text-sm  ')
  const darkTheme = useSelector((state)=>state.theme)
  const [password,setPassword] = useState(null)
  const ref = useRef()
  const imagePath = '../src/images/sugc.png'
  const navigate = useNavigate()
  const [modal,setModal] = useState(false)
  useEffect(()=>{console.log(darkTheme.theme,'test')},[darkTheme])
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    type:'',
    googleAuth:false
  });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

  

const handleDivMargin=()=>{
  ref.current.className=margin
}

 
const validatePassword = (password) => {
  // Validate password length
  if (password.length < 8) {
    return {status:false,message:'Password must be at least 8 characters long'}
  }
  // Validate if password contains at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return {status:false,message:'Password must contain at least one uppercase letter'}
  }
  // Validate if password contains at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return {status:false,message:'Password must contain at least one lowercase letter'}
  }
  // Validate if password contains at least one number
  if (!/\d/.test(password)) {
    return {status:false,message:'Password must contain at least one number'}
  }
  // Validate if password contains at least one special character
  if (!/[^a-zA-Z0-9]/.test(password)) {
    return {status:false,message:'Password must contain at least one special character'}
  }
  // If no errors, return an empty string
  return {status:true,message:''}
};

  const handleSubmit = async(e) => {
    
    e.preventDefault();
    if(formData.email.trim().length)
    {
      setModal(true)
      console.log(formData,'create user formData')
    const result = await axiosApi.post(userApi.signUp,formData)
    .then(response => {
      console.log('Response:', response?.data);
      if(response?.data.success){
        console.log("inside")
        
        toast.success(`user ${formData.firstName} created ,Validate OTP  within 3 minute `,   )
        
      }
      else{
        toast.error(`user  alredy exist `)
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
    }
    else {
      toast.error('name is not valid ')
    }
    console.log(result,'responce')
  }
  

  return (
    <div className= {` ${darkTheme.theme}  xl:flex lg:flex md:flex  sm:block   xl:justify-center xl:w-full items-center m-3 h-[100%] `}>
        {modal?<Modal/>:''}
       <div className="xl:flex justify-center sm:w-full sm:block  md:w-full  h-[300px] "> 
            <div style={{backgroundImage:`url('${imagePath}')`,backgroundPosition:'center' , backgroundSize:'contain',backgroundRepeat:'no-repeat' }} className={`  ${darkTheme.theme  } xl:w-full  m-2 h-[100%]  `}>

            </div>

       </div>
      <div className={` ${darkTheme.theme } max-w-md w-full   space-y-8 border p-5 rounded-xl`}>
        <div>
          <h2 className={` ${darkTheme.inputtext} mt-6 text-center text-3xl  `}>Sign up</h2>
        </div>
        <ToastContainer  closeButton= {false} position='top-left'onClose={()=>{setModal(false);navigate('/signin')}}  />
        
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className={` ${darkTheme.inputtext} text-sm `}>Name</label>
              <input  id="firstName" required name="firstName" type="text"  value={formData.firstName} onChange={handleChange} autoComplete="name" className={`${darkTheme.inputtext} appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`} placeholder="Name" />
            </div>
            <div>
              <label htmlFor="email" className= 'text-sm'  >Email address</label>
              <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} autoComplete="email" className={`${darkTheme.inputtext} appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`} placeholder="Email address" />
            </div>
            
            <div className='flex items-center pt-3'>
              <label className="inline-flex items-center" htmlFor="Student"> <input type="radio" required name='type' id='Student' value='Student' className="form-radio h-4 w-4 text-indigo-600 text-sm"   checked={formData.type === "Student"}  onChange={handleChange} />  <span className="text-sm ml-2"> Student   </span></label>  
              <label className="inline-flex items-center" htmlFor="Trainer"> <input type="radio" required name='type' id='Trainer' value='Trainer' className="form-radio h-4 w-4 text-indigo-600"   checked={formData.type === "Trainer"}  onChange={handleChange} />  <span className="ml-2 text-sm"> Trainer </span></label>
            </div>
            <div>
              <label htmlFor="password" className="text-sm">Password</label>
              <div ref={ref} id='passwordDiv' className='flex flex-row  appearance-none rounded-none relative   border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  '>
                <input onClick={handleDivMargin} id="password" name="password" type={`${view}`} required value={formData.password} onChange={handleChange} autoComplete="current-password" className={`${darkTheme.inputtext} appearance-none borde relative block   px-3 py-2  border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm border-e-0 rounded-e-none w-5/6`} placeholder="Password" />
                <button className='border-s-0  border-gray-300 rounded-e-md w-1/6 items-end justify-end pl-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10' onClick={(e)=>{e.preventDefault();
                  view=='password'?setView('text'):setView('password')}} > {view=='password'?<BsEyeFill />:<BiSolidHide />} </button>
                </div>
            </div>
            <div >
              <label htmlFor="password" className="text-sm">Retype Password</label>
              <div ref={ref} id='passwordDiv'  className='flex flex-row  appearance-none rounded-none relative   border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm '>
                <input onClick={handleDivMargin} id="retypepassword" name="password" type={`${retypeView}`} required value={password} onChange={(e)=>{setPassword(e.target.value)}} autoComplete="current-password" className={`${darkTheme.inputtext} appearance-none rounded-none relative block   px-3 py-2  border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm border-e-0 rounded-e-none w-5/6`} placeholder="Password" />
                <button className='border-s-0  border-gray-300 rounded-e-md w-1/6 items-end justify-end pl-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10' onClick={(e)=>{e.preventDefault();
                  retypeView=='password'?setRetypeView('text'):setRetypeView('password')}} > {retypeView=='password'?<BsEyeFill />:<BiSolidHide />} </button>
                </div>
            </div>
          </div>
          <div>

            {formData.password == password && 
             validatePassword(password).status > 0 
             && formData.email.trim().length>0 
             && formData.firstName.trim().length >0 
             && formData.email.includes(['@'])  ?<button onClick={(e)=>{handleSubmit(e)}} type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign up
            </ button>:<button  disabled className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign up
            </ button> } 
          
            <br />
             <h1 className='w-full text-center '> or </h1>
            <div>
                  <GAuth/>
            </div>
            <div className='container flex justify-end'>
            <Link to="/signin"> Sign in </Link>

            </div>
          </div>
        
      </div>
    </div>
  );
};

export default SignupPage;
