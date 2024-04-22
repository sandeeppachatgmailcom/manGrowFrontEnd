import React, { useEffect, useState } from 'react';
import Landing from './Pages/Landing';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './Components/Header';
import { Provider, useSelector } from 'react-redux';
import appStore from './Store/appStore';
import SignupPage from './Components/SignupPage';
import { GoogleOAuthProvider } from '@react-oauth/google';
const App = () => {
  const navigate = useNavigate()
  const theme = useSelector((state) => state.theme.theme)
  const user = useSelector((state)=> state.activeUser.user)
 
  useEffect(()=>{

  if(!Object.keys(user).length){
    navigate('/signin')
  }},[])
  return (
    <GoogleOAuthProvider clientId="150250688028-3q3h69aphbc5q7i82f4n6if7or9d3c2d.apps.googleusercontent.com">
      <Provider store={appStore}>
        <div   className={`${theme}   sm:block  w-full  md:full lg:full xl:full h-screen  `}>
          <div className={`${theme} border rounded-xl w-full top-0 left-0 overflow-hidden    mx-auto md:full lg:w-full xl:full xl:h-[12%]`} >
            <Header />
          </div>
          <div   className={`${theme}   sm:block xl:flex  w-full mx-auto md:full lg:full xl:full h-[88%]`} style={{ maxHeight: 'calc(100vh - 40px)' }}   >
            <Outlet />
          </div>
        </div>
      </Provider>
    </GoogleOAuthProvider>
  )
}

export default App;
 