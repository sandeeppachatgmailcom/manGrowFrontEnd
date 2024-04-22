import { useEffect, useState } from "react"
import axiosApi from "../api/axios"
import { adminApis } from "../api/api"

const ApproveStaff = ()=>{
    const [user,setUser ]= useState([])
    
const getUsers = async ()=>{
    return await axiosApi.get(adminApis.listAllstaffpendingApprovals) 
}

useEffect(()=>{
    setUser(getUsers().data)
},[])
useEffect(()=>{
    console.log(user,'user')
},[user])
     


    return (
        <div className="flex border rounded-lg mt-1 p-1 w-full">
            <div className="w-1/6   me-1 h-[250px] border rounded-e-none  border-gray-300 border-opacity-70 rounded-xl">
               hello
                {
                     user?.map((item)=>(<div className="text-black" >{ item.firstName} </div>) )
                }
                hello
            </div>
            <div className=" w-5/6 shadow-xl border rounded-s-none border-gray-300 border-opacity-70   h-[250px]   rounded-xl">

            </div>

        </div>


    )
}

export default ApproveStaff