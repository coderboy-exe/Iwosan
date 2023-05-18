import { React, useState, useEffect} from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(
    ArcElement,
    Title,
    Tooltip,
    Legend
)

const DiagnosticsChart = () => {

    const [chartData, setChartData] = useState({
        datasets: [],
    });

    useEffect(() => {
      setChartData({
        labels: ['Others', 'Cold', 'Typhoid', 'Malaria'],
        datasets: [
            {
            label: 'Number of cases',
            data: [12, 3, 5, 15],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'lightblue'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
                'lightblue'
            ],
            borderWidth: 2,
            },
        ],
      })
    }, [])
    

  return (
    <>
        <Doughnut data={chartData} />
    </>
  )
}

export default DiagnosticsChart