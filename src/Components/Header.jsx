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

  const handleLogout = () => {
    dispatch(logout())
    console.log(Object.keys(activeUser))
  }


  useEffect(() => {
    if (activeUser && !Object.keys(activeUser).length) {
      navigate('/signin');
    }
    console.log(Object.keys(activeUser))
  }, [activeUser])


  return (
    <div style={{height:'100%'}}  className={`${theme}container-flex flex border-b  items-center justify-between`}>
      <div style={{ height: '20%' }} className={`${theme} flex  items-center justify-start`}>
        <h6 className={`${theme}` + ' text-2xl text-blue-500 font-semibold '} > {company }</h6>
      </div>
      
      <div style={{ height: '20%' }} className={`${theme} flex  items-center justify-end`}>
         <ProfileImageBox height='50px' width = '50px'  />  
        <h6 className={`${theme}`} > {Object.keys(activeUser).length ? activeUser.name + ' ' + activeUser.HouseName : ''}</h6>
        <button className='btn' onClick={handleLogout} > <FaPowerOff /> </button>
        <button onClick={() => toggleDarkMode()} className={`rounded-full w-10 h-10 flex items-center justify-center bg-'gray-800' ${theme.theme}  focus:outline-none`}>
          {darkTheme ? "🌤" : "🌙"}
        </button>
      </div>
    </div>
  );
}


export default Header
