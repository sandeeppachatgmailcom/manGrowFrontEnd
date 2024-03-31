import React, { useState } from 'react';
import Landing from './Pages/Landing';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import { Provider, useSelector } from 'react-redux';
import appStore from './Store/appStore';
import SignupPage from './Components/SignupPage';
const App = () => {
  const theme = useSelector((state)=>state.theme.theme)
  return (
    <Provider store={appStore}>
    <div className={`${theme} p-5 flex-wrap sm:flex-wrap mx-auto md:full lg:full xl:full max-h-sreen  `}>
     
          <div  className={`${theme} w-100 container-flex sm:auto mx-auto md:full lg:full xl:full`} style={{height:'15%'}}> 
              <Header />
          </div>
          
          <div className={`${theme}   container-flex sm:flex-wrap  mx-auto md:full lg:full xl:full`}    > 
              <Outlet  />
          </div>
          
      
    </div>
    </Provider>
  )
}

export default App;
