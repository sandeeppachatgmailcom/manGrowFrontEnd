import { Calendar } from 'react-big-calendar'
import './calendar.css'
const MyCalender =()=>{
    return(
        <div className="bg-red-400 rounded-xl">
            <Calendar defaultView= 'month' onChange={onChange} value={value} />  
        </div>)
}

export default MyCalender