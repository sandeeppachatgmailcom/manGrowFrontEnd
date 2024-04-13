import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Store/activeUser";
import { Link, useNavigate } from "react-router-dom";
import GAuthsignin from "./googleAuthSignin";

import { userApi } from "../api/api";
import axiosApi from "../api/axios"; 
const login_url = '/create'
function Login() {
    const [formData, setFormData] = useState({
      name:'',
      email:'',
      password:'',
      type:'',
      googleAuth:true
    })

    const classDarkTheme = useSelector((state)=>state.theme.theme)
    const darkMode =  useSelector((state)=>state.theme)
    const dispatch = useDispatch()
    const activeUser =  useSelector((state)=>state.activeUser)  
    const navigate = useNavigate()
    
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
        const responce = await axiosApi.post('/login',formData ) 
        console.log(responce,'response')
        dispatch(login()) 
      } catch (error) {
        if(!error?.responce){
          console.log('no error message')
        }
        
      }
    };
useEffect(()=>{
if(Object.keys(activeUser.user).length) navigate('/')
},[activeUser])

  
    return (
      <div className={`  ${classDarkTheme + ' ' +darkMode.inputtext  } flex   justify-center items-center h-screen`}>
        <div className={`  ${classDarkTheme  } border  w-96 p-8  rounded-lg shadow-md`}>
          <h2 className={`  ${classDarkTheme} text-2xl font-semibold mb-4`}>Login</h2>
          <h6 className={`  ${classDarkTheme} text-small  mb-4`}>'Error'  </h6>
          
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className={`  ${classDarkTheme} block `}>Email</label>
              <input
                type="email"
                id="email"
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
            </div>
            <br />
             <h1 className='w-full text-center '> or </h1>
            <div>
                  <GAuthsignin/>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
            >
              Login
            </button>
             <div className=" flex container justify-end">
             <Link to="/signup">Register</Link>

             </div>
          </form>
        </div>
      </div>
    );
  }

  export default Login 
  