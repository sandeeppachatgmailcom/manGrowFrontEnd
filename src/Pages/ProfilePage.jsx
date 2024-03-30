import { useEffect, useRef, useState } from "react"
import { FaCamera } from "react-icons/fa6"
import { useDispatch, useSelector } from "react-redux"
import ProfileImageBox from "../Components/ProfileImage"
import { useForm } from "react-hook-form"
import { saveUser } from "../Store/activeUser"
import Academics from "../Components/Academics"
import JobTile from "../Components/JobTile"


const ProfilePage = () => {
    const theme = useSelector((state) => state.theme.theme)
    const darkTheme = useSelector((state) => state.theme)
    const user = useSelector((state) => state.activeUser.user)
    const dispatch = useDispatch()
    const [border, setBorder] = useState('none')
    const initialUserData = user
    const [isReadOnly, setIsReadOnly] = useState(true);
    const { register, handleSubmit, errors } = useForm({ defaultValues: initialUserData });

    const updateUserInfo = (data) => {
        console.log(data)
        dispatch(saveUser(data))

    }
    const handleEdit = () => {
        setIsReadOnly(prevState => !prevState)
        setBorder('gray-600')
    }
    useEffect(() => {
        console.log(user)
    }, [user])



    return (
        <div class={`${theme} ms-10 border-b items-center justify-between h-screen`}>
            <form onSubmit={handleSubmit(updateUserInfo)}>
                <br />
                <div className="flex flex-col items-center justify-center py-4">
                    <ProfileImageBox height='200px' width='200px' />
                    <h5 className="text-center">Info about you and your preferences across Mangrow services</h5>
                </div>
                <br />
                <br />
                <div className=" items-center justify-between" >
                    <div className="container-flex w-2/4 text-3xl  flex items-center justify-between ">
                        <h5 className="sm:text-xl flex-none" >Your profile info</h5>
                    </div>
                    <br />
                    <div className=" w-3/4  text-1xl flex items-center justify-start ">
                        <h5>Personal info and options to manage it. You can make some of this info, like your contact details, visible to others so they can reach you easily. You can also see a summary of your profiles.</h5>
                    </div>
                    <div className={`${theme} container-flex  border-b items-center justify-between h-screen`}>
                        <div className=" border border-gray-150 rounded-2xl shadow-lg ">
                            <div className="flex justify-between">
                                <h5 className="m-4 text-2xl "> Basic info   </h5>
                                {isReadOnly === false ? (
                                    <button className="rounded-lg text-gray-950 shadow-md bg-gray-100 m-4 p-2 w-20" type="submit">
                                        Save
                                    </button>
                                ) : (
                                    <button onClick={() => handleEdit()} className="rounded-lg text-gray-950 shadow-md bg-gray-100 m-4 p-2 w-20">
                                        Edit Bio
                                    </button>
                                )}


                            </div>
                            <div className="container-flex w-100 m-4 ">
                                <div className="flex  rounded items-center justify-between ">
                                    <div className="container-flex h-100 items-center justify-end " >
                                        <input type="text" className={`${darkTheme.inputtext} text-sm rounded-sm  border border-${border}  focus:border-gray-400 focus:outline-none`} readOnly={isReadOnly} {...register('name')} name="name" id="username-input" />     <br />
                                        <input type="text" className={`${darkTheme.inputtext} text-sm rounded-sm  border border-${border}  focus:border-gray-400 focus:outline-none`} readOnly={isReadOnly}  {...register('houseName')} name="HouseName" id="username-input" /> <br />
                                        <input type="text" className={`${darkTheme.inputtext} text-sm rounded-sm  border border-${border}  focus:border-gray-400 focus:outline-none`} readOnly={isReadOnly}  {...register('streetName')} name="streetNam" id="username-input" /> <br />
                                        <input type="text" className={`${darkTheme.inputtext} text-sm rounded-sm  border border-${border}  focus:border-gray-400 focus:outline-none`} readOnly={isReadOnly}  {...register('city')} name="streetNam" id="username-input" /> <br />
                                        <input type="text" className={`${darkTheme.inputtext} text-sm rounded-sm  border border-${border}  focus:border-gray-400 focus:outline-none`} readOnly={isReadOnly}  {...register('pincode')} name="pincode" id="username-input" /> <br />
                                    </div>

                                </div>

                            </div>

                        </div>
                        <div className="block ">
                            <h5>Academic</h5>
                            <div className="flex flex-wrap ">
                                {user.academics.map((item) => <Academics course={item} />)}
                            </div>
                        </div>
                        <div>
                                <h5>Experiance </h5>
                                <div className="flex flex-wrap ">
                                {user.experiance.map((item) => <JobTile company={item} />)}
                                </div>
                        </div>

                    </div>

                </div>


            </form>

        </div>

    )
}


export default ProfilePage