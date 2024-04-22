import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import DropdownMenu from './DropDownList'
import Batch from './Batch'
const AdminContent = () => {
    const darkTheme = useSelector((state) => state.theme.theme)
    const darkText = useSelector((state)=>state.theme.inputtext)
    const selectedSubMenu = useSelector((state)=>(state.adminSubMenu.menuName))
    const [batch, setBatch] = useState([
        { name: 'batch1', type:'Remote', venue: 'Kinfra Park', batchID: '00001', startDate: '2022-03-20', endDate: '2023-03-23', active: false, deleted: false, MaxStdCount: 50, trainer: 'Suny Raja', Cordinator: 'Andrea Netto', },
        { name: 'batch2', type:'BroCamp', venue: 'Kinfra Park', batchID: '00002', startDate: '01-05-2022', endDate: '31-04-2023', active: true, deleted: false, MaxStdCount: 50, trainer: 'Suny Raja', Cordinator: 'Rizwan Akma', },
        { name: 'batch3', type:'Remote', venue: 'Kinfra Park', batchID: '00003', startDate: '01-06-2022', endDate: '31-05-2023', active: true, deleted: false, MaxStdCount: 10, trainer: 'Swetha Raja', Cordinator: 'Suny Raja', },
        { name: 'batch4', type:'BroCamp', venue: 'Banglore', batchID: '00004', startDate: '01-07-2022', endDate: '31-06-2023', active: false, deleted: false, MaxStdCount: 20, trainer: 'Andrea Netto', Cordinator: 'Swetha Raja', },
        { name: 'batch5', type:'Remote', venue: 'Banglore', batchID: '00005', startDate: '01-08-2022', endDate: '31-07-2023', active: true, deleted: false, MaxStdCount: 6, trainer: 'Swetha Raja', Cordinator: 'Rizwan Akma', },
        { name: 'batch6', type:'Remote', venue: 'Banglore', batchID: '00006', startDate: '01-09-2022', endDate: '31-08-2023', active: false, deleted: false, MaxStdCount: 70, trainer: 'Andrea Netto', Cordinator: 'Swetha Raja', },
        { name: 'batch7', type:'BroCamp', venue: 'Kochin', batchID: '00007', startDate: '01-10-2022', endDate: '31-09-2023', active: false, deleted: true, MaxStdCount: 80, trainer: 'Andrea Netto', Cordinator: 'Rizwan Akma', },
        { name: 'batch8', type:'Remote', venue: 'Kochin', batchID: '00008', startDate: '01-11-2022', endDate: '31-10-2023', active: false, deleted: false, MaxStdCount: 70, trainer: 'Swetha Raja', Cordinator: 'Swetha Raja', },
        { name: 'batch9', type:'BroCamp', venue: 'Kinfra Park', batchID: '00009', startDate: '01-12-2022', endDate: '31-11-2023', active: false, deleted: false, MaxStdCount: 10, trainer: 'Suny Raja', Cordinator: 'Swetha Raja', },])

    const [menu, setMenu] = useState('')
    const [page, setPage] = useState(1)
    const [activebatch, setActiveBatch] = useState({
        name: '',
        venue: ' ',
        batchID:'',
        startDate: ' ',
        endDate: '',
        active: false,
        deleted: false,
        totalStudents: 0 ,
        trainer: '',
        Cordinator: '',
    })
     
    return (
        <div className={`${darkTheme} flex  w-full border rounded-xl`}>
            <div className='w-1/6 m-1 rounded block '>
                <div className='w-full  h-[290px] m-1 rounded block' >
                    {batch.map((item, index) => {
                        if (index < page * 5 && index >= (page - 1) * 5) return <button onClick={    () =>{  setMenu(item.name);   setActiveBatch(item)}} className={menu == item.name ? 'w-5/6 font-bold text-blue-800 rounded-e-full bg-blue-200 flex m-1 rounded h-[50px] justify-start p-2 items-center ' : 'rounded-e-full justify-start p-2 items-center bg-blue-000 flex m-1 rounded h-[50px]'} key={item.name} > {item.name.toUpperCase()} </button>
                    })}
                    
                </div>
                
                <div className='flex  bottom-0 start-0' >
                        {(() => {
                            const count = Math.ceil(batch.length / 5)
                            let outArray = []
                            for (let i = 1; i <= count; i++) {
                                outArray.push(<button  key={i} onClick={() => setPage(i)} className='ms-1 border rounded font-semibold text-blue-400 w-5' >{i}</button>)
                            }
                            return outArray
                        }
                        )()
                        }
                </div>
                
            </div>
            <div className='w-5/6    '>
                {menu==activebatch.name?  <Batch activebatch={activebatch}  />:console.log('first')} 
            </div>
        </div>
    )
}


export default AdminContent
