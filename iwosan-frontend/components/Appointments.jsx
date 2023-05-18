import React from 'react'
import { doctors } from '@/data/data'
import { CgProfile } from 'react-icons/cg'
import OverallChart from './Charts/OverallChart'

const Appointments = () => {
  return (
    <div className='w-full relative border rounded-lg'>
        <OverallChart />
        <div className='border py-5'>
            <h2 className='flex font-bold px-2'>Upcoming Appointments</h2>
            <ul role="list">
                {doctors.map((doctor, index) => (
                    <li key={index} className='py-2 sm:py-2'>
                        <div class="flex items-center space-x-4 border m-2 p-2 rounded-xl">
                            <div class="flex-shrink-0">
                                <CgProfile size={25} />
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-md font-medium text-gray-900 truncate dark:text-gray-800">
                                    {doctor.name}
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    {doctor.role}
                                </p>
                            </div>
                            <div class="inline-flex text-xs items-center text-base font-bold text-gray-500 dark:text-gray-400">
                                Tuesday, 12th October, 2023
                            </div>
                        </div>
                    </li>
                ))
                }
            </ul>
        </div>
        <div className='border py-5'>
            <h2 className='flex font-bold p-2'>Previous Appointments</h2>
            <div className='w-full border font-bold flex justify-around align-center'>
                <h3 className='px-10 py-2 border'>DAY</h3>
                <h3 className='px-10 py-2 border bg-red-500 text-white'>WEEK</h3>
                <h3 className='px-10 py-2 border'>MONTH</h3>
            </div>
            <ul role="list">
                {doctors.map((doctor, index) => (
                    <li key={index} className='py-2 sm:py-2'>
                        <div class="flex items-center space-x-4 border m-2 p-2 rounded-xl">
                            <div class="flex-shrink-0">
                                <CgProfile size={25} />
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-md font-medium text-gray-900 truncate dark:text-gray-800">
                                    {doctor.name}
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    {doctor.role}
                                </p>
                            </div>
                            <div class="inline-flex text-xs items-center text-base font-bold text-gray-500 dark:text-gray-400">
                                Tuesday, 12th October, 2023
                            </div>
                        </div>
                    </li>
                ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Appointments