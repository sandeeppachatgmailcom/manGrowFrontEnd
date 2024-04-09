import React, { useState } from 'react';
import Landing from './Pages/Landing';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import { Provider, useSelector } from 'react-redux';
import appStore from './Store/appStore';
import SignupPage from './Components/SignupPage';
import { GoogleOAuthProvider } from '@react-oauth/google';
const App = () => {
  const theme = useSelector((state) => state.theme.theme)
  return (
    <GoogleOAuthProvider clientId="150250688028-3q3h69aphbc5q7i82f4n6if7or9d3c2d.apps.googleusercontent.com"> 

      <Provider store={appStore}>
        <div className={`${theme} p-5 flex flex-col mx-auto md:full lg:full xl:full  `}>

          <div className={`${theme} w-full sm:auto mx-auto md:full lg:full xl:full`} style={{ height: '15%' }}>
            <Header />
          </div>

          <div className={`${theme} w-full  flex-grow mx-auto md:full lg:full xl:full`}   >
            <Outlet />
          </div>


        </div>
      </Provider>
    </GoogleOAuthProvider> 
  )
}

export default App;
