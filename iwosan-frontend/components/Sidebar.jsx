import Link from 'next/link'
import React from 'react'
import { CiKeyboard } from 'react-icons/ci'
import { BsPersonFill, BsPersonVcard } from 'react-icons/bs'
import { TbBrandMailgun } from 'react-icons/tb'
import { MdOutlineMarkEmailUnread } from 'react-icons/md'
import { HiOutlineLogout } from 'react-icons/hi'

const Sidebar = ({children}) => {
  return (
    <div className='flex'>
        <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-300 dark:border-gray-300">
            <div class="px-3 py-3 lg:px-5 lg:pl-3">
                <div class="flex items-center justify-between">
                    <div class="flex items-center justify-start">
                        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <span class="sr-only">Open sidebar</span>
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                            </svg>
                        </button>
                        <a href="https://flowbite.com" class="flex ml-2 md:mr-24">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="FlowBite Logo" />
                        <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Flowbite</span>
                        </a>
                    </div>
                    <div class="flex items-center">
                        <div class="flex items-center ml-3">
                            <div>
                                <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                    <span class="sr-only">Open user menu</span>
                                    <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-56 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-300 dark:border-gray-300" aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-300">
                <div className="space-y-10 font-medium flex flex-col">
                    <Link href='/'>
                        <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-blue-800 hover:bg-gray-100 dark:hover:text-blue-800">
                            <svg aria-hidden="true" className="w-6 h-6 text-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                            <span className="ml-3">Overview</span>
                        </div>
                    </Link>
                    <Link href='/'>
                        <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:text-blue-800">
                            <CiKeyboard size={25} />
                            <span className="flex-1 ml-3 whitespace-nowrap">Appointments</span>
                        </div>
                    </Link>
                    <Link href='/'>
                        <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:text-blue-800">
                            <BsPersonFill size={25} />
                            <span className="flex-1 ml-3 whitespace-nowrap">Doctors</span>
                        </div>
                    </Link>
                    <Link href='/'>
                        <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:text-blue-800">
                            <BsPersonVcard size={25} />
                            <span className="flex-1 ml-3 whitespace-nowrap">Pathology Results</span>
                        </div>
                    </Link>
                    <Link href='/'>
                        <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:text-blue-800">
                            <MdOutlineMarkEmailUnread size={25} />
                            <span className="flex-1 ml-3 whitespace-nowrap">Chats</span>
                        </div>
                    </Link>
                    <h2>ACCOUNT</h2>
                    <Link href='/'>
                        <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:text-blue-800">
                            <TbBrandMailgun size={25} />
                            <span className="flex-1 ml-3 whitespace-nowrap">Settings</span>
                        </div>
                    </Link>
                    <Link href='/'>
                        <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-red-500 hover:bg-gray-100 dark:hover:text-red-800">
                            <HiOutlineLogout size={25} />
                            <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
                        </div>
                    </Link>
                </div>
            </div>
        </aside>
        <main className='ml-52 mt-10 w-full'>{children}</main>
    </div>
  )
}

export default Sidebar