import { useEffect, useRef, useState } from "react";
import { FaCamera } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import UploadImage from "../services/firebase/firebase";
import axiosApi from "../api/axios";
import { login } from "../Store/activeUser";
import { userApi } from "../api/api";

const ProfileImageBox = ({ height, width, changebutton, onParentChange }) => {
    const imageInputRef = useRef();
    const dispatch = useDispatch();
    const activeUser = useSelector((state) => state.activeUser.user);
    const [formData, setFormData] = useState(activeUser);

    useEffect(() => {
        setFormData(activeUser);
    }, [activeUser]);
    useEffect(()=>{
        console.log(activeUser,formData,'activeUseractiveUseractiveUser')
    },[])

    const uploadImage = async (e) => {
        const uploadedUrl = await UploadImage(e.target.files[0]);
        const data = {
            ...formData,
            profileImage: uploadedUrl
        }
        const getProfile =await  axiosApi.post(userApi.saveBasicProfile,data)
        dispatch(login(getProfile.data)) 
        
    };

    return (
        <div className="w-full h-100 flex justify-center">
            <div style={{ height: height, width: width }} className="relative bg-gray-400 rounded-full w-20 h-20 overflow-hidden">
                <input ref={imageInputRef} onChange={(e) => uploadImage(e)} type="file" hidden name="profileImage" id="" />
                 
                    <div className="h-[100%] w-[100%] rounded-full" style={{ backgroundImage: `url(${formData.profileImage})`, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                 
                {changebutton? <button className="absolute bottom-[20%] text-white right-[20%] " onClick={() => {
                    imageInputRef.current.click();
                }}>
                    <FaCamera className="h-[202%] w-[202%]" />
                </button>:''}
            </div>
        </div>
    );
}

export default ProfileImageBox;
