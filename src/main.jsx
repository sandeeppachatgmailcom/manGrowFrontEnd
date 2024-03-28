import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import appStore from './Store/appStore.js'
import { RouterProvider } from 'react-router-dom'
import appRouter from './Router/router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
)
