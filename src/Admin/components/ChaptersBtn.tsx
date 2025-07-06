import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react';
const ChaptersBtn = () => {
  return (
    <div className='flex justify-between mt-4 items-center lg:flex-row flex-col gap-2'>
        <div className="flex gap-1.5 items-center">
            <ChevronLeft className='w-3 h-4'/>
            <p className="text-[#334155] text-lg font-semibold">Chapter 1 - The Solid State</p>
            </div>
        <div className='flex gap-2'>
            <Button variant="destructive">Delete</Button>
            <Button className='bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] rounded-lg py-2.5 lg:px-6 px-3 hover:text-white text-sm font-medium'>Move to Draft</Button>
            <Button className='bg-[#2563EB] rounded-lg py-2.5 lg:px-6 px-3 border-0 text-sm font-medium'>Add Course</Button>
        </div>
        
    </div>
  )
}

export default ChaptersBtn