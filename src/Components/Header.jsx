import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../Store/themeSlice';
import { FaPowerOff } from "react-icons/fa6";
import { logout } from '../Store/activeUser';
import { FaCamera } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import ProfileImageBox from './ProfileImage';

function Header() {

  const dispatch = useDispatch()

  const theme = useSelector((state) => state.theme.theme)
  const darkTheme = useSelector((state) => state.theme.Themedark)
  const activeUser = useSelector((state) => state.activeUser.user)
  const company = useSelector((state) => state.company.info.companyName)

  const navigate = useNavigate()
  const toggleDarkMode = () => {
    dispatch(toggleTheme())
    console.log(theme, 'theme')

  }

  function deleteCookie(cookieName) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    console.log(`Cookie ${cookieName} has been deleted`);
}


  const handleLogout = () => {
    deleteCookie('manGrow')
    dispatch(logout())
  }
  
  useEffect(()=>{
    if(!Object.keys(activeUser).length) navigate('/signin')
  },[activeUser])

 


  return (
    <div className={`${theme} flex flex-col sm:flex-row rounded-xl    xl:w-[100%] h-[100%]  border-gray-300 border-opacity-45   items-center justify-between shadow-lg `}>

      <div className={`${theme} flex items-center justify-start    p-4`}>
        <h6 className={`${theme} float-start  sm:w-auto text-2xl text-blue-500 font-semibold `}>
          {company}
        </h6>
      </div>

      <div className={`${theme} flex items-center justify-end  `}>
        <ProfileImageBox height='50px' width='50px' />
        <h6 className={`${theme} px-4 `}>
          {Object.keys(activeUser).length
            ? <button onClick={()=>{ if(Object.keys(activeUser).length && activeUser.otpVerified) navigate('/')}} type="button"> {activeUser.firstName} </button>
            : ''}
        </h6>
        
        <button className='btn px-3 py-2 rounded-full focus:outline-none' onClick={handleLogout}>
          <FaPowerOff />
        </button>
        <button
          onClick={() => toggleDarkMode()}
          className={`rounded-full w-20 h-10 flex items-center justify-center bg-gray-800   ${theme.theme} focus:outline-none`}
        >
          {darkTheme ? "🌤" : "🌙"}
        </button>
      </div>

    </div>

  );
}


export default Header
