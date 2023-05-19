import React from 'react'
import { doctors } from '@/data/data'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineMarkEmailUnread } from 'react-icons/md'
import SearchBar from './SearchBar'
import { BsThreeDots, BsThreeDotsVertical } from 'react-icons/bs'

const BottomCard = () => {
  return (
        <div className='border py-5'>
            <div className='my-3 px-2 flex justify-between'>
                <span className='flex font-bold p-2'>Doctors</span>
                <span className='flex font-bold p-2'><SearchBar /></span>
                <div className='font-bold flex justify-center'>
                    <span className='px-10 py-3 bg-red-500 text-white rounded-xl'>ALL</span>
                    <span className='px-10 py-3 border rounded-xl'>MEN</span>
                    <span className='px-10 py-3 border rounded-xl'>WOMEN</span>
                </div>
            </div>
            <div className='p-4'>
                <div className='w-full m-auto p-4 border rounded-lg overflow-y-auto'>
                    <div className='my-3 px-2 grid md:grid-cols-5 items-center justify-between cursor-pointer'>
                        <span>Name</span>
                        <span className='grid'>Role</span>
                        <span className='grid'>Booked Appointments</span>
                        <span className='grid'>Chat</span>
                        <span className='grid'>Book New Appointments</span>
                    </div>

                    <ul role="list">

                    {doctors.map((doctor, index) => (
                        <li key={index} className='border rounded-lg my-3 p-2 hover:bg-gray-100 rounded-lg grid md:grid-cols-5 items-center justify-between cursor-pointer'>
                            <div className="flex items-center">
                                <div className='bg-blue-100 p-3 rounded-lg'>
                                    <CgProfile className='text-blue-300' size={25} />
                                </div>
                                <p className="pl-4">
                                    {doctor.name}
                                </p>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-500">
                                {doctor.role}
                            </p>
                            <p className="text-sm text-gray-700 dark:text-gray-500">
                                {doctor.booking}
                            </p>
                            <p className="text-sm text-gray-700 dark:text-gray-500">
                                <MdOutlineMarkEmailUnread size={25} />
                            </p>
                            <div className="flex justify-between items center">
                                <span className='border border-gray-400 font-bold rounded-2xl p-2 px-4'>Book</span>
                                <BsThreeDots />
                            </div>
                        </li>
                        ))
                        }
                    </ul>
                    
                </div>
            </div>
            

            {/* <div className='mt-10 flex justify-around font-bold text-sm'>
                <h3>Name</h3>
                <h3>Role</h3>
                <h3>Booked Appointments</h3>
                <h3>Chat</h3>
                <h3>Book New Appointments</h3>
            </div> */}
            
            {/* <table class="w-full text-sm text-left text-gray-800 dark:text-gray-800">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-white dark:text-gray-800">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Role
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Booked Appointments
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Chat
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Book New Appointments
                        </th>
                    </tr>
                </thead>
                <tbody>
                {doctors.map((doctor, index) => (
                    <tr class="bg-white py-4 mb-4 border rounded-xl overflow-hidden dark:bg-white dark:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-200">
                        <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-gray-800">
                            <CgProfile size={25} />
                            <div class="pl-3">
                                <div class="text-base font-semibold">{doctor.name}</div>
                            </div>  
                        </th>
                        <td class="px-6 py-4">
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            {doctor.role}
                        </p>
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center">
                                <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    {doctor.booking}
                                </p>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                <MdOutlineMarkEmailUnread size={25} />
                            </p>
                            
                            </a>
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                            <div class="inline-flex text-xs items-center text-base font-bold text-gray-500 dark:text-gray-400">
                                Tuesday, 12th October, 2023
                            </div>
                            </a>
                        </td>
                    </tr>
                    ))}
                    
                </tbody>
            </table> */}

            {/* <ul role="list">
                
                {doctors.map((doctor, index) => (
                    <li key={index} className='py-2 px-12 sm:py-2'>
                        <div class=" mt-10 flex justify-around font-bold text-sm rounded-xl">
                            <div class="flex">
                                <CgProfile size={25} />
                                <p class="text-md font-medium text-gray-900 truncate dark:text-gray-800">
                                    {doctor.name}
                                </p>
                            </div>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    {doctor.booking}
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    {doctor.role}
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    <MdOutlineMarkEmailUnread size={25} />
                                </p>
                            <div class="inline-flex text-xs items-center text-base font-bold text-gray-500 dark:text-gray-400">
                                Tuesday, 12th October, 2023
                            </div>
                        </div>
                    </li>
                ))
                }
            </ul> */}
    </div>
  )
}

export default BottomCard