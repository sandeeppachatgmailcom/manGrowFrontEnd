import { useState } from "react"
import ResetpasswordwithOtp from "../Components/userAuth/ResetpasswordwithOtp"
import SubmitOtp from "../Components/userAuth/SubmitOtp"
import { useSpring, animated } from '@react-spring/web'
import { useSelector } from "react-redux"
import ReserwithOldPassword from "../Components/userAuth/ResetWithOldPasssword"
import { ToastContainer, toast } from "react-toastify"

const ResetCredential = (props)=>{
    const {option} = props
    const [password,setPassword] = useState(false)
    const activeUser = useSelector((state) => state.activeUser.user)
    const springs = useSpring({
        from: { x: 0 },
        to: { x: 50 },
      })


    return (
        <div className="sm:block lg:w-full xl:flex lg:block md:w-3/4 md:m-4 sm:w-full ">
            <div className="  justify-center  xl:w-4/6 align-middle h-[100%]  items-center lg:w-full  flex md:w-full sm:w-full  ">
                <div className="sm:text-[75px] md:text-[75px] lg:text-[100px] xl:text-[170px] font-serif text-slate-500   " > VALIDATE  </div>
            </div> 
             
            <div className="xl:w-2/6 lg:w-full   justify-center sm:w-full bg-transparent sm:m-[-40]   xl:h-50 items-center flex   ">
                 { console.log(activeUser)}
                 {!option? <SubmitOtp/>:option=='resetPassword'?<ResetpasswordwithOtp email={activeUser} />:""    }
            </div>
            
            
        </div>
    )
}

export default ResetCredential