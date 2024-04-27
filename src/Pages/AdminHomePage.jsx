import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Profile from "../Components/profile"
import Calendar from 'react-calendar'
//import 'react-calendar/dist/Calendar.css';
import Typing from "../Components/TaskTyping";
import AudioTask from "../Components/AudioTask";
import ChatBox from "../Components/ChatBox"; 
import SingleChat from "../Components/SinlgleChat";
import AdminSubmenu from "../Components/AdminMenuBar";
import AdminContent from "../Components/AdminContent";
import ApproveStaff from "../Components/StaffApproval";
import { login } from "../Store/activeUser";
import axiosApi from "../api/axios";
import { userApi } from "../api/api";

const AdminHomePage = () => {
    const darkTheme = useSelector((state) => state.theme) 
    const selectedSubMenu = useSelector((state)=>(state.adminSubMenu.menuName))
    const [value, onChange] = useState(new Date());
    const user = useSelector((state) => state.activeUser.user)
    const dispatch = useDispatch()
    
    const getUser = async ()=>{
        const responce = await axiosApi.get(userApi.getlogin ) 
        console.log( userApi.login,responce,'responce data in profie')
        responce.data.active!==false? dispatch(login(responce.data)):navigate('/signin')
    }
    useEffect(()=>{
        !Object.keys(user).length?getUser():''
    } ,[])

    useEffect(() => {
        console.log(darkTheme.theme)
    }, [darkTheme])
    const divlign = ''

    return (
        <div  className={`xl:flex w-full md:flex lg:flex sm:block content-start mx-auto h-100  ${darkTheme.theme}`}>

        <div className={`xl:w-1/6 md:w-2/6 sm:w-full  ${darkTheme.theme + divlign} border border-gray-300 border-opacity-45 rounded-xl mt-2 p-2`}>
            <div >
            <h6 className="font-bold text-2xl text-blue-500 ps-2">Admin</h6>
                <Profile />
            </div>
            <div className="bg-transparent ">
                  <Calendar defaultView= 'month' onChange={onChange} value={value} />  
                 
            </div>
        </div>
        <div className={`block h-100 xl:w-4/6 xl:m-1 xl:mt-2 sm:w-full md-w-full    ${darkTheme.theme + divlign}`}>
            <AdminSubmenu/>
            {selectedSubMenu == 'batches'?<AdminContent/>:
            selectedSubMenu == 'Approve'?<ApproveStaff/>:''} 
        </div>
        <div className={`xl:w-1/6 md:w-2/6 sm:w-full ${darkTheme.theme + divlign} border border-gray-300 border-opacity-45 rounded-xl mt-2 p-2`} >
            <ChatBox/>  
              {/* <SingleChat nameObj ={{name:'chandhini'}} />  */}

        </div>

    </div>

    )
}

export default AdminHomePage 