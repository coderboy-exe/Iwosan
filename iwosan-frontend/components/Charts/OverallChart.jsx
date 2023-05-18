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

const OverallChart = () => {

    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
      setChartData({
        labels: ['April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Emergency',
                data: [22, 11, 15, 8, 17, 26, 31, 13, 6],
                borderColor: 'blue',
                backgroundColor: 'blue',
            },
            {
                label: 'Examination',
                data: [22, 11, 15, 8, 17, 26, 31, 13, 6],
                borderColor: 'blue',
                backgroundColor: 'yellow',
            },
            {
                label: 'Consultation',
                data: [22, 11, 15, 8, 17, 26, 31, 13, 6],
                borderColor: 'blue',
                backgroundColor: 'purple',
            },
            {
                label: 'Routine Checkup',
                data: [22, 11, 15, 8, 17, 26, 31, 13, 6],
                borderColor: 'blue',
                backgroundColor: 'red',
            },
            {
                label: 'Sick Visit',
                data: [22, 11, 15, 8, 17, 26, 31, 13, 6],
                borderColor: 'blue',
                backgroundColor: 'lightblue',
            },
        ]
      })

      setChartOptions({
        plugins: {
            title: {
            display: true,
            text: 'Overall Appointments',
            },
        },
        responsive: true,
        scales: {
            x: {
            stacked: true,
            },
            y: {
            stacked: true,
            },
        },
      })

    }, [])
    
    

  return (
    <>
        <Bar data={chartData} options={chartOptions} /> 
    </>
  )
}

export default OverallChart