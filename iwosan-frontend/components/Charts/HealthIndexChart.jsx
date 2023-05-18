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
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)


const HealthIndexChart = () => {

    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
      setChartData({
        labels: ['June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Health Index',
                data: [15, 8, 17, 26, 31, 13, 6],
                borderColor: 'blue',
                backgroundColor: 'lightblue',
            },
        ],
      })
    }, [])
    

  return (
    <>
        <Bar data={chartData} />
    </>
  )
}

export default HealthIndexChart