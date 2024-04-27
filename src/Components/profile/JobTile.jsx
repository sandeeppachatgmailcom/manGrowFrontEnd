import React, { useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import EditAcademicModal from './EditAcademicModal';
import { useSelector } from 'react-redux';

const JobTile = ({company})=>{
    const theme = useSelector((state)=>state.theme.theme)
    const [isModalOpen, setIsModalOpen] = useState(false);

    return(
        <div className= {`${theme}  h-[200px]   xl:w-1/4 md:w-1/4 sm:w-full rounded-lg shadow-lg p-4 me-1 flex flex-col justify-between `}>
        <div className="block w-full">
            <div className="block ">
                <h5 className="text-lg font-semibold mb-2">Organaisation: {company.organaisation}</h5>
            </div>
            <p className="text-sm mb-2">Designation: {company.role}</p>
            <p className="text-sm mb-2">period: {company.startYear}-{company.endYear}</p>
        </div>
        <button   className="text-white-600 hover:text-blue-700 self-end">
            <CiEdit className="w-5 h-5" />
        </button>
        {isModalOpen ? <EditAcademicModal course={company} onClose={handleClose} /> : ''}

    </div>
    )
}

export default JobTile