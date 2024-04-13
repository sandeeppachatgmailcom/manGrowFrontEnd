import { useEffect, useRef, useState } from "react"
import { FaCamera } from "react-icons/fa6"
import { useDispatch, useSelector } from "react-redux"
import ProfileImageBox from "../Components/ProfileImage"
import { useForm } from "react-hook-form"
import { saveUser } from "../Store/activeUser"
import Academics from "../Components/Academics"
import JobTile from "../Components/JobTile"
import { useNavigate } from "react-router-dom"


const ProfilePage = () => {
    const theme = useSelector((state) => state.theme.theme)
    const darkTheme = useSelector((state) => state.theme)
    const user = useSelector((state) => state.activeUser.user)
    const dispatch = useDispatch()
    const [border, setBorder] = useState('none')
    const navigate = useNavigate();
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

    const [button,setButton] = useState(0)

    return (
        <div className="xl:flex   sm-block w-100 xl: w-full">
            <div class="xl:block sm:w-full xl:w-1/6 justify-start items-start p-2 border border-gray-300 border-opacity-45 rounded-xl mt-2">
                <button type="button" onClick={()=>{setButton(0)}} className={button==0? `text-blue-600 font-semiboldbold text-start p-3 m-1  bg-blue-200 w-full h-[50px] rounded-r-full `: ` font-semiboldbold text-start p-3 m-1   w-full h-[50px] rounded-r-full `} >Profile</button>
                <button type="button" onClick={()=>{setButton(1)}} className={button==1? `text-blue-600 font-semiboldbold text-start p-3 m-1  bg-blue-200 w-full h-[50px] rounded-r-full `: ` font-semiboldbold text-start p-3 m-1   w-full h-[50px] rounded-r-full `} >Home </button>
                <button type="button" onClick={()=>{setButton(2)}} className={button==2? `text-blue-600 font-semiboldbold text-start p-3 m-1  bg-blue-200 w-full h-[50px] rounded-r-full `: ` font-semiboldbold text-start p-3 m-1   w-full h-[50px] rounded-r-full `} >About us </button>
                <button type="button" onClick={()=>{setButton(3);navigate('/')}} className={button==3? `text-blue-600 font-semiboldbold text-start p-3 m-1  bg-blue-200 w-full h-[50px] rounded-r-full `: ` font-semiboldbold text-start p-3 m-1   w-full h-[50px] rounded-r-full `} >Pending Task </button>
            </div>

            <div class={`${theme} w-full  xl:flex flex-wrap sm:block  items-center justify-between min-h-screen border border-gray-300 border-opacity-45 rounded-xl xl:ms-1 mt-2 `}>
                <form onSubmit={handleSubmit(updateUserInfo)} >
                    
                    <div className="flex flex-wrap flex-col  items-center justify-center py-4  ">
                        <ProfileImageBox height='200px' width='200px' />
                        <h5 className="text-center">Info about you and your preferences across Mangrow services</h5>
                    </div>
                     
                    <div className="block sm:w-full xl:flex p-1 items-center justify-center" >
                        <br />

                        <div className={`${theme}  block w-full justify-center items-center rounded-xl m-1 `}>
                            <div className="justify-center   rounded-2xl  ">
                                <h5 className=" text-2xl text-center  "> Basic info   </h5>
                                <div className=" bg-yello h-100 justify-center text-center" >
                                    <div className="flex text-center  justify-center">
                                        <input type="text" className={`${darkTheme.inputtext} text-xl appearance-none  text-center rounded-sm    border-${border}  focus:border-gray-400 focus:outline-none`} readOnly={isReadOnly} {...register('name')} name="name" id="username-input" />     <br />
                                    </div>
                                    <div className="xl:flex sm:block text-center sm:w-full justify-center">
                                        <input type="text" className={`${darkTheme.inputtext} appearance-none  text-xl w-auto text-center rounded-sm    border-${border}  focus:border-gray-400 focus:outline-none`} readOnly={isReadOnly}  {...register('houseName')} name="HouseName" id="username-input" /> <br />
                                        <input type="text" className={`${darkTheme.inputtext} text-xl appearance-none  w-auto text-center rounded-sm    border-${border}  focus:border-gray-400 focus:outline-none`} readOnly={isReadOnly}  {...register('streetName')} name="streetNam" id="username-input" /> <br />
                                        <input type="text" className={`${darkTheme.inputtext} text-xl appearance-none  w-auto text-center rounded-sm      border-${border}  focus:border-gray-400 focus:outline-none`} readOnly={isReadOnly}  {...register('city')} name="streetNam" id="username-input" /> <br />
                                        <input type="text" className={`${darkTheme.inputtext} text-xl appearance-none  w-auto text-center rounded-sm    border-${border}  focus:border-gray-400 focus:outline-none`} readOnly={isReadOnly}  {...register('pincode')} name="pincode" id="username-input" /> <br />
                                    </div>
                                    {isReadOnly === false ? (
                                        <button className="rounded-lg text-gray-950 shadow-md bg-gray-100 m-4 p-2 w-20" type="submit">
                                            Save
                                        </button>
                                    ) : (
                                        <button onClick={() => handleEdit()} className="rounded-lg text-gray-950 shadow-md bg-gray-100 m-4 p-2 w-20">
                                            Edit Bio
                                        </button>
                                    )}

                                    <div>
                                    </div>

                                </div>
                            </div>

                            <div className="block w-full justify-center items-center rounded-xl m-1 ">
                                <h5 className="text-center text-2xl  ">Academic</h5>
                                <div className="xl:flex sm:block sm:w-100 flex-wrap justify-center items-center"> {/* Added items-center here */}
                                    {user.academics.map((item) => <Academics course={item} />)}
                                </div>
                            </div>

                            <div className=" block w-full rounded-xl m-1  ">
                                <h5 className="text-center text-2xl ">Experiance </h5>
                                <div className="flex xl:flex sm:block sm:w-100 flex-wrap justify-center ">
                                    {user.experiance.map((item) => <JobTile company={item} />)}
                                </div>
                            </div>

                        </div>

                    </div>


                </form>

            </div>
        </div>

    )
}


export default ProfilePage