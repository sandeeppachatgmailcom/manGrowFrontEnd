import { useRef } from "react";
import { FaCamera } from "react-icons/fa6";
import { useSelector } from "react-redux";

const ProfileImageBox = ({height,width}) => {
    const imageInputRef = useRef();
    const imageLink = useSelector((state)=>state.activeUser.user.profileImage) 

    return (
        <div style={{height:height,width:width}} className="relative w-20 h-20 bg-gray-400 rounded-full items-center overflow-hidden">
            <div style={{backgroundImage:`url('${imageLink}')`, backgroundSize:'cover',backgroundPosition:'center', width: '100%', height: '100%'}}></div>
            <input ref={imageInputRef} type="file" hidden name="" id="" />
            <button className="absolute bottom-2 right-2" onClick={() => {
                imageInputRef.current.click()
            }} > <FaCamera /></button>
        </div>
    );
}

export default ProfileImageBox;
