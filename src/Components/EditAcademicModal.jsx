import { useForm } from "react-hook-form";
import { CiEdit } from "react-icons/ci";
import { useSelector } from "react-redux";
import { FaWindowClose } from "react-icons/fa";
import { useRef } from "react";
import { FaSave } from "react-icons/fa";
const EditAcademicModal = ({ onClose, course }) => {
    const theme = useSelector((state) => state.theme.theme)
    const input = useSelector((state) => state.theme.inputtext)
    function* coursePeriod() {
        for (let i = 1947; i <= new Date().getFullYear(); i++) {
            yield i
        }
    }
    
    const startYearRef = useRef()
    console.log(startYearRef.current)
    const year = [...coursePeriod()]
    const { register, handleSubmit, errors } = useForm({ defaultValues: course });
    return (
        <div className="flex fixed inset-0  bg-gray-400 bg-opacity-30 backdrop-blur-sm justify-center items-center " >
            <div className={`${theme} xl:w-2/4 md:w-3/4 rounded-lg block text-gray-900 bg-gray-100 shadow-lg p-3 `}>
                <div className="flex justify-end">
                    <button onClick={() => { onClose() }} className="rounded-lg"> <FaWindowClose /> </button>
                </div>
                <form action="">
                    <div className="flex justify-between">
                        <label className="w-2/4" htmlFor="CourseType">Course </label>
                        <input className={`${input}  rounded w-2/4 `} {...register('Type')} type="text" name="" id="CourseType" />
                    </div>
                    <div className="flex justify-between items-center">
                        <label className="w-2/4" htmlFor="startYear">Start year</label>
                        <select id="startYear" ref={startYearRef}  {...register('startYear')} className={`${theme} rounded w-2/4 text-black h-10`} >
                            {year.map((item) => (
                                <option key={item} className={`${theme} rounded w-2/4 text-black h-10`}  value={item}>{item}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex justify-between items-center">
                        <label className="w-2/4" htmlFor="endYear">End year</label>
                        <select id="endYear"   {...register('endYear')} className={`${theme} rounded w-2/4 text-black h-10`} >
                            {year
                                .filter(item => item > 1947)
                                .map(item => (
                                    <option key={item} className={`${theme} rounded w-2/4 text-black h-10`}  value={item}>{item}</option>
                                ))
                            }
                            
                        </select>
                    </div>
                    <div className="flex justify-between ">
                        <label className="w-2/4 " htmlFor="CourseType">Institute   </label>
                        <input  {...register('institute')} className={`${input}  rounded w-2/4 `} type="text" name="" id="CourseType" />
                    </div>
                    <div className="flex justify-end items-center">
                         
                    <button className="rounded w-1/12 bg-blue-400">  Save </button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default EditAcademicModal