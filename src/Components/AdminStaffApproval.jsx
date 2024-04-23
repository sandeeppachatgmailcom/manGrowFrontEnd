import { useEffect, useState } from "react"
import ButtonSwitch from "./toolBox/radioButton"

const AdminStaffApproval = (props) => {
    const [formData, setFormData] = useState({})
    const [isChecked, setIsChecked] = useState()
    const [disable, setDisable] = useState()
    const handleSwitchChange = () => {
        

    }
    useEffect(() => {
        console.log(formData, 'formData')
        !isChecked ? setFormData({
            ...formData,
            role: 'user'
        }) : setFormData({
            ...formData,
            role: 'Trainer'
        })
    }, [isChecked])
    useEffect(() => {
        console.log(formData, 'formData')
        formData.role == 'user' ? setIsChecked(false) : setIsChecked(true)
        formData.deleted==true ?setDisable(false):setDisable(true)
    }, [formData])
    useEffect(() => {
        console.log(props?.staff.role)
        setFormData(props?.staff)
        props?.staff.role == 'user' ? setIsChecked(false) : setIsChecked(true)
    }, [props?.staff])




    return (
        <>
            {Object.keys(props.staff).length && <div className="flex p-3  w-full h-[100%] ">
                <div className="flex w-4/6 flex-col ">
                    <div className="flex  ">
                        <label className="w-2/6" htmlFor=""> Name  </label>
                        <label className="w-4/2 text-left " htmlFor=""> : {formData?.firstName}</label>
                    </div>
                    <div className="flex  ">
                        <label className="w-2/6" htmlFor=""> Email   </label>
                        <label className="w-4/2 text-left" htmlFor="">  : {formData?.email}</label>
                    </div>
                    <div className="flex  ">
                        <label className="w-2/6" htmlFor=""> Role </label>
                        <label className="w-4/2 text-left" htmlFor="">: {formData?.role}</label>
                    </div>
                    <div className="flex  ">
                        <label className="w-2/6" htmlFor=""> Last Name   </label>
                        <label className="w-4/2 text-left" htmlFor=""> : {formData?.email}</label>
                    </div>
                    <div className="flex  ">
                        <label className="w-2/6" htmlFor=""> Contact num   </label>
                        <label className="w-4/2 text-left" htmlFor=""> : {formData?.num}</label>
                    </div>
                    <div className="flex  ">
                        <label className="w-2/6" htmlFor=""> Otp verified   </label>
                        <label className="w-4/2 text-left" htmlFor=""> : {formData?.otpVerified ? 'verified' : 'not verified'}</label>
                    </div>

                </div>

                <div className="flex w-2/6 flex-col ">
                    <div className="flex w-full   ">
                        <label className="font-semibold w-2/6" htmlFor=""> approve  </label>
                        {console.log(isChecked)}
                        <div className="w-4/2 text-left" ><ButtonSwitch initialValue={isChecked} onChange={()=>setIsChecked(!isChecked)} /></div>

                    </div>
                    <div className="flex w-full   ">
                        <label className="font-semibold w-2/6" htmlFor=""> Status  </label>
                        {console.log(disable)}
                        <div className="w-4/2 text-left" ><ButtonSwitch initialValue={disable} onChange={()=>setDisable(!disable)} /></div>

                    </div>
                </div>

            </div>
            }
        </>
    )
}

export default AdminStaffApproval
