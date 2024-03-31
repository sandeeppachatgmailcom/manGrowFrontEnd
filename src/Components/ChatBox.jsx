import { useState } from "react"
import { MdVideoCameraBack } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa6";

const ChatBox = ()=>{

    const [contact,setContact] = useState(['Sanoop ','Chandhini','midhun','veshal','ranjith','aswin'])

    return(
        <div className=" shadow-lg h-[50%] overflow-y-auto">
            {contact.map((name)=>{
                return(
                    <div className="m-1 h-[40px] flex justify-between">
                        <div> 
                            <h5 className="text-1xl" >{name}</h5>  
                        </div> 
                        <div className="flex">
                            <button className="mx-3 text-green-500" > 
                                <MdVideoCameraBack /> 
                            </button>
                            <button className="mx-3 text-yellow-500">
                                <FaMicrophone />
                            </button>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default ChatBox