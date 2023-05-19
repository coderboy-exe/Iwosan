import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import TopCards from '@/components/TopCards'
import OverallChart from '@/components/Charts/OverallChart'
import MiddleCards from '@/components/MiddleCards'
import Appointments from '@/components/Appointments'
import BottomCard from '@/components/BottomCard'
import UserList from '@/components/UserList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col p-4 ${inter.className}`}
    >
      <Header />
      <div className='flex'>
        <div className='w-4/5'>
          <TopCards />
          <MiddleCards />
          <BottomCard />
        </div>
        <div className='w-1/5'>
          <Appointments />
          <br />
          <UserList />
        </div>
      </div>
    </main>
  )
}
