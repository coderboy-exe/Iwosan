import { React, useState, useEffect} from 'react'
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    Title,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from "chart.js";
import { Radar } from 'react-chartjs-2';


ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Title,
    Tooltip,
    Legend
)


const CausesChart = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    useEffect(() => {
      setChartData({
        labels: ['Malaria', 'Cold', 'Typhoid', 'Cough', 'Severe Headache'],
        datasets: [
            {
                label: 'Causes',
                data: [12, 19, 32, 25, 12, 23],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
              },
        ],
      })
    }, [])
    

  return (
    <>
        <Radar data={chartData} />
    </>
  )
}

export default CausesChart