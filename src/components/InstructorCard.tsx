// import React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type InstructorCardProps={
    name:string
    role:string
    img?:string
    rate:number
    students:number
}
const getName=(name:string)=> name.split(" ").map(instructorName => instructorName[0]).join("").slice(0,2)

const InstructorCard = ({ name, role, img, rate, students }: InstructorCardProps) => {


  return (
    <div className='rounded-lg border shadow-sm p-4 w-[212px] h-[281px] gap-4 bg-white'>
      <div className="flex flex-col w-[180px] h-[249px] gap-4">
        <div className="flex justify-center mb-3">
        <Avatar className="rounded-lg w-[177px] h-[132px] rounded">
          <AvatarImage className="object-cover w-full h-full" src={img}></AvatarImage>
          <AvatarFallback>{getName(name)}</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <div className="text-center border-b border-b-[#E2E8F0] pb-1">
        <h3 className="text-lg font-semibold leading-relaxed text-slate-900">{name}</h3>
        <p className="text-sm text-slate-700">{role}</p>
      </div>
      <div className="flex justify-between gap-4 mt-3 font-semibold leading-relaxed items-center">
        <div className="flex items-center ">
          ⭐ <span className="text-slate-900 text-xs">{rate}</span>
        </div>
        <div className="text-slate-700 text-xs">{students} Students</div>
      </div>

      </div>
      
      </div>

        
    </div>
  )
}

export default InstructorCard