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
    <div class={`${theme} flex flex-col sm:flex-row rounded-xl border xl:w-full   border-gray-300 border-opacity-45   mt-2   items-center justify-between shadow-lg `}>

      <div class={`${theme} flex items-center justify-start p-4`}>
        <h6 class={`${theme} float-start  sm:w-auto text-2xl text-blue-500 font-semibold m-6`}>
          {company}
        </h6>
      </div>

      <div class={`${theme} flex items-center justify-end py-4 pe-2`}>
        <ProfileImageBox height='50px' width='50px' />
        <h6 class={`${theme} px-4 `}>
          {Object.keys(activeUser).length
            ? activeUser.name
            : ''}
        </h6>
        <button class='btn px-3 py-2 rounded-full focus:outline-none' onClick={handleLogout}>
          <FaPowerOff />
        </button>
        <button
          onClick={() => toggleDarkMode()}
          class={`rounded-full w-10 h-10 flex items-center justify-center bg-gray-800   ${theme.theme} focus:outline-none`}
        >
          {darkTheme ? "🌤" : "🌙"}
        </button>
      </div>
    </div>

  );
}


export default Header
