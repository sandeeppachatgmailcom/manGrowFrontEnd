import { useDispatch, useSelector } from "react-redux"
import { userApi } from "../../api/api"
const dispatch = useDispatch()
export const getUser = async ()=>{
    const responce = await axiosApi.get(userApi.getlogin ) 
    console.log( userApi.login,responce,'responce data in profie')
    responce.data.success!==false? dispatch(login(responce.data)):navigate('/signin')
}