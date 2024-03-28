import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Profile from "../Components/profile"
import Calendar from 'react-calendar'


const HomePage = () => {
    const darkTheme = useSelector((state) => state.theme)
    const [value, onChange] = useState(new Date());
    useEffect(() => {
        console.log(darkTheme.theme)
    }, [darkTheme])
    const divlign = ' border border-gray-700 rounded  mt-1 '

    return (
        <div style={{ height: '100vh' }} className={`containercontent-start mx-auto flex  ${darkTheme.theme}`}>

            <div className={`w-1/3 ${darkTheme.theme + divlign}`}>
                <div >
                    <Profile />
                </div>
                <div>
                    <Calendar   defaultView= 'month' onChange={onChange} value={value} />
                </div>
            </div>
            <div className={`w-2/3 m-1 ${darkTheme.theme + divlign}`}>
                profile
            </div>
            <div className={`w-1/3 ${darkTheme.theme + divlign}`} >
                profile
            </div>

        </div>
    )
}

export default HomePage