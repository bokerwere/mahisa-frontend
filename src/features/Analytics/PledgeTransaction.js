"use client"
import {Doughnut} from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const options = {
    plugins: {
        legend: {
            display: true,
            position: 'bottom',
        },
        title: {
            display: false,
            text: '',
        },
    },
}

const data = {
    labels: ['Pledges', 'Amount'],
    datasets: [
        {
            data: [80, 20],
            backgroundColor: [
                'rgba(37, 65, 50, 1)',
                '#007E7A',

            ],
            borderWidth: 0,
        },
    ]
}
const PledgeTransaction =()=>{
    return <Doughnut options={options} data={data} />
}

export default PledgeTransaction