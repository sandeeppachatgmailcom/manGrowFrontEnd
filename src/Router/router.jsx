import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignupPage from "../Components/SignupPage";
import Login from "../Components/LoginWindow";
import HomePage from "../Pages/HomePage";
import MyAccount from "../Pages/MyAccount";
import ProfilePage from "../Pages/ProfilePage";
import TrainerHomePage from "../Pages/TrainerHomePage";
import AdminHomePage from "../Pages/AdminHomePage";

import ResetCredential from "../Pages/ResetCredential";


const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
           
            {
                path:'/user',
                element: <ProfilePage/>
            },
            {
                path:'/signUp',
                element:<SignupPage />
            },
            {
                path:'/signin',
                element:<Login/>
            },
            {
                path:'/profile',
                element:<ProfilePage/>
            },
            {
                path:'/Student',
                element:<HomePage/>
            },
            {
                path:'/Admin',
                element:<AdminHomePage/>
            },
            {
                path:'/Trainer',
                element:<TrainerHomePage/>
            },
            {
                path:'/submitOtp',
                element:<ResetCredential/>
            }
            ,{
                path:'/submitOtptoresetPassword',
                element:<ResetCredential option='resetPassword' />
            }
            ,
            {
                path:'/',
                element:<ProfilePage/>
            }
        ] 
         
    },
    
])
export default appRouter