
import React from 'react'; import { FcGoogle } from "react-icons/fc";
import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from '@react-oauth/google';
const GAuth = () => {

    return (
        <div className='flex items-center justify-center text-center rounded-xl p-5'>
            <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                    const decoded = jwtDecode(credentialResponse.credential);
                    console.log(decoded)
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            /> 


        </div>
    );
};

export default GAuth;
