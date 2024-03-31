import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Profile from "../Components/profile"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
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
        <div style={{ height: '100vh' }} className={`xl:flex md:flex lg:flex sm:block content-start mx-auto   ${darkTheme.theme}`}>

            <div className={`xl:w-1/6 md:w-2/6 sm:w-full  ${darkTheme.theme + divlign}`}>
                <div >
                    <Profile />
                </div>
                <div>
                      <Calendar defaultView= 'month' onChange={onChange} value={value} />  
                     
                </div>
            </div>
            <div className={`w-4/6 m-1  p-1 ${darkTheme.theme + divlign}`}>
                <Typing/>
                <AudioTask/>
            </div>
            <div className={`xl:w-1/6 md:w-2/6 sm:w-full ${darkTheme.theme + divlign}`} >
                <ChatBox/>
                <SingleChat nameObj ={{name:'chandhini'}}/>

            </div>

        </div>
    )
}

export default HomePage