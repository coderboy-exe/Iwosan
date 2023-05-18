import React from 'react'
import CovidChart from './Charts/CovidChart'
import CausesChart from './Charts/CausesChart'

const MiddleCards = () => {
  return (
    <div className='grid lg:grid-cols-3 gap-4 p-4'>
        <div className='col-span-2 flex justify-between w-full border p-4 rounded-lg'>
            <CovidChart />
            <div className=' border w-2/5 flex flex-col place-items-center justify-center rounded-lg'>
                <div className='flex flex-col p-2 '>
                    <h3>RECOVERY ZONES</h3>
                    <span class="text-blue-500">12M</span>
                    <span class="border border-blue-500 w-full"></span>
                </div>
                <div className='flex flex-col p-2'>
                    <h3>NEUTRAL ZONES</h3>
                    <span class="text-yellow-500">12M</span>
                    <span class="border border-yellow-500 w-full"></span>
                </div>
                <div className='flex flex-col p-2'>
                    <h3>AFFECTED ZONES</h3>
                    <span class="text-red-500">12M</span>
                    <span class="border border-red-500 w-full"></span>
                </div>
                <div className='flex flex-col p-2'>
                    <h3>SAFEST ZONES</h3>
                    <span class="text-purple-500">12M</span>
                    <span class="border border-purple-500 w-full"></span>
                </div>
            </div>
        </div>
        <div className='col-span-1 flex justify-between w-full border p-4 rounded-lg'>
            <CausesChart />
        </div>
    </div>
  )
}

export default MiddleCards