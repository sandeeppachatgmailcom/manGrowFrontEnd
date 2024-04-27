
import React from 'react'; import { FcGoogle } from "react-icons/fc";
import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from '@react-oauth/google';
import axiosApi from '../../Api/axios';
import { userApi } from '../../Api/api';
import { useDispatch } from 'react-redux';
import { login } from '../../Store/activeUser';
const GAuthsignin = () => {
    const dispatch = useDispatch() 
    const handleSubmit = async(e,formData) => {
        // e.preventDefault();
        console.log(formData);
        const result = await axiosApi.post(userApi.login,formData)
        .then(response => {
          console.log('Response:', response.data);
          dispatch(login(response.data)) 
        })
        .catch(error => {
          console.error('Error:', error);
        });
       
        console.log(result,'responce')
      }
  
      
    return (
        <div className='flex items-center justify-center text-center rounded-xl p-5'>
            <GoogleLogin onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                    const decoded = jwtDecode(credentialResponse.credential);
                    console.log(decoded)
                    
                   if(decoded?.email_verified){
                    const formData = {
                        name:decoded.name,
                        email:decoded.email,
                        googleAuth:true
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

export default GAuthsignin;
