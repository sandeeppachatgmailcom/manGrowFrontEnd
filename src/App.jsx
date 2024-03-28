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
    <div style={{height:'100vh'}} className={`${theme} container-flex`} >
      <Provider store={appStore}>
          <div  className='container-flex' style={{height:'12%'}}> 
              <Header />
          </div>
          
          <div className='container-flex' style={{height:'85%'}}> 
              <Outlet />
          </div>
          
      </Provider>
    </div>
  )
}

export default App;
