
import React, { useEffect } from 'react'; import { FcGoogle } from "react-icons/fc";
import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from '@react-oauth/google';
import axiosApi from '../api/axios';
import { userApi } from '../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { login } from '../Store/activeUser';
import { useNavigate } from 'react-router-dom';
const GAuth = () => {
    const dispatch = useDispatch() 
    const navigate = useNavigate()
    const activeUser = useSelector((state)=> state.activeUser.user)
    const handleSubmit = async(e,formData) => {
        // e.preventDefault();
        console.log(formData);
        const result = await axiosApi.post(userApi.signUp,formData)
        .then(response => {
          console.log('Response:', response.data);
            if(response.data.success){
                const user = {
                    humanid: response.data.humanid,
                    firstName:response.data.name  ,
                    isAdmin:response.data.isAdmin ,
                    active:response.data.active ,
                    role:response.data.role,
                    otpVerified:true ,
                    email:response.data.email
                }
                dispatch(login(user))
            }
            else{
                toast.error(response.data.message)
            }
        })
        .catch(error => {
          console.error('Error:', error);
        });
       
        console.log(result,'responce')
      }
      useEffect(()=>{
       if(Object.keys(activeUser).length)  navigate('/')
      },[activeUser])
  
      
    return (
        <div className='flex items-center justify-center text-center rounded-xl p-5'>
            <GoogleLogin  
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                    const decoded = jwtDecode(credentialResponse.credential);
                    console.log(decoded)
                    
                    
                   if(decoded?.email_verified){
                    const formData = {
                        name:decoded.name,
                        email:decoded.email,
                        googleAuth:true,
                        ...decoded,
                        password:'Asd@123.com'
                    }
                    handleSubmit(Event,formData);  
                   }
                   
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            /> 


        </div>
    );
};

export default GAuth;
