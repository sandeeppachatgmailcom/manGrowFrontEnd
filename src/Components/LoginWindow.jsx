import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Store/activeUser";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const classDarkTheme = useSelector((state)=>state.theme.theme)
    const darkMode =  useSelector((state)=>state.theme)
    const dispatch = useDispatch()
    const activeUser =  useSelector((state)=>state.activeUser)  
    const navigate = useNavigate()
    const handleLogin = (e) => {
      e.preventDefault();
      // Handle login logic here
      console.log('Logging in with:', email, password);
      dispatch(login()) 
      
    };
useEffect(()=>{
if(Object.keys(activeUser.user).length) navigate('/')
},[activeUser])

  
    return (
      <div className={`  ${classDarkTheme + darkMode.border} flex justify-center items-center h-screen`}>
        <div className={`  ${classDarkTheme} w-96 p-8 bg-white rounded-lg shadow-md`}>
          <h2 className={`  ${classDarkTheme} text-2xl font-semibold mb-4`}>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className={`  ${classDarkTheme} block `}>Email</label>
              <input
                type="email"
                id="email"
                className={`${darkMode.inputtext} w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500`}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className={`  ${classDarkTheme} block `}>Password</label>
              <input
                type="password"
                id="password"
                className={`${darkMode.inputtext} w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500`} 
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
            >
              Login
            </button>
             <div className=" flex container justify-end">
             <Link to="/signup">Register</Link>

             </div>
          </form>
        </div>
      </div>
    );
  }

  export default Login 
  