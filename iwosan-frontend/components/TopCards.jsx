import React from 'react'
import OverallChart from './Charts/OverallChart'
import PatientsChart from './Charts/PatientsChart'
import DiagnosticsChart from './Charts/DiagnosticsChart'
import HealthIndexChart from './Charts/HealthIndexChart'

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-3 gap-4 p-4'>
        <div className='flex justify-between w-full border p-4 rounded-lg'>
            <DiagnosticsChart />
        </div>
        <div className='flex justify-between w-full border p-4 rounded-lg'>
            <PatientsChart />
        </div>
        <div className='flex justify-between w-full border p-4 rounded-lg'>
            <HealthIndexChart />
        </div>
    </div>
  )
}

export default TopCards