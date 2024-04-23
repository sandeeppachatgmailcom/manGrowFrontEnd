import { useEffect, useState } from "react"
import axiosApi from "../api/axios"
import { adminApis } from "../api/api"
import AdminStaffApproval from "./AdminStaffApproval"

const ApproveStaff = ()=>{
    const [user,setUser ]= useState([])
    const [pageCount,setPageCount] = useState(1)
    const [menu,setMenu] = useState(0)
    const[selectedStaff,setSelectedStaff] = useState()
    
const getUsers = async ()=>{
    const user = await axiosApi.get(adminApis.listAllstaffpendingApprovals) 
        console.log(user?.data,'helo users welcome to approval page')
        setUser(user.data)
      
}

useEffect(()=>{
    getUsers();
},[])

 
useEffect(()=>{
    console.log(pageCount,'pagecount')
},[pageCount]) 
     

 


    return (
         
             
                <div className="flex border rounded-lg mt-1 p-1 w-full">
                <div className="xl:w-1/6 lg:w-2/6 overflow-hidden  me-1 h-[290px] border rounded-e-none  border-gray-300 border-opacity-70 rounded-xl">
                    <div className=" h-[80%] overflow-hidden   ">
                    {user.map((item, index) => {
                       if (index > (((pageCount-1)*4)) && index <= pageCount*4)  return <button onClick={() =>{setMenu(index);console.log(item);setSelectedStaff(item)   }} className={menu == index ? 'text-left  w-5/6 font-semibold text-blue-800 rounded-e-full bg-blue-200 flex m-1 rounded h-[50px] justify-start p-2 items-center ' : 'rounded-e-full w-[90%] justify-start p-2 items-center  flex m-1 rounded h-[50px]'} key={index} > {item.firstName} </button>
                    })}
                    </div>
                    <div>
                        
                    {(() => {
                            const count = Math.ceil(user.length/4)
                            let outArray = []
                            for (let i = 1; i <= count; i++) {
                                outArray.push(<button  key={i} onClick={() => {setPageCount(i);setMenu(((i*4)-3));} } className={ i==pageCount ?` ms-1 border rounded font-semibold  text-white bg-blue-400 w-5`:`ms-1 border rounded font-semibold text-blue-400 w-5`} >{i}</button>)
                            }
                            return outArray
                        }
                        )()
                        }
                         
                    </div>
                </div>
                <div className=" w-5/6 shadow-xl border rounded-s-none border-gray-300 border-opacity-70   h-[290px]   rounded-xl">
                    { selectedStaff? <AdminStaffApproval staff={selectedStaff}/>:''}
                </div>
    
            </div> 
        
        


    )
}

export default ApproveStaff