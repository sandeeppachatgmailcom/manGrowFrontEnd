import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Profile from "../Components/profile"
import Calendar from 'react-calendar'
//import 'react-calendar/dist/Calendar.css';
import Typing from "../Components/TaskTyping";
import AudioTask from "../Components/AudioTask";
import ChatBox from "../Components/ChatBox"; 
import SingleChat from "../Components/SinlgleChat";

const HomePage = () => {
    const darkTheme = useSelector((state) => state.theme) 
    const [value, onChange] = useState(new Date());
    useEffect(() => {
        console.log(darkTheme.theme)
    }, [darkTheme])
    const divlign = '   rounded  mt-1 '

    return (
        <div  className={`xl:flex md:flex lg:flex sm:block content-start mx-auto h-100 opacity-90 ${darkTheme.theme}`}>

            <div className={`xl:w-1/6 md:w-2/6 sm:w-full  ${darkTheme.theme + divlign} border border-gray-300 border-opacity-45 rounded-xl mt-2 p-2`}>
                <div >
                    <Profile />
                </div>
                <div className="bg-transparent ">
                      <Calendar defaultView= 'month' onChange={onChange} value={value} />  
                     
                </div>
            </div>
            <div className={`block h-100 xl:w-4/6 xl:m-1 xl:mt-2  sm:w-full md-w-full   ${darkTheme.theme + divlign}`}>
                <Typing/>
                <AudioTask/>
            </div>
            <div className={`xl:w-1/6 md:w-2/6 sm:w-full ${darkTheme.theme + divlign} border border-gray-300 border-opacity-45 rounded-xl mt-2 p-2`} >
                <ChatBox/>
                {/* <SingleChat nameObj ={{name:'chandhini'}}/> */}

            </div>

        </div>
    )
}

export default HomePage