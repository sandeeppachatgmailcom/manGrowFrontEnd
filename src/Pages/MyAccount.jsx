import { useRef } from "react"
import { FaCamera } from "react-icons/fa6"
import { useSelector } from "react-redux"
import ProfileImageBox from "../Components/common/ProfileImage"

const MyAccount = () => {
    const theme = useSelector((state) => state.theme.theme)
    const fonttheme = useSelector((state) => state.theme.theme)
    const darkTheme = useSelector((state) => state.theme)
    const user = useSelector((state) => state.activeUser.user)
    const imageInputRef = useRef();
    return (
        <div style={{ height: '100vh' }} className={`${theme}  container-flex m-10`}>
            <div className="container flex flex-col items-center justify-center">
                <ProfileImageBox height='200px' width='200px' />
                <h5 className="text-center">Info about you and your preferences across Mangrow services</h5>
            </div>

            <br />
            <br />
            <div className="container   flex items-center justify-between " >
                <div className="container-flex w-2/4 text-3xl  flex items-center justify-between ">
                    <h5 className=" " >Your profile info</h5>
                </div>
            </div>
            <div className="container-flex w-3/4  text-1xl flex items-center justify-start ">
                <h5>Personal info and options to manage it. You can make some of this info, like your contact details, visible to others so they can reach you easily. You can also see a summary of your profiles.</h5>
            </div>
            <br />
            <div className="container w-full  border  border-gray-300 rounded-xl   flex items-center justify-start ">
                <div className="container">
                    <h1 className="m-4 text-2xl "> Basic info  </h1>
                    <h1 className="m-4 text-sm"> These information will shared by us when you autheticate from other sites </h1>
                    <div className="container-flex w-100 m-1 ">
                        <div className="  container-flex flex   rounded items-center justify-end">
                            <button className=" rounded " >Edit Bio </button>
                        </div>

                        <div className="container-flex flex border-b border-gray-300 rounded items-center justify-between ">
                            <h1 className="text-sm m-2 ">Contact details </h1>
                            <div className="container-flex h-100 items-center justify-end  " >

                                <input type="text" className={`${darkTheme.inputtext}`} readOnly name="" id="" value={user.name + ' ' + user.HouseName} /> <br />
                                <input type="text" className={`${darkTheme.inputtext}`} readOnly name="" id="" value={user.mob} /> <br />
                                <input type="text" className={`${darkTheme.inputtext}`} readOnly name="" id="" value={user.email} /><br />
                                <input type="text" className={`${darkTheme.inputtext}`} readOnly name="" id="" value={user.web} /><br />

                            </div>
                        </div>
                        <div className="  container-flex flex border-b border-gray-300 rounded items-center justify-between ">
                            <h1 className="text-sm m-2 ">Street name </h1>
                            <input type="text" className={`${darkTheme.inputtext}`} readOnly name="" id="" value={user.streetName} />

                        </div>
                        <div className="  container-flex flex border-b border-gray-300 rounded items-center justify-between ">
                            <h1 className="text-sm m-2 ">City </h1>
                            <input type="text" className={`${darkTheme.inputtext}`} readOnly name="" id="" value={user.city} />
                        </div>
                        <div className="  container-flex flex border-b border-gray-300 rounded items-center justify-between ">
                            <h1 className="text-sm m-2 ">Pincode </h1>
                            <input type="text" className={`${darkTheme.inputtext}`} readOnly name="" id="" value={user.pincode} />
                        </div>
                        <div className="container-flex flex me-1 mb-4 ">
                            <div style={{ height: '100%' }} className="container-flex w-2/4 border  rounded-xl  m-1 ">
                                <h2 className="m-2">Academics </h2>
                            </div>
                            <div style={{ height: '100%' }} className="container-flex w-2/4 border  rounded-xl  m-1">
                                <h2 className="m-2">Experience </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyAccount
