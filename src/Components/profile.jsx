import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Profile = ()=>{
    const darkTheme = useSelector((state=>state.theme))
    const user = useSelector(state=>state.activeUser.user)
    const navigate = useNavigate()
    const handleAccountInfo = ()=>{
        navigate('/profile')
    }

    return(
        <div className={`${darkTheme.theme}   p-2 m-1 rounded shadow-md `}>
            <>
                <h4>{user.name + ' ' + user.HouseName}</h4>
                <h5>{user.email}</h5>
                <h5>{user.mob}</h5>
                <h5>{user.web}</h5> <br></br>
                <h5>{user.streetName}</h5>
                <h5>{user.pincode}</h5>
                <h5>{user.city}</h5>
            </>
            <div className="flex justify-end">
                <button onClick={()=>handleAccountInfo()} > Edit bio </button>
            </div>
            <br />
        </div>
    )
}

export default Profile