import React from 'react'
import { MdDashboard } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdOutlineBorderColor } from "react-icons/md";

function AdminPage() {

    const adminList = [
        {icon: MdDashboard, label: 'Dashboard'},
        {icon: FaUser, label: 'User'},
        {icon: MdProductionQuantityLimits, label: 'Product'},
        {icon: MdOutlineBorderColor, label: 'Buyer'}
    ]


  return (
    <div className='grid grid-cols-6'>

        <div className='h-dvh col-start-1 bg-[var(--second)] flex flex-col gap-5 px-5 pt-5'>
            <h1 className='text-2xl font-bold text-[var(--white)]'>Roy Coffee</h1>
            <div className='flex flex-col gap-2'>
                {
                    adminList.map((itm, idx)=>(
                        <Link to={'#'} key={idx} className='flex items-center gap-2 active:scale-95 transition-all duration-300 w-full text-sm bg-[var(--white2)] px-3 py-1 rounded-sm cursor-pointer'>
                            <itm.icon size={20} />
                            <h3>{itm.label}</h3>
                        </Link>
                    ))
                }
            </div>
        </div>

        <div>2</div>
    </div>
  )
}

export default AdminPage