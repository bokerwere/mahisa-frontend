"use client"
import {Icon} from "@iconify/react";

const MembersCount=({ title, count, percentage, icon })=>{
    return(
        <div className='bg-white h-[151px] rounded-lg flex items-center justify-evenly py-5 px-4'>
            <div className="flex items-center gap-10">
                {/*    Icon */}
                <div className="bg-primary/10 w-[84px] h-[84px] rounded-full flex items-center justify-center">
                    <Icon icon={icon} className='text-primary text-[32px]'/>
                </div>
                <div>
                    <p className='text-grey font-light text-base '>{title}</p>
                    <h1 className='text-[#1C1C1C] font-bold text-xl'>{count}</h1>
                    <p className="text-[#292D32] text-xs flex items-center">
                        {/*<Icon icon="openmoji:hyphen-minus" className=""/>*/}
                        <span className="font-bold mr-2">{percentage}%</span>
                        <span className="mr-2">this month</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default MembersCount
