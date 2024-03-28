import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignupPage from "../Components/SignupPage";
import Login from "../Components/LoginWindow";
import HomePage from "../Pages/HomePage";
import MyAccount from "../Pages/MyAccount";


const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<HomePage/>
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
                element:<MyAccount/>
            }
        ]
    }
])

export default appRouter